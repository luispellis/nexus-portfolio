# TASK-013 --- Portfolio Refinement, PT-BR Localization & Navigation UX

## Objective

Refine the completed Nexus portfolio in one focused task, based on the
current visual review.

This task has four goals:

1.  correct sections whose content still extends unnecessarily far below
    the viewport;
2.  make Brazilian Portuguese (`pt-BR`) the primary language across the
    entire portfolio, with an optional English language switch if it can
    be implemented cleanly without introducing unnecessary architecture;
3.  improve scrolling/navigation UX with smooth section transitions and
    an active header state indicating the section currently being
    viewed;
4.  replace the visible `NEXUS.` branding with `Luis Pellis`, giving the
    portfolio owner's name stronger visual prominence while preserving
    the established visual system.

This is a refinement task, not a redesign.

## Visual evidence / observed issues

The current review shows that the following sections deserve special
vertical-layout attention:

-   About;
-   Skills;
-   Projects;
-   Contact.

The issue is not that content must always fit inside one viewport.
Content must never be clipped or compressed unnaturally. The goal is to
remove unnecessary vertical displacement/empty space and make each
section begin at a predictable position below the fixed header.

Specific observations from the current desktop screenshots:

-   About extends below the visible viewport because the narrative
    column is taller than the adjacent career-state card.
-   Skills is close to a good viewport composition but should be checked
    against the same spacing system.
-   Projects naturally contains more content than one viewport; do not
    force all project cards into one screen. Improve only unnecessary
    top/bottom spacing and anchor positioning.
-   Contact is tall after the form was added. It must remain fully
    usable and scroll naturally; remove viewport-height constraints or
    spacing rules that create unnecessary vertical stretching.

Do not solve this by shrinking text excessively, hiding content,
reducing accessibility, or forcing every section into `100vh`.

## Context and precedence

Follow `AGENTS.md`.

Read only what is necessary:

-   `AGENTS.md`
-   `docs/tasks/TASK-013.md`
-   `docs/PROJECT.md`
-   `docs/ARCHITECTURE.md`
-   `docs/DESIGN.md`
-   `docs/SKILLS.md`
-   frontend page/layout/global styles
-   Header and MobileNavigation
-   navigation data/types
-   Hero, About, Skills, Projects, Experience, Contact and ContactForm
-   related frontend data/types used by these sections

Do not inspect generated directories such as `.next`, `node_modules`,
`target`, `dist`, `coverage`, or `.git`.

Do not inspect or change backend code.

## Skill policy

This is primarily a frontend refinement task.

If already available locally, use `frontend-design` as the single
specialized implementation skill. A second skill may be used only if it
is specifically an accessibility/web-design audit skill already
available and clearly useful.

Do not install a new package or Agent Skill merely to implement smooth
scrolling or active navigation. Native CSS, React and browser APIs are
preferred.

## Phase 1 --- Read-only audit

Before changing code, inspect the current implementation and report
findings under exactly these headings:

1.  Vertical layout / section spacing
2.  Language and untranslated content
3.  Scroll and active navigation
4.  Branding
5.  Implementation plan

Do not edit files until this audit is complete.

The plan must identify the smallest reasonable Client Component boundary
for interactive navigation/language behavior.

## 1. Vertical layout refinement

Audit the section spacing system as a whole, especially About, Skills,
Projects and Contact.

Requirements:

-   fixed-header anchor navigation must position section content
    correctly;
-   section top spacing should feel consistent;
-   avoid unnecessary `min-height`, viewport-height or oversized padding
    that makes content appear pushed downward;
-   do not force content-heavy sections such as Projects or Contact into
    a single viewport;
-   do not clip content;
-   preserve comfortable desktop/mobile reading;
-   preserve responsive behavior;
-   avoid horizontal overflow;
-   keep the existing grid/HUD visual identity.

Where possible, prefer a consistent shared spacing strategy rather than
unrelated per-section hacks.

Do not change section content merely to make it fit vertically.

## 2. Brazilian Portuguese as primary language

The entire visible portfolio must use natural Brazilian Portuguese as
the default language.

Translate all user-facing content, including:

-   header navigation;
-   Hero;
-   About;
-   Skills;
-   Projects;
-   Experience;
-   Contact;
-   form labels/placeholders/buttons/status/error messages;
-   small HUD/module/mission labels where translation remains natural;
-   accessibility text such as "opens in a new tab";
-   metadata/title/description where applicable.

Preserve technical names when translation would be incorrect or
unnatural, for example:

-   Java
-   Spring Boot
-   REST APIs
-   SQL
-   Git
-   Python
-   AWS
-   OpenAPI
-   PostgreSQL
-   JUnit
-   Maven
-   Strategy Pattern where appropriate

Use Brazilian terminology and accents correctly.

`<html lang>` must remain/resolve to `pt-BR` by default.

### Optional English switch

Implement a PT-BR / EN language switch only if it can be done cleanly
within the existing architecture and without a large i18n dependency.

If implemented:

-   PT-BR is the default;
-   language switching happens client-side without page reload where
    practical;
-   all visible portfolio content must switch consistently, not only the
    header;
-   the switch must be keyboard accessible and have an accessible name;
-   persist the user's explicit choice in `localStorage` if this can be
    done safely and simply;
-   do not infer language from geolocation;
-   do not add a third-party i18n library;
-   avoid turning every section into an independent Client Component
    solely for translation.

If a clean full-page switch would require excessive architectural churn,
do **not** implement a partial switch. Deliver complete PT-BR now and
document English switching as a deferred improvement.

## 3. Smooth scrolling and active navigation

Improve navigation between the one-page sections.

### Smooth scrolling

Use native CSS/browser behavior where possible.

