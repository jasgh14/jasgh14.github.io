import { projectsData } from "../data/projects-data.js";
import { setupProjectsSlider } from "./projects-slider.js";

export function renderProjectsPage() {
  const framingMount = document.querySelector("[data-project-framing-cards]");
  if (framingMount) {
    const featured = projectsData.slice(0, 3);
    framingMount.innerHTML = featured
      .map(
        (project) => `
        <article class="project-framing__card">
          <h3>${project.name || "TODO: Add project name"}</h3>
          <p>${project.summary || "TODO: Add verified project framing summary."}</p>
        </article>
      `
      )
      .join("");
  }

  setupProjectsSlider();
}
