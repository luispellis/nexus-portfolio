# TASK-012 --- Production & Deployment Readiness

## Objective

Prepare the Nexus portfolio repository for production deployment without
performing account-specific deployment actions or committing secrets.

This task closes the initial roadmap. It must make the frontend and
backend deployment-ready, document the production topology and
environment configuration, and verify that the repository can be built
and operated safely in production.

## Target architecture

Use this deployment model unless an existing project constraint proves
incompatible:

-   Frontend: Next.js deployment on Vercel.
-   Backend: Java 21 / Spring Boot deployment as a separate long-running
    web service on Railway.
-   Email: external transactional SMTP provider using the backend's
    existing Spring Mail integration.
-   Source: GitHub repository.
-   Communication: browser -\> HTTPS frontend -\> HTTPS backend API -\>
    SMTP provider.

Do not couple the Spring Boot backend into the Next.js deployment.

## Context discipline

Follow `AGENTS.md`.

Read only the files required for production readiness: - `AGENTS.md` -
this task - `docs/PROJECT.md` - `docs/ARCHITECTURE.md` - relevant
README/environment documentation - frontend package/configuration and
API helper - backend `pom.xml`, application configuration, CORS
configuration, health endpoint, mail configuration, Maven wrapper and
runtime entrypoint-related files - root `.gitignore` and `.env.example`

Do not inspect generated directories (`node_modules`, `.next`, `target`,
`dist`, `coverage`, `.git`).

Use 0--2 specialized skills only if clearly useful.

## Phase 1 --- Read-only production audit

Before editing anything, report findings under exactly these headings:

1.  Production blockers
2.  Already production-ready
3.  Deployment-provider configuration
4.  Security/secrets considerations
5.  Deferred post-roadmap improvements

Do not edit files until this audit is complete.

## Required production configuration

### Frontend

Verify that: - `NEXT_PUBLIC_API_BASE_URL` is the only public backend
base URL required by the frontend. - production configuration expects an
HTTPS backend URL ending in `/api/v1`. - no SMTP credential or backend
secret is exposed through `NEXT_PUBLIC_*`. - the frontend builds
successfully in production mode. - repository configuration supports
deploying the `frontend` subdirectory as the frontend project root.

Do not hardcode a production hostname that does not yet exist.

### Backend

Verify and, only where necessary, adjust production readiness for: -
Java 21; - Maven wrapper; - Spring Boot executable JAR; -
platform-provided HTTP port compatibility; - environment-driven
configuration; - production frontend origin for CORS; - health endpoint
availability; - SMTP configuration; - no required database; - no secrets
committed.

The backend must remain deployable independently of the frontend.

If platform port handling requires a small configuration change, make
the smallest safe change and preserve local development defaults.

### CORS

Production must allow only the configured frontend origin.

Keep: - `/api/v1/**` scope; - expected GET/POST methods; - required
Content-Type handling; - no wildcard production origin; - no unnecessary
credential support.

Document that `FRONTEND_ORIGIN` must be set to the final production
frontend origin including scheme and without an unrelated path.

### SMTP

Preserve the existing safe email model: - fixed configured sender; -
visitor email only as Reply-To; - fixed recipient; - credentials only
through environment variables; - no personal SMTP password in Git; - no
secret in frontend variables.

Document the variables required by the existing backend. Do not invent
or commit credentials.

A transactional SMTP relay is preferred for production. Provider account
creation, sender/domain verification, and credential generation are
manual deployment steps and must not be automated or faked.

## Deployment documentation

Create or update concise deployment documentation in the repository that
covers:

1.  architecture/topology;
2.  frontend deployment from the `frontend` subdirectory;
3.  backend deployment from the `backend` subdirectory;
4.  Java/runtime/build/start expectations;
5.  required frontend environment variables;
6.  required backend environment variables;
7.  CORS configuration;
8.  SMTP configuration;
9.  health check path;
10. post-deploy smoke tests;
11. secret-handling rules;
12. rollback/redeploy notes appropriate to Git-based deployments.

Keep provider UI instructions generic enough not to depend on transient
screenshots.

