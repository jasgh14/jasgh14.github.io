import { projectsData } from "../data/projects-data.js";

function safeText(value, fallback) {
  return value && String(value).trim() ? value : fallback;
}

function modulo(value, length) {
  return (value + length) % length;
}

export function setupProjectsSlider() {
  const root = document.querySelector("[data-project-slider]");
  if (!root) return;

  const featured = projectsData.slice(0, 3);
  if (!featured.length) return;

  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  const panel = root.querySelector("[data-project-panel]");
  const progressCount = root.querySelector("[data-progress-count]");
  const progressBar = root.querySelector("[data-progress-bar]");
  const liveRegion = root.querySelector("[data-project-live]");

  const ui = {
    eyebrow: root.querySelector("[data-project-eyebrow]"),
    name: root.querySelector("[data-project-name]"),
    summary: root.querySelector("[data-project-summary]"),
    description: root.querySelector("[data-project-description]"),
    note: root.querySelector("[data-project-note]"),
    metadata: document.querySelector("[data-project-metadata]"),
    challenge: document.querySelector("[data-deep-challenge]"),
    approach: document.querySelector("[data-deep-approach]"),
    result: document.querySelector("[data-deep-result]"),
    tags: document.querySelector("[data-project-tags]"),
    architecture: document.querySelector("[data-process-architecture]"),
    workflow: document.querySelector("[data-process-workflow]"),
    lessons: document.querySelector("[data-process-lessons]"),
    cta: document.querySelector("[data-project-cta]")
  };

  function renderMetadata(metadata) {
    if (!ui.metadata) return;
    const entries = Array.isArray(metadata) && metadata.length ? metadata : [{ label: "TODO", value: "TODO: Add verified metadata." }];
    ui.metadata.innerHTML = entries
      .map((item) => `
        <div class="project-metadata__item">
          <dt>${safeText(item.label, "TODO")}</dt>
          <dd>${safeText(item.value, "TODO: Add verified metadata.")}</dd>
        </div>`)
      .join("");
  }

  function renderTags(tags) {
    if (!ui.tags) return;
    const items = Array.isArray(tags) && tags.length ? tags : ["TODO: add tags"];
    ui.tags.innerHTML = items.map((tag) => `<li>${safeText(tag, "TODO: tag")}</li>`).join("");
  }

  function paint(nextIndex, { announce = false } = {}) {
    currentIndex = modulo(nextIndex, featured.length);
    const project = featured[currentIndex] || {};
    const hero = project.hero || {};
    const deepDive = project.deepDive || {};
    const process = project.process || {};

    if (panel) {
      panel.classList.remove("is-transitioning");
      void panel.offsetWidth;
      panel.classList.add("is-transitioning");
    }

    root.dataset.mood = safeText(project.mood, "diagnosis");
    if (ui.eyebrow) ui.eyebrow.textContent = safeText(hero.eyebrow, "TODO: Project category");
    if (ui.name) ui.name.textContent = safeText(project.name, "TODO: Add featured project");
    if (ui.summary) ui.summary.textContent = safeText(project.summary, "TODO: Add verified featured summary");
    if (ui.description) ui.description.textContent = safeText(hero.headline, safeText(project.description, "TODO: Add verified description"));
    if (ui.note) ui.note.textContent = safeText(hero.panelNote, "TODO: Add verified panel context.");
    if (ui.challenge) ui.challenge.textContent = safeText(deepDive.challenge, "TODO: Add verified challenge notes.");
    if (ui.approach) ui.approach.textContent = safeText(deepDive.approach, "TODO: Add verified approach notes.");
    if (ui.result) ui.result.textContent = safeText(deepDive.result, "TODO: Add verified result notes.");
    if (ui.architecture) ui.architecture.textContent = safeText(process.architecture, "TODO: Add verified architecture notes.");
    if (ui.workflow) ui.workflow.textContent = safeText(process.workflow, "TODO: Add verified process notes.");
    if (ui.lessons) ui.lessons.textContent = safeText(process.lessons, "TODO: Add verified lessons.");
    if (ui.cta) ui.cta.textContent = safeText(project.cta, "TODO: Add verified CTA for this project.");
    if (progressCount) progressCount.textContent = `${currentIndex + 1} / ${featured.length}`;
    if (progressBar) progressBar.style.inlineSize = `${((currentIndex + 1) / featured.length) * 100}%`;

    renderMetadata(project.metadata);
    renderTags(project.tags);

    if (announce && liveRegion) {
      liveRegion.textContent = `Project ${currentIndex + 1} of ${featured.length}: ${safeText(project.name, "Untitled project")}`;
    }
  }

  function next() {
    paint(currentIndex + 1, { announce: true });
  }

  function prev() {
    paint(currentIndex - 1, { announce: true });
  }

  root.querySelector("[data-next]")?.addEventListener("click", next);
  root.querySelector("[data-prev]")?.addEventListener("click", prev);

  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  });

  root.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? 0;
    },
    { passive: true }
  );

  root.addEventListener(
    "touchend",
    (event) => {
      touchEndX = event.changedTouches[0]?.clientX ?? 0;
      const distance = touchEndX - touchStartX;
      if (Math.abs(distance) < 40) return;
      if (distance < 0) next();
      if (distance > 0) prev();
    },
    { passive: true }
  );

  paint(0);
}
