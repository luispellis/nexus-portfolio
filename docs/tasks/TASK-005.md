# TASK-005 — Skills / Tech Arsenal

## Objective

Implement the `#skills` section of the portfolio as the **Tech Arsenal**: a professional, scannable representation of the technologies and engineering areas currently supported by the user's profile.

The section must preserve the Nexus Terminal / Developer Quest identity while avoiding fake proficiency scores, exaggerated expertise, generic logo walls, or resume-like clutter.

This task is limited to the Skills section.

---

## Context and precedence

Follow the instruction hierarchy defined in `AGENTS.md`.

For this task, precedence is:

1. Explicit user instruction
2. `AGENTS.md`
3. `docs/tasks/TASK-005.md`
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
- `docs/tasks/TASK-005.md`
- `docs/DESIGN.md`
- current `page.tsx`
- existing `Hero.tsx`
- existing `About.tsx`
- `SiteContainer`
- installed `frontend-design` skill

Reference only when useful:
- Skills-related area of `reference/stitch/screen.png`
- only the Skills-related portion of `reference/stitch/code.html`

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

## Factual technology source

Use only technologies already supported by the user's professional profile and previous approved portfolio content.

### Primary / current focus

- Java
- Spring Boot
- REST APIs
- SQL
- Git
- Object-Oriented Programming
- Backend Development

### Expanding knowledge

- Python
- AWS
- Automation

Do not introduce technologies merely because they are common in backend development.

In particular, do not invent or add items such as:
- Docker
- Kubernetes
- Kafka
- Redis
- MongoDB
- PostgreSQL
- MySQL
- CI/CD platforms
- Terraform
- microservices
- messaging systems
- specific AWS services

unless they are already explicitly established elsewhere in approved project content.

---

## Section identity

Anchor:
`#skills`

Narrative label:
`TECH ARSENAL`

Primary title:
`Skills`

The section should communicate technical direction quickly to a recruiter or developer without pretending to measure expertise numerically.

---

## Information architecture

Prefer a small number of meaningful groups rather than one card per technology.

Recommended groups:

### Backend / Core

Primary emphasis.

May contain:
- Java
- Spring Boot
- REST APIs
- Object-Oriented Programming
- Backend Development

### Data

May contain:
- SQL

Do not invent a specific database engine.

### Cloud & Automation

Secondary / expanding area.

May contain:
- AWS
- Python
- Automation

The UI must make it clear that these are expanding areas rather than presenting them as equivalent to the user's primary Backend / Java focus.

### Tooling

May contain:
- Git

Do not fill this category with unsupported tools merely to make the layout symmetrical.

---

## Visual concept

The section should feel like a restrained technical inventory / loadout inside the Nexus interface.

Possible visual vocabulary:
- system/module labels
- compact technology chips
- subtle terminal metadata
- grouped modules
- restrained HUD framing
- small status/category indicators

The result must remain professional-first.

Do not build:
- percentage progress bars
- star ratings
- 1–10 scores
- circular skill meters
- fake XP
- fake levels
- beginner/intermediate/expert badges
- radar charts
- huge logo grids
- animated carousels
- decorative 3D technology objects

No claim should imply a measurable proficiency level that the user did not provide.

---

## Hierarchy

The design must visually prioritize:

1. Backend / Java
2. Spring Boot / REST / OOP
3. SQL and Git
4. Python / AWS / Automation as expanding knowledge

Do not give every technology identical visual weight if doing so obscures this hierarchy.

A recruiter should understand the user's direction within a few seconds.

---

## Functional requirements

Implement a responsive Skills section at `#skills`.

It must:
- replace the current `#skills` placeholder
- preserve Hero and About
- preserve later placeholders
- reuse `SiteContainer`
- use semantic markup
- maintain heading hierarchy
- remain server-rendered unless client behavior is genuinely necessary
- avoid unnecessary JavaScript
- use existing tokens wherever possible
- avoid horizontal overflow
- transition naturally from About into Skills

No interaction is required.

---

## Data organization