## Environment variable contract

Document, without real secret values:

Frontend: - `NEXT_PUBLIC_API_BASE_URL`

Backend: - `FRONTEND_ORIGIN` - `CONTACT_RECIPIENT_EMAIL` -
`CONTACT_SENDER_EMAIL` if supported by current configuration -
`MAIL_HOST` - `MAIL_PORT` - `MAIL_USERNAME` - `MAIL_PASSWORD` -
`MAIL_SMTP_AUTH` - `MAIL_SMTP_STARTTLS` - platform port variable only if
required by the implementation/platform

Keep `.env.example` safe and usable. Never place a real password, API
key, SMTP key, token, or production secret in the repository.

## Provider-specific notes

Document the intended setup, but do not log in, create accounts, deploy
services, create domains, or generate credentials.

For Vercel: - frontend project root is `frontend`; - production
`NEXT_PUBLIC_API_BASE_URL` points to the deployed backend `/api/v1`
endpoint; - do not place backend secrets in Vercel frontend environment
variables.

For Railway: - backend service root is `backend`; - use Java 21 and the
Maven wrapper/build produced by the project; - expose the application as
a public HTTPS service; - configure backend environment variables in the
provider; - use `/api/v1/health` as the application health endpoint
where provider configuration permits.

Do not assume final provider-generated hostnames before deployment.

## Validation

Run all relevant existing checks.

Frontend, from `/frontend`:

``` bash
npm run lint
npm run typecheck
npm run build
```

Backend, explicitly with Java 21:

``` bash
JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64 \
PATH=/usr/lib/jvm/java-21-openjdk-amd64/bin:$PATH \
./mvnw test

JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64 \
PATH=/usr/lib/jvm/java-21-openjdk-amd64/bin:$PATH \
./mvnw verify
```

From repository root:

``` bash
git diff --check
git status --short
```

Review the entire final diff for scope.

If a provider-specific build cannot be exercised locally without
credentials/account access, report that limitation. Do not fake
deployment success.

## Smoke-test checklist

Document the post-deploy checks, including: - frontend loads over
HTTPS; - navigation and assets work; - backend `/api/v1/health` returns
the expected healthy response; - frontend can reach backend without CORS
failure; - invalid Contact form data remains safely rejected; - valid
Contact submission returns success only after SMTP acceptance; -
transactional email reaches the configured recipient; - Reply-To
corresponds to the visitor email; - no secret appears in
browser-delivered frontend assets; - direct Contact links still work.

## Scope restrictions

Do not: - redesign the website; - implement the post-roadmap visual
optimizations; - add analytics; - add authentication; - add a
database; - add CAPTCHA or rate limiting; - change the Contact API
contract unless a genuine production blocker requires it; - add
unnecessary dependencies; - create provider accounts; -
purchase/configure a custom domain; - generate or commit credentials; -
commit, push, merge, or create a PR.

If abuse protection, observability, custom domains, SEO/social
refinements, or analytics are desirable but not required to deploy the
current portfolio, record them as post-roadmap improvements.

## Definition of Done

TASK-012 is complete when: - the repository has been audited for
production deployment; - concrete production blockers have been
corrected with minimal changes; - deployment topology is documented; -
frontend/backend provider root directories are documented; - environment
variable contracts are documented; - production CORS requirements are
documented; - SMTP setup and secret handling are documented; -
health/smoke-test procedure is documented; - frontend
lint/typecheck/build pass; - backend test/verify pass with Java 21; -
`git diff --check` passes; - no secret is committed; - no unsupported
deployment success is claimed; - optional post-roadmap improvements are
clearly deferred; - Codex does not commit or push.

## Git boundary

Codex must not commit, push, merge, create a pull request, or perform
live deployment.

At completion report: 1. production audit; 2. blockers fixed; 3. files
changed; 4. deployment topology; 5. frontend production configuration;
6. backend production configuration; 7. CORS/SMTP/security status; 8.
validation results; 9. manual deployment steps still required; 10.
post-roadmap improvements.

Stop after the report. The user controls Git and live deployment
actions.
