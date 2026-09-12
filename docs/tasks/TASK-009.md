# TASK-009 — Backend Foundation & Contact API

## Objective

Create the backend foundation for the Nexus portfolio in `/backend` using Java and Spring Boot, and implement the first real API capabilities:

- application health endpoint;
- validated contact endpoint;
- SMTP-based email delivery configured through environment variables;
- tests for controller and mail-service behavior.

This task is backend-only. Do not integrate the frontend yet; frontend ↔ backend integration belongs to TASK-010.

---

## Technology decision

Use:

- Java 21
- Spring Boot 4.1.1
- Maven
- Spring Web MVC
- Bean Validation
- Spring Mail
- Spring Boot Test / JUnit

Do not add persistence or a database.

Do not add Lombok unless an existing backend convention requires it. Prefer plain Java for this small API.

---

## Context and precedence

Follow the instruction hierarchy defined in `AGENTS.md`.

For this task:

1. explicit user instruction;
2. `AGENTS.md`;
3. `docs/tasks/TASK-009.md`;
4. `docs/ARCHITECTURE.md`;
5. `docs/PROJECT.md`;
6. existing backend implementation, if any.

This is the first backend implementation task. Do not inspect frontend implementation files unless a repository-level configuration genuinely requires it.

---

## Required context

Read only what is necessary:

- `AGENTS.md`
- `docs/tasks/TASK-009.md`
- `docs/ARCHITECTURE.md`
- `docs/PROJECT.md`
- root `.gitignore`
- root `.env.example`
- current `/backend` contents

Do not inspect:

- `frontend/node_modules`
- `frontend/.next`
- frontend section components
- Stitch references
- `target`
- `dist`
- `coverage`
- `.git`

TASK-009 does not use the `frontend-design` skill.

---

## Architecture goal

Keep the backend small and maintainable without unnecessary abstractions.

Recommended direction:

```text
backend/
├── pom.xml
├── mvnw
├── mvnw.cmd
├── .mvn/
├── src/
│   ├── main/
│   │   ├── java/.../
│   │   │   ├── NexusPortfolioApplication.java
│   │   │   ├── config/
│   │   │   ├── contact/
│   │   │   │   ├── ContactController.java
│   │   │   │   ├── ContactRequest.java
│   │   │   │   ├── ContactService.java
│   │   │   │   └── SmtpContactService.java
│   │   │   ├── health/
│   │   │   │   └── HealthController.java
│   │   │   └── shared/api/
│   │   └── resources/
│   │       └── application.yml
│   └── test/
│       └── java/.../
└── ...
```

Exact package names may follow project conventions.

Do not add ports/adapters, CQRS, event buses, repositories, persistence, or domain layers that this task does not need.

---

## API base path

Use:

`/api/v1`

Required endpoints:

```text
GET  /api/v1/health
POST /api/v1/contact
```

---

## Health endpoint

### Request

```http
GET /api/v1/health
```

### Response

HTTP `200 OK`

```json
{
  "status": "UP"
}
```

Keep the contract small.

Do not expose environment variables, Java version, host information, mail settings, exception details, or OS information.

Do not add Spring Boot Actuator solely for this endpoint.

---

## Contact endpoint

### Request

```http
POST /api/v1/contact
Content-Type: application/json
```

Body:

```json
{
  "name": "Luis",
  "email": "example@example.com",
  "message": "Hello from the portfolio."
}
```

Required fields:

- `name`
- `email`
- `message`

### Validation

Use Jakarta Bean Validation.

`name`:
- required;
- not blank;
- maximum 100 characters.

`email`:
- required;
- not blank;
- syntactically valid email;
- maximum 254 characters.

`message`:
- required;
- not blank;
- minimum 10 characters;
- maximum 4000 characters.

Trimming outer whitespace is acceptable.

Do not rewrite the user's message content.

---

## Success semantics

The endpoint must represent a real email-delivery attempt.

Flow:

1. validate request;
2. construct a safe plain-text email;
3. send through the configured mail service;
4. only return success if the mail sender accepts the send operation.

Recommended success response:

HTTP `204 No Content`

