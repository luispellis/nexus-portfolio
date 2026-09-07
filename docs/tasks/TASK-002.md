# TASK-002 — Navigation & Layout

## Objective

Implement the portfolio navigation and base layout shell without implementing portfolio content sections.

The result must establish the structural navigation foundation for future section tasks while preserving the visual language defined in `docs/DESIGN.md`.

---

## Required Reading

Read only:

- `AGENTS.md`
- `docs/PROJECT.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN.md`
- `docs/tasks/TASK-002.md`
- existing files under `frontend/src/app/`
- existing frontend configuration files only when required

Do not inspect `/backend`.

Use `reference/stitch/` only if visual clarification is necessary.

---

## Scope

Implement:

- responsive site header
- desktop primary navigation
- mobile navigation
- reusable content container/layout primitive
- navigation data as structured data
- accessible navigation markup
- keyboard-accessible mobile menu
- semantic page shell
- navigation links prepared for these future anchors:
  - `#home`
  - `#about`
  - `#skills`
  - `#projects`
  - `#experience`
  - `#contact`

Navigation labels:

| Anchor | Professional label | Narrative label |
|---|---|---|
| `#home` | Home | Start |
| `#about` | About | Player Profile |
| `#skills` | Skills | Tech Arsenal |
| `#projects` | Projects | Missions |
| `#experience` | Experience | Journey Log |
| `#contact` | Contact | Portal |

The visible navigation may use the professional labels, narrative labels, or a restrained combination consistent with `docs/DESIGN.md`.

---

## Suggested Structure

Prefer a small structure such as:

```text
frontend/src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── SiteContainer.tsx
│   └── navigation/
│       └── MobileNavigation.tsx
├── data/
│   └── navigation.ts
└── types/
    └── navigation.ts
```

This is guidance, not a requirement.

Do not create abstractions without a current need.

---

## Behavior

### Header

The header must:

- be visually consistent with the Gamer Professional design system
- remain readable over the dark page background
- support desktop and mobile layouts
- use semantic `<header>` and `<nav>` elements
- expose a clear link to the home/start position
- avoid excessive visual effects

A sticky header is allowed if it does not obscure anchored content.

### Desktop Navigation

Desktop navigation must:

- display the primary navigation links
- use real anchor links
- provide visible hover/focus states
- remain keyboard accessible

### Mobile Navigation

Mobile navigation must:

- provide a clear menu trigger
- expose `aria-expanded`
- expose an accessible label
- support keyboard interaction
- close after a navigation link is selected
- avoid external menu libraries unless technically justified

Use local React state only if needed.

---

## Layout

Create a reusable page/container primitive based on the content width and spacing rules in `docs/DESIGN.md`.

Avoid duplicating max-width and horizontal padding rules across components.

---

## Page Shell

`page.tsx` must remain minimal.

Do not implement the real portfolio sections in this task.

It may contain minimal structural anchor placeholders only when required to validate navigation behavior.

Do not add final copy, cards, timelines, skill grids, project content, or contact forms.

---

## Out of Scope

Do not implement:

- Hero content
- About/Profile content
- Skills section
- Projects section
- Experience timeline
- Contact section or form
- backend integration
- API calls
- database
- authentication
- active-section scroll spy
- animated journey/checkpoint progression
- Framer Motion
- third-party component libraries
- theme switcher
- localization system
- SEO expansion beyond existing base metadata

---

## Dependencies

Do not add a dependency unless the requested behavior cannot reasonably be implemented with the existing stack.

A dependency added for icons, menus, state management, or animation requires explicit justification.

Prefer native HTML/CSS/React for this task.

---

## Accessibility

Required:

- semantic landmarks
- keyboard-accessible navigation
- visible focus states
- appropriate ARIA for the mobile menu
- sufficient contrast
- no interaction that depends only on hover
- respect existing reduced-motion rules if transitions are introduced

---

## Responsive Requirements

Validate at least conceptually for:

- mobile: 320px+
- tablet
- desktop

The desktop Stitch reference must not be copied blindly into mobile behavior.

---

## Acceptance Criteria

TASK-002 is complete when:

- header renders correctly
- desktop navigation is usable
- mobile navigation is usable
- navigation structure is data-driven
- layout/container behavior is reusable
- navigation uses semantic HTML
- keyboard behavior works
- no portfolio content section has been implemented
- no unrelated files were changed
- no unnecessary dependency was added
- lint passes
- typecheck passes
- production build passes

---

## Validation

Run from `frontend/`:

```bash
npm run lint
npm run typecheck
npm run build
```

Then from repository root:

```bash
git diff --check
git status --short
```

Review the diff and confirm that changes are limited to TASK-002 scope.

---

## Completion Report

Return only:

### Files Changed
Short summary of created/modified files.

### Behavior
Short summary of navigation and layout behavior.

### Dependencies
State whether any dependency was added and why.

### Validation
Report the result of:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `git diff --check`

### Left for TASK-003
Explicitly state that Hero content and later portfolio sections remain unimplemented.

---

## Git

Do not commit.

Do not push.

Do not start TASK-003.
