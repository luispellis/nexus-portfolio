# AGENTS.md

## 1. Purpose

This repository contains **Nexus Portfolio**, the personal software engineering portfolio of Luis Felipe.

The project has two goals:

1. Present professional experience, skills, projects, and contact information clearly to recruiters and engineering teams.
2. Demonstrate disciplined software engineering practices, especially frontend/backend separation and a Java/Spring Boot backend.

The Google Stitch export is a **visual reference only**. Never evolve `reference/stitch/code.html` into the production application.

---

## 2. Instruction Priority

When instructions conflict, use this order:

1. Explicit user instruction in the current task/conversation.
2. This `AGENTS.md`.
3. The active task file in `docs/tasks/`.
4. Explicitly requested/activated skill instructions.
5. `docs/ARCHITECTURE.md`.
6. `docs/PROJECT.md`.
7. `docs/DESIGN.md`.
8. Existing implementation.
9. Stitch reference files.

Skills are advisory methodologies. They must never silently override explicit user instructions or repository rules.

Do not invent architectural decisions when a documented decision already exists.

---

## 3. Scope Discipline

Work only on the active task.

Do not:

- implement future tasks preemptively;
- refactor unrelated code;
- redesign architecture without a concrete requirement;
- add dependencies without a clear reason;
- create abstractions for hypothetical future needs;
- modify reference files from Stitch;
- edit `AGENTS.md` unless explicitly requested.

Prefer the smallest correct change that preserves current boundaries.

**YAGNI is mandatory.**

---

## 4. Repository Boundaries

```text
/frontend   -> Next.js web application
/backend    -> Spring Boot API
/docs       -> project specifications and decisions
/reference  -> immutable source/reference material
```

Frontend and backend are independent applications.

Never put business/backend logic inside the frontend merely for convenience.
Never put UI concerns inside the backend.

---

## 5. Frontend Rules

Primary stack:

- Next.js
- React
- TypeScript
- Tailwind CSS

Rules:

- TypeScript strict mode is required.
- Avoid `any`; justify it explicitly if unavoidable.
- Prefer Server Components unless interaction/browser APIs require a Client Component.
- Use Client Components narrowly.
- Keep page files composition-focused.
- Components must have one clear responsibility.
- Extract reusable UI only when reuse or complexity justifies it.
- Keep content/data separate from presentation where practical.
- Do not duplicate design tokens.
- Do not use Tailwind CDN in production.
- Avoid unnecessary animation or UI dependencies.

Target structure:

```text
frontend/src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── lib/
├── types/
└── styles/
```

---

## 6. Backend Rules

Primary stack:

- Java
- Spring Boot
- Maven
- Spring Web
- Bean Validation
- Spring Data JPA only when persistence is actually required
- PostgreSQL only when persistence is actually required

Keep the backend intentionally small.

Preferred package-by-feature structure for this project:

```text
.../portfolio/
├── common/
├── health/
└── contact/
```

Inside a feature, separate responsibilities only when required, for example:

```text
contact/
├── ContactController.java
├── ContactService.java
├── ContactRequest.java
└── ContactResponse.java
```

Rules:

- Controllers handle HTTP concerns.
- Services contain application/business behavior.
- Validate all external input.
- Do not expose persistence entities directly through public API contracts.
- Avoid ceremonial layers, interfaces, factories, mappers, or repositories that add no present value.

All public API routes use `/api/v1`.

---

## 7. Design Rules

Visual source of truth: `docs/DESIGN.md`.

Product principle:

> Software engineer first. Gamer aesthetic second.

Target balance:

- 70% professional
- 20% gamified
- 10% cinematic

Preserve these concepts:

- modern HUD language;
- dark cinematic environment;
- glassmorphism used with restraint;
- cyber cyan, magic purple, and quest gold accents;
- journey/checkpoint metaphor;
- subtle depth and motion.

Avoid:

- pixel-art aesthetics;
- retro-game UI imitation;
- excessive glow;
- distracting animation;
- unreadable decorative effects.

Use the 8px spacing system from the design specification.

---

## 8. Responsive, Accessibility, and Performance

The frontend must work on mobile, tablet, and desktop.

Requirements:

- semantic HTML;
- keyboard-accessible interactions;
- visible focus states;
- useful alternative text where applicable;
- respect `prefers-reduced-motion`;
- avoid unnecessary JavaScript;
- optimize images;
- lazy-load below-the-fold media when appropriate;
- never trade major performance regressions for decorative effects.

---

## 9. Security

Never commit:

- passwords;
- secrets;
- tokens;
- API keys;
- production credentials.

Use environment variables and maintain `.env.example` without real secrets.

Validate external input.
Use explicit production CORS configuration.
Do not use wildcard production CORS.

---

## 10. Testing and Validation

Prefer behavior-oriented tests over coverage theater.

Frontend validation should eventually include:

- type checking;
- linting;
- production build;
- critical interaction tests when applicable.

Backend validation should eventually include:

- service unit tests for meaningful business behavior;
- controller/API tests for important contracts;
- Maven test/build.

Do not add meaningless tests merely to increase coverage.

---

## 11. Agent Workflow

For each implementation task:

1. Read this file.
2. Read the active `docs/tasks/TASK-XXX.md`.
3. Read only the documentation explicitly required by that task.
4. Inspect only code relevant to the requested change.
5. Produce a concise implementation plan.
6. Implement the smallest correct change.
7. Run the validation commands listed by the task.
8. Review the diff for unrelated changes.
9. Report changed files, validation results, and any unresolved issue.

Do not repeatedly scan the whole repository.

---

## 12. Context Budget Rules

Context is a limited engineering resource.

The agent must:

- prefer targeted search over broad repository reads;
- avoid rereading unchanged files;
- load only documentation relevant to the active task;
- avoid generated directories and dependency trees;
- keep plans and final reports concise;
- summarize prior findings instead of repeatedly reloading source material.

Never inspect these folders unless the task explicitly requires it:

```text
node_modules/
.next/
target/
dist/
coverage/
.git/
```

For frontend-only tasks, do not inspect backend code unless integration requires it.
For backend-only tasks, do not inspect frontend implementation unless API integration requires it.

---

## 13. Definition of Done

A task is complete only when:

- requested behavior is implemented;
- task scope was respected;
- relevant validation commands pass, or failures are clearly reported;
- no obvious lint/type/build/test regressions were introduced;
- architecture boundaries remain intact;
- unrelated files were not changed.

If something could not be validated, explicitly state what was not validated.
