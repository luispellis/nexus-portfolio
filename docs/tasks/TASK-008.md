# TASK-008 — Contact / Portal

## Objective

Implement the `#contact` section of the portfolio as the final **Portal / Contact** section of the landing page.

The section should provide clear, professional ways to contact the user through LinkedIn, GitHub, email, and WhatsApp, while preserving the Nexus / Developer Quest visual language.

This task is limited to the Contact section.

No backend form submission should be implemented in TASK-008.

---

## Context and precedence

Follow the instruction hierarchy defined in `AGENTS.md`.

For this task, precedence is:

1. Explicit user instruction
2. `AGENTS.md`
3. `docs/tasks/TASK-008.md`
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
- `docs/tasks/TASK-008.md`
- `docs/DESIGN.md`
- current `page.tsx`
- existing completed section components only as needed for continuity
- `SiteContainer`
- installed `frontend-design` skill

Reference only when useful:
- Contact / Portal area of `reference/stitch/screen.png`
- only the Contact-related portion of `reference/stitch/code.html`

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
`#contact`

Narrative label:
`PORTAL`

Primary title:
`Contact`

The section should communicate:
- availability for professional conversations and junior software/backend opportunities;
- preferred contact channels;
- location context;
- direct paths to GitHub, LinkedIn, email, and WhatsApp.

Keep the tone professional and concise.

---

## Approved contact information

Use exactly the following user-provided data.

### LinkedIn

Display:
`LinkedIn`

URL:
`https://www.linkedin.com/in/luis-pellis/`

### GitHub

Display:
`GitHub`

URL:
`https://github.com/luispellis`

### Email

Display:
`luisfelipe_pellis@hotmail.com`

Mail link:
`mailto:luisfelipe_pellis@hotmail.com`

### WhatsApp

Display:
`(19) 99230-0837`

Direct link:
`https://wa.me/5519992300837`

The WhatsApp URL may include a short prefilled greeting only if it is neutral and professional.

Do not add marketing copy or automated claims in the message.

### Location

Display:
`Campinas - São Paulo`

This is city/state-level public portfolio information only.

Do not add:
- street address;
- neighborhood;
- postal code;
- map coordinates;
- inferred availability;
- remote/on-site preference unless explicitly provided later.

---

## Contact strategy

TASK-008 should use direct contact actions only.

Do not create a working contact form in this task.

Reason:
The backend/contact API is planned separately. A frontend form that appears functional without a backend would create a misleading interaction.

If visual balance benefits from a form-like area, use a clear static CTA panel instead of disabled or fake form fields.

---

## Recommended content

Suggested introductory copy direction:

`Open to conversations about junior software development, backend, and Java opportunities.`

or a similarly concise factual variation.

Do not claim:
- immediate availability;
- freelance availability;
- relocation;
- remote-only preference;
- employment status;
- response time.

unless explicitly provided by the user.

---

## Information architecture

Recommended contact hierarchy:

Primary actions:
- LinkedIn
- Email

Secondary actions:
- GitHub
- WhatsApp

Supporting context:
- Campinas - São Paulo

This is a recommended visual hierarchy only. All four contact channels must remain clearly visible.

---

## Visual concept

The section should feel like a **communication portal / transmission endpoint**, not a generic contact-card grid.

Possible visual vocabulary:
- portal / signal framing;
- terminal address lines;
- communication nodes;
- subtle connection lines;
- system-status-like labels without fake availability status;
- concise CTA panel;
- restrained glowing border/accent.

Professional-first remains mandatory.

Avoid:
- giant social media logos;
- fake online/offline indicators;
- fake response-time indicators;
- fake "available now" badges;
- fake terminal commands;
- oversized neon effects;
- generic four-card SaaS grid;
- forms with no submission logic;
- decorative elements that reduce accessibility.

---

## Suggested layout

### Desktop

Prefer an asymmetric composition.

Possible structure:
- left: heading, concise professional CTA, location;
- right: structured communication portal with contact actions.

Alternative:
- large primary contact panel with LinkedIn/email emphasized and GitHub/WhatsApp as compact supporting actions.

The section must look visually distinct from:
- About's profile panel;
- Skills' module system;
- Projects' mission archive;
- Experience's timeline.

### Tablet

Maintain strong CTA hierarchy without narrow text columns.

### Mobile

- stack all contact actions;
- links/buttons use comfortable touch targets;
- email and phone content must wrap safely;
- no horizontal overflow;
- no hidden contact method.

---

## Link behavior

### External links

LinkedIn, GitHub, and WhatsApp:
- semantic anchors;
- may open in a new tab;
- if `target="_blank"` is used, include `rel="noreferrer"` or equivalent;
- visible keyboard focus;
- descriptive accessible names.

### Email

Use:
`mailto:luisfelipe_pellis@hotmail.com`

### WhatsApp

Use:
`https://wa.me/5519992300837`

Do not display the normalized URL as the visible phone number.

Visible phone text:
`(19) 99230-0837`

---

