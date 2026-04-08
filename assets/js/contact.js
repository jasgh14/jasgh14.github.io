import { contactData } from "../data/contact-data.js";
import { observeRevealElements } from "./reveal.js";

const iconMap = {
  email: "✉",
  github: "⌘",
  linkedin: "in",
  cv: "CV"
};

function getLinkAttributes(card) {
  if (!card.external) return "";
  return ' target="_blank" rel="noreferrer"';
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = document.createElement("input");
  input.value = value;
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function showToast(message) {
  const toast = document.querySelector("[data-copy-toast]");
  if (!toast) return;

  toast.textContent = message;
  toast.hidden = false;
  toast.classList.remove("is-visible");
  requestAnimationFrame(() => toast.classList.add("is-visible"));

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => {
      toast.hidden = true;
    }, 220);
  }, 1800);
}

function bindCopyButtons() {
  const copyButtons = document.querySelectorAll("[data-copy-email]");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy-email");
      if (!value) return;

      try {
        await copyText(value);
        showToast("Email copied to clipboard.");
      } catch {
        showToast("Unable to copy automatically. Please copy manually.");
      }
    });
  });
}

function renderAvailability() {
  const summary = document.querySelector("[data-availability-summary]");
  const points = document.querySelector("[data-availability-points]");
  const workPreference = document.querySelector("[data-work-preference]");

  if (summary) summary.textContent = contactData.availability?.summary || "TODO: Add verified availability summary.";

  if (points) {
    const items = Array.isArray(contactData.availability?.points) ? contactData.availability.points : [];
    points.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  }

  if (workPreference) {
    workPreference.textContent = contactData.availability?.workPreference || "TODO: Add verified work preference note.";
  }
}

function renderTopics() {
  const mount = document.querySelector("[data-contact-topics]");
  if (!mount) return;

  const topics = Array.isArray(contactData.topics) ? contactData.topics : [];
  mount.innerHTML = topics.map((topic) => `<li class="topic-pill">${topic}</li>`).join("");
}

export function renderContactCards() {
  const mount = document.querySelector("[data-contact-cards]");
  if (!mount) return;

  const cards = Array.isArray(contactData.cards) ? contactData.cards : [];
  mount.innerHTML = cards
    .map(
      (card) => `
      <article class="contact-card" data-reveal>
        <div class="contact-card__header">
          <span class="contact-card__icon" aria-hidden="true">${iconMap[card.icon] || "•"}</span>
          <h3>${card.title || "TODO: Contact method"}</h3>
        </div>
        <p class="muted">${card.description || "TODO: Add verified description."}</p>
        <p class="contact-card__value">${card.displayValue || "TODO: Add verified value."}</p>
        <div class="contact-card__actions">
          <a class="button" href="${card.href || "#"}"${getLinkAttributes(card)}>${card.label || "Open"}</a>
          ${card.copyValue ? `<button type="button" class="button button--ghost" data-copy-email="${card.copyValue}">Copy email</button>` : ""}
        </div>
      </article>
    `
    )
    .join("");

  observeRevealElements(mount.querySelectorAll("[data-reveal]"));
  bindCopyButtons();
}

export function renderContactPage() {
  const intro = document.querySelector("[data-contact-intro]");
  if (intro) intro.textContent = contactData.intro || "TODO: Add verified contact intro.";

  renderContactCards();
  renderAvailability();
  renderTopics();
}
