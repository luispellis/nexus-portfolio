# TASK-001 — Frontend Foundation

## Goal

Create the production frontend foundation without implementing the portfolio sections yet.

## Required Reading

Read only:

1. `/AGENTS.md`
2. `/docs/PROJECT.md`
3. `/docs/ARCHITECTURE.md`
4. `/docs/DESIGN.md`

Use `/reference/stitch/screen.png` and `/reference/stitch/code.html` only when needed to confirm visual intent.

Do not inspect `/backend` for this task.

## Scope

Create the frontend application in `/frontend` using:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- App Router.

Configure:

- TypeScript strict mode;
- ESLint using the framework defaults;
- font loading for Sora, Manrope, and JetBrains Mono using an appropriate Next.js-supported approach;
- global design tokens derived from `docs/DESIGN.md`;
- global background and base typography;
- root metadata placeholders suitable for a personal developer portfolio;
- a minimal root layout;
- a minimal page shell proving that the design tokens and fonts load correctly.

## Design Token Requirement

Create reusable CSS/theme tokens for at least:

- base background;
- elevated surface;
- primary cyan;
- secondary purple;
- quest gold;
- primary text;
- muted text;
- success state;
- card fill;
- card border;
- primary radii;
- container width.

Do not scatter raw color values throughout components when a token exists.

## Explicitly Out of Scope

Do not implement:

- final Header/Nav;
- Hero;
- About;
- Skills;
- Projects;
- Experience;
- Contact form;
- Journey navigation;
- animation system;
- backend integration;
- database;
- test framework beyond what the initialization requires.

Do not copy the Stitch HTML into React.

## Expected Result

`/frontend` should be a clean, runnable Next.js project that establishes the technical and visual foundation for subsequent tasks.

The initial page may display only a small development marker such as:

```text
NEXUS PORTFOLIO
SYSTEM INITIALIZED
```

This marker is temporary and must not become a final section implementation.

## Validation

Run the project-appropriate equivalents of:

```bash
npm run lint
npm run build
```

If a separate type-check command is configured, run it as well.

## Completion Report

At the end, report only:

1. files/components created or materially changed;
2. dependencies added and why;
3. validation commands and results;
4. anything intentionally left for TASK-002.
