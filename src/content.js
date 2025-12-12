const content = {
  profile: {
    name: 'Rahul Ranjan',
    title: 'ML Engineer & AI Researcher',
    affiliationLine1: 'Graduate ML Research Engineer',
    affiliationLine2: 'Monash University',
    portrait: '/profile.jpg',
    contacts: {
      email: 'rahulrkm0038@gmail.com',
      phone: '+91 79971 93400',
      linkedin: 'https://linkedin.com/in/rahul-ranjan-b595891b1',
      github: 'https://github.com/rahul201722',
      cvMl: '/cv_ml.pdf',
      cvResearch: '/cv_phd_research.pdf',
    },
  },
  navLinks: [
    { label: 'About & Contact', href: '#about' },
    { label: 'Research & Publications', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ],
  about: {
    blurb:
      'I build clinically grounded computer vision systems for mobile sensing, now as a Graduate ML Research Engineer at Monash. Background spans healthcare ML, predictive maintenance, and verification tooling across rail, semiconductor, and industrial contexts. Current focus: PPG / rPPG pipelines, attention-backed architectures, and reproducible evaluation aligned with AAMI/BHS standards. I also do solid, production-grade data engineering—pipelines, telemetry, and reporting that stay reliable in the real world.',
    highlights: [
      '95%+ HR accuracy on mobile PPG',
      '<5 mmHg BP MAE vs AAMI/BHS',
      '3 peer-reviewed papers',
      '22% reduction in equipment downtime',
    ],
    updates: [
      // { date: 'Jan 2026', text: 'Started PhD in Electrical & Computer Systems Engineering at Monash University.' },
      { date: 'November 2025', text: 'VITAL Net paper accepted at IEEE Applied Sensing Conference.' },
      { date: 'September 2025', text: 'Submitted VITAL Net paper to IEEE Applied Sensing Conference.' },
      { date: 'May 2025', text: 'Published journal paper on PPG-based vital sign estimation in Journal of Medical Systems.' },
    ],
    techStack: [
      {
        title: 'ML / CV',
        items: ['PyTorch', 'ResNet/attention', 'rPPG/vPPG/aPPG', 'XGBoost', 'Time-series features'],
      },
      {
        title: 'Data / Pipelines',
        items: ['SQL & reporting', 'Telemetry standardization', 'ETL & monitoring', 'Airflow-style scheduling'],
      },
      {
        title: 'Systems / Ops',
        items: ['Automation (cron, hashing, CI)', 'Docker', 'GitHub Actions', 'Reproducible eval scripts'],
      },
    ],
    education: [
      {
        degree: 'PhD, Electrical & Computer Systems Engineering (ECSE)',
        school: 'Monash University, Melbourne, Australia',
        years: '2026–2029',
      },
      {
        degree: 'Master of Artificial Intelligence',
        school: 'Monash University, Melbourne, Australia',
        years: '2023–2025',
      },
      {
        degree: 'M.Sc. (Hons.) Physics; B.E. (Hons.) Electronics & Instrumentation',
        school: 'Birla Institute of Technology and Science (BITS), Pilani, India',
        years: '2017–2022',
      },
    ],
  },
  researchInterests: [
    'Physiological signal processing (PPG / rPPG / vPPG)',
    'Clinical-grade model evaluation & reproducibility',
    'Computer vision for mobile sensing',
    'Time-series ML for reliability and maintenance',
  ],
  researchFigures: [
    {
      src: '/paper_1_architecture.jpg',
      alt: 'Architecture diagram for Paper 1',
      caption: 'Paper 1 architecture: PPG → vPPG/aPPG, ResNet-50 backbone with multi-head attention for HR/BP outputs.',
    },
    {
      src: '/paper_2_architecture.jpg',
      alt: 'Architecture diagram for Paper 2',
      caption: 'Paper 2 architecture: rPPG video pipeline with hybrid signal processing + deep model heads for SpO₂ and heart rate.',
    },
  ],
  publications: [
    {
      title: 'Vital sign estimation from single-sensor PPG with visual representations',
      venue: 'Journal of Medical Systems, 2025 (Springer)',
      link: 'https://link.springer.com/article/10.1007/s10916-025-02228-6',
      blurb:
        'Transforms raw PPG into vPPG/aPPG representations and leverages ResNet + attention for HR/BP estimation aligned to clinical thresholds.',
    },
    {
      title: 'VITAL Net: A Hybrid Framework for SpO₂ and HR Estimation Using Smartphone rPPG Video',
      venue: 'Submitted to IEEE Applied Sensing Conference, 2025',
      link: '',
      blurb: 'Hybrid rPPG pipeline combining signal processing and deep models to estimate SpO₂ and heart rate on smartphones.',
    },
  ],
  experience: [
    {
      role: 'Graduate ML Research Engineer',
      org: 'Monash University',
      period: '2025–2026',
      details: [
        'Built smartphone vital sign pipeline (PPG → vPPG/aPPG) with ResNet-50 + multi-head attention; achieved 95%+ HR accuracy and <5 mmHg BP MAE vs AAMI/BHS.',
        'Owned PyTorch training/eval on A40 GPUs with augmentations for motion/illumination noise and aligned metrics to clinical baselines.',
        'Produced reproducible eval scripts and deployment-ready checkpoints for clinicians and industry partners.',
      ],
    },
    {
      role: 'Information Technology Officer',
      org: 'Aglow Engineers',
      period: 'Jun 2022–Feb 2023',
      details: [
        'Migrated manual Excel logs to automated SQL reporting for 50+ stakeholders; standardized telemetry and alerting.',
        'Shipped predictive maintenance models that reduced equipment downtime 22% and automated SMTP updates that sped decisions 85%.',
      ],
    },
    {
      role: 'Software Intern',
      org: 'Centre for Railway Information Systems',
      period: 'Feb–May 2022',
      details: [
        'Delivered anomaly detection for 200+ rail assets with 94% accuracy and 48-hour early failure predictions.',
        'Built full data pipeline: feature engineering, labeling workflows with workshop managers, validation with field engineers.',
      ],
    },
    {
      role: 'Software Development Intern',
      org: 'AMD (Xilinx)',
      period: 'Jun–Dec 2021',
      details: [
        'Built a Data Flow Synchronicity Checker used by 25+ verification engineers; automated 1000+ file validations/day with mismatch reports.',
        'Implemented SHA-256 integrity checks vs Artifactory/Perforce, differential analysis, and cron-scheduled nightly runs.',
      ],
    },
  ],
  projects: [
    {
      title: 'Vital Sign Monitoring (Mobile)',
      subtitle: 'Computer Vision · PyTorch · ResNet + Attention',
      summary:
        'Converted single-sensor PPG into visual representations (PPG, vPPG, aPPG) and trained ResNet-50 with multi-head attention to estimate HR/BP on-device; aligned outputs to clinical AAMI/BHS standards.',
      details: [
        'Built end-to-end pipeline from raw PPG to vPPG/aPPG transformations with reproducible preprocessing.',
        'Trained on A40 GPUs with augmentations for motion/illumination noise; validated against AAMI/BHS clinical thresholds.',
        'Delivered mobile-ready checkpoints plus evaluation scripts for clinician partners.',
      ],
    },
    {
      title: 'Predictive Maintenance for Rail',
      subtitle: 'XGBoost · Time-series features · SQL',
      summary:
        'Engineered rolling/lag features and deployed XGBoost models with drift checks and retraining cadence; reduced unplanned downtime 18–22% and delivered 48-hour lead time on failures.',
      details: [
        'Added rolling statistics and lag features over telemetry feeds.',
        'Set up drift monitoring and monthly retraining cadence; automated SMTP/Slack alerts for top risk assets.',
        'Delivered dashboards and downtime reduction reports to 50+ stakeholders.',
      ],
    },
    {
      title: 'Data Flow Synchronicity Checker',
      subtitle: 'Python · Hashing · Automation',
      summary:
        'Automated file integrity checks across multi-repo FPGA verification flows using SHA-256, manifest diffs, and cron-based scheduling; shipped email digests for mismatches to keep teams in sync.',
      details: [
        'Computed SHA-256 checksums against Artifactory/Perforce manifests to catch drift across repos.',
        'Cron-based nightly runs with mismatch digests emailed to verification engineers.',
        'Improved verification workflow efficiency ~30% by eliminating manual sync checks.',
      ],
    },
  ],
};

export default content;
