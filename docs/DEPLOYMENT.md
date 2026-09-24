# Production Deployment

## Topology

GitHub is the source repository. Vercel deploys the independent Next.js frontend from `frontend`. Railway deploys the independent Java 21 / Spring Boot API from `backend`. The browser calls the API over HTTPS, and the API delivers Contact messages through an external transactional SMTP relay. No database is required for this application.

Do not configure a hostname until the relevant provider has created it. Once available, the frontend calls the backend's HTTPS `/api/v1` base URL.

## Frontend on Vercel

Create a project from this GitHub repository with `frontend` as its root directory. Use the repository's existing build settings (`npm run build`). Set this production environment variable after the backend is publicly available:

```text
NEXT_PUBLIC_API_BASE_URL=https://<deployed-backend>/api/v1
```

This is the only frontend environment variable needed for the API. It is intentionally public because it is embedded in browser-delivered code. Never put SMTP credentials, recipient/sender addresses, or other backend secrets in Vercel frontend variables or any `NEXT_PUBLIC_*` value.

## Backend on Railway

Create a web service from the same GitHub repository with `backend` as its root directory. Use Java 21 and the included Maven wrapper. The service builds an executable Spring Boot JAR with `./mvnw verify`; its runtime command is equivalent to:

```bash
java -jar target/nexus-portfolio-api-0.0.1-SNAPSHOT.jar
```

Railway supplies `PORT`; the API reads it through `server.port`, falling back to `8080` for local development. Expose the service publicly over HTTPS. Configure `/api/v1/health` as the health-check path where the provider offers health-check configuration.

Set these Railway environment variables, replacing placeholders only in the provider dashboard:

```text
FRONTEND_ORIGIN=https://<deployed-frontend>
CONTACT_RECIPIENT_EMAIL=<recipient-address>
CONTACT_SENDER_EMAIL=<verified-sender-address>
MAIL_HOST=<smtp-host>
MAIL_PORT=587
MAIL_USERNAME=<smtp-username>
MAIL_PASSWORD=<smtp-password-or-api-key>
MAIL_SMTP_AUTH=true
MAIL_SMTP_STARTTLS=true
```

`CONTACT_SENDER_EMAIL` is the fixed From address. If omitted, `MAIL_USERNAME` is used as the sender. The service sets the visitor's submitted email as Reply-To; it never uses it as the sender. Do not set `PORT` manually on Railway unless the provider explicitly requires an override.

Use a transactional SMTP relay. Provider account creation, sender/domain verification, and credential generation are manual operations and must not be automated or committed.

## CORS and secrets

Set `FRONTEND_ORIGIN` to the final Vercel production origin including `https://` and with no path, for example `https://<deployed-frontend>`. The API permits that one origin only for `GET` and `POST` requests under `/api/v1/**`, with `Content-Type`; it does not use wildcard origins or credentialed CORS.

Keep all backend variables in Railway's secret/environment configuration. Never commit `.env`, `.env.local`, passwords, relay API keys, or provider tokens. [`.env.example`](../.env.example) is a safe local template only; its values are placeholders and it must not be uploaded to a provider as a source of secrets.

## Post-deploy smoke test

1. Load the frontend via HTTPS; verify assets and section navigation work.
2. Request `https://<deployed-backend>/api/v1/health` and expect `200` with `{"status":"UP"}`.
3. Submit the Contact form with invalid data and verify safe validation feedback.
4. Submit valid Contact data and verify the frontend reaches the API without a CORS error, receives success only after SMTP acceptance, and the configured recipient receives the message.
5. Verify the received email uses the configured sender and the visitor email as Reply-To.
6. Inspect browser-delivered frontend assets/configuration to confirm no SMTP credential or backend secret is exposed.
7. Verify direct email, LinkedIn, GitHub, and WhatsApp links still work.

## Redeploy and rollback

Deploy through the GitHub-connected projects after review. A normal redeploy uses a later approved commit. To roll back, redeploy the last known-good Git commit from each provider independently, preserving their environment variables. Coordinate frontend and backend URL/origin changes: update Railway's `FRONTEND_ORIGIN` and Vercel's `NEXT_PUBLIC_API_BASE_URL` when either public origin changes.
