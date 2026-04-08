import { siteContent } from "../data/site-content.js";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "index.html";
  return pathname.split("/").pop() || "index.html";
}

export function renderHeader() {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;

  const navItems = Array.isArray(siteContent.nav) ? siteContent.nav : [];
  const linksHtml = navItems
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  mount.innerHTML = `
    <div class="container site-header__inner">
      <a class="brand" href="index.html">${siteContent.site?.name || "Portfolio"}</a>
      <nav class="site-nav" aria-label="Primary" data-open="false">
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav-links">
          Menu
        </button>
        <div class="nav-links-wrap"><ul class="nav-links" id="primary-nav-links">${linksHtml}</ul><span class="nav-indicator" aria-hidden="true"></span></div>
      </nav>
    </div>
  `;
}

export function setupMobileMenu() {
  const nav = document.querySelector(".site-nav");
  const toggle = nav?.querySelector(".nav-toggle");
  const links = nav?.querySelector(".nav-links");
  if (!nav || !toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  links.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function moveIndicator(link) {
  const navLinks = document.querySelector(".nav-links");
  const indicator = document.querySelector(".nav-indicator");
  if (!navLinks || !indicator || !(link instanceof HTMLElement)) return;

  const linkRect = link.getBoundingClientRect();
  const navRect = navLinks.getBoundingClientRect();
  const x = linkRect.left - navRect.left;
  indicator.style.setProperty("--indicator-x", `${x}px`);
  indicator.style.setProperty("--indicator-w", `${linkRect.width}px`);
  indicator.classList.add("is-visible");
}

export function highlightActiveNav() {
  const current = normalizePath(window.location.pathname);
  let activeLink = null;

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === current) {
      link.setAttribute("aria-current", "page");
      activeLink = link;
    }

    link.addEventListener("pointerenter", () => moveIndicator(link));
    link.addEventListener("focus", () => moveIndicator(link));
  });

  if (activeLink) {
    requestAnimationFrame(() => moveIndicator(activeLink));
  }

  const navLinks = document.querySelector(".nav-links");
  navLinks?.addEventListener("pointerleave", () => {
    if (activeLink) moveIndicator(activeLink);
  });

  window.addEventListener("resize", () => {
    if (activeLink) moveIndicator(activeLink);
  });
}
