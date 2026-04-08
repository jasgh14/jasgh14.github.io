export const projectsData = [
  {
    slug: "plantops",
    name: "PlantOps: Automated Plant Disease Monitoring & Analysis System",
    mood: "plantops",
    summary: "A pipeline-first ML operations project for moving plant imagery from ingestion to inference, analytics, human review, and actionable reporting.",
    description: "PlantOps is positioned as an operational continuation project: less about a single model demo and more about building a dependable disease-monitoring system that can be extended over time.",
    hero: {
      eyebrow: "Flagship · ML Systems",
      headline: "A systems-oriented plant health platform that connects ingestion, inference, storage, analytics, review, and reporting into one practical loop.",
      panelNote: "Flagship focus: architecture discipline, automation, and decision-support workflows instead of standalone classifier output."
    },
    metadata: [
      { label: "Role", value: "ML / Data Systems Builder (end-to-end project development)" },
      { label: "Timeline", value: "Iterative system build and refinement across pipeline, analytics, and review loop design" },
      { label: "Primary Outcome", value: "A structured operations concept for continuous disease monitoring, triage, and reporting" }
    ],
    tags: ["Computer Vision", "ML Systems", "Data Pipeline", "Analytics", "Human-in-the-Loop", "Automation"],
    deepDive: {
      challenge: "Plant health checks are often reactive, manual, and difficult to scale across time and locations. The core challenge was designing a practical system that can continuously ingest imagery, run diagnosis workflows, and surface the right cases for human follow-up.",
      approach: "I approached PlantOps as a modular ML product: clearly separated ingestion, inference, storage, analytics, and review responsibilities, then connected them with predictable handoff contracts so the system can evolve without full rewrites.",
      result: "The result is a system blueprint and working project direction that supports operational monitoring, not just one-off predictions. The emphasis is on reliable flow, traceability, and extensibility while keeping claims realistic."
    },
    process: {
      architecture: "The architecture uses layered responsibilities: acquisition layer for image events, inference services for disease signals, storage for raw and derived artifacts, analytics models for trend/quality visibility, and a review/reporting layer for action-taking.",
      workflow: "Work progressed in pipeline order: input contracts, inference orchestration, persistence strategy, analytics definitions, then review and reporting surfaces. This reduced coupling and made each layer easier to validate.",
      lessons: "Strong ML systems rely on operational design choices as much as model logic. Queue behavior, schema clarity, and exception handling determine whether the system remains usable as volume and complexity increase."
    },
    caseStudy: {
      problemFraming: "Plant disease management benefits from early detection, but teams need more than a prediction label—they need a consistent operational flow for triage, context, and follow-through. PlantOps addresses this by framing diagnosis as a pipeline and decision-support problem.",
      systemApproach: "PlantOps uses a blueprint-style layered architecture with explicit boundaries between ingestion, model inference, persistence, analytics computation, and human review. Each layer exposes structured outputs so monitoring and downstream automation stay reliable.",
      pipeline: [
        "Ingestion: accept image streams/uploads with source metadata and timestamp normalization.",
        "Inference: run disease detection/classification with confidence capture and inference artifact logging.",
        "Storage: persist raw images, predictions, and derived feature summaries in queryable structures.",
        "Analytics: aggregate health trends, confidence distributions, and anomaly slices for review dashboards.",
        "Review: route uncertain or high-impact cases into a human validation queue.",
        "Reporting: publish operational summaries, alerts, and routine status outputs for stakeholders."
      ],
      features: [
        "Automated ingestion-to-inference handoff with repeatable processing contracts.",
        "Rule-based queueing for uncertain predictions and priority condition routing.",
        "Scheduled reporting hooks for recurring health and exception summaries.",
        "Pipeline-friendly data structures intended for future orchestrator integration."
      ],
      analyticsMonitoring: "The analytics layer focuses on operational awareness: trend views for disease categories over time, confidence band monitoring, data freshness checks, and queue pressure visibility. The intent is to support decisions about model quality, intervention timing, and workflow health.",
      humanReviewLoop: "A dedicated review queue captures low-confidence or ambiguous cases for human validation. Reviewer feedback is preserved as structured annotations so it can improve labeling quality, guide threshold tuning, and inform future retraining cycles.",
      tools: [
        { label: "ML Inference", value: "Python-based CV inference pipeline with modular model stage boundaries" },
        { label: "Data Layer", value: "Structured storage approach for image artifacts, predictions, and analytics-ready outputs" },
        { label: "Analytics", value: "Python + SQL-style metric modeling for trend, confidence, and operational views" },
        { label: "Automation", value: "Event and schedule-oriented processing design for recurring monitoring/reporting tasks" },
        { label: "Interface", value: "Dashboard/review-oriented presentation model for triage and decision support" }
      ],
      learned: "I learned to treat ML projects as long-lived systems with feedback loops, not static demos. Designing for observability, reviewability, and operational continuity creates much stronger product value than model output alone.",
      futureEvolution: "Next evolution paths include stronger active-learning workflows, richer alert policy controls, environment-specific deployment profiles, and expanded integrations for field operations and stakeholder reporting.",
      ctaButtons: [
        { label: "View GitHub", href: "https://github.com/jasgh14" },
        { label: "Download CV", href: "assets/JunaidAsgharCV.pdf" },
        { label: "Discuss PlantOps", href: "contact.html" }
      ]
    },
    links: { repo: "https://github.com/jasgh14" },
    cta: "If you're building ML systems that need monitoring, feedback loops, and production-minded pipeline design, I’d be glad to discuss how PlantOps can be extended further."
  },
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
      analyticsMonitoring: "TODO: Add verified analytics and monitoring notes.",
      humanReviewLoop: "TODO: Add verified review loop details.",
      tools: [
        { label: "Detection", value: "YOLO-based object/region detection pipeline" },
        { label: "Classification", value: "PyTorch-driven disease/category classifier" },
        { label: "Explainability", value: "XAI overlays (e.g., saliency/attention-style visual cues)" },
        { label: "Application Layer", value: "Python desktop interface for real-time interaction" }
      ],
      learned: "I learned that model quality alone is not enough in applied ML products. Usability and interpretability design choices directly affect whether people trust and adopt the system. I also learned to treat explainability outputs as communication artifacts, not just technical add-ons.",
      futureEvolution: "TODO: Add verified future direction notes.",
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
      analyticsMonitoring: "The monitoring layer tracks KPI consistency, data freshness, and reporting anomalies so stakeholders can trust recurring decision workflows.",
      humanReviewLoop: "Human review occurs as business-user validation cycles where anomalies and KPI definitions are audited and refined before wider reporting adoption.",
      tools: [
        { label: "Querying", value: "SQL for transformation logic and analytical slicing" },
        { label: "Data Shaping", value: "Python + Pandas for cleaning, enrichment, and data quality checks" },
        { label: "Data Platform", value: "AWS-hosted storage/processing environment for structured workflows" },
        { label: "Reporting", value: "Power BI dashboards with reusable KPI definitions and filters" }
      ],
      learned: "I learned to design analytics outputs as decision systems, not static reports. Clear metric contracts, thoughtful drill paths, and interface discipline are what turn data work into real business utility.",
      futureEvolution: "Future evolution includes expanded forecasting modules, scenario analysis views, and richer self-serve exploration with governed metric definitions.",
      ctaButtons: [
        { label: "View GitHub", href: "https://github.com/jasgh14" },
        { label: "Download CV", href: "assets/JunaidAsgharCV.pdf" },
        { label: "Discuss Project", href: "contact.html" }
      ]
    },
    links: { repo: "https://github.com/jasgh14", demo: "TODO: Add verified dashboard link if publicly shareable." },
    cta: "If you need a practical analytics layer that supports better pricing, assortment, and performance decisions, I can walk through the modeling and dashboard design approach used here."
  }
];
