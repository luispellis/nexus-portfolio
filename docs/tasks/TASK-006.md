# TASK-006 — Projects / Missions

## Objective

Implement the `#projects` section of the portfolio as **Missions**: a professional showcase of four real GitHub repositories selected by the user.

The section must make the projects useful to recruiters and developers at a glance, while preserving the Nexus / Developer Quest visual language.

This task is limited to the Projects section.

---

## Context and precedence

Follow the instruction hierarchy defined in `AGENTS.md`.

For this task, precedence is:

1. Explicit user instruction
2. `AGENTS.md`
3. `docs/tasks/TASK-006.md`
4. `docs/ARCHITECTURE.md`
5. `docs/PROJECT.md`
6. `docs/DESIGN.md`
7. Existing frontend implementation and design tokens
8. Installed `frontend-design` skill
9. Stitch reference files

The installed skill is advisory. Project-specific rules and the existing Nexus implementation always win.

---

## Required context

Read only what is necessary.

Required:
- `AGENTS.md`
- `docs/tasks/TASK-006.md`
- `docs/DESIGN.md`
- current `page.tsx`
- existing completed section components only as needed for continuity
- `SiteContainer`
- installed `frontend-design` skill

Reference only when useful:
- Projects-related area of `reference/stitch/screen.png`
- only the Projects-related portion of `reference/stitch/code.html`

Do not inspect:
- `frontend/node_modules`
- `frontend/.next`
- backend
- target
- dist
- coverage
- `.git`
- unrelated project files

---

## Section identity

Anchor:
`#projects`

Narrative label:
`MISSIONS`

Primary title:
`Projects`

The section should communicate:
- what each project is;
- which technologies/concepts it demonstrates;
- which projects are most relevant to Backend / Java;
- a direct path to the GitHub repository.

Do not fabricate live demos, deployment URLs, production usage, user counts, metrics, stars, dates, employers, customers, or business impact.

---

## Project source of truth

Use only the project facts defined below.

Do not infer additional technologies or features from common ecosystem expectations.

### Mission 01 — Payment System

Repository:
`https://github.com/luispellis/Payment-system`

Display title:
`Payment System`

Positioning:
A Java payment-processing study project focused on object-oriented design, extensibility, architecture, and unit tests.

Supported facts:
- Java
- Maven
- Object-Oriented Programming
- Strategy Pattern
- DTO / Java Record
- JUnit 5
- payment types represented in the project include credit card, Pix, and boleto
- validation / error handling
- Git / Conventional Commits

Suggested concise description:
`Payment processing study project in Java applying object-oriented design, Strategy Pattern, DTOs, validation, and unit testing.`

Suggested technology/concept tags:
- Java
- Maven
- OOP
- Strategy Pattern
- JUnit 5

This project should receive strong visual priority because it directly reinforces the portfolio's Java / Backend positioning.

---

### Mission 02 — Service Order System

Repository:
`https://github.com/luispellis/service-order-system`

Display title:
`Service Order System`

Positioning:
A Spring Boot backend project for the service-order domain.

Verified technical facts:
- Java 21
- Spring Boot
- Spring Web MVC
- Spring Data JPA
- Bean Validation
- PostgreSQL
- Docker Compose is present for PostgreSQL
- OpenAPI / Springdoc
- Maven
- Lombok

Suggested concise description:
`Service-order backend built with Java and Spring Boot, using JPA, validation, PostgreSQL, and OpenAPI-oriented API tooling.`

Suggested technology tags:
- Java 21
- Spring Boot
- JPA
- PostgreSQL
- OpenAPI

Do not claim CRUD features, authentication, specific domain workflows, deployment status, or API endpoints unless they are already explicitly established in approved project content.

This project should also receive strong visual priority because it is the clearest Spring Boot / backend repository in this task.

---

### Mission 03 — Board

Repository:
`https://github.com/luispellis/board`

Display title:
`Task Board`

Positioning:
A Java task-board project created while following a DIO project challenge.

Verified technical facts:
- Java
- Gradle / Kotlin build script
- Liquibase
- MySQL Connector
- Lombok
- task-board project
- developed while following a DIO project challenge

Suggested concise description:
`Java task-board project developed as part of a DIO challenge, with database migration support through Liquibase and MySQL integration.`

Suggested technology tags:
- Java
- Gradle
- Liquibase
- MySQL
- Lombok

Do not imply original course authorship, commercial use, deployment, or production readiness.

