# Nexus Portfolio — Project Specification

## Vision

Build a modern personal portfolio for Luis Felipe, presenting him as a software developer with a strong backend/Java focus while demonstrating full-stack engineering discipline.

The experience is named **Developer Quest**: a professional portfolio with subtle game-inspired storytelling rather than a literal game interface.

## Audience

Primary audience:

- recruiters;
- engineering managers;
- technology companies.

Secondary audience:

- developers;
- open-source collaborators;
- professional networking contacts.

## Product Principle

> Software engineer first. Gamer aesthetic second.

When visual effects conflict with readability, accessibility, performance, or professionalism, professionalism wins.

## Landing Page Sections

| Product section | Narrative label |
|---|---|
| Home | Start |
| About | Player Profile |
| Skills | Tech Arsenal |
| Projects | Missions |
| Experience | Journey Log |
| Contact | Portal |

## MVP — Frontend

The first releasable frontend should contain:

- responsive navigation;
- hero section;
- about/profile section;
- technical skills section;
- project showcase;
- professional experience timeline;
- contact section;
- GitHub, LinkedIn, and CV links;
- responsive layouts;
- accessibility fundamentals;
- SEO metadata.

## MVP — Backend

Initial backend scope is intentionally small:

```text
GET  /api/v1/health
POST /api/v1/contact
```

Projects, skills, and experience should initially remain static frontend data. They do not need a database or CRUD API in the MVP.

## Out of Scope Until Explicitly Requested

- authentication;
- admin dashboard;
- CMS;
- project CRUD;
- dynamic skill CRUD;
- blog platform;
- analytics dashboard;
- multilingual content system;
- microservices;
- message queues.

## Source Material

The original Stitch export is stored under:

```text
reference/stitch/
├── code.html
└── screen.png
```

The extracted design system lives in `docs/DESIGN.md`.

The Stitch HTML is a visual/prototyping reference only. Production UI must be rebuilt using the selected frontend architecture.
