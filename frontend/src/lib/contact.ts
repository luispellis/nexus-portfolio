export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

type ContactField = keyof ContactMessage;

export type ContactSubmissionResult =
  | { kind: "success" }
  | { kind: "validation-error"; fieldErrors: Partial<Record<ContactField, string>> }
  | { kind: "delivery-error" }
  | { kind: "network-error" }
  | { kind: "unexpected-error" };

type ApiErrorPayload = {
  code?: unknown;
  fieldErrors?: unknown;
};

const contactFields: readonly ContactField[] = ["name", "email", "message"];

function isApiErrorPayload(value: unknown): value is ApiErrorPayload {
  return typeof value === "object" && value !== null;
}

function toFieldErrors(value: unknown): Partial<Record<ContactField, string>> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return {};
  }

  return contactFields.reduce<Partial<Record<ContactField, string>>>((fieldErrors, field) => {
    const error = (value as Record<string, unknown>)[field];
    if (typeof error === "string" && error.trim()) {
      fieldErrors[field] = error;
    }
    return fieldErrors;
  }, {});
}

async function readErrorPayload(response: Response): Promise<ApiErrorPayload | null> {
  try {
    const payload: unknown = await response.json();
    return isApiErrorPayload(payload) ? payload : null;
  } catch {
    return null;
  }
}

export async function sendContactMessage(message: ContactMessage): Promise<ContactSubmissionResult> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");
  if (!apiBaseUrl) {
    return { kind: "unexpected-error" };
  }

  try {
    const response = await fetch(`${apiBaseUrl}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (response.status === 204) {
      return { kind: "success" };
    }

    const errorPayload = await readErrorPayload(response);
    if (response.status === 400 && errorPayload?.code === "VALIDATION_ERROR") {
      return { kind: "validation-error", fieldErrors: toFieldErrors(errorPayload.fieldErrors) };
    }

    if (response.status === 503 && errorPayload?.code === "CONTACT_DELIVERY_FAILED") {
      return { kind: "delivery-error" };
    }

    return { kind: "unexpected-error" };
  } catch {
    return { kind: "network-error" };
  }
}
