import { contactData } from "../data/contact-data.js";
import { observeRevealElements } from "./reveal.js";

export function renderContactCards() {
  const mount = document.querySelector("[data-contact-cards]");
  if (!mount) return;

  const cards = Array.isArray(contactData.cards) ? contactData.cards : [];
  mount.innerHTML = cards
    .map(
      (card) => `
      <article class="card stack" data-reveal>
        <h3>${card.title || "TODO: Contact method"}</h3>
        <p class="muted">${card.description || "TODO: Add verified description"}</p>
        <p><a class="button button--ghost" href="${card.href || '#'}" target="_blank" rel="noreferrer">${card.label || "Open link"}</a></p>
      </article>
    `
    )
    .join("");

  observeRevealElements(mount.querySelectorAll("[data-reveal]"));

  const availability = document.querySelector("[data-availability]");
  if (availability) availability.textContent = contactData.availability || "TODO: Add availability.";
}
