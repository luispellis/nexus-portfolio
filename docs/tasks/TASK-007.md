# TASK-007 — Experience / Journey Log

## Objective

Implement the `#experience` section of the portfolio as a concise **Journey Log** that presents the user's professional technology experience and career direction without inventing employers, dates, metrics, or responsibilities that have not been explicitly approved.

This task is limited to the Experience section.

The section should connect the user's practical background in technical support / IT with the current transition toward Backend / Java development.

---

## Context and precedence

Follow the instruction hierarchy defined in `AGENTS.md`.

For this task, precedence is:

1. Explicit user instruction
2. `AGENTS.md`
3. `docs/tasks/TASK-007.md`
4. `docs/ARCHITECTURE.md`
5. `docs/PROJECT.md`
6. `docs/DESIGN.md`
7. Existing frontend implementation and tokens
8. Installed `frontend-design` skill
9. Stitch reference files

The installed skill is advisory. Project-specific rules and the existing Nexus implementation always win.

---

## Required context

Read only what is needed.

Required:
- `AGENTS.md`
- `docs/tasks/TASK-007.md`
- `docs/DESIGN.md`
- current `page.tsx`
- existing completed section components only as needed for continuity
- `SiteContainer`
- installed `frontend-design` skill

Reference only when useful:
- Experience/Journey area of `reference/stitch/screen.png`
- only the Experience-related portion of `reference/stitch/code.html`

Do not inspect:
- `frontend/node_modules`
- `frontend/.next`
- backend
- target
- dist
- coverage
- `.git`
- unrelated files

---

## Section identity

Anchor:
`#experience`

Narrative label:
`JOURNEY LOG`

Primary title:
`Experience`

The section should communicate:
- practical experience in Technology / Technical Support;
- daily contact with systems and production environments;
- investigation and resolution of technical issues;
- how this experience supports the user's transition into software development;
- current focus on Backend / Java development.

Do not fabricate:
- company names;
- employment dates;
- job titles not explicitly approved;
- years of experience;
- promotions;
- team size;
- customers;
- business metrics;
- performance indicators;
- awards;
- certifications;
- leadership responsibilities.

---

## Approved factual source

Use only the following career facts for TASK-007.

### Professional background

The user currently works in the Technology / IT area and has practical experience with technical support.

This professional experience includes regular contact with:
- systems;
- analysis and resolution of problems;
- investigation of errors;
- production environments;
- understanding how software behaves in operational contexts.

This background contributes to:
- troubleshooting ability;
- technical investigation;
- understanding of software behavior;
- attention to reliability;
- practical awareness of production environments.

Do not transform these into quantified claims.

---

## Development direction

The user's career is being directed toward software development, with emphasis on Backend and Java.

Current development focus includes:
- Java
- Spring Boot
- REST APIs
- SQL
- Git
- Object-Oriented Programming

Additional areas of study/exposure:
- Python
- AWS
- Automation

The portfolio targets opportunities such as:
- Junior Software Developer
- Junior Backend Developer
- Junior Java Developer

Do not represent the target role as a current professional position unless explicitly provided later.

---

## Recommended narrative structure

The Experience section should tell a short progression story.

### Journey entry 01 — Technology / Technical Support

Suggested label:
`CURRENT FOUNDATION`

Suggested title:
`Technology & Technical Support`

Suggested body:
`Practical experience working with systems, investigating errors, resolving technical issues, and understanding production environments.`

Possible supporting points:
- System troubleshooting
- Error investigation
- Production environment awareness
- Technical problem solving

Do not call these achievements or metrics.

### Journey entry 02 — Backend Development Direction

Suggested label:
`CURRENT DIRECTION`

Suggested title:
`Backend / Java Development`

Suggested body:
`Applying the problem-solving mindset developed in IT support while deepening backend development skills with Java, Spring Boot, REST APIs, SQL, Git, and object-oriented programming.`

Possible supporting points:
- Java
- Spring Boot
- REST APIs
- SQL
- Git
- OOP

This entry represents career direction and active development focus, not a separate employer or professional role.

### Optional bridge / transition message

A short connecting statement may explain that support experience provides practical context for software development.

Example direction:
`Experience close to real systems and production issues now informs how I approach backend development, debugging, and reliability.`

Keep it factual and restrained.

---

## Visual concept

The section should feel like a **technical journey log / system timeline**, not a generic résumé table.

Possible visual vocabulary:
- vertical timeline;
- log entries;
- checkpoint markers;
- terminal-style metadata;
- progression line;
- compact technical chips;
- subtle HUD separators.

The result should be professional-first.

Avoid:
- fake dates;
- fake duration bars;
- XP/progress systems;
- percentage timelines;
- skill meters;
- animated roadmaps;
- excessive gaming language;
- generic SaaS cards;
- a large résumé table;
- decorative complexity that overwhelms the content.

---

## Suggested layout

### Desktop

Prefer a timeline-like or split composition.

Possible structure:
- left column: JOURNEY LOG heading and short context;
- right column: two stacked journey entries connected by a restrained vertical line.

