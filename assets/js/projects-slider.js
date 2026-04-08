import { projectsData } from "../data/projects-data.js";

function safeText(value, fallback) {
  return value && String(value).trim() ? value : fallback;
}

export function setupProjectsSlider() {
  const frame = document.querySelector("[data-project-slider]");
  if (!frame) return;

  let index = 0;
  const featured = projectsData.slice(0, 3);
  const nameEl = frame.querySelector("[data-featured-name]");
  const summaryEl = frame.querySelector("[data-featured-summary]");
  const tagsEl = frame.querySelector("[data-featured-tags]");

  function paint() {
    const project = featured[index] || {};
    if (nameEl) nameEl.textContent = safeText(project.name, "TODO: Add featured project");
    if (summaryEl) summaryEl.textContent = safeText(project.summary, "TODO: Add verified featured summary");
    if (tagsEl) {
      const tags = Array.isArray(project.tags) && project.tags.length ? project.tags : ["TODO: add tags"];
      tagsEl.innerHTML = tags.map((tag) => `<li>${tag}</li>`).join("");
    }

    const caseStudy = document.querySelector("[data-case-study]");
    if (caseStudy) caseStudy.textContent = safeText(project.caseStudy, "TODO: Add verified case-study details.");
  }

  frame.querySelector("[data-next]")?.addEventListener("click", () => {
    index = (index + 1) % featured.length;
    paint();
  });

  frame.querySelector("[data-prev]")?.addEventListener("click", () => {
    index = (index - 1 + featured.length) % featured.length;
    paint();
  });

  paint();
}