## Functional requirements

Implement a responsive Contact section at `#contact`.

It must:
- replace the final current `#contact` placeholder;
- preserve Hero, About, Skills, Projects, and Experience;
- reuse `SiteContainer`;
- use semantic markup;
- preserve heading hierarchy;
- remain a Server Component unless client behavior is genuinely necessary;
- avoid unnecessary JavaScript;
- use existing design tokens;
- avoid horizontal overflow;
- expose all four contact methods;
- show Campinas - São Paulo.

No form submission is required.

After TASK-008, there should be no remaining navigation-section placeholder in `page.tsx`.

---

## Page integration expectation

After implementation, `page.tsx` should conceptually render:

```tsx
<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
```

Remove the placeholder loop entirely if Contact was the only remaining placeholder.

Do not keep dead placeholder-generation code once every navigation section has a real component.

---

## Data organization

A small typed local contact-channel structure is acceptable.

Example fields:
- `label`
- `value`
- `href`
- `external`
- `priority`

Keep it local and simple.

Do not build:
- contact CMS;
- social API integrations;
- dynamic profile fetches;
- WhatsApp SDK integration;
- email service integration;
- frontend state management.

---

## Typography

Use only configured project fonts:
- Sora
- Manrope
- JetBrains Mono

Recommended:
- Sora for primary heading;
- Manrope for supporting copy;
- JetBrains Mono for channel labels, metadata, and compact actions.

---

## Accessibility

The section must:
- use a semantic `section`;
- use a labelled heading;
- use real anchor elements for actions;
- have visible keyboard focus;
- provide adequate touch target sizes;
- provide sufficient contrast;
- not rely on icons alone;
- safely wrap long email content;
- keep decorative portal elements `aria-hidden`;
- remain understandable without decorative effects.

---

## Visual continuity

Preserve:
- dark Nexus atmosphere;
- subtle grid/background language;
- restrained cyan, purple, and gold accents;
- HUD / terminal character;
- spacing rhythm established by Projects and Experience;
- professional-first balance.

For direct-anchor vertical spacing, prefer the spacing strategy already approved in Projects and Experience:

- mobile: `pt-12 pb-20`
- small: `sm:pt-16 sm:pb-24`
- large: `lg:pt-20 lg:pb-28`
- preserve `scroll-mt-20`

Adjust only if the existing implementation demonstrates a clear reason.

---

## Skill usage

Use the installed `frontend-design` skill for:
- CTA hierarchy;
- responsive contact composition;
- typography;
- spacing;
- visual polish;
- avoiding a generic social-card layout.

Do not let the skill:
- invent availability information;
- add unsupported channels;
- add a contact form;
- add dependencies;
- add social SDKs;
- redesign completed sections;
- start backend work.

---

## Dependencies

Expected dependency additions: **none**.

Do not add:
- icon libraries;
- form libraries;
- validation libraries;
- social SDKs;
- email libraries;
- animation libraries;
- component libraries.

A minimal inline SVG is acceptable only when it materially improves clarity, but all actions must also contain readable text.

---

## Out of scope

Do not implement or redesign:
- Hero
- About
- Skills
- Projects
- Experience
- backend/API
- email sending
- contact form submission
- CAPTCHA
- database persistence
- analytics
- scheduler/calendar integration
- social API integration
- downloadable résumé
- deployment

Do not start TASK-009.

---

## Quality constraints

- Use only approved contact details.
- No invented availability claims.
- No fake status indicators.
- No fake contact form.
- No unsupported location detail.
- No unnecessary abstraction.
- No unnecessary client code.
- No new dependencies.
- Avoid unrelated cleanup.
- Do not modify backend files.

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

Review the final diff and confirm only TASK-008-related files changed.

Manually verify:
- `/#contact` reaches the section correctly;
- LinkedIn URL is exact;
- GitHub URL is exact;
- email uses the correct `mailto:` URL;
- WhatsApp uses the normalized `wa.me` URL;
- visible WhatsApp number remains `(19) 99230-0837`;
- Campinas - São Paulo is displayed;
- all actions are keyboard accessible;
- mobile layout has no horizontal overflow.

---

## Definition of Done

TASK-008 is complete when:

- `#contact` contains a finished Portal / Contact section;
- LinkedIn is present and links to the exact approved URL;
- GitHub is present and links to the exact approved URL;
- email is present and uses the exact approved email address;
- WhatsApp is present with the approved visible number and normalized direct link;
- Campinas - São Paulo is displayed;
- no unsupported personal information is exposed;
- no fake availability or response-time claim exists;
- no fake form exists;
- design is distinct from previous sections;
- section is responsive;
- accessibility requirements are satisfied;
- no dependency was added;
- previous sections remain unchanged except for minimal integration;
- there are no remaining navigation-section placeholders;
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
- start TASK-009.

After implementation and validation, stop and report:

1. files changed;
2. implementation summary;
3. validation results;
4. contact data used;
5. intentional deviations;
6. remaining concerns.

The user controls Git operations.
