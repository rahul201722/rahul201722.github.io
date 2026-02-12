const content = {
  profile: {
    name: "Rahul Ranjan",
    title: "Incoming PhD Student | Edge AI & Mobile Health",
    affiliationLine1: "Robust Biomedical Signal Processing on Mobile Devices",
    affiliationLine2: "Monash University",
    lastUpdated: "February 2026",
    quickFacts: [
      {
        label: "Focus",
        value: "Edge AI + Mobile Health",
        detail: "On-device clinical vitals",
      },
      {
        label: "Funding",
        value: "2 Competitive Scholarships",
        detail: "Fully funded PhD",
      },
      {
        label: "Publications",
        value: "2 Peer-Reviewed",
        detail: "Springer Nature + IEEE",
      },
    ],
    portrait: "/profile.avif",
    contacts: {
      email: "rahulrkm0038@gmail.com",
      phone: "+61435844977",
      phoneDisplay: "+61 435 844 977",
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
        date: "February 2026",
        text: "Started PhD in Electrical & Computer Systems Engineering at Monash University.",
      },
      {
        date: "December 2025",
        text: "Completed Master of Artificial Intelligence at Monash University.",
      },
      {
        date: "November 2025",
        text: "VITAL Net paper accepted at IEEE Applied Sensing Conference 2026.",
      },
      {
        date: "May 2025",
        text: "Published journal paper on blood pressure estimation in Journal of Medical Systems.",
      },
    ],
    techStack: [
      {
        title: "Programming Languages",
        items: [
          "Python",
          "C++",
          "MATLAB",
          "R",
          "Java",
        ],
      },
      {
        title: "ML/Deep Learning",
        items: [
          "PyTorch",
          "TensorFlow",
          "Scikit-learn",
          "Keras",
          "XGBoost",
        ],
      },
      {
        title: "Computer Vision & Signal",
        items: [
          "OpenCV",
          "rPPG",
          "Self-Attention",
          "Spectral Filtering",
          "Anomaly Detection",
        ],
      },
      {
        title: "Data & Visualization",
        items: [
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Seaborn",
          "Plotly",
        ],
      },
      {
        title: "Edge AI & Mobile",
        items: [
          "CoreML",
          "ONNX",
          "TensorFlow Lite",
          "Model Quantization",
          "Swift",
        ],
      },
      {
        title: "Tools & Infrastructure",
        items: [
          "PostgreSQL",
          "Docker",
          "Git",
          "LaTeX",
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
    awards: [
      {
        title: "Monash Research Scholarship",
        detail: "Electrical and Computer Systems Engineering — Fully funded PhD",
        year: "2026–2029",
      },
      {
        title: "Faculty of Engineering International Postgraduate Research Scholarship",
        detail: "FEIPRS — Competitive international award",
        year: "2026–2029",
      },
      {
        title: "The Duke of Edinburgh's International Award",
        detail: "Silver",
        year: "2015",
      },
    ],
    collaboration: {
      goals: [
        "Clinical and translational partnerships for mobile vital sign validation",
        "Industry collaborations for on-device deployment and productization",
        "Cross-disciplinary research on robust biomedical signal processing",
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
      venue: "Journal of Medical Systems, Springer Nature, 49(1), 97 (2025)",
      doi: "10.1007/s10916-025-02228-6",
      link: "https://link.springer.com/article/10.1007/s10916-025-02228-6",
      publisher: "Springer Nature",
      blurb:
        "Introduces IMCA-PPG, an image-based multimodal framework that converts single-site PPG into PPG/vPPG/aPPG visual streams, extracts embeddings with ResNet-50, and fuses them with multi-head cross-attention for cuffless BP estimation.",
      plainLanguageImpact:
        "Reliable cuffless BP estimation from one sensor makes continuous cardiovascular monitoring more practical for mobile and remote care.",
      keyResults: [
        "Validated across three datasets (PTT-PPG, Cabrini, MIMIC-II) with strong cross-dataset generalization.",
        "Meets AAMI requirements (mean error <=5 mmHg, standard deviation <=8 mmHg).",
        "Achieves BHS Grade A performance across key evaluations, supporting clinical viability.",
      ],
      citationBibtex: `@article{roha2025evolving,
  title={Evolving Blood Pressure Estimation: From Feature Analysis to Image-Based Deep Learning Models},
  author={Roha, Venkat Sai and Ranjan, Rahul and Yuce, Mehmet Rasit},
  journal={Journal of Medical Systems},
  volume={49},
  number={1},
  pages={97},
  year={2025},
  publisher={Springer Nature},
  doi={10.1007/s10916-025-02228-6}
}`,
    },
    {
      title:
        "VITAL Net: A Hybrid Framework for SpO₂ and HR Estimation Using Smartphone rPPG Video",
      authors: "Ranjan, R., Roha, V. S., & Yuce, M. R.",
      venue: "IEEE Applied Sensing Conference (2026)",
      doi: "",
      link: "",
      arxiv: "",
      availableOnRequest: true,
      blurb:
        "Presents a unified smartphone-video pipeline for contactless SpO₂ and HR estimation by combining physiology-aware Ratio-of-Ratios features with hybrid ensemble and CNN modeling.",
      plainLanguageImpact:
        "Turns a standard smartphone camera into a low-cost vital-sign monitor for settings where wearables or clinical devices are not always available.",
      keyResults: [
        "On contactless facial video: correlation 0.80 for SpO₂ and 0.92 for HR; RMSE 0.76 (SpO₂) and 4.25 (HR).",
        "Custom dataset: 11 participants, 4 activity phases (baseline, cycling, handgrip, breath-hold), with synchronized clinical ground truth.",
        "Fast inference for edge use: ~4.33 ms/sample for SpO₂ and ~6 ms/sample for HR.",
      ],
      citationBibtex: `@inproceedings{ranjan2026vital,
  title={VITAL Net: A Hybrid Framework for SpO₂ and HR Estimation Using Smartphone rPPG Video},
  author={Ranjan, Rahul and Roha, Venkat Sai and Yuce, Mehmet Rasit},
  booktitle={IEEE Applied Sensing Conference},
  year={2026}
}`,
    },
  ],
  caseStudies: [
    {
      title: "Case Study 1: Single-Site Cuffless BP Estimation (IMCA-PPG)",
      context: "Journal of Medical Systems (Springer Nature, 2025)",
      problem:
        "Conventional cuffless BP methods often depend on multi-sensor setups (e.g., ECG+PPG), which increase hardware complexity and reduce robustness in real-world monitoring.",
      approach: [
        "Derived PPG, vPPG, and aPPG image representations from single-site PPG.",
        "Used ResNet-50 embeddings and multi-head cross-attention fusion to capture cross-modal dependencies.",
        "Benchmarked with strict clinical metrics and across heterogeneous datasets.",
      ],
      results: [
        "Generalized across PTT-PPG, Cabrini, and MIMIC-II cohorts.",
        "Satisfied AAMI thresholds for BP estimation error and variance.",
        "Achieved strong BHS grading outcomes, including Grade A in core settings.",
      ],
      practicalImpact:
        "Enables clinically aligned BP estimation with less hardware burden, improving scalability for remote and continuous monitoring.",
      assets: [
        { label: "Read Paper", href: "https://link.springer.com/article/10.1007/s10916-025-02228-6" },
        { label: "DOI", href: "https://doi.org/10.1007/s10916-025-02228-6" },
        { label: "Request 1-page summary", href: "mailto:rahulrkm0038@gmail.com?subject=Request%20for%201-page%20summary%20(IMCA-PPG)" },
      ],
    },
    {
      title: "Case Study 2: Contactless SpO₂ + HR from Smartphone Video (VITAL Net)",
      context: "IEEE Applied Sensing Conference (2026)",
      problem:
        "Contact-based pulse oximeters and wearables can degrade under movement, poor contact, and long-duration use; we needed a camera-only alternative that remains practical.",
      approach: [
        "Extracted forehead ROI rPPG from smartphone video and applied physiological preprocessing.",
        "Used RF+GB+RidgeCV ensemble for HR and OR+multi-channel CNN fusion for SpO₂.",
        "Evaluated across induced physiological changes (exercise and breath-hold) with synchronized clinical references.",
      ],
      results: [
        "Contactless face ROI: R=0.80 (SpO₂), R=0.92 (HR), RMSE=0.76 (SpO₂), RMSE=4.25 (HR).",
        "Improved MAE versus prior baselines and maintained low bias in Bland-Altman analysis.",
        "Edge-ready inference times: 4.33 ms/sample for SpO₂ and 6 ms/sample for HR.",
      ],
      practicalImpact:
        "Supports affordable, contactless vital-sign screening using commodity smartphones, including in low-resource and remote contexts.",
      assets: [
        { label: "Request Manuscript", href: "mailto:rahulrkm0038@gmail.com?subject=Request%20for%20VITAL%20Net%20manuscript" },
        { label: "Request 1-page summary", href: "mailto:rahulrkm0038@gmail.com?subject=Request%20for%201-page%20summary%20(VITAL%20Net)" },
      ],
    },
  ],
  experience: [
    {
      role: "Master's Thesis (Computational Physics)",
      org: "Department of Physics, BITS Pilani",
      period: "2021–2022",
      context: "During Bachelor's Degree",
      supervisor: "Prof. P K Thiruvikraman",
      details: [
        "Investigated phase transitions in ferromagnetic materials using Monte Carlo simulations (Metropolis algorithm) on 2D/3D Ising lattice models with periodic boundary conditions.",
        "Calculated thermodynamic observables (energy, magnetization, susceptibility, specific heat) across temperature sweeps; achieved 40% runtime reduction via vectorization.",
        "Extracted critical exponents (β, γ) using finite-size scaling and power-law fitting; analyzed impact of disorder on transition sharpness.",
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
