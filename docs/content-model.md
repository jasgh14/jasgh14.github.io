# Content Model Blueprint

## 1) Global Data Structure

Recommended canonical content objects (JSON or JS export):

```js
{
  site: {
    name: "Junaid Asghar",
    title: "ML / Data / Analytics Portfolio",
    description: "...",
    url: "https://jasgh14.github.io"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "CV", href: "/cv/" },
    { label: "Projects", href: "/projects/" },
    { label: "Contact", href: "/contact/" }
  ],
  socialLinks: [
    { label: "LinkedIn", href: "...", icon: "linkedin" },
    { label: "GitHub", href: "...", icon: "github" },
    { label: "Email", href: "mailto:...", icon: "mail" }
  ],
  skills: {
    focusAreas: ["..."],
    ml: ["..."],
    data: ["..."],
    tooling: ["..."],
    platforms: ["..."]
  },
  projects: [
    {
      slug: "project-slug",
      name: "Project Name",
      summary: "Short editorial summary",
      description: "Longer narrative",
      tags: ["PyTorch", "SQL"],
      role: "TODO: role",
      period: "TODO: date range",
      links: {
        repo: "...",
        demo: "...",
        caseStudy: "..."
      },
      outcomes: [
        "TODO: factual outcome only"
      ],
      status: "completed"
    }
  ],
  cv: {
    headline: "...",
    profile: "...",
    experience: [
      {
        org: "TODO: verified employer",
        title: "TODO: verified role",
        start: "TODO",
        end: "TODO",
        bullets: ["TODO: factual bullet"]
      }
    ],
    education: [
      {
        institution: "...",
        program: "...",
        start: "TODO",
        end: "TODO",
        notes: ["..."]
      }
    ],
    certifications: [],
    publications: []
  },
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "CV PDF", href: "/assets/JunaidAsgharCV.pdf" }
  ]
}
```

## 2) Where Editable Content Should Live

Future recommended locations:
- `assets/data/site.json` → site metadata, nav, footer.
- `assets/data/social.json` → social/contact links.
- `assets/data/skills.json` → grouped skills/focus/toolkit data.
- `assets/data/projects.json` → project cards and detail metadata.
- `assets/data/cv.json` → CV timeline (experience, education, credentials).

Alternative for strict no-fetch simplicity:
- `assets/js/data/*.js` exporting plain objects consumed by page scripts.

## 3) Inline vs Data-Driven Content

### Keep inline (for stability/performance)
- Core page scaffolding and semantic section structure.
- Critical hero copy that defines immediate positioning.
- Accessibility text tightly coupled to specific controls.

### Make data-driven (for maintainability)
- Navigation and footer links.
- Social/contact link lists.
- Skills/toolkit/focus chips.
- Project catalog cards and metadata.
- CV timeline entries.
- “Currently building/learning” short updates.

## 4) Content Governance Rules

1. No fabricated achievements, employers, metrics, dates, or testimonials.
2. Unknown values must use explicit tasteful TODO markers.
3. Dates should use consistent formatting (e.g., `YYYY-MM` or `MMM YYYY`).
4. Project outcomes must be factual and attributable.
5. Prefer concise, technical, evidence-based language over hype.

## 5) Editing Workflow Recommendation

1. Update data file first.
2. Validate schema shape (manual checklist or lightweight script).
3. Render/update pages.
4. Run visual + accessibility sanity checks.
5. Confirm no factual placeholders were accidentally published without TODO labels.
