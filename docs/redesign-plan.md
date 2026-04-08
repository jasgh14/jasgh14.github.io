# Portfolio Redesign Plan (Blueprint)

## 1) Current Repository Summary

Current repository is a minimal static single-page site with:
- `index.html` containing all content sections (hero, projects, about, contact).
- One stylesheet at `assets/style.css`.
- One PDF CV in `assets/JunaidAsgharCV.pdf`.
- No modular JS files (only inline year script).
- No content/data model abstraction.

This is a strong static baseline but currently under-architected for a premium multi-page portfolio direction.

## 2) Pain Points of the Current Site

1. **Single-page bottleneck:** CV, projects, contact depth all compressed into one page.
2. **No information architecture:** difficult to scale content while preserving narrative flow.
3. **Limited component system:** repeated patterns are not formalized into reusable modules.
4. **No content model:** updates require manual HTML edits in multiple places.
5. **Basic visual hierarchy:** lacks cinematic editorial rhythm and premium depth.
6. **Minimal motion strategy:** no unified motion language or reduced-motion guidelines.
7. **Accessibility maturity gaps:** no explicit keyboard/focus/skip-nav/accessibility guardrails documented.
8. **No 404/page-level UX:** multi-page expansion needs shared layout + routing-safe fallback.

## 3) Target Architecture (Static GitHub Pages Compatible)

### Structural direction
- Multi-page static architecture with shared patterns.
- Progressive enhancement: clean HTML first, JS layers optional enhancements.
- CSS token layer + component layer + page layer.
- Data-driven sections via small JSON/JS data modules where useful.

### Proposed folder strategy (future)
- `index.html` (Home)
- `cv/index.html`
- `projects/index.html`
- `contact/index.html`
- `404.html`
- `assets/css/` (tokens, base, components, page files)
- `assets/js/` (core, navigation, motion, page modules)
- `assets/data/` (content collections)
- `assets/media/` (optimized images/video/posters)

## 4) Target Page Map

### Required pages
1. **Home**
   - Cinematic hero
   - Selected projects highlights
   - Focus areas
   - “Currently building / learning”
   - Approach to ML systems teaser
2. **CV**
   - Structured narrative CV page
   - Download link for PDF
   - Education + experience timeline modules
3. **Projects**
   - Featured projects + archive
   - Filters/tags (data-driven)
   - Case-study card rhythm with clear outcomes
4. **Contact**
   - Intent-focused contact pathways (email, LinkedIn, GitHub)
   - Availability/status block (truthful, editable)
5. **404**
   - Branded fallback with useful navigation recovery

### Optional sections to stage in
- Toolkit
- Selected focus areas
- Currently building / currently learning
- Approach to ML systems
- Education timeline teaser
- Footer sitemap

## 5) Target Component System

Core reusable components:
- Global header + mobile navigation
- Footer sitemap + social cluster
- Section intro block (eyebrow, title, lead)
- Project card (compact / featured variants)
- Tag/chip system
- Timeline item (education/experience)
- Stat/fact tile (only truthful, sourced values)
- CTA group
- Empty-state / TODO placeholder component style

Component principles:
- Semantic-first markup.
- Variant classes, not one-off hacks.
- Consistent spacing/elevation tokens.
- Clear keyboard focus states.

## 6) Target Motion Language

- Premium, restrained, filmic pacing.
- Motion used to guide attention, not decorate everything.
- Depth cues via subtle parallax/layer offsets (very small amplitudes).
- Staggered reveals with predictable timing.
- Hover motion to signal affordance only.
- Reduced-motion mode yields static but still elegant composition.

## 7) Target Color Story

Direction: **premium dark editorial**
- Dominant: deep charcoal/near-black neutrals.
- Secondary: cool slate surfaces with layered contrast.
- Accent: restrained electric blue / cyan family for technical identity.
- Optional warmth micro-accent for emphasis (very sparing).

Guidelines:
- Use luminance contrast for hierarchy before saturation.
- Keep glow effects subtle; avoid neon/cyberpunk intensity.
- Ensure WCAG-conscious contrast for text and controls.

## 8) Typography Direction

- Editorial display face for large headings (if web-safe/performance acceptable).
- Highly readable sans-serif for body and UI labels.
- Strong type scale with generous leading for long-form CV/project narratives.
- Technical tone through disciplined spacing, not gimmick fonts.

## 9) Interaction Model

- Keyboard-first navigation support (Tab order, skip link, visible focus).
- Sticky header with progressive enhancement.
- Section transitions that preserve context and orientation.
- Project browsing with clear hierarchy and optional light filtering.
- Explicit external-link cues and safe target behavior.

## 10) Phased Implementation Plan

### Phase 0 — Guardrails and planning (current task)
- Establish AGENTS rules and planning docs.
- Define data/content architecture and motion principles.

### Phase 1 — Foundation
- Introduce folder structure for multi-page static site.
- Implement design tokens and base layout system.
- Add shared header/footer components in plain HTML includes strategy (manual duplication or minimal JS hydration).

### Phase 2 — Page rollout
- Build Home, CV, Projects, Contact, 404 pages.
- Ensure cross-page consistency, metadata, and navigation state.

### Phase 3 — Data-driven content
- Move nav/social/projects/skills/footer data into structured files.
- Render with lightweight vanilla JS enhancement where appropriate.

### Phase 4 — Motion and polish
- Add restrained motion system with reduced-motion fallback.
- Fine-tune grid, depth, typography, and spacing.

### Phase 5 — QA and optimization
- Accessibility audit (keyboard, semantics, contrast, reduced motion).
- Performance pass (image sizing, deferred JS, minimal dependencies).
- Final content truth-check against verified source facts.

## 11) Performance and Accessibility Constraints

Performance:
- Keep JS payload minimal and split by need.
- Avoid heavy frameworks and unnecessary animation libraries.
- Prefer CSS effects over expensive runtime effects.
- Optimize media for static delivery.

Accessibility:
- Landmark structure and logical heading order.
- Focus-visible states for all interactive controls.
- Respect `prefers-reduced-motion` globally.
- Maintain contrast and readable line lengths.
- Ensure forms/links are screen-reader friendly.

## 12) Creative Direction Alignment (Non-Negotiable)

The redesign should feel:
- Premium dark editorial.
- Serious ML/data engineer.
- Cinematic hero presence.
- Subtle grid/glow/layered depth/glass (used sparingly).
- Animated but restrained.
- Expensive, confident, technically sophisticated.

Must avoid:
- Cyberpunk cliché.
- Generic startup landing page cliché.
