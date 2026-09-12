# Nexus Portfolio API

Requires Java 21 and Maven. Start the API with:

```bash
./mvnw spring-boot:run
```

Required environment variables for contact delivery:

```text
FRONTEND_ORIGIN
CONTACT_RECIPIENT_EMAIL
MAIL_HOST
MAIL_PORT
MAIL_USERNAME
MAIL_PASSWORD
MAIL_SMTP_AUTH
MAIL_SMTP_STARTTLS
```

The API exposes `GET /api/v1/health` and `POST /api/v1/contact`. Contact delivery uses SMTP and returns `204 No Content` only when the configured mail sender accepts the message.

Run tests with:

```bash
./mvnw test
```
