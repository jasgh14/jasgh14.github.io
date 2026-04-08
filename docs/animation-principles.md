# Animation Principles (Premium + Restrained)

## 1) Motion Goals

- Reinforce hierarchy and narrative pacing.
- Convey depth and craftsmanship without visual noise.
- Support comprehension of layout changes and interactions.
- Preserve professional, technically sophisticated tone.

## 2) When to Animate

Animate when it improves clarity:
- Initial hero reveal (single controlled sequence).
- Section entrance on scroll (subtle opacity + translate).
- Card hover affordance (micro-lift or border/accent transition).
- Active navigation/context shifts.
- Modal/panel open/close transitions with clear state change.

## 3) When Not to Animate

Avoid animation for:
- Dense text blocks where movement harms readability.
- Repetitive elements that would create distraction.
- Large continuous parallax that risks motion fatigue.
- Any interaction where immediate response is more important than flourish.

## 4) Easing Strategy

Use a compact easing system:
- Standard UI transitions: gentle ease-out.
- Entrance transitions: smooth ease with soft deceleration.
- Exit transitions: slightly faster than entry.
- Hover transitions: short duration, low displacement.

Keep easing tokens centralized in CSS custom properties (and mirrored in JS if needed).

## 5) Reduced Motion Behavior

For `prefers-reduced-motion: reduce`:
- Disable non-essential transform/opacity sequences.
- Remove parallax and scroll-linked effects.
- Replace animated reveals with instant state changes.
- Preserve focus indicators and interaction clarity.

Reduced motion should maintain visual quality without “broken” layouts.

## 6) Page Transition Strategy

Static-site compatible approach:
- Prefer no heavy SPA-like transitions.
- Use lightweight fade/slide wrappers only if they do not delay navigation.
- Keep transitions short and optional.
- Ensure hard refresh and direct deep links render correctly without JS.

## 7) Hover Interaction Strategy

- Use subtle scale/translate (very small values).
- Pair motion with non-motion cues (contrast/border/shadow) for accessibility.
- Never rely on hover-only disclosure for critical info.
- Ensure keyboard focus gets equivalent affordance styling.

## 8) Project Slider Motion Strategy

If a project slider is introduced:
- Use finite, predictable motion; avoid autoplay by default.
- Provide explicit controls with keyboard support.
- Animate track movement with stable timing and no overshoot extremes.
- Pause or minimize motion under reduced-motion preferences.
- Ensure touch, keyboard, and screen-reader operability.

## 9) Library Guidance

- Default to CSS + minimal vanilla JS animations.
- Introduce GSAP + ScrollTrigger only if:
  1) choreography cannot be achieved cleanly with CSS/WAAPI,
  2) payload impact is acceptable,
  3) reduced-motion parity is implemented.

## 10) Aesthetic Guardrails

The motion language must feel:
- cinematic but restrained,
- confident and expensive,
- technically precise.

It must not feel:
- cyberpunk flashy,
- gimmicky,
- like a generic startup landing template.
