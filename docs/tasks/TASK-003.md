# TASK-003 — Hero Section

## Objective

Implement the portfolio Hero section using the existing Nexus Terminal / Developer Quest visual direction, preserving the established project architecture and the Stitch reference while keeping the implementation production-oriented, responsive, accessible, and intentionally scoped.

This task is limited to the Hero. Do not implement subsequent landing-page sections.

## Context and precedence

Follow the project instruction hierarchy defined in `AGENTS.md`.

For this task, use this precedence when guidance conflicts:

1. Explicit user instruction in the current task
2. `AGENTS.md`
3. `docs/tasks/TASK-003.md`
4. `docs/ARCHITECTURE.md`
5. `docs/PROJECT.md`
6. `docs/DESIGN.md`
7. Existing implementation and design tokens
8. Activated `frontend-design` skill
9. Stitch reference files in `reference/stitch/`

The `frontend-design` skill is advisory. It should improve composition, responsive behavior, typography, polish, and implementation quality without replacing the established Nexus visual identity.

The project intentionally uses a dark sci-fi interface with cyan, purple, and gold accents. Do not discard that palette merely because the external skill generally warns against generic neon-dark AI aesthetics. Use restraint, hierarchy, and intentional composition so the palette feels authored rather than generic.

## Required context

Read only what is necessary.

Required:
- `AGENTS.md`
- `docs/tasks/TASK-003.md`
- `docs/DESIGN.md`
- `docs/ARCHITECTURE.md`
- current frontend files directly involved in the Hero and page shell
- installed `frontend-design` skill

Reference only when needed:
- `reference/stitch/screen.png`
- the Hero-related portion of `reference/stitch/code.html`

Do not read the entire repository or generated directories.

Do not inspect:
- `frontend/node_modules`
- `frontend/.next`
- `backend`
- `target`
- `dist`
- `coverage`
- `.git`

## Visual direction

Preserve:
- Nexus Terminal / Developer Quest
- Gamer-Professional balance: approximately 70% professional, 20% gamified, 10% cinematic
- dark sci-fi / terminal-inspired atmosphere
- restrained HUD-like details
- existing cyan, purple, and gold accent system
- glass / translucent effects only where purposeful
- strong hierarchy and readability
- polished developer-portfolio presentation rather than a game UI mockup

The Hero should feel like the opening screen of a professional developer journey, not a generic SaaS landing page and not a literal videogame menu.

## Content

Use this Hero content unless equivalent copy already exists:

- Eyebrow / player identifier: `PLAYER 01`
- Name: `Luis Felipe`
- Primary role: `Software Developer`
- Technical focus: `Backend • Java • APIs • Databases`
- Availability indicator: `Available for opportunities`
- Primary CTA: `Start Journey`
- CTA target: `#about`

Do not invent a secondary CTA merely to fill space.

## Functional requirements

Implement a responsive Hero section for `#home`.

It must:
- integrate with the existing Header and `SiteContainer`
- preserve current navigation anchors
- render correctly below the site header
- use semantic HTML
- maintain clear heading hierarchy
- make name/role the principal visual focus
- include availability/status indicator
- include `PLAYER 01`
- include technical-focus line
- include the CTA linking to `#about`
- adapt composition for desktop, tablet, and mobile
- avoid horizontal overflow
- retain readable spacing at narrow widths
- use existing design tokens wherever suitable
- prefer CSS/Tailwind for atmospheric effects
- remain server-rendered unless client-side behavior is truly required

## Visual effects

Allowed:
- subtle grid / terminal / HUD-inspired background
- restrained glow
- soft radial or atmospheric lighting
- decorative lines or geometric accents
- subtle status pulse
- lightweight CSS transitions
- CSS-only decorative effects
- tasteful asymmetric composition

Requirements:
- effects must not compromise text contrast
- effects must not dominate content
- respect `prefers-reduced-motion`
- decorative elements must not become accessibility noise
- use `aria-hidden` where appropriate

Do not add a heavy animation library.

## Typography

Use only the font system already configured:
- Sora
- Manrope
- JetBrains Mono

Use monospace selectively; do not apply it to all copy merely to force a developer aesthetic.

## Responsive behavior

Desktop:
- prefer an intentional, spacious, left-led composition
- asymmetric layout is acceptable if it improves the Nexus concept

Tablet:
- adapt hierarchy rather than simply shrinking desktop

Mobile:
- stack content naturally
- preserve readable typography
- keep CTA easy to tap
- avoid clipping decorative effects
- avoid tiny terminal/HUD text
- keep essential content visible

## Accessibility

The Hero must:
- use semantic heading structure
- provide sufficient text/background contrast
- provide visible keyboard focus for CTA
- not rely solely on color for availability/status
- mark purely decorative elements appropriately
- avoid unnecessary ARIA
- respect reduced-motion preferences
- maintain an adequate CTA touch target

## Implementation guidance

Prefer a small, composable structure such as:

```text
frontend/src/
├── app/
│   └── page.tsx
└── components/
    └── sections/
        └── Hero.tsx
```

This is guidance, not a requirement. Do not create abstractions unless they provide clear value.

Do not create a generic section framework during this task.

## Skill usage

Use the installed `frontend-design` skill for:
- composition
- visual hierarchy
- typography refinement
- spatial rhythm
- responsive adaptation
- purposeful visual details
- avoiding generic template-like output

Do not allow the skill to:
- redefine the established color identity
- replace the Stitch direction
- expand scope into later sections
- introduce unnecessary libraries
- rewrite existing architecture
- add unrelated animations or UI patterns

Project-specific guidance wins on conflict.

## Stitch usage

Treat Stitch as visual reference, not production architecture.

Use:
- `reference/stitch/screen.png` for visual composition
- only the relevant Hero portion of `reference/stitch/code.html` if implementation details are needed

Do not:
- copy the entire Stitch HTML
- preserve monolithic prototype structure
- use Tailwind CDN
- replicate prototype-only hacks
- import external prototype assets without evaluating whether they belong in production

Prefer existing project tokens and production Next.js patterns.

## Dependencies

Expected dependency additions: **none**.

Do not add:
- Framer Motion
- icon libraries solely for decoration
- component libraries
- animation libraries
- canvas/WebGL libraries

If a dependency appears necessary, stop and explain why before adding it.

## Out of scope

Do not implement or redesign:
- About content
- Skills content
- Projects content
- Experience content
- Contact content
- Journey/checkpoint navigation
- scroll spy
- active navigation tracking
- page-wide animation orchestration
- backend/API
- database
- authentication
- contact form
- theme switcher
- localization
- analytics
- SEO expansion
- deployment
- comprehensive accessibility audit
- comprehensive performance audit

Existing placeholder anchors may remain for navigation continuity.

## Quality constraints

- Keep implementation focused on this task.
- Prefer existing tokens over new arbitrary values.
- Avoid duplicate styling concepts.
- Avoid unnecessary client components.
- Avoid premature abstractions.
- Avoid unnecessary comments.
- Do not rewrite unrelated files.
- Do not run broad repository-wide cleanup.
- Do not modify backend files.

## Validation

Before completion, run from `frontend/`:

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

Review the final diff and confirm only TASK-003-related files changed.

## Definition of Done

TASK-003 is complete when:
- Hero is implemented at `#home`
- established Nexus design direction is preserved
- required identity/status/role/stack content is present
- `Start Journey` links to `#about`
- responsive behavior is intentional
- accessibility requirements in this task are satisfied
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
- start TASK-004

After implementation and validation, stop and report:
1. files changed
2. implementation summary
3. validation results
4. intentional deviations
5. remaining concerns

The user controls Git operations.
