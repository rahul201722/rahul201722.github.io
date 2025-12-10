import React from 'react';

const heroMetrics = [
  '95%+ HR accuracy on mobile PPG',
  '<5 mmHg BP MAE vs AAMI/BHS',
  '3 peer-reviewed papers',
];

const experience = [
  {
    role: 'Graduate ML Research Engineer',
    org: 'Monash University',
    period: '2025–2026',
    badge: 'MedTech CV',
    bullets: [
      'Built smartphone vital sign pipeline (PPG → vPPG/aPPG) with ResNet-50 + multi-head attention; achieved 95%+ HR accuracy and <5 mmHg BP MAE vs AAMI/BHS.',
      'Owned PyTorch training/eval on A40 GPUs, crafting augmentations for motion/illumination noise and aligning metrics to clinical baselines.',
      'Produced reproducible eval scripts and deployment-ready checkpoints for clinicians and industry partners.',
    ],
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rahul-ranjan-b595891b1' },
    ],
  },
  {
    role: 'Information Technology Officer',
    org: 'Aglow Engineers',
    period: 'Jun 2022–Feb 2023',
    badge: 'Predictive Maintenance',
    bullets: [
      'Migrated manual Excel logs to automated SQL reporting for 50+ stakeholders; standardized telemetry and alerting.',
      'Shipped predictive maintenance models that reduced equipment downtime 22% and automated SMTP updates that sped decisions 85%.',
      'Prioritized failure modes with ops/management and established retraining cadence.',
    ],
    links: [
      { label: 'Email Rahul', url: 'mailto:rahulrkm0038@gmail.com' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rahul-ranjan-b595891b1' },
    ],
  },
  {
    role: 'Software Intern',
    org: 'Centre for Railway Information Systems',
    period: 'Feb–May 2022',
    badge: 'ML Ops',
    bullets: [
      'Delivered anomaly detection for 200+ rail assets with 94% accuracy and 48-hour early failure predictions.',
      'Built full data pipeline: feature engineering, labeling workflows with workshop managers, validation with field engineers.',
      'Operationalized retraining and monitoring across the existing WISE database stack.',
    ],
    links: [
      { label: 'Email Rahul', url: 'mailto:rahulrkm0038@gmail.com' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rahul-ranjan-b595891b1' },
    ],
  },
  {
    role: 'Software Development Intern',
    org: 'AMD (Xilinx)',
    period: 'Jun–Dec 2021',
    badge: 'Tooling',
    bullets: [
      'Built a Data Flow Synchronicity Checker used by 25+ verification engineers; automated 1000+ file validations/day with mismatch reports.',
      'Implemented SHA-256 integrity checks vs Artifactory/Perforce, differential analysis, and cron-scheduled nightly runs.',
      'Improved verification workflow efficiency ~30% via automated notifications and update lists.',
    ],
    links: [{ label: 'Email Rahul', url: 'mailto:rahulrkm0038@gmail.com' }],
  },
];

const projects = [
  {
    title: 'Vital Sign Monitoring (Mobile)',
    subtitle: 'Computer Vision | PyTorch | ResNet + Attention',
    badge: 'MedTech',
    copy:
      'Converted single-sensor PPG into visual representations (PPG, vPPG, aPPG) and trained ResNet-50 with multi-head attention to estimate HR/BP on-device; aligned outputs to clinical AAMI/BHS standards.',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rahul-ranjan-b595891b1' },
      {
        label: 'Journal paper',
        url: 'https://link.springer.com/article/10.1007/s10916-025-02228-6',
      },
    ],
  },
  {
    title: 'Predictive Maintenance for Rail',
    subtitle: 'XGBoost | Time-series features | SQL',
    badge: 'Reliability',
    copy:
      'Engineered rolling/lag features and deployed XGBoost models with drift checks and retraining cadence; reduced unplanned downtime 18–22% and delivered 48-hour lead time on failures.',
    links: [
      { label: 'Discuss deployment', url: 'mailto:rahulrkm0038@gmail.com' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rahul-ranjan-b595891b1' },
    ],
  },
  {
    title: 'Data Flow Synchronicity Checker',
    subtitle: 'Python | Hashing | Automation',
    badge: 'Tooling',
    copy:
      'Automated file integrity checks across multi-repo FPGA verification flows using SHA-256, manifest diffs, and cron-based scheduling; shipped email digests for mismatches to keep teams in sync.',
    links: [
      { label: 'Email Rahul', url: 'mailto:rahulrkm0038@gmail.com' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rahul-ranjan-b595891b1' },
    ],
  },
];

const publications = [
  {
    title: 'Vital sign estimation from single-sensor PPG with visual representations',
    meta: 'Journal of Medical Systems, 2025 (Springer)',
    copy:
      'Transforms raw PPG into vPPG/aPPG representations and leverages ResNet + attention for HR/BP estimation aligned to clinical thresholds.',
    links: [{ label: 'Paper', url: 'https://link.springer.com/article/10.1007/s10916-025-02228-6' }],
  },
  {
    title: 'Predictive maintenance for rail assets with early warning',
    meta: 'Industry project report, 2022',
    copy:
      'Built anomaly detection with rolling/lag features and drift checks, delivering 48-hour failure lead time and reducing unplanned downtime.',
    links: [],
  },
];

export default function App() {
  return (
    <>
      <header className="hero" id="top">
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">ML Engineer &amp; AI Researcher</p>
              <h1>Rahul Ranjan</h1>
              <p className="lede">
                ML engineer focused on clinically grounded computer vision and evaluation pipelines. Ships
                production-grade models for healthcare and reliability-focused products.
              </p>
              <div className="proof-points">
                {heroMetrics.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
              <div className="cta-row">
                <a className="btn primary" href="mailto:rahulrkm0038@gmail.com">
                  Email
                </a>
                <a
                  className="btn secondary"
                  href="https://linkedin.com/in/rahul-ranjan-b595891b1"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a className="btn tertiary" href="https://github.com/rahul201722" target="_blank" rel="noopener">
                  GitHub
                </a>
                <a className="btn secondary" href="/cv_ml.pdf" target="_blank" rel="noopener">
                  CV (ML)
                </a>
                <a className="btn secondary" href="/cv_phd_research.pdf" target="_blank" rel="noopener">
                  CV (Research)
                </a>
              </div>
              <nav className="quick-links" aria-label="Quick links">
                <a href="#publications">Publications</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
              </nav>
            </div>
            <div className="hero-photo">
              <img src="/profile.jpg" alt="Rahul Ranjan portrait" />
              <div className="contact-card">
                <p>
                  Email: <a href="mailto:rahulrkm0038@gmail.com">rahulrkm0038@gmail.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+917997193400">+91&nbsp;79971&nbsp;93400</a>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a href="https://linkedin.com/in/rahul-ranjan-b595891b1" target="_blank" rel="noopener">
                    Connect
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="publications" className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Publications</p>
                <h2>Selected Papers</h2>
                <p className="section-subtitle">Curated research highlights (manual list).</p>
              </div>
            </div>
            <div className="pub-list">
              {publications.map((pub) => (
                <article className="pub-item" key={pub.title}>
                  <div>
                    <h3>{pub.title}</h3>
                    <p className="meta">{pub.meta}</p>
                    <p className="card-copy">{pub.copy}</p>
                  </div>
                  {pub.links?.length ? (
                    <div className="meta-links">
                      {pub.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="shell">
            <details open>
              <summary className="section-heading">
                <div>
                  <p className="eyebrow">Experience</p>
                  <h2>Professional Experience</h2>
                  <p className="section-subtitle">Outcome-first snapshot across research and production ML.</p>
                </div>
                <div className="section-ctas">
                  <a className="text-link" href="mailto:rahulrkm0038@gmail.com">
                    Email
                  </a>
                  <a
                    className="text-link"
                    href="https://linkedin.com/in/rahul-ranjan-b595891b1"
                    target="_blank"
                    rel="noopener"
                  >
                    LinkedIn
                  </a>
                </div>
              </summary>
              <div className="card-grid">
                {experience.map((item) => (
                  <article className="card" key={item.role}>
                    <header className="card-header">
                      <div>
                        <h3>{item.role}</h3>
                        <p className="meta">
                          {item.org} - {item.period}
                        </p>
                      </div>
                      <span className="badge">{item.badge}</span>
                    </header>
                    <ul className="bullet-list">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    {item.links?.length ? (
                      <div className="meta-links">
                        {item.links.map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section id="projects" className="section alt">
          <div className="shell">
            <details open>
              <summary className="section-heading">
                <div>
                  <p className="eyebrow">Projects</p>
                  <h2>Selected Projects</h2>
                  <p className="section-subtitle">Evidence-first highlights with stack and outcomes.</p>
                </div>
                <div className="section-ctas">
                  <a className="text-link" href="https://github.com/rahul201722" target="_blank" rel="noopener">
                    GitHub
                  </a>
                  <a className="text-link" href="mailto:rahulrkm0038@gmail.com">
                    Contact
                  </a>
                </div>
              </summary>
              <div className="card-grid">
                {projects.map((project) => (
                  <article className="card" key={project.title}>
                    <header className="card-header">
                      <div>
                        <h3>{project.title}</h3>
                        <p className="meta">{project.subtitle}</p>
                      </div>
                      <span className="badge">{project.badge}</span>
                    </header>
                    <p className="card-copy">{project.copy}</p>
                    {project.links?.length ? (
                      <div className="meta-links">
                        {project.links.map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="shell">
            <div className="card-grid two-col">
              <article className="skill-card">
                <h3>ML &amp; CV</h3>
                <ul>
                  <li>PPG/vPPG/aPPG, vital signs, clinical evaluation</li>
                  <li>ResNet, attention, XGBoost, time-series features</li>
                  <li>PyTorch training/eval, augmentations, metrics</li>
                </ul>
              </article>
              <article className="skill-card">
                <h3>Systems &amp; Ops</h3>
                <ul>
                  <li>SQL reporting, data pipelines, telemetry standardization</li>
                  <li>Automation, hash-based integrity checks, cron workflows</li>
                  <li>Stakeholder comms, experiment tracking, reproducibility</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
