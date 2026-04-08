import { siteContent } from "../data/site-content.js";

export function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  const footerLinks = Array.isArray(siteContent.footerLinks) ? siteContent.footerLinks : [];
  const linksHtml = footerLinks
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  mount.innerHTML = `
    <div class="container">
      <p>${siteContent.site?.name || "Portfolio"}</p>
      <ul class="footer-links">${linksHtml}</ul>
      <small>© <span data-year></span> ${siteContent.site?.name || "Portfolio"}</small>
    </div>
  `;

  const yearEl = mount.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}
