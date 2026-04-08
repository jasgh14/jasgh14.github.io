export function setupMotion() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.documentElement.setAttribute("data-reduced-motion", "true");
  }
}