Alternative:
- full-width timeline with two clear checkpoints.

The section must look visually distinct from:
- About's narrative + career state panel;
- Skills' technical module grid;
- Projects' mission archive cards.

### Tablet

Maintain clear progression and avoid overly narrow side-by-side text.

### Mobile

- stack naturally;
- keep progression line readable or simplify it;
- no horizontal overflow;
- do not hide content;
- supporting tags wrap cleanly.

---

## Content tone

Use concise, factual, recruiter-friendly language.

Preferred:
- `Technology & Technical Support`
- `Backend / Java Development`
- `System troubleshooting`
- `Error investigation`
- `Production environments`
- `REST APIs`

Avoid:
- `expert`
- `senior`
- `advanced`
- `highly experienced`
- `mission-critical`
- `enterprise-grade`
- `production expert`
- `full-stack`
- `architect`
- `lead`

unless explicitly provided by the user.

---

## Functional requirements

Implement a responsive Experience section at `#experience`.

It must:
- replace the current `#experience` placeholder;
- preserve Hero, About, Skills, and Projects;
- preserve Contact placeholder;
- reuse `SiteContainer`;
- use semantic markup;
- preserve heading hierarchy;
- remain a Server Component unless client behavior is genuinely necessary;
- avoid unnecessary JavaScript;
- use existing design tokens;
- avoid horizontal overflow.

No interaction is required.

---

## Data organization

A small typed local data structure may be used for journey entries.

Example fields:
- `id`
- `label`
- `title`
- `description`
- `items`

Do not build:
- CMS integration;
- resume parser;
- dynamic timeline API;
- date calculation system;
- global content abstraction.

Keep it local and simple.

---

## Typography

Use only configured project fonts:
- Sora
- Manrope
- JetBrains Mono

Recommended:
- Sora for headings;
- Manrope for narrative copy;
- JetBrains Mono for log IDs, labels, metadata, and chips.

---

## Accessibility

The section must:
- use a semantic `section`;
- use a labelled heading;
- use semantic list/article structures where appropriate;
- maintain heading hierarchy;
- keep sufficient contrast;
- not communicate progression through color alone;
- keep decorative timeline elements `aria-hidden`;
- remain understandable without decorative effects.

---

## Visual continuity

Preserve:
- dark Nexus background;
- restrained cyan, purple, and gold accents;
- grid / HUD language;
- current spacing system;
- professional-first visual balance.

Do not redesign existing completed sections.

---

## Skill usage

Use the installed `frontend-design` skill for:
- timeline composition;
- responsive hierarchy;
- spacing;
- typography;
- visual distinction from previous sections.

Do not let the skill:
- invent employment data;
- add companies;
- add dates;
- add metrics;
- add dependencies;
- redesign existing sections;
- implement Contact;
- expand into backend work.

---

## Dependencies

Expected dependency additions: **none**.

Do not add:
- timeline libraries;
- animation libraries;
- icon libraries;
- component libraries.

If an icon is truly necessary, use minimal inline SVG or text-based markers.

---

## Out of scope

Do not implement or redesign:
- Hero
- About
- Skills
- Projects
- Contact
- backend/API
- downloadable résumé
- company logos
- employer-specific history
- dates not supplied by the user
- certifications
- education timeline
- filters
- modals
- animations requiring client code

Do not start TASK-008.

---

## Quality constraints

- No invented employers.
- No invented dates.
- No invented job titles beyond the approved generic wording.
- No fake metrics.
- No unsupported responsibilities.
- Keep the story concise.
- Preserve the current architecture.
- Avoid unrelated cleanup.
- Do not modify backend files.

---

## Integration expectation

After implementation, `page.tsx` should conceptually render:

```tsx
<Hero />
<About />
<Skills />
<Projects />
<Experience />
```

Only the remaining `#contact` placeholder should remain afterward.

Prefer a direct composition rather than conditional rendering inside the navigation placeholder loop.

---

## Validation

Before reporting completion, run from `frontend/`:

```bash
npm run lint
npm run typecheck
npm run build
```

From repository root:

```bash
git diff --check
git status --short
```

Review the final diff and confirm only TASK-007-related files changed.

Manually verify:
- `/#experience` reaches the section correctly;
- desktop layout is balanced;
- mobile layout has no horizontal overflow;
- timeline/decorative elements do not obscure content.

---

## Definition of Done

TASK-007 is complete when:

- `#experience` contains a finished Journey Log section;
- Technology / Technical Support is represented accurately;
- Backend / Java career direction is represented accurately;
- no employer, date, metric, or unsupported professional claim is invented;
- visual progression is clear;
- design remains distinct from About, Skills, and Projects;
- section is responsive;
- accessibility requirements are satisfied;
- no dependency was added;
- Hero, About, Skills, and Projects remain unchanged except for minimal integration;
- Contact remains a placeholder;
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
- start TASK-008.

After implementation and validation, stop and report:

1. files changed;
2. implementation summary;
3. validation results;
4. career facts used;
5. intentional deviations;
6. remaining concerns.

The user controls Git operations.
