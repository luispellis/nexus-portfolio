# Agent Skills Strategy

Skills are installed and activated by phase. Do **not** load every available skill into every task.

## Phase 1 — Foundation

Recommended:

```bash
npx agent-skills install --skill tlc-spec-driven
```

Use it for task/spec discipline and implementation verification.

Before adding any additional skill, verify that the active task actually benefits from it.

## Later Frontend Phases

Candidates to evaluate when relevant:

- Coding Guidelines
- Frontend Blueprint
- React Composition Patterns
- Vercel React Best Practices

## Quality/Release Phase

Load only for explicit audits or optimization work:

- Accessibility (a11y)
- Core Web Vitals optimization
- Lighthouse Audits
- Web Performance Optimization
- Web quality audit
- Security Best Practices
- SEO optimization

## Rule

A task should normally use **zero to two specialized skills** beyond repository instructions.

If a skill duplicates `AGENTS.md`, prefer the repository rule and avoid loading redundant instructions.

If a skill conflicts with the current user request or `AGENTS.md`, the higher-priority instruction wins.
