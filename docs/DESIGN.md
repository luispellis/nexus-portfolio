---
name: Nexus Terminal
colors:
  surface: '#10131c'
  surface-dim: '#10131c'
  surface-bright: '#363942'
  surface-container-lowest: '#0b0e16'
  surface-container-low: '#181b24'
  surface-container: '#1c1f28'
  surface-container-high: '#272a33'
  surface-container-highest: '#31353e'
  on-surface: '#e0e2ee'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#e0e2ee'
  inverse-on-surface: '#2d3039'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#f5c80c'
  on-tertiary: '#3c2f00'
  tertiary-container: '#d5ad00'
  on-tertiary-container: '#534200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#10131c'
  on-background: '#e0e2ee'
  surface-variant: '#31353e'
  bg-surface: '#0B1020'
  bg-elevated: '#111827'
  cyan-glow: '#22D3EE'
  purple-glow: '#A855F7'
  text-muted: '#94A3B8'
  status-success: '#22C55E'
  card-fill: rgba(15, 23, 42, 0.6)
  card-border: rgba(255, 255, 255, 0.08)
typography:
  display-hero:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  hud-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-container: 1200px
---

## Brand & Style

The design system establishes a **Gamer-Professional** aesthetic, striking a balance between a high-end software engineering portfolio and a cinematic sci-fi interface. It is 70% professional, 20% gamified, and 10% cinematic—avoiding "retro" or "pixel" tropes in favor of a sleek, modern HUD (Heads-Up Display) experience.

The visual language is rooted in **Glassmorphism** and **Modern Minimalism**, utilizing depth layers, subtle grid textures, and soft atmospheric glowing orbs to create a sense of vast digital space. The interface should feel like a premium command center: precise, technical, and forward-leaning. 

Key style attributes include:
- **Atmospheric Depth:** Multi-layered backgrounds with varying speeds of parallax.
- **Precision Engineering:** Monospaced elements for technical metadata.
- **Narrative Flow:** A "Journey" metaphor where sections are treated as mission checkpoints.

## Colors

The palette is optimized for a deep-space "Dark Mode" environment. 

- **Foundation:** The background utilizes a three-tier dark scale (`#070A12` to `#111827`) to create perceived depth without relying on pure blacks.
- **Action & Accent:** **Cyber Cyan** serves as the primary interactive color for CTAs and journey progress. **Magic Purple** provides secondary decorative support, often used in gradients with Cyan to create a "nebula" effect.
- **Highlights:** **Quest Gold** is used sparingly for high-value meta-information, achievements, and status labels to evoke game-like rewards.
- **Gradients:** Use linear gradients from Primary to Secondary at 135 degrees for high-impact cinematic moments.

## Typography

The typographic system blends high-tech geometry with developer-centric utility.

- **Sora:** Used for headings to provide a bold, futuristic presence. It carries the "Cinematic" weight of the brand.
- **Manrope:** Chosen for body text due to its exceptional readability and professional, balanced proportions.
- **JetBrains Mono:** Essential for the "HUD" feel. Use this for tech stacks, status labels, progress percentages, and actual code snippets.

**Scale and Contrast:**
Maintain high contrast between display headers and body text. HUD elements should always be secondary in scale but distinct in their monospaced structure and frequent use of uppercase with tracking (letter-spacing).

## Layout & Spacing

The design system operates on a strict **8px rhythmic grid**. All margins, paddings, and component heights must be multiples of 8.

**Grid Architecture:**
- **Desktop:** 12-column fluid grid within a 1200px container.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column grid with 16px margins.

**Layout Philosophy:**
The "Journey" flow is primarily vertical. Use generous vertical spacing (80px - 120px) between sections to allow the background glowing orbs and depth layers to breathe. Key "Checkpoints" (Milestones) should be center-aligned to maintain the narrative focus of the user's progress through the portfolio.

## Elevation & Depth

This system avoids traditional drop shadows in favor of **Glassmorphism** and **Tonal Layering**.

- **Surface Layers:** 
  - **Level 0 (Base):** Deep Space background (`#070A12`) with a subtle repeating 16px grid overlay at 5% opacity.
  - **Level 1 (Atmospheric):** Large, soft-edged blurs (200px+) of Cyan and Purple behind the main content area.
  - **Level 2 (Containers):** Cards use a `12px` backdrop-blur with a `card-fill` background.
- **Borders:** Containers are defined by a `1px` solid border (`card-border`). This "ghost border" creates a holographic appearance.
- **Hover States:** Interactive cards should lift with a `translateY(-6px)` and gain a subtle outer glow using the primary color at 15% opacity.

## Shapes

The shape language is "Rounded-Industrial." It balances the harshness of sci-fi tech with the approachability of modern SaaS.

- **Standard Radius:** 8px for buttons and interactive elements.
- **Card Radius:** 16px to create a softer, more premium container feel.
- **HUD Elements:** Small labels or technical tags may use a 0px radius or a simple 45-degree chamfered corner for a more aggressive military-tech feel where appropriate.

## Components

### Buttons
- **Primary:** Gradient fill (Cyber Cyan to Magic Purple), white text, 8px radius. On hover, increase glow intensity.
- **Secondary:** Transparent with a 1px Cyan border. Monospaced label.
- **Tertiary/Ghost:** Monospaced text with an `↗` icon for external links.

### Project Cards
- **Structure:** 16px radius, glassmorphism background, 1px border.
- **Interaction:** On hover, the background image (screenshot) should zoom `1.03x`.
- **Metadata:** Use `JetBrains Mono` for the tech stack chips at the bottom of the card.

### Chips & Tags
- Small, monospaced text. 
- **Achievement Tags:** Quest Gold background with black text.
- **Skill Tags:** Subtle dark fill with Cyan text and a 1px Cyan border at 20% opacity.

### Input Fields
- Dark `bg-elevated` fill, 1px border that glows Primary Cyan when focused.
- Labels use `hud-label` typography styles.

### Progress Map (Navigation)
- A fixed vertical or lateral line representing the "Journey Map."
- Nodes light up as the user scrolls past specific sections. Use a "pulsing" animation for the current active node.