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
    summary: "A decision-support analytics build that turns fragmented commerce data into dependable reporting views for day-to-day and strategic planning.",
    description: "Designed as a practical analytics product: stable data shaping, clear KPI logic, and dashboard views structured for commercial decision-making.",
    hero: {
      eyebrow: "Data & Insights",
      headline: "An analytics layer that translates transaction-level records into decision-ready sales, product, and customer signals.",
      panelNote: "Built with a reporting-first mindset: clarity, consistency, and traceable metric definitions over visual noise."
    },
    metadata: [
      { label: "Role", value: "Data Analyst / Analytics Engineer (project build)" },
      { label: "Timeline", value: "Iterative build across data preparation, metric modeling, and dashboard refinement" },
      { label: "Primary Outcome", value: "A reusable analytics workflow for consistent reporting and faster business review cycles" }
    ],
    tags: ["SQL", "Python", "Pandas", "AWS", "Power BI", "Business Intelligence"],
    deepDive: {
      challenge: "Operational commerce data typically lives across multiple tables and granular event streams, which makes simple questions difficult to answer consistently. The challenge was to create one reporting foundation where sales, product, and customer metrics align instead of conflicting.",
      approach: "I structured the project around a repeatable ETL and semantic reporting model: extract and standardize core entities, validate joins and time logic, then expose a curated dashboard layer with clear KPI definitions and drill-down paths.",
      result: "The final output is a maintainable analytics workflow that supports recurring performance reviews and ad-hoc investigation without rewriting queries each time. The emphasis was reliability and interpretability, not inflated headline numbers."
    },
    process: {
      architecture: "Raw commerce records flow into cleaned analytical tables, then into a business-facing semantic layer used by dashboard pages. Each step isolates concerns: ingestion quality, metric modeling, and consumption.",
      workflow: "Started with requirement mapping (what decisions stakeholders need to make), followed by source profiling, transformation design, validation checks, and dashboard iteration sessions focused on readability.",
      lessons: "The most important lesson was that stakeholder trust depends on metric governance as much as technical execution. Naming, definitions, and filter behavior need the same rigor as the data pipeline itself."
    },
    caseStudy: {
      problemFraming: "Decision-makers needed dependable answers to recurring questions (what is selling, where margin pressure is appearing, and which customer segments are shifting) without manually reconciling spreadsheets or rewriting logic each reporting cycle.",
      systemApproach: "I treated the project as an internal analytics product: define consistent business logic first, implement data shaping second, and design interface views that surface trends, variance, and exceptions in a way that supports action.",
      pipeline: [
        "Ingest transaction, product, and customer datasets from source extracts.",
        "Apply SQL/Python cleaning to normalize identifiers, timestamps, and categorical values.",
        "Model analysis-ready tables for sales, basket behavior, and category performance.",
        "Run validation checks to protect KPI consistency across periods and filters.",
        "Publish curated datasets to dashboard views for recurring reporting and drill-down."
      ],
      features: [
        "Period-over-period sales and order trend breakdowns for structured performance reviews.",
        "Category and product-level contribution analysis to highlight mix shifts.",
        "Customer segmentation views that support retention and value-focused decision paths.",
        "Exception-oriented reporting patterns to surface outliers, not just averages."
      ],
      tools: [
        { label: "Querying", value: "SQL for transformation logic and analytical slicing" },
        { label: "Data Shaping", value: "Python + Pandas for cleaning, enrichment, and data quality checks" },
        { label: "Data Platform", value: "AWS-hosted storage/processing environment for structured workflows" },
        { label: "Reporting", value: "Power BI dashboards with reusable KPI definitions and filters" }
      ],
      productInterface: "The interface layer is organized like a compact analytics workspace: an executive overview for high-level trend checks, followed by focused pages for product performance, customer behavior, and period comparison. Visuals prioritize legibility, context labels, and decision cues over decorative complexity.",
      technicalInteresting: "A technically meaningful part of this build was balancing flexibility with consistency: enabling exploratory cuts while preventing metric drift. That required careful grain selection, explicit KPI definitions, and filter logic that behaves predictably across dashboard pages.",
      learned: "I learned to design analytics outputs as decision systems, not static reports. Clear metric contracts, thoughtful drill paths, and interface discipline are what turn data work into real business utility.",
      ctaButtons: [
        { label: "View GitHub", href: "https://github.com/jasgh14" },
        { label: "Download CV", href: "assets/JunaidAsgharCV.pdf" },
        { label: "Discuss Project", href: "contact.html" }
      ]
    },
    links: { repo: "https://github.com/jasgh14", demo: "TODO: Add verified dashboard link if publicly shareable." },
    cta: "If you need a practical analytics layer that supports better pricing, assortment, and performance decisions, I can walk through the modeling and dashboard design approach used here."
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
