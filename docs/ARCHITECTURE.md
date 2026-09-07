# Nexus Portfolio — Architecture

## System Overview

```text
┌───────────────────────────────┐
│            Browser            │
└───────────────┬───────────────┘
                │ HTTPS
                ▼
┌───────────────────────────────┐
│ Next.js / React / TypeScript  │
│           Frontend            │
└───────────────┬───────────────┘
                │ JSON / HTTPS
                ▼
┌───────────────────────────────┐
│       Spring Boot API         │
│            Backend            │
└───────────────┬───────────────┘
                │ only when needed
                ▼
┌───────────────────────────────┐
│          PostgreSQL           │
└───────────────────────────────┘
```

## Architectural Strategy

This is a small portfolio. Optimize for clarity, maintainability, and demonstrable engineering discipline rather than theoretical scalability.

Use explicit frontend/backend boundaries without introducing distributed-system complexity.

## Frontend

Responsibilities:

- rendering portfolio content;
- responsive user experience;
- navigation and section state;
- visual effects and motion;
- SEO metadata;
- contact form client behavior;
- calling the backend API where necessary.

Static portfolio content should begin as typed local data.

## Backend

Responsibilities:

- health endpoint;
- contact request validation;
- contact submission orchestration;
- integration with an email/provider later, when selected;
- persistence only if a concrete future requirement needs it.

The backend must not exist merely to serve static portfolio content.

## Data Boundary

For MVP:

```text
Skills       -> static typed frontend data
Projects     -> static typed frontend data
Experience   -> static typed frontend data
Contact      -> backend API
Health       -> backend API
```

This minimizes infrastructure while preserving a meaningful Java backend use case.

## API Versioning

All public backend routes start with:

```text
/api/v1
```

## Decision Policy

Significant choices that would be expensive to reverse should get an ADR in `docs/decisions/`.

Do not create ADRs for ordinary implementation details.
