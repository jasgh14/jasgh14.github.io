import { homeData } from "../data/home-data.js";
import { projectsData } from "../data/projects-data.js";

function renderList(items = []) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

export function renderHomePage() {
  const hero = homeData.hero || {};

  const heroKicker = document.querySelector("[data-hero-kicker]");
  const heroName = document.querySelector("[data-hero-name]");
  const heroTitle = document.querySelector("[data-hero-title]");
  const heroIntro = document.querySelector("[data-hero-intro]");
  const heroMicrocopy = document.querySelector("[data-hero-microcopy]");

  if (heroKicker) heroKicker.textContent = hero.kicker || "Applied AI Systems";
  if (heroName) heroName.textContent = hero.name || "Junaid Asghar";
  if (heroTitle) heroTitle.textContent = hero.title || "TODO: Add verified hero title.";
  if (heroIntro) heroIntro.textContent = hero.intro || "TODO: Add verified intro.";
  if (heroMicrocopy) heroMicrocopy.textContent = hero.microcopy || "TODO: Add verified microcopy.";

  const spotlightMount = document.querySelector("[data-home-projects]");
  if (spotlightMount) {
    const spotlightProjects = (homeData.spotlightProjectNames || [])
      .map((name) => projectsData.find((project) => project.name === name))
      .filter(Boolean);

    spotlightMount.innerHTML = spotlightProjects
      .map(
        (project, index) => `
        <article class="spotlight-card spotlight-card--${index + 1}" data-stagger>
          <h3>${project.name}</h3>
          <p class="muted">${project.summary || "TODO: Add verified project summary."}</p>
          <ul class="tag-list">${(project.tags || []).map((tag) => `<li>${tag}</li>`).join("")}</ul>
          <p><a href="projects.html">Open project context →</a></p>
        </article>
      `
      )
      .join("");
  }

  const focusMount = document.querySelector("[data-home-focus]");
  if (focusMount) {
    focusMount.innerHTML = (homeData.selectedFocus || [])
      .map(
        (item) => `
        <article class="focus-editorial__item" data-stagger>
          <p class="focus-editorial__label">${item.label || "TODO"}</p>
          <h3>${item.title || "TODO: Add verified title."}</h3>
          <p>${item.body || "TODO: Add verified description."}</p>
        </article>
      `
      )
      .join("");
  }

  const buildingMount = document.querySelector("[data-now-building]");
  const learningMount = document.querySelector("[data-now-learning]");
  if (buildingMount) buildingMount.innerHTML = renderList(homeData.nowBuilding?.building || []);
  if (learningMount) learningMount.innerHTML = renderList(homeData.nowBuilding?.learning || []);

  const stackMount = document.querySelector("[data-home-stack]");
  if (stackMount) {
    stackMount.innerHTML = (homeData.stackGroups || [])
      .map(
        (group) => `
        <article class="stack-strip__group">
          <h3>${group.title || "TODO"}</h3>
          <ul>${renderList(group.items || [])}</ul>
        </article>
      `
      )
      .join("");
  }

  const teaserMount = document.querySelector("[data-education-teaser]");
  if (teaserMount) {
    teaserMount.innerHTML = (homeData.educationTeaser || [])
      .map(
        (item) => `
        <li class="timeline__item">
          <h3>${item.title || "TODO: Add title"}</h3>
          <p class="muted">${item.detail || "TODO: Add verified detail."}</p>
        </li>
      `
      )
      .join("");
  }

  const approachMount = document.querySelector("[data-home-approach]");
  if (approachMount) approachMount.textContent = homeData.approach || "TODO: Add verified approach statement.";

  const heroSection = document.querySelector(".hero--cinematic");
  if (heroSection && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroSection.addEventListener("pointermove", (event) => {
      const rect = heroSection.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      heroSection.style.setProperty("--hero-spot-x", `${x}%`);
      heroSection.style.setProperty("--hero-spot-y", `${y}%`);
    });
  }
}
