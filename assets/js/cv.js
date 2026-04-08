import { cvData } from "../data/cv-data.js";

function fillTagList(selector, values, fallback) {
  const el = document.querySelector(selector);
  if (!el) return;

  const items = Array.isArray(values) && values.length ? values : [fallback];
  el.innerHTML = items.map((value) => `<li>${value}</li>`).join("");
}

export function renderCvPage() {
  const summary = document.querySelector("[data-cv-summary]");
  if (summary) summary.textContent = cvData.summary || "TODO: Add verified CV summary.";

  const strengthsEl = document.querySelector("[data-cv-strengths]");
  if (strengthsEl) {
    const categories = Array.isArray(cvData.strengths) ? cvData.strengths : [];
    strengthsEl.innerHTML = categories
      .map(
        (group) => `
        <article class="card stack">
          <h3>${group.category || "TODO: Category"}</h3>
          <ul class="bullet-list cv-bullet-stack">${(group.items?.length ? group.items : ["TODO: Add verified capability"]).map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `
      )
      .join("");
  }

  const educationEl = document.querySelector("[data-cv-education]");
  if (educationEl) {
    const educationItems = Array.isArray(cvData.education) ? cvData.education : [];
    educationEl.innerHTML = educationItems
      .map(
        (item) => `
        <article class="timeline__item card stack">
          <div class="inline-meta">
            <span>${item.start || "TODO"}</span>
            <span>${item.end || "TODO"}</span>
          </div>
          <h3>${item.program || "TODO: Program"}</h3>
          <p class="muted">${item.institution || "TODO: Institution"}</p>
          <p>${item.notes || "TODO: Add verified degree details."}</p>
        </article>
      `
      )
      .join("");
  }

  const projectsEl = document.querySelector("[data-cv-projects]");
  if (projectsEl) {
    const projects = Array.isArray(cvData.projects) ? cvData.projects : [];
    projectsEl.innerHTML = projects
      .map(
        (project) => `
        <article class="card stack">
          <h3>${project.name || "TODO: Project"}</h3>
          <p class="muted">${project.summary || "TODO: Add verified project summary."}</p>
          <ul class="bullet-list cv-bullet-stack">${(project.highlights?.length ? project.highlights : ["TODO: Add factual highlights"]).map((point) => `<li>${point}</li>`).join("")}</ul>
          <div class="cv-project-links">
            <a href="projects.html" aria-label="Open projects page">View on projects page</a>
            <a href="${project.repo || "#"}" target="_blank" rel="noreferrer">Repository</a>
          </div>
        </article>
      `
      )
      .join("");
  }

  const experienceEl = document.querySelector("[data-cv-experience]");
  if (experienceEl) {
    const entries = Array.isArray(cvData.experience) ? cvData.experience : [];
    experienceEl.innerHTML = entries
      .map(
        (item) => `
        <article class="timeline__item card stack">
          <div class="inline-meta">
            <span>${item.period || "TODO: Add dates"}</span>
            <span>${item.type || "TODO: Add work type"}</span>
          </div>
          <h3>${item.title || "TODO: Add verified role"}</h3>
          <p class="muted">${item.org || "TODO: Add verified organization"}</p>
          <ul class="bullet-list cv-bullet-stack">${(item.bullets?.length ? item.bullets : ["TODO: Add factual contribution bullet"]).map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
      `
      )
      .join("");
  }

  fillTagList("[data-cv-tools]", cvData.tools, "TODO: Add verified tool");
  fillTagList("[data-cv-interests]", cvData.interests, "TODO: Add verified interest");

  const linksEl = document.querySelector("[data-cv-links]");
  if (linksEl) {
    const links = Array.isArray(cvData.links) ? cvData.links : [];
    linksEl.innerHTML = links
      .map(
        (link) => `<li><span>${link.label || "TODO"}</span><a href="${link.href || "#"}" ${link.href?.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>${link.value || link.href || "TODO: value"}</a></li>`
      )
      .join("");
  }
}