The UI may visually identify this as a learning / challenge project without devaluing it.

---

### Mission 04 — Sudoku

Repository:
`https://github.com/luispellis/sudoku`

Display title:
`Sudoku`

Positioning:
A Java Sudoku code project.

Verified facts:
- Java source exists in the repository
- project is a Sudoku code project
- repository currently has a simple project structure and no verified public README feature specification

Suggested concise description:
`Java project focused on implementing Sudoku game logic and practicing core programming concepts.`

Suggested technology tags:
- Java
- Logic
- OOP

Important:
The words `Logic` and `OOP` may be used as conceptual tags only if the implementation visible in the repository supports them during inspection. If Codex cannot verify them from the project source available to this task, omit them and keep only `Java`.

Do not invent:
- solver algorithms
- GUI frameworks
- difficulty levels
- generators
- persistence
- APIs
- tests
- deployment

---

## Project hierarchy

The visual hierarchy should reflect portfolio relevance, not arbitrary numbering.

Priority:
1. Service Order System
2. Payment System
3. Task Board
4. Sudoku

Recommended presentation:
- Service Order System and Payment System as featured / primary missions;
- Task Board and Sudoku as supporting missions.

Do not hide the supporting projects.

All four must be visible in the section.

---

## Information architecture

Each project card/module should include:

- mission identifier or small narrative metadata;
- project title;
- concise description;
- verified technology/concept tags;
- visible GitHub repository action.

Optional:
- a restrained category such as `Backend`, `Java`, or `Learning Project` only when supported by the facts above.

Do not add fake:
- completion percentage;
- XP;
- difficulty score;
- status such as `completed`, `production`, `live`, or `deployed`;
- dates;
- contribution numbers;
- stars/forks;
- repository activity metrics.

---

## GitHub links

Every project must link to its exact repository URL.

External links must:
- be semantic anchors;
- clearly indicate that they lead to GitHub;
- open safely when using a new tab (`target="_blank"` with `rel="noreferrer"` or equivalent);
- remain keyboard accessible;
- have visible focus treatment.

Do not create demo buttons when no demo URL exists.

A single clear `View repository`, `GitHub`, or equivalent action per project is enough.

---

## Visual concept

The Projects section should feel like a **mission selection / mission archive interface**, not a generic SaaS card grid.

Possible visual vocabulary:
- mission IDs;
- restrained status-line metadata;
- asymmetric featured cards;
- terminal-style repository action;
- technical tag clusters;
- HUD framing;
- subtle directional or connection lines;
- compact dossier-like modules.

Professional-first remains mandatory.

Avoid:
- oversized GitHub logos;
- generic equal-size card grids if a stronger asymmetric composition is possible;
- fake game statistics;
- excessive neon;
- animated card tilts;
- carousels;
- horizontal scrolling;
- hover effects that hide essential content;
- image-heavy mockups without real project screenshots.

No project screenshots are required for TASK-006.

---

## Suggested layout

### Desktop

Prefer a composition such as:
- two featured projects occupying the stronger upper visual tier;
- two supporting projects below or beside them with reduced but still clear emphasis.

Service Order System and Payment System should be immediately noticeable.

The layout should be visually distinct from:
- About's narrative + career panel;
- Skills' module inventory.

### Tablet

Reflow intentionally to 2-column or mixed-width cards without awkward gaps.

### Mobile

- stack all projects;
- preserve hierarchy through labels and typography, not hidden content;
- technology tags must wrap;
- repository links must remain obvious;
- no horizontal overflow.

---

## Content tone

Keep descriptions concise and technical.

Preferred tone:
- factual;
- recruiter-friendly;
- engineering-oriented;
- no marketing exaggeration.

Do not write descriptions such as:
- “enterprise-grade”
- “highly scalable”
- “production-ready”
- “robust architecture”
- “real-world solution”
- “advanced”
- “professional-grade”

unless explicitly supported by the repository and approved source content.

---

## Functional requirements

Implement a responsive Projects section at `#projects`.

It must:
- replace the current `#projects` placeholder;
- preserve Hero, About, and Skills;
- preserve later placeholders;
- reuse `SiteContainer`;
- use semantic markup;
- maintain heading hierarchy;
- remain server-rendered unless client behavior is genuinely necessary;
- avoid unnecessary JavaScript;
- use existing tokens wherever possible;
- avoid horizontal overflow;
- include all four verified GitHub links.

No client interaction is required beyond normal links.

