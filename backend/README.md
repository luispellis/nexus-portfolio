# Nexus Portfolio API

The API is an independently deployable Java 21 / Spring Boot service.

For local development, start it with:

```bash
./mvnw spring-boot:run
```

Required environment variables for contact delivery:

```text
FRONTEND_ORIGIN
CONTACT_RECIPIENT_EMAIL
CONTACT_SENDER_EMAIL
MAIL_HOST
MAIL_PORT
MAIL_USERNAME
MAIL_PASSWORD
MAIL_SMTP_AUTH
MAIL_SMTP_STARTTLS
```

`CONTACT_SENDER_EMAIL` is the fixed sender address. When it is omitted, the API uses `MAIL_USERNAME` as the sender. The visitor's email is used only as Reply-To.

The API exposes `GET /api/v1/health` and `POST /api/v1/contact`. Contact delivery uses SMTP and returns `204 No Content` only when the configured mail sender accepts the message. It listens on `PORT` when supplied by a platform, with `8080` as the local fallback.

Production deployment guidance is in [`docs/DEPLOYMENT.md`](../docs/DEPLOYMENT.md).

Run tests with:

```bash
./mvnw test
```