If the technology list would otherwise be duplicated or make the component difficult to read, a small typed local data structure is allowed.

Do not create an elaborate content management abstraction.

Do not introduce a global skills architecture intended for hypothetical future features.

YAGNI applies.

---

## Typography

Use only configured project fonts:
- Sora
- Manrope
- JetBrains Mono

Recommended usage:
- Sora for section/display emphasis
- Manrope for supporting explanatory copy
- JetBrains Mono for technical labels, tags, and metadata

Technology names must remain comfortably readable.

---

## Responsive behavior

### Desktop

Prefer an asymmetric or modular composition that complements the About section without simply repeating its two-column panel.

The Backend/Core group should receive the strongest visual emphasis.

### Tablet

Reflow groups deliberately and preserve hierarchy.

### Mobile

- stack modules cleanly
- avoid tiny chips
- allow technology labels to wrap safely
- preserve adequate touch/reading spacing even though items are not interactive
- do not hide technologies
- avoid horizontal scrolling

---

## Accessibility

The section must:
- use semantic headings
- preserve sufficient text contrast
- not communicate category or importance through color alone
- avoid unnecessarily tiny text
- mark purely decorative elements appropriately
- remain understandable without visual effects
- remain readable under browser zoom

Technology chips that are not controls must not be implemented as buttons.

---

## Visual continuity

Preserve the established:
- dark sci-fi Nexus atmosphere
- grid/background language
- restrained cyan, purple, and gold accents
- HUD/terminal character
- professional-first balance
- spacing rhythm

Do not redesign Hero or About.

Avoid making every section visually identical. Skills should belong to the same system while having its own composition.

---

## Skill usage

Use the installed `frontend-design` skill for:
- hierarchy
- composition
- grouping
- responsive behavior
- typography
- visual polish
- avoiding generic portfolio templates

Do not let the skill:
- invent technologies
- invent proficiency levels
- add dependencies
- add unnecessary animation
- redesign completed sections
- expand into Projects or Experience

---

## Dependencies

Expected dependency additions: **none**.

Do not add:
- icon libraries
- animation libraries
- chart libraries
- UI/component libraries

Technology logos are not required for TASK-005.

If a dependency appears necessary, stop and explain why before adding it.

---

## Out of scope

Do not implement or redesign:
- Hero
- About
- Projects
- Experience
- Contact
- backend/API
- database
- contact form
- scroll spy
- global journey progression
- skill filtering
- search
- skill detail modals
- proficiency scoring
- certifications
- project-to-skill relationships
- downloadable resume
- global animation system
- deployment

Do not start TASK-006.

---

## Quality constraints

- Keep the component focused.
- Prefer content clarity over decoration.
- Do not create filler content to balance the grid.
- Avoid unnecessary abstractions.
- Avoid client components unless genuinely required.
- Avoid unrelated cleanup.
- Preserve existing architecture and design tokens.
- Do not modify backend files.
- Do not invent facts.

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

Review the final diff and verify that only TASK-005-related files changed.

---

## Definition of Done

TASK-005 is complete when:

- `#skills` contains a finished Tech Arsenal section
- Backend / Java is clearly the primary technical direction
- Spring Boot, REST APIs, OOP, SQL, and Git are represented
- Python, AWS, and Automation are represented as expanding knowledge
- no unsupported technology was introduced
- no fake proficiency score or level exists
- visual treatment is consistent with Nexus
- the section is visually distinct from About
- layout is responsive
- semantic/accessibility requirements are satisfied
- no unnecessary dependency was added
- Hero and About remain unchanged except for an unavoidable minimal integration adjustment
- later sections remain placeholders
- lint passes
- typecheck passes
- production build passes
- `git diff --check` passes
- final diff is reviewed for scope
- Codex has not committed or pushed

---

## Git boundary

Codex must not:
- commit
- push
- merge
- create a pull request
- start TASK-006

After implementation and validation, stop and report:

1. files changed
2. implementation summary
3. validation results
4. intentional deviations
5. remaining concerns

The user controls Git operations.
