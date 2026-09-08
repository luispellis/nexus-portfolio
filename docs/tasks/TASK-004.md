# TASK-004 — About / Player Profile

## Objective

Implement the `#about` section of the portfolio as a professional "Player Profile" that explains the transition from IT / technical support into software development, with a clear focus on Backend and Java.

The section must preserve the established Nexus Terminal / Developer Quest identity while remaining concise, readable, professional, responsive, and grounded only in the user's provided background.

This task is limited to the About section.

## Context and precedence

Follow the instruction hierarchy defined in `AGENTS.md`.

For this task, use this precedence when guidance conflicts:

1. Explicit user instruction in the current task
2. `AGENTS.md`
3. `docs/tasks/TASK-004.md`
4. `docs/ARCHITECTURE.md`
5. `docs/PROJECT.md`
6. `docs/DESIGN.md`
7. Existing frontend implementation and design tokens
8. Installed `frontend-design` skill
9. Stitch reference files in `reference/stitch/`

The `frontend-design` skill is advisory. It may improve composition, hierarchy, spacing, typography, responsiveness, and polish, but it must not redefine the established Nexus identity or invent content.

## Required context

Read only what is necessary.

Required:
- `AGENTS.md`
- `docs/tasks/TASK-004.md`
- `docs/DESIGN.md`
- `docs/ARCHITECTURE.md`
- current `page.tsx`
- current Hero and layout primitives that directly affect section continuity
- installed `frontend-design` skill

Reference only when needed:
- `reference/stitch/screen.png`
- only the About-related portion of `reference/stitch/code.html`

Do not inspect:
- `frontend/node_modules`
- `frontend/.next`
- `backend`
- `target`
- `dist`
- `coverage`
- `.git`

Do not read unrelated sections or files.

## User-provided professional source text

Use the following as the factual source of truth for the About content:

> Sou Desenvolvedor de Software com foco em Backend e Java, atualmente atuando na área de Tecnologia da Informação e direcionando minha carreira para desenvolvimento de software.
>
> Minha experiência profissional com suporte técnico me proporciona contato diário com sistemas, análise e resolução de problemas, investigação de erros e compreensão de ambientes de produção. Paralelamente, desenvolvo projetos e aprofundo meus conhecimentos em Java, Spring Boot, APIs REST, SQL, Git, Programação Orientada a Objetos e desenvolvimento Backend.
>
> Minha formação e estudos também incluem Python, AWS e automação, ampliando meu contato com diferentes tecnologias e minha capacidade de aprender novas ferramentas e linguagens conforme as necessidades de cada projeto.
>
> Busco oportunidades como Desenvolvedor de Software Júnior, Desenvolvedor Backend Júnior ou Desenvolvedor Java Júnior, onde possa aplicar minha experiência em tecnologia, contribuir com o time e continuar evoluindo como desenvolvedor.

Do not invent:
- employers
- years of experience
- certifications
- project metrics
- production ownership
- leadership experience
- cloud expertise beyond what the source text supports
- seniority beyond Junior-targeted positioning
- technologies not explicitly supported by the source text or existing project content

## Editorial direction

Do not render the source text verbatim as one long block.

Condense and restructure it for a landing page while preserving meaning.

Recommended editorial version:

**Desenvolvedor de Software com foco em Backend e Java**, construindo minha carreira em desenvolvimento a partir de uma experiência prática em Tecnologia da Informação.

Minha atuação com suporte técnico me colocou em contato diário com sistemas, ambientes de produção, investigação de erros e resolução de problemas — experiência que hoje aplico no desenvolvimento de software e na construção de soluções mais confiáveis.

Atualmente aprofundo meus conhecimentos em **Java, Spring Boot, APIs REST, SQL, Git e Programação Orientada a Objetos**, além de ampliar minha experiência com **Python, AWS e automação**.

Busco oportunidades como **Desenvolvedor Backend / Java Júnior**, onde possa contribuir com minha experiência em tecnologia enquanto continuo evoluindo como desenvolvedor.

Minor wording refinements are allowed if they improve readability without changing factual meaning.

## Narrative concept

The section should visually communicate this progression:

```text
IT / Technical Support
        ↓
Systems & production environments
        ↓
Troubleshooting & error investigation
        ↓
Backend development
        ↓
Java / Spring Boot
        ↓
Software Developer
```

This progression should guide the visual hierarchy but does not need to be rendered literally as an arrow diagram.

## Section identity

Anchor:
`#about`

Narrative label:
`PLAYER PROFILE`

Section title:
`About`

The section should feel like a profile / career-state panel inside the Nexus experience, not a resume dump.

## Content groups

The section should include:

### Main profile narrative
A concise text block using the editorial direction above.

### Background
Label:
`Background`

Content:
`IT / Technical Support`

### Current Focus
Label:
`Current Focus`

Content:
`Backend Development`

### Core
Label:
`Core`

Content may include:
- Java
- Spring Boot
- REST APIs
- SQL
- Git
- Object-Oriented Programming

### Expanding
Label:
`Expanding`

Content may include:
- Python
- AWS
- Automation

These content groups should support the narrative, not compete with it.

