# AGENTS.md

## Repository Guardrails (Mandatory)

1. **Deployment target:** Static GitHub Pages only.
   - No server runtime.
   - No backend services required for core rendering.
   - All pages must be pre-rendered static HTML/CSS/JS assets.

2. **Architecture preference:**
   - Prefer semantic HTML.
   - Prefer modular CSS (tokenized, section/component-scoped where practical).
   - Prefer modular vanilla JavaScript.

3. **Library policy:**
   - External libraries are allowed only if they are lightweight, CDN-friendly, and degrade gracefully.
   - Add third-party code only with a clear value case and fallback behavior.

4. **Motion policy:**
   - If a motion library is needed, prefer **GSAP + ScrollTrigger** only when justified.
   - Respect `prefers-reduced-motion` for all motion systems.
   - Motion must be restrained, purposeful, and performance-aware.

5. **Accessibility policy:**
   - Keyboard accessibility is mandatory.
   - Focus visibility, semantic landmarks, and heading hierarchy are required.
   - Interactive elements must remain usable without pointer precision.

6. **Framework/tooling restrictions:**
   - Do **not** introduce React, Next.js, Astro, build tooling, or server-side routing.
   - Preserve direct static-hosting compatibility.

7. **Design token policy:**
   - Use CSS custom properties for theme tokens (color, spacing, typography, elevation, motion timings).

8. **Content architecture policy:**
   - Use data-driven content where practical (navigation, projects, skills, links, timeline entries).
   - Keep content model explicit and easy to update.

9. **Truthfulness policy (strict):**
   - Do not invent claims, achievements, employers, dates, metrics, or testimonials.
   - If data is missing, use tasteful TODO placeholders and clearly mark them.

10. **Quality bar:**
    - All pages should feel polished and premium.
    - Avoid generic template feel and visual clichés.

11. **Change scope discipline:**
    - Future tasks must not rewrite unrelated files.
    - Make minimal, intentional diffs aligned with the requested scope.

12. **Task-end reporting requirement:**
    - Future tasks should print:
      1) changed files
      2) local preview steps
      3) assumptions/TODOs
