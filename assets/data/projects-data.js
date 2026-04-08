export const projectsData = [
  {
    slug: "real-time-visual-diagnosis",
    name: "Real-Time Visual Diagnosis System",
    mood: "diagnosis",
    summary: "Real-time visual diagnosis workflow that combines detection, classification, and explainability in one operator-friendly experience.",
    description: "A practical computer-vision system designed to help users move from raw imagery to explainable diagnosis signals with minimal friction.",
    hero: {
      eyebrow: "Computer Vision",
      headline: "A real-time diagnosis stack engineered for interpretability, responsive feedback, and confident decisions.",
      panelNote: "TODO: Refine with verified deployment context (environment, hardware profile, and latency budget)."
    },
    metadata: [
      { label: "Role", value: "TODO: Confirm role split" },
      { label: "Timeline", value: "TODO: Add verified timeline" },
      { label: "Primary Outcome", value: "TODO: Add verified measurable outcome" }
    ],
    tags: ["Computer Vision", "Real-Time Inference", "Explainable AI", "Interface Design"],
    deepDive: {
      challenge: "TODO: Add verified core challenge and constraints.",
      approach: "TODO: Add verified model/system approach details.",
      result: "TODO: Add verified result narrative with truthful metrics."
    },
    process: {
      architecture: "TODO: Add verified architecture notes.",
      workflow: "TODO: Add verified workflow/process milestones.",
      lessons: "TODO: Add verified lessons and tradeoffs."
    },
    caseStudy: {
      problemFraming: "In image-heavy diagnosis workflows, users often face a gap between model output and actionable confidence. The project focused on reducing that gap with a live, interpretable interface instead of a raw prediction-only view.",
      systemApproach: "The system blends a detection stage for locating relevant visual regions, a classification stage for diagnosis categories, and an explainability layer to surface why the model is leaning toward a given outcome. The UI was designed to keep these signals legible during live use.",
      pipeline: [
        "Frame ingestion from camera or queued image source.",
        "Region proposal and detection pass to isolate diagnostically relevant targets.",
        "Classification inference over selected regions.",
        "Explainability overlay generation for contextual model transparency.",
        "UI rendering with synchronized prediction, confidence cues, and visual annotations."
      ],
      features: [
        "Live visual overlays that keep model reasoning close to the image context.",
        "Integrated detection + classification flow to avoid tool switching.",
        "Readable confidence presentation focused on decision support rather than hype.",
        "Operator-friendly interface structure designed for quick interpretation."
      ],
      tools: [
        { label: "Detection", value: "YOLO-based object/region detection pipeline" },
        { label: "Classification", value: "PyTorch-driven disease/category classifier" },
        { label: "Explainability", value: "XAI overlays (e.g., saliency/attention-style visual cues)" },
        { label: "Application Layer", value: "Python desktop interface for real-time interaction" }
      ],
      technicalInteresting: "The most interesting challenge was orchestrating multiple model stages while preserving a fluid interface. Balancing throughput, visual clarity, and explainability required careful decisions about what to compute, when to render it, and how to keep cognitive load low for the user.",
      learned: "I learned that model quality alone is not enough in applied ML products. Usability and interpretability design choices directly affect whether people trust and adopt the system. I also learned to treat explainability outputs as communication artifacts, not just technical add-ons.",
      ctaButtons: [
        { label: "View Repository", href: "https://github.com/jasgh14/DiseaseDetection" },
        { label: "Download CV", href: "assets/JunaidAsgharCV.pdf" },
        { label: "Discuss Project", href: "contact.html" }
      ]
    },
    links: { repo: "https://github.com/jasgh14/DiseaseDetection", demo: "TODO: Add verified demo link" },
    cta: "If you're exploring applied vision systems that need both performance and interpretability, I can walk through design choices and tradeoffs from this build."
  },
  {
    slug: "ecommerce-analytics-platform",
    name: "E-commerce Analytics Platform",
    mood: "analytics",
    summary: "SQL + Python ETL and dashboard delivery focused on decision-ready reporting.",
    description: "Applied analytics project emphasizing reliable transformations and clear stakeholder dashboards.",
    hero: {
      eyebrow: "Data & Insights",
      headline: "Turning operational data into reliable, executive-ready decision signals.",
      panelNote: "TODO: Add verified business domain and scope details."
    },
    metadata: [
      { label: "Role", value: "TODO: Confirm role split" },
      { label: "Timeline", value: "TODO: Add verified timeline" },
      { label: "Primary Outcome", value: "TODO: Add verified measurable outcome" }
    ],
    tags: ["SQL", "AWS", "Power BI", "Pandas"],
    deepDive: {
      challenge: "TODO: Add verified reporting bottlenecks and stakeholder requirements.",
      approach: "TODO: Add verified ETL, modeling, and dashboard approach.",
      result: "TODO: Add verified impact narrative with truthful metrics."
    },
    process: {
      architecture: "TODO: Add verified architecture notes.",
      workflow: "TODO: Add verified workflow/process milestones.",
      lessons: "TODO: Add verified lessons and tradeoffs."
    },
    caseStudy: {
      problemFraming: "TODO: Add verified problem framing.",
      systemApproach: "TODO: Add verified system approach.",
      pipeline: ["TODO: Add verified pipeline stage."],
      features: ["TODO: Add verified feature."],
      tools: [{ label: "TODO", value: "Add verified tooling." }],
      technicalInteresting: "TODO: Add verified technical depth notes.",
      learned: "TODO: Add verified learning notes.",
      ctaButtons: [{ label: "View GitHub", href: "https://github.com/jasgh14" }]
    },
    links: { repo: "https://github.com/jasgh14", demo: "TODO: Add verified dashboard link" },
    cta: "TODO: Add verified call-to-action text for this case study."
  },
  {
    slug: "plantops",
    name: "PlantOps: Automated Plant Disease Monitoring & Analysis System",
    mood: "plantops",
    summary: "Automated monitoring concept for plant disease analysis workflows with computer vision support.",
    description: "TODO: Add verified PlantOps project summary, stack, and scope.",
    hero: {
      eyebrow: "AgriTech",
      headline: "A monitoring concept for proactive plant health operations.",
      panelNote: "TODO: Add verified environment, hardware, or deployment context."
    },
    metadata: [
      { label: "Role", value: "TODO: Confirm role split" },
      { label: "Timeline", value: "TODO: Add verified timeline" },
      { label: "Primary Outcome", value: "TODO: Add verified measurable outcome" }
    ],
    tags: ["TODO: stack", "TODO: domain"],
    deepDive: {
      challenge: "TODO: Add verified monitoring challenge and constraints.",
      approach: "TODO: Add verified sensing/computer vision pipeline details.",
      result: "TODO: Add verified result narrative with truthful metrics."
    },
    process: {
      architecture: "TODO: Add verified architecture notes.",
      workflow: "TODO: Add verified workflow/process milestones.",
      lessons: "TODO: Add verified lessons and tradeoffs."
    },
    caseStudy: {
      problemFraming: "TODO: Add verified problem framing.",
      systemApproach: "TODO: Add verified system approach.",
      pipeline: ["TODO: Add verified pipeline stage."],
      features: ["TODO: Add verified feature."],
      tools: [{ label: "TODO", value: "Add verified tooling." }],
      technicalInteresting: "TODO: Add verified technical depth notes.",
      learned: "TODO: Add verified learning notes.",
      ctaButtons: [{ label: "Contact", href: "contact.html" }]
    },
    links: { repo: "TODO: Add verified PlantOps repository" },
    cta: "TODO: Add verified call-to-action text for this case study."
  }
];
