# Nexus Portfolio

Personal full-stack software engineering portfolio with a professional, subtle game-inspired visual language.

## Repository Status

The repository is currently in **Phase 0 / Foundation**.

No production frontend or backend implementation has been generated yet. The next implementation unit is `docs/tasks/TASK-001.md`.

## Repository Structure

```text
.
├── AGENTS.md
├── docs/
│   ├── PROJECT.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN.md
│   ├── SKILLS.md
│   ├── decisions/
│   └── tasks/
│       └── TASK-001.md
├── reference/
│   └── stitch/
│       ├── code.html
│       └── screen.png
├── frontend/
└── backend/
```

## How to Work with Codex

Start a fresh task with a narrow prompt. For TASK-001, use:

```text
Implement docs/tasks/TASK-001.md.

Follow AGENTS.md strictly.
Read only the files listed under "Required Reading" in the task before implementation.
Do not implement anything marked out of scope.
Do not modify AGENTS.md or reference/stitch.

Before coding, give me a concise plan.
Then implement, validate, review the diff, and return the completion report requested by the task.
```

Avoid prompts such as "analyze the entire repository and build the whole portfolio". Each implementation unit should have its own task specification.

## Initial Skill

Optional but recommended for the first engineering phase:

```bash
npx agent-skills install --skill tlc-spec-driven
```

See `docs/SKILLS.md` before installing additional skills.