Do not return success before attempting delivery.

Do not silently discard messages.

Do not implement a fake/no-op production contact service.

---

## SMTP delivery

Use Spring Mail (`JavaMailSender` or the Spring Boot 4 equivalent exposed by the mail starter).

All delivery settings must come from environment-backed configuration.

Expected logical environment variables:

```text
CONTACT_RECIPIENT_EMAIL
MAIL_HOST
MAIL_PORT
MAIL_USERNAME
MAIL_PASSWORD
MAIL_SMTP_AUTH
MAIL_SMTP_STARTTLS
```

Use standard `spring.mail.*` properties where appropriate.

Do not hard-code credentials.

Do not commit passwords, app passwords, access tokens, or SMTP secrets.

The portfolio email may appear as a non-secret example recipient in `.env.example`:

```text
luisfelipe_pellis@hotmail.com
```

Never place a real mail password in version control.

---

## Email safety

Treat all form values as untrusted input.

Requirements:

- fixed sender identity from configuration;
- submitted email may be used as `Reply-To`;
- submitted email must not become an arbitrary SMTP From address;
- fixed subject prefix such as `[Nexus Portfolio] Contact`;
- plain-text body only for TASK-009;
- do not interpret user HTML;
- do not log the full message body;
- do not log credentials.

Suggested body:

```text
New portfolio contact

Name: <name>
Email: <email>

Message:
<message>
```

Do not concatenate unvalidated values into arbitrary email headers.

---

## Mail configuration behavior

Automated tests must not require real SMTP credentials or internet access.

The application may start locally without a real SMTP password if Spring Boot permits that cleanly.

However:

- calling `POST /api/v1/contact` without usable delivery configuration must never pretend to succeed;
- expose only a safe controlled server error;
- do not reveal SMTP configuration details.

Use mocks/fakes for tests.

---

## Error contract

Provide a small consistent JSON error shape.

Recommended validation error:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Request validation failed",
  "fieldErrors": {
    "email": "must be a well-formed email address"
  }
}
```

Suggested codes:

- `VALIDATION_ERROR`
- `CONTACT_DELIVERY_FAILED`
- `INTERNAL_ERROR`

For non-validation errors, `fieldErrors` may be omitted or empty.

Use `@RestControllerAdvice` or an equally small centralized mechanism.

Never expose:

- stack traces;
- Java exception class names;
- SMTP host details;
- usernames;
- credentials;
- internal file paths.

---

## Delivery failure

If SMTP sending fails:

- return a controlled `5xx`;
- recommended status: `503 Service Unavailable`;
- code: `CONTACT_DELIVERY_FAILED`;
- safe message: `Unable to send contact message at this time`.

Log the technical exception server-side without logging secrets or the contact message body.

Do not return raw mail-provider messages.

---

## CORS

The API will later be called by the Next.js frontend.

Use a narrow environment-driven policy.

Expected variable:

```text
FRONTEND_ORIGIN=http://localhost:3000
```

Requirements:

- no wildcard `*` for production-style configuration;
- allow only the methods required by the API;
- do not enable credentials unless needed;
- keep configuration small.

The configured frontend origin must be able to call:

- `GET /api/v1/health`
- `POST /api/v1/contact`

Do not add authentication in TASK-009.

---

## Java implementation constraints

Prefer:

- Java records for immutable DTOs where appropriate;
- constructor injection;
- small controllers;
- explicit service boundary;
- standard Spring validation;
- typed API responses;
- plain Java exception types.

Avoid:

- field injection;
- mutable DTO boilerplate;
- excessive inheritance;
- generic `Map<String, Object>` payloads when a small typed response is clearer.

---

## Tests

Automated tests are required.

### Health

Cover:

- `GET /api/v1/health` returns `200`;
- payload contains `status = UP`.

### Contact controller

Cover:

- valid request invokes service and returns `204`;
- blank name returns `400`;
- invalid email returns `400`;
- too-short message returns `400`;
- oversized values return `400`;
- service delivery failure returns controlled `503`;
- validation response does not expose stack traces.

### Contact service

Test email construction without real SMTP.

Verify at minimum:

- recipient comes from configuration;
- sender is controlled/configured;
- submitted email is used safely as Reply-To if implemented;
- plain-text content contains expected name/email/message;
- mail exceptions are translated to the safe application exception.

Do not use internet access or real credentials in tests.

---

## Security / abuse constraints

This is a public contact endpoint.

For TASK-009:

- enforce validation and payload limits;
- do not log message bodies;
- use narrow CORS;
- use plain text email;
- do not expose secrets;
- do not trust user input for arbitrary mail headers.

Rate limiting/CAPTCHA may be handled later.

Do not add rate-limiting dependencies in TASK-009.

---

## Environment example

Update root `.env.example` with placeholders only.

Direction:

```dotenv
FRONTEND_ORIGIN=http://localhost:3000