Requirements:

-   clicking an internal header navigation item should move smoothly to
    the target section;
-   direct hash navigation must still work;
-   browser history/hash behavior must remain sensible;
-   fixed-header offset must remain correct;
-   respect `prefers-reduced-motion`: users requesting reduced motion
    must not be forced into smooth/animated scrolling.

Do not add Framer Motion or another animation dependency.

The desired effect is subtle and professional, not cinematic page
snapping.

Do **not** implement mandatory scroll snapping that traps normal
scrolling.

### Active section indicator

The desktop and mobile navigation should visually indicate which section
is currently active while the user scrolls.

Requirements:

-   active state updates as the viewport moves through Home, About,
    Skills, Projects, Experience and Contact;
-   clicking a navigation item should remain consistent with the
    observed active state;
-   use a native browser mechanism such as `IntersectionObserver` or
    another lightweight approach;
-   account for the fixed header;
-   avoid scroll-event work on every frame when a browser observer can
    solve it;
-   active state must not rely only on color; include another visual cue
    such as underline, border, marker, weight, or similar;
-   expose current location semantically where appropriate,
    e.g. `aria-current`;
-   mobile navigation should reflect the same active section;
-   preserve Escape-to-close and focus-return behavior added in
    TASK-011.

Keep the interactive client boundary small. Do not convert the whole
page into a Client Component unnecessarily.

## 4. Branding --- Luis Pellis

Replace visible `NEXUS.` branding with `Luis Pellis`.

Requirements:

-   Header brand should prominently display `Luis Pellis`;
-   preserve the professional sci-fi/HUD identity;
-   the name should read as personal portfolio branding, not as a
    product/company;
-   review Hero and metadata so the owner's name has appropriate
    prominence without repetitive visual clutter;
-   remove or replace user-facing references to "Nexus" where they
    represent the public brand;
-   internal repository/project names such as `nexus-portfolio` do not
    need to be renamed;
-   Java package names, artifact IDs, folder names and Git repository
    names are out of scope;
-   do not perform a broad mechanical rename that could break code.

## Content integrity

Preserve the factual portfolio scope already approved.

Do not invent:

-   employers;
-   dates;
-   years of experience;
-   proficiency percentages;
-   certifications;
-   metrics;
-   technologies not supported by the existing portfolio/project
    sources;
-   fake availability;
-   fake testimonials.

Translation must preserve the meaning of the existing approved content.

## Design constraints

Preserve:

-   dark sci-fi/HUD visual language;
-   grid/background atmosphere;
-   cyan/purple/yellow accent system;
-   typography hierarchy;
-   card/grid composition;
-   responsive design;
-   Server Components by default.

Do not:

-   redesign the site;
-   add a UI library;
-   add Framer Motion;
-   add unnecessary dependencies;
-   add new portfolio sections;
-   modify backend behavior;
-   modify the Contact API contract;
-   deploy the application;
-   implement unrelated optimizations.

## Accessibility

Verify after changes:

-   keyboard navigation;
-   visible focus;
-   active navigation is not color-only;
-   `aria-current` or equivalent semantic state where appropriate;
-   mobile menu Escape/focus-return regression;
-   language control accessibility if implemented;
-   reduced-motion preference;
-   form labels/errors/status feedback;
-   new-tab screen-reader text in the selected language;
-   heading hierarchy remains valid.

## Responsive verification

Review at representative sizes:

-   narrow mobile (\~360--390 px);
-   tablet (\~768 px);
-   laptop (\~1366 px);
-   wide desktop (\~1440 px or above).

Specifically verify:

-   header navigation;
-   owner branding;
-   language switch if implemented;
-   About layout;
-   Skills layout;
-   Projects grid;
-   Contact direct channels + form;
-   no horizontal overflow;
-   section anchors are not hidden behind the header.

Do not force Projects into one viewport on desktop; its content may
naturally require scrolling.

## Validation

From `/frontend` run:

``` bash
npm run lint
npm run typecheck
npm run build
```

From repository root run:

``` bash
git diff --check
git status --short
```

Review the complete final diff for scope.

Where practical, manually run the frontend and verify section
scrolling/navigation behavior. Do not require a live SMTP delivery for
this task.

## Definition of Done

TASK-013 is complete when:

-   vertical spacing/viewport behavior is refined without clipping
    content;
-   unnecessary vertical stretching is removed;
-   PT-BR is the complete default visible language;
-   no obvious English UI fragments remain, except proper technical
    names;
-   optional EN switching is either fully implemented or explicitly
    deferred --- never partially implemented;
-   internal navigation scrolls smoothly for users who allow motion;
-   reduced-motion preference is respected;
-   header navigation indicates the active section on scroll;
-   active state is accessible and not color-only;
-   desktop and mobile navigation remain functional;
-   `Luis Pellis` replaces `NEXUS.` as public branding;
-   repository/internal technical identifiers are not unnecessarily
    renamed;
-   Contact behavior is preserved;
-   no backend changes occur;
-   no unnecessary dependency is added;
-   lint passes;
-   typecheck passes;
-   production build passes;
-   `git diff --check` passes;
-   final diff contains only TASK-013 changes;
-   Codex does not commit or push.

## Git boundary

Codex must not:

-   commit;
-   push;
-   merge;
-   create a pull request;
-   deploy;
-   start another task.

At completion report:

1.  audit findings;
2.  vertical-layout changes;
3.  PT-BR translation coverage;
4.  whether EN switching was implemented or deferred, and why;
5.  smooth-scroll implementation;
6.  active-section implementation;
7.  branding changes;
8.  accessibility/responsive verification;
9.  files changed;
10. validation results and remaining concerns.

Stop after the report. The user controls Git operations.
