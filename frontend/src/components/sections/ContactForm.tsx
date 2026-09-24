"use client";

import { FormEvent, useState } from "react";

import { type ContactMessage, sendContactMessage } from "@/lib/contact";

type FormStatus = "idle" | "submitting" | "success" | "validation-error" | "delivery-error" | "network-error" | "unexpected-error";
type FieldErrors = Partial<Record<keyof ContactMessage, string>>;

const initialValues: ContactMessage = { name: "", email: "", message: "" };

const statusMessages: Partial<Record<FormStatus, string>> = {
  success: "Mensagem enviada com sucesso. Obrigado pelo contato.",
  "validation-error": "Revise os campos destacados e tente novamente.",
  "delivery-error": "O envio de mensagens está indisponível no momento. Tente novamente ou use um canal direto.",
  "network-error": "Não foi possível acessar o serviço de contato. Verifique sua conexão e tente novamente ou use um canal direto.",
  "unexpected-error": "Não foi possível enviar sua mensagem agora. Tente novamente ou use um canal direto.",
};

const validationMessages: FieldErrors = {
  name: "Informe seu nome.",
  email: "Informe um e-mail válido.",
  message: "Escreva uma mensagem com pelo menos 10 caracteres.",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactMessage>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const isSubmitting = status === "submitting";
  const statusMessage = statusMessages[status];

  function updateField(field: keyof ContactMessage, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setFieldErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    setStatus("submitting");
    setFieldErrors({});

    const result = await sendContactMessage(values);
    if (result.kind === "success") {
      setValues(initialValues);
      setStatus("success");
      return;
    }

    if (result.kind === "validation-error") {
      setFieldErrors(
        Object.keys(result.fieldErrors).reduce<FieldErrors>((errors, field) => {
          const contactField = field as keyof ContactMessage;
          errors[contactField] = validationMessages[contactField];
          return errors;
        }, {}),
      );
    }
    setStatus(result.kind);
  }

  return (
    <form aria-busy={isSubmitting} className="mt-10 border-t border-card pt-8" onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-purple">Portal de mensagens</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground">Envie uma mensagem</h3>
        </div>
        <p className="font-mono text-xs text-muted">Todos os campos são obrigatórios</p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormField
          autoComplete="name"
          error={fieldErrors.name}
          id="contact-name"
          label="Nome"
          maxLength={100}
          onChange={(value) => updateField("name", value)}
          disabled={isSubmitting}
          value={values.name}
        />
        <FormField
          autoComplete="email"
          error={fieldErrors.email}
          id="contact-email"
          label="E-mail"
          maxLength={254}
          onChange={(value) => updateField("email", value)}
          disabled={isSubmitting}
          type="email"
          value={values.email}
        />
      </div>

      <div className="mt-5">
        <label className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted" htmlFor="contact-message">
          Mensagem
        </label>
        <textarea
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          aria-invalid={Boolean(fieldErrors.message)}
          className="mt-2 min-h-36 w-full resize-y border border-card bg-elevated px-4 py-3 text-base leading-6 text-foreground outline-none transition-colors placeholder:text-muted focus:border-cyan focus-visible:ring-2 focus-visible:ring-cyan/50 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          id="contact-message"
          maxLength={4000}
          minLength={10}
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Como podemos trabalhar juntos?"
          required
          rows={6}
          value={values.message}
        />
        <FieldError id="contact-message-error" message={fieldErrors.message} />
      </div>

      {statusMessage ? (
        <p
          aria-live="polite"
          className={`mt-5 border-l-2 px-4 py-3 text-sm leading-6 ${status === "success" ? "border-success bg-success/10 text-foreground" : "border-red-400 bg-red-950/30 text-foreground"}`}
          role={status === "success" ? "status" : "alert"}
        >
          {statusMessage}
        </p>
      ) : null}

      <button
        className="mt-6 inline-flex min-h-12 items-center justify-center bg-gradient-to-r from-cyan to-purple px-6 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-base transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}

type FormFieldProps = {
  autoComplete: string;
  disabled: boolean;
  error?: string;
  id: string;
  label: string;
  maxLength: number;
  onChange: (value: string) => void;
  type?: "email" | "text";
  value: string;
};

function FormField({ autoComplete, disabled, error, id, label, maxLength, onChange, type = "text", value }: FormFieldProps) {
  return (
    <div className="min-w-0">
      <label className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted" htmlFor={id}>
        {label}
      </label>
      <input
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        autoComplete={autoComplete}
        className="mt-2 min-h-12 w-full border border-card bg-elevated px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-cyan focus-visible:ring-2 focus-visible:ring-cyan/50 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={id.replace("contact-", "")}
        onChange={(event) => onChange(event.target.value)}
        required
        type={type}
        value={value}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p className="mt-2 text-sm leading-5 text-red-200" id={id} role="alert">
      {message}
    </p>
  ) : null;
}
