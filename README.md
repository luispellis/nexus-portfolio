# Nexus Portfolio

Personal full-stack software engineering portfolio with a professional, subtle game-inspired visual language.

## Repository Status

The initial roadmap is complete. The frontend and backend are independently deployable; provider setup and live deployment remain operator-controlled.

## Repository Structure

```text
.
├── AGENTS.md
├── docs/
│   ├── PROJECT.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN.md
│   ├── SKILLS.md
│   ├── DEPLOYMENT.md
│   ├── decisions/
│   └── tasks/
│       └── TASK-012.md
├── reference/
│   └── stitch/
│       ├── code.html
│       └── screen.png
├── frontend/
└── backend/
```

## Deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for Vercel/Railway configuration, environment-variable contracts, SMTP setup, health checks, smoke tests, and rollback guidance.

## How to Work with Codex

Start a fresh task with a narrow prompt that names the relevant task file in `docs/tasks/` and follows `AGENTS.md`. Each implementation unit should be completed, validated, and reviewed independently.

## Skills

See `docs/SKILLS.md` before installing additional skills.