Do not create skill-level percentages or proficiency ratings.

## Functional requirements

Implement a responsive About section at `#about`.

It must:
- replace the existing `#about` placeholder
- preserve all other future section placeholders
- visually transition naturally from the Hero
- reuse `SiteContainer`
- use semantic section structure
- maintain correct heading hierarchy
- present the professional narrative clearly
- include the supporting Background / Current Focus / Core / Expanding information
- avoid excessive cards
- avoid a resume-like table
- avoid horizontal overflow
- remain server-rendered unless client behavior is genuinely necessary
- use existing design tokens wherever possible

No interactivity is required for this task.

## Visual direction

Preserve:
- Nexus Terminal / Developer Quest identity
- dark sci-fi atmosphere
- professional-first presentation
- restrained cyan / purple / gold accents
- subtle HUD / terminal details
- existing typography system
- 8px-based spacing rhythm where practical

The About section should be visually distinct from the Hero without feeling like a separate website.

Preferred balance:
- narrative text as the main content
- supporting profile data as secondary UI
- moderate asymmetry
- generous whitespace
- subtle visual framing

Avoid:
- large generic glass cards everywhere
- excessive borders
- skill progress bars
- circular percentage meters
- generic "About Me" SaaS layouts
- overly game-like avatars or fake RPG statistics
- fake levels / XP / ranks

## Typography

Use only the configured fonts:
- Sora
- Manrope
- JetBrains Mono

Use:
- display font for section emphasis
- body font for narrative readability
- mono font selectively for labels / metadata

Do not make the main About paragraphs monospace.

## Responsive behavior

### Desktop

Prefer a two-column or asymmetric composition where:
- the narrative has clear reading width
- supporting profile metadata remains secondary
- the section has enough breathing room to contrast with the Hero

### Tablet

Reflow deliberately rather than simply shrinking desktop.

### Mobile

- stack content naturally
- prioritize narrative readability
- keep labels legible
- avoid dense card grids
- preserve comfortable vertical rhythm
- do not hide essential information

## Accessibility

The section must:
- use semantic heading structure
- preserve readable line lengths
- provide sufficient contrast
- not use color as the sole means of categorization
- mark decorative elements with `aria-hidden` when appropriate
- avoid unnecessary ARIA
- remain readable with browser zoom
- avoid tiny metadata text

## Implementation guidance

A reasonable structure could be:

```text
frontend/src/
├── app/
│   └── page.tsx
└── components/
    └── sections/
        ├── Hero.tsx
        └── About.tsx
```

This is guidance, not a requirement.

Prefer one focused `About` component.

Do not introduce a generic section framework unless existing code already makes it clearly beneficial.

Do not move or rewrite the Hero unless a minimal integration adjustment is required.

## Skill usage

Use the installed `frontend-design` skill for:
- composition
- editorial hierarchy
- spatial rhythm
- responsive layout
- profile metadata treatment
- visual polish
- avoiding generic template-like output

Do not allow the skill to:
- invent biography content
- add fake metrics or achievements
- redefine the Nexus palette
- expand into Skills or Experience
- add unnecessary dependencies
- redesign the Hero
- introduce client-side behavior without need

Project-specific guidance wins on conflict.

## Dependencies

Expected dependency additions: **none**.

Do not add:
- animation libraries
- icon libraries solely for decoration
- component libraries
- chart libraries
- carousel libraries

If a dependency appears necessary, stop and explain why before adding it.

## Out of scope

Do not implement or redesign:
- Hero
- Skills section
- Projects section
- Experience section
- Contact section
- backend/API
- database
- contact form
- scroll spy
- journey/checkpoint navigation
- global animation orchestration
- SEO expansion
- deployment
- authentication
- downloadable resume feature
- profile photo system
- testimonials
- counters / statistics
- skill proficiency ratings

Existing placeholders for later anchors must remain as needed.

## Quality constraints

- Keep the implementation focused on About only.
- Preserve existing tokens and architecture.
- Avoid duplicated styling concepts.
- Avoid unnecessary abstractions.
- Avoid unnecessary client components.
- Avoid unrelated cleanup.
- Do not modify backend files.
- Do not invent facts.
- Keep copy concise enough for a portfolio landing page.

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

Review the final diff and confirm only TASK-004-related files changed.

## Definition of Done

TASK-004 is complete when:
- `#about` contains a finished About / Player Profile section
- the provided career narrative is accurately represented
- the content explains the connection between IT/support experience and software development
- Backend / Java positioning is clear
- Background, Current Focus, Core, and Expanding metadata are present
- no unsupported professional claims were introduced
- design is consistent with Nexus
- layout is responsive
- accessibility requirements are satisfied
- no unnecessary dependency was added
- later sections remain out of scope
- lint passes
- typecheck passes
- production build passes
- `git diff --check` passes
- final diff is reviewed for scope
- Codex has not committed or pushed

## Git boundary

Codex must not:
- commit
- push
- merge
- create a pull request
- start TASK-005

After implementation and validation, stop and report:
1. files changed
2. implementation summary
3. validation results
4. any intentional deviations
5. any remaining concerns

The user controls Git operations.