---

## Data organization

A typed local project data structure is encouraged because four cards share the same model.

Keep it small and specific to this section.

Example shape may include:
- `id`
- `title`
- `description`
- `repositoryUrl`
- `tags`
- `featured`
- `meta`

Do not build a CMS, global content layer, repository API client, GitHub API integration, or dynamic fetch system for TASK-006.

Project content is static for this task.

---

## Typography

Use only configured project fonts:
- Sora
- Manrope
- JetBrains Mono

Recommended:
- Sora for titles;
- Manrope for project descriptions;
- JetBrains Mono for mission IDs, tags, and repository metadata.

---

## Accessibility

The section must:
- use a semantic `section` with a labelled heading;
- use semantic articles/cards where appropriate;
- preserve heading hierarchy;
- provide descriptive link text or accessible labels;
- maintain sufficient contrast;
- show visible keyboard focus;
- not communicate featured/supporting importance through color alone;
- not implement non-interactive cards as buttons;
- remain understandable with decorative effects disabled.

---

## Visual continuity

Preserve the established:
- dark Nexus atmosphere;
- grid/background language;
- restrained cyan, purple, and gold accents;
- HUD/terminal character;
- 8px-oriented spacing rhythm where practical;
- professional-first balance.

Do not redesign completed sections.

Avoid making Projects visually identical to Skills.

---

## Skill usage

Use the installed `frontend-design` skill for:
- project hierarchy;
- asymmetric composition;
- recruiter-oriented scanning;
- responsive layout;
- typography;
- visual polish;
- avoiding generic portfolio cards.

Do not let the skill:
- invent project facts;
- add unsupported technologies;
- add project screenshots;
- add dependencies;
- implement a GitHub API;
- create fake metrics;
- redesign completed sections;
- expand into Experience or Contact.

---

## Dependencies

Expected dependency additions: **none**.

Do not add:
- icon libraries;
- GitHub SDKs;
- animation libraries;
- component libraries;
- carousel libraries.

A GitHub/link icon may be drawn with a tiny inline SVG only if it materially improves clarity and follows accessibility rules. Text-only actions are also acceptable.

If a dependency appears necessary, stop and explain why before adding it.

---

## Out of scope

Do not implement or redesign:
- Hero
- About
- Skills
- Experience
- Contact
- backend/API
- GitHub API integration
- live repository statistics
- automated repository synchronization
- project detail pages
- modals
- filters
- search
- carousel
- screenshots
- live demos
- deployment
- global animation system

Do not start TASK-007.

---

## Quality constraints

- No invented project facts.
- No unsupported tech tags.
- No fake metrics.
- No filler projects.
- All four repository URLs must be exact.
- Prefer hierarchy and content clarity over decoration.
- Avoid unnecessary abstractions.
- Avoid client components unless genuinely required.
- Avoid unrelated cleanup.
- Preserve existing architecture and tokens.
- Do not modify backend files.

---

## Validation

Before reporting completion, run from `frontend/`:

```bash
npm run lint
npm run typecheck
npm run build
```

Also run from repository root:

```bash
git diff --check
git status --short
```

Review the final diff and verify that only TASK-006-related files changed.

Manually verify:
- `/#projects` reaches the Projects section;
- all four repository links point to the exact URLs in this task;
- links are keyboard accessible;
- mobile layout has no horizontal overflow.

---

## Definition of Done

TASK-006 is complete when:

- `#projects` contains a finished Missions / Projects section;
- all four requested repositories are represented;
- Service Order System and Payment System have strongest portfolio emphasis;
- project descriptions remain factual and concise;
- repository URLs are correct;
- project technology tags are source-supported;
- no unsupported technology, feature, metric, or deployment claim exists;
- the design is distinct from Skills and About;
- layout is responsive;
- accessibility requirements are satisfied;
- no unnecessary dependency was added;
- Hero, About, and Skills remain unchanged except for unavoidable minimal integration;
- Experience and Contact remain placeholders;
- lint passes;
- typecheck passes;
- production build passes;
- `git diff --check` passes;
- final diff is reviewed for scope;
- Codex has not committed or pushed.

---

## Git boundary

Codex must not:
- commit;
- push;
- merge;
- create a pull request;
- start TASK-007.

After implementation and validation, stop and report:

1. files changed;
2. implementation summary;
3. validation results;
4. project facts/tags used;
5. intentional deviations;
6. remaining concerns.

The user controls Git operations.