CONTACT_RECIPIENT_EMAIL=luisfelipe_pellis@hotmail.com

MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_SMTP_AUTH=true
MAIL_SMTP_STARTTLS=true
```

Map environment variables in `application.yml` as needed.

Never create or commit a real `.env`.

Confirm `.gitignore` protects secret environment files.

---

## Documentation

Update only the smallest relevant documentation required to run the backend.

Document:

- Java 21 requirement;
- Maven command to run;
- required mail environment variables;
- health endpoint;
- contact endpoint;
- test command.

Do not rewrite unrelated frontend documentation.

---

## No database

Do not add:

- PostgreSQL;
- MySQL;
- H2;
- JPA;
- Hibernate;
- Flyway;
- Liquibase.

Messages are delivered by email, not persisted.

---

## No frontend changes

Do not modify:

- frontend components;
- frontend dependencies;
- frontend API/fetch code;
- frontend environment files;
- frontend form state.

TASK-010 will integrate the Contact UI with this API.

---

## Dependency constraints

Keep dependencies minimal.

Expected:

- Spring Web;
- Bean Validation;
- Spring Mail;
- Spring Boot Test.

Do not add:

- database dependencies;
- Spring Security;
- OpenAPI/Swagger;
- Lombok;
- mapping libraries;
- queues;
- cloud SDKs;
- rate-limiting packages.

unless repository rules already require them.

---

## Validation

From `/backend` run:

```bash
./mvnw test
./mvnw verify
```

If no Maven wrapper exists, create and version the standard Maven Wrapper or use the repository's established Maven strategy.

From repository root run:

```bash
git diff --check
git status --short
```

Review the final diff and confirm only TASK-009 backend/config/documentation files changed.

No real SMTP delivery test is required.

---

## Manual verification

If local configuration permits starting without SMTP credentials, start the application and verify:

```http
GET /api/v1/health
```

returns `200`.

Automated mocked tests are sufficient for contact delivery in TASK-009 unless the user explicitly configures SMTP.

Do not request or print the user's email password.

---

## Definition of Done

TASK-009 is complete when:

- `/backend` is a runnable Java 21 Spring Boot application;
- Maven configuration and wrapper are project source;
- `GET /api/v1/health` returns `200` with `status = UP`;
- `POST /api/v1/contact` implements the specified request contract;
- Bean Validation protects all fields;
- successful mail delivery returns `204`;
- SMTP delivery is behind a small service boundary;
- SMTP settings and recipient are externalized;
- submitted email is not used unsafely as SMTP sender;
- delivery failure produces controlled `503`;
- validation errors produce controlled `400`;
- responses do not expose stack traces or secrets;
- CORS is narrow and environment-driven;
- `.env.example` contains placeholders but no secret;
- automated health/controller/service tests pass;
- no database is introduced;
- no frontend source file is changed;
- `git diff --check` passes;
- Codex has not committed or pushed.

---

## Git boundary

Codex must not:

- commit;
- push;
- merge;
- create a pull request;
- modify frontend source;
- start TASK-010.

After implementation and validation, stop and report:

1. files changed;
2. backend structure created;
3. endpoint contracts;
4. validation behavior;
5. SMTP/configuration behavior;
6. CORS behavior;
7. test results;
8. intentional deviations;
9. remaining concerns.

The user controls Git operations.
