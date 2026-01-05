const content = {
  profile: {
    name: "Rahul Ranjan",
    title: "PhD Candidate | Edge AI & Mobile Health",
    affiliationLine1: "Robust Biosignal Processing on Mobile Devices",
    affiliationLine2: "Monash University",
    lastUpdated: "January 2026",
    quickFacts: [
      {
        label: "Focus",
        value: "Edge AI + Mobile Health",
        detail: "On-device clinical vitals",
      },
      {
        label: "Publications",
        value: "2 Peer-Reviewed",
        detail: "2025 IEEE + Journal",
      },
    ],
    portrait: "/profile.avif",
    contacts: {
      email: "rahulrkm0038@gmail.com",
      phone: "+917997193400",
      phoneDisplay: "+91 79971 93400",
      linkedin: "https://linkedin.com/in/rahul-ranjan-b595891b1",
      github: "https://github.com/rahul201722",
      scholar:
        "https://scholar.google.com.au/citations?view_op=list_works&hl=en&user=19aEdVcAAAAJ",
      cv: "https://drive.google.com/file/d/1BQuyW1_InR_Q_mkfimzVvL_2L16CO0fu/view?usp=sharing",
      researchSummary: "",
    },
  },
  navLinks: [
    { label: "About & Contact", href: "#about" },
    { label: "Research & Publications", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ],
  about: {
    blurb: [
      "I build clinical-grade AI that runs on smartphones, not server farms.",
      "My PhD research solves the hardest problem in mobile health: extracting accurate vital signs (HR, SpO₂, BP) from noisy video in the wild—motion artifacts, poor lighting, diverse skin tones.",
      "I combine deep signal reconstruction (encoder–decoder models like U-Nets/autoencoders) with edge-first deployment (distillation + quantization) to deliver real-time inference on mobile NPUs via CoreML/ONNX—putting reliable vital-sign monitoring in your pocket.",
    ],
    highlights: [
      "Contactless vitals from smartphone camera (no wearables)",
      "Robust to motion artifacts & poor lighting",
      "Edge-optimized models (real-time inference)",
      "Clinically validated (AAMI/BHS standards)",
    ],
    updates: [
      {
        date: "January 2026",
        text: "Started PhD in Electrical & Computer Systems Engineering at Monash University.",
      },
      {
        date: "November 2025",
        text: "VITAL Net paper accepted at IEEE Applied Sensing Conference.",
      },
      {
        date: "September 2025",
        text: "Submitted VITAL Net paper to IEEE Applied Sensing Conference.",
      },
      {
        date: "May 2025",
        text: "Published journal paper on blood pressure estimation in Journal of Medical Systems.",
      },
    ],
    techStack: [
      {
        title: "Edge AI & Mobile Deployment",
        items: [
          "CoreML",
          "ONNX",
          "TensorFlow Lite",
          "Model Quantization",
          "Swift (iOS Vision Framework)",
          "Real-time Inference on NPUs",
        ],
      },
      {
        title: "Deep Learning & Signal Processing",
        items: [
          "PyTorch",
          "Encoder-Decoder Architectures",
          "Autoencoders",
          "U-Nets",
          "CNNs",
          "Transformers",
          "Attention Mechanisms",
        ],
      },
      {
        title: "Physiological Signal Analysis",
        items: [
          "rPPG/PPG Extraction",
          "Bandpass Filtering",
          "Noise Reduction",
          "Motion Artifact Rejection",
          "Waveform Reconstruction",
        ],
      },
      {
        title: "Research & Validation",
        items: [
          "Python",
          "Statistical Analysis",
          "Clinical Validation (AAMI/BHS)",
          "OpenCV",
        ],
      },
    ],
    education: [
      {
        degree: "PhD, Electrical & Computer Systems Engineering (ECSE)",
        school: "Monash University, Melbourne, Australia",
        years: "2026–2029",
      },
      {
        degree: "Master of Artificial Intelligence",
        school: "Monash University, Melbourne, Australia",
        years: "2023–2025",
      },
      {
        degree:
          "M.Sc. (Hons.) Physics; B.E. (Hons.) Electronics & Instrumentation",
        school:
          "Birla Institute of Technology and Science (BITS), Pilani, India",
        years: "2017–2022",
        thesis: "Monte Carlo Simulations of Phase Transitions in Ising Models",
      },
    ],
    scholarships: [
      "Monash Research Scholarship (Electrical and Computer Systems Engineering)",
      "Faculty of Engineering International Postgraduate Research Scholarship (FEIPRS)",
    ],
    collaboration: {
      goals: [
        "Clinical and translational partnerships for mobile vital sign validation",
        "Industry collaborations for on-device deployment and productization",
        "Cross-disciplinary research on robust biosignal processing",
      ],
      offerings: [
        "End-to-end rPPG/PPG pipelines (data → model → evaluation)",
        "Clinical-grade evaluation aligned to AAMI/BHS standards",
        "Edge-optimized deployment on mobile NPUs (CoreML/ONNX)",
      ],
      availability: "Open to collaborations and grant partnerships in 2026.",
    },
    fundingReady: {
      outcomes: [
        "95%+ HR accuracy on mobile rPPG in real-world conditions",
        "<5 mmHg BP MAE aligned with AAMI/BHS criteria",
        "Reproducible evaluation scripts and deployment-ready checkpoints",
      ],
      capabilities: [
        "Robust signal processing + deep learning fusion",
        "Edge inference optimization (quantization, distillation)",
        "Clinical validation pipeline and reporting",
      ],
    },
  },
  researchInterests: [
    "Contactless vital sign monitoring from smartphone cameras (rPPG)",
    "Robust signal processing for noisy, real-world physiological data",
    "Edge AI: efficient deep learning on mobile devices with limited compute",
    "Clinical validation: meeting AAMI/BHS standards for medical-grade accuracy",
  ],
  researchFigures: [
    {
      src: "/paper_1_architecture.avif",
      alt: "Architecture diagram for Paper 1",
      caption:
        "Paper 1 architecture: PPG → vPPG/aPPG, ResNet-50 backbone with multi-head attention for HR/BP outputs.",
      width: 1600,
      height: 750,
    },
    {
      src: "/paper_2_architecture.avif",
      alt: "Architecture diagram for Paper 2",
      caption:
        "Paper 2 architecture: rPPG video pipeline with hybrid signal processing + deep model heads for SpO₂ and heart rate.",
      width: 1600,
      height: 436,
    },
  ],
  publications: [
    {
      title:
        "Evolving Blood Pressure Estimation: From Feature Analysis to Image-Based Deep Learning Models",
      authors: "Roha, V. S., Ranjan, R., & Yuce, M. R.",
      venue: "Journal of Medical Systems, 49(1), 97 (2025)",
      link: "https://link.springer.com/article/10.1007/s10916-025-02228-6",
      blurb:
        "Transforms raw PPG into vPPG/aPPG representations and leverages ResNet + attention for HR/BP estimation aligned to clinical thresholds.",
    },
    {
      title:
        "VITAL Net: A Hybrid Framework for SpO₂ and HR Estimation Using Smartphone rPPG Video",
      authors: "Ranjan, R., Roha, V. S., & Yuce, M. R.",
      venue: "Accepted in IEEE Applied Sensing Conference (2025)",
      link: "",
      blurb:
        "Hybrid rPPG pipeline combining signal processing and deep models to estimate SpO₂ and heart rate on smartphones.",
    },
  ],
  experience: [
    {
      role: "Graduate Researcher (AI & Mobile Health)",
      org: "Monash University",
      period: "2024–2025",
      details: [
        "Achieved 95%+ accuracy in HR/SpO₂/BP estimation by building an end-to-end smartphone video vital-sign pipeline and training CNN/Transformer models.",
        "Improved rPPG robustness across diverse subjects by implementing color transforms, bandpass filtering, and self-attention mechanisms, designed with cross-subject evaluation.",
        "Attained MAE <5 mmHg in contactless blood pressure estimation by processing and analyzing 5000 video samples across multiple datasets.",
        "Published novel research as a hybrid framework (VITAL Net) in IEEE Applied Sensing Conference by leading the development of SpO₂ and HR estimation models.",
      ],
    },
    {
      role: "Information Technology Officer",
      org: "Aglow Engineers, Kolkata",
      period: "Jun 2022–Feb 2023",
      details: [
        "Established the company's first centralized data infrastructure by migrating manual entry systems to SQL, creating a robust, queryable database for all operational logs.",
        "Accelerated stakeholder decision-making by developing Python Automation scripts that reduced technical interpretation time through automatically emailed plain-English summaries.",
        "Reduced system downtime by 22% and achieved 89% prediction accuracy in vulnerability detection by building proactive forecasting models using Random Forest & LSTM.",
      ],
    },
    {
      role: "Software Intern",
      org: "Centre for Railway Information Systems (CRIS), New Delhi",
      period: "Jan 2022–May 2022",
      details: [
        "Predicted asset failures 48 hours in advance with 94% accuracy by implementing Anomaly Detection within WISE modules using Python and XGBoost.",
        "Reduced workshop downtime by 18% by deploying Predictive Maintenance models across 200+ railway assets.",
      ],
    },
    {
      role: "Software Development Intern",
      org: "Xilinx (now AMD), Hyderabad — Timing Team, Device Capture Group",
      period: "Aug 2021–Dec 2021",
      details: [
        'Streamlined file-hash verification for 25+ design engineers by developing and deploying the "Data Flow Synchronicity Checker" tool across FPGA teams.',
        "Improved team workflow efficiency by 30% by building production infrastructure with nightly automated checks (1000+ file validations/day) using cron-scheduled Bash jobs.",
      ],
    },
  ],
  projects: [
    {
      title: "Vital Sign Monitoring (Mobile)",
      subtitle: "Computer Vision · PyTorch · ResNet + Attention",
      summary:
        "Converted single-sensor PPG into visual representations (PPG, vPPG, aPPG) and trained ResNet-50 with multi-head attention to estimate HR/BP on-device; aligned outputs to clinical AAMI/BHS standards.",
      details: [
        "Built end-to-end pipeline from raw PPG to vPPG/aPPG transformations with reproducible preprocessing.",
        "Trained on A40 GPUs with augmentations for motion/illumination noise; validated against AAMI/BHS clinical thresholds.",
        "Delivered mobile-ready checkpoints plus evaluation scripts for clinician partners.",
      ],
    },
    {
      title: "Predictive Maintenance for Rail",
      subtitle: "XGBoost · Time-series features · SQL",
      summary:
        "Engineered rolling/lag features and deployed XGBoost models with drift checks and retraining cadence; reduced unplanned downtime 18–22% and delivered 48-hour lead time on failures.",
      details: [
        "Added rolling statistics and lag features over telemetry feeds.",
        "Set up drift monitoring and monthly retraining cadence; automated SMTP/Slack alerts for top risk assets.",
        "Delivered dashboards and downtime reduction reports to 50+ stakeholders.",
      ],
    },
    {
      title: "Data Flow Synchronicity Checker",
      subtitle: "Python · Hashing · Automation",
      summary:
        "Automated file integrity checks across multi-repo FPGA verification flows using SHA-256, manifest diffs, and cron-based scheduling; shipped email digests for mismatches to keep teams in sync.",
      details: [
        "Computed SHA-256 checksums against Artifactory/Perforce manifests to catch drift across repos.",
        "Cron-based nightly runs with mismatch digests emailed to verification engineers.",
        "Improved verification workflow efficiency ~30% by eliminating manual sync checks.",
      ],
    },
  ],
};

export default content;
