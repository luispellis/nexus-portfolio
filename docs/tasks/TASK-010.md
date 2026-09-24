# TASK-010 — Frontend ↔ Backend Contact Integration

## Objective
Integrate the approved Nexus Contact section with the real TASK-009 backend endpoint `POST /api/v1/contact`, preserving the existing direct contact channels and visual design.

This task is integration-focused. Do not redesign unrelated sections or add backend features.

## Context
Follow `AGENTS.md` precedence. Read only:
- `AGENTS.md`
- this task
- relevant `PROJECT.md`, `ARCHITECTURE.md`, `DESIGN.md`
- existing Contact section and directly related frontend files
- frontend environment/configuration relevant to API calls
- only the TASK-009 backend files needed to confirm the public contact/error contract

Do not inspect unrelated frontend sections or generated directories.

## API contract
Base URL must come from `NEXT_PUBLIC_API_BASE_URL` (local example: `http://localhost:8080/api/v1`).

Request:
```http
POST /api/v1/contact
Content-Type: application/json
```
```json
{"name":"Luis","email":"example@example.com","message":"Hello from the portfolio."}
```

Backend constraints:
- name: required, non-blank, max 100
- email: required, valid email, max 254
- message: required, non-blank, min 10, max 4000

Success: `204 No Content`.

Known error shape:
```json
{"code":"VALIDATION_ERROR","message":"Request validation failed","fieldErrors":{"email":"..."}}
```
Delivery failure: `503` with `CONTACT_DELIVERY_FAILED`.

## Environment
Use the existing `NEXT_PUBLIC_API_BASE_URL`. Do not hard-code localhost in components/API code. Do not expose SMTP/backend secrets through `NEXT_PUBLIC_*`.

## UX
Preserve the approved `PORTAL / Contact` Nexus design and all existing direct channels: LinkedIn, Email, GitHub, WhatsApp, and location.

Add a real form with:
- Name
- Email
- Message
- Submit button

Use semantic `<form>`, labels, correct input types, textarea, required/autocomplete/maxlength attributes, and mirror backend limits where practical.

The backend remains authoritative for validation.

## Client boundary
Keep the client boundary minimal. Prefer keeping `Contact.tsx` as a Server Component and extracting the interactive form into a focused `ContactForm.tsx` Client Component.

Do not convert the page or unrelated sections to Client Components.

## Submission states
Support explicitly:

### Idle
Editable form.

### Submitting
Disable submit, prevent duplicates, show visible progress (`Sending...` or equivalent), and expose an accessible busy state.

### Success
On `204`, show accessible success feedback, clear fields, and return to a usable state. Do not promise a response time.

### Backend validation error
For `400 VALIDATION_ERROR`, map known `fieldErrors` to fields, preserve input, allow correction/resubmit, and never render arbitrary server HTML.

### Delivery/service error
For `503 CONTACT_DELIVERY_FAILED`, preserve values, allow retry, and show a safe message suggesting direct contact channels as an alternative.

### Network/unexpected error
Handle unavailable backend, malformed responses, and unexpected status with safe generic feedback. Never expose stack traces, SMTP details, or raw internal exceptions.

## API integration
Use native `fetch`; do not add Axios.

Keep networking small and typed, e.g. `sendContactMessage(payload)`. It should:
1. read `NEXT_PUBLIC_API_BASE_URL`;
2. POST JSON;
3. treat 204 as success;
4. safely parse known errors;
5. expose a small typed result/error contract to the form.

Use explicit TypeScript types. Avoid `any` and avoid building a generic API framework.

## Accessibility
Require visible labels, keyboard operation, existing/appropriate focus styles, `aria-invalid`, field error association (`aria-describedby` where useful), accessible live status feedback, and understandable loading/disabled behavior without relying only on color.

## Visual/responsive constraints
Preserve Nexus dark sci-fi/HUD styling, cyan/purple accents, typography, spacing, existing Contact anchor behavior, and responsive composition.

No UI library. No Framer Motion.

No horizontal overflow. Controls and direct-channel values must fit/wrap safely. Preserve the behavior that prevents the preceding Experience section from appearing when navigating to `#contact`.

## Direct channels
The form is additional. Do not remove or replace existing LinkedIn, Email, GitHub, WhatsApp, or location content. Preserve established external-link security behavior.

## Security
Do not expose SMTP credentials, use `dangerouslySetInnerHTML`, persist contact messages in browser storage, log message bodies unnecessarily, or add CAPTCHA/rate limiting in this task.

## Testing and validation
Follow the existing frontend testing strategy. If no frontend test framework exists, do not add a large test dependency solely for this task.

Run from `/frontend`:
```bash
npm run lint
npm run typecheck
npm run build
```

Then from repository root:
```bash
git diff --check
git status --short
```

Review final diff for scope. Do not commit generated build output.

## Manual integration verification
When practical with frontend/backend locally running, verify:
1. Contact form renders correctly.
2. Local validation is understandable.
3. loading prevents duplicate submission.
4. backend validation errors display safely.
5. unavailable backend produces recoverable feedback.
6. direct contact links remain usable.
7. responsive layout has no obvious overflow.
8. no secrets reach browser-delivered configuration.

A real SMTP delivery is not required without configured credentials. Never fake a successful delivery.

## Scope restrictions
Do not:
- change backend behavior unless a genuine contract-blocking defect is found (report it before changing);
- add database/auth/CAPTCHA/rate limiting/analytics;
- redesign other sections;
- change unrelated copy;
- add unnecessary dependencies;
- implement deployment;
- start TASK-011.

## Definition of Done
Complete when:
- real Name/Email/Message form exists in Contact;
- it calls `POST /api/v1/contact`;
- base URL uses `NEXT_PUBLIC_API_BASE_URL`;
- no secret is exposed;
- 204 success is handled;
- duplicate submissions are prevented;
- accessible success feedback clears values;
- backend validation errors map safely to fields;
- delivery/network failures preserve input and allow retry;
- direct channels remain;
- Contact anchor/responsiveness remain correct;
- client scope stays small;
- native fetch is used;
- no unnecessary dependency is added;
- lint/typecheck/build and `git diff --check` pass;
- backend behavior is unchanged;
- Codex does not commit/push.

## Git boundary
Codex must not commit, push, merge, create a PR, or start TASK-011.

After implementation report:
1. files changed;
2. client/server boundary;
3. API integration;
4. validation behavior;
5. loading/success/error behavior;
6. accessibility;
7. responsive/layout impact;
8. validation results;
9. deviations;
10. remaining concerns.
