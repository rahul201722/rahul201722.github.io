import React, { useState } from 'react';
import content from './content.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedProjects, setExpandedProjects] = useState({});

  const sectionOrder = [
    'about',
    'research',
    'experience',
    'projects',
  ];

  const sectionContent = {
    about: (
      <section id="about" className="section">
        <h2>About</h2>
        <p>
          {content.about.blurb}
        </p>
        {content.about.highlights?.length ? (
          <div className="highlights" aria-label="Highlights">
            {content.about.highlights.map((h) => (
              <span key={h} className="pill">
                {h}
              </span>
            ))}
          </div>
        ) : null}
        {content.about.updates?.length ? (
          <article className="card">
            <h3>Recent Updates</h3>
            <ul className="updates">
              {content.about.updates.map((u) => (
                <li key={`${u.date}-${u.text}`}>
                  <span className="update-date">{u.date}</span>
                  <span className="update-text">{u.text}</span>
                </li>
              ))}
            </ul>
          </article>
        ) : null}
        {content.about.techStack?.length ? (
          <article className="card">
            <h3>Tech Stack</h3>
            <div className="tech-grid">
              {content.about.techStack.map((group) => (
                <div key={group.title} className="tech-group">
                  <h4>{group.title}</h4>
                  <ul className="bullet">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ) : null}
        <article className="card contact-card">
          <h3>Contact</h3>
          <p className="meta">
            Email:{' '}
            <a href={`mailto:${content.profile.contacts.email}`} className="accent">
              {content.profile.contacts.email}
            </a>
            <br />
            Phone: <a href={`tel:${content.profile.contacts.phone}`}>{content.profile.contacts.phone}</a>
            <br />
            LinkedIn:{' '}
            <a href={content.profile.contacts.linkedin} target="_blank" rel="noopener">
              {content.profile.contacts.linkedin.replace('https://', '')}
            </a>
          </p>
        </article>
        {content.about.education?.length ? (
          <article className="card">
            <h3>Education</h3>
            <ul className="bullet">
              {content.about.education.map((edu) => (
                <li key={edu.degree}>
                  <strong>{edu.degree}</strong>, {edu.school} ({edu.years}){edu.note ? ` — ${edu.note}` : ''}
                </li>
              ))}
            </ul>
          </article>
        ) : null}
      </section>
    ),
    research: (
      <section id="research" className="section">
        <h2>Research &amp; Publications</h2>
        <div className="stack">
          <article className="card">
            <h3>Research Interests</h3>
            <ul className="bullet">
              {content.researchInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div>
            <h3>Selected Publications</h3>
            {content.publications.map((pub) => (
              <article key={pub.title} className="card">
                <h4>{pub.title}</h4>
                <p className="meta">{pub.venue}</p>
                <p>{pub.blurb}</p>
                {pub.link ? (
                  <p className="meta">
                    <a href={pub.link} target="_blank" rel="noopener">
                      View paper
                    </a>
                  </p>
                ) : null}
              </article>
            ))}
            {content.researchFigures?.length ? (
              <div className="figure-grid">
                {content.researchFigures.map((fig) => (
                  <figure key={fig.src} className="card figure-card">
                    <img src={fig.src} alt={fig.alt} />
                    <figcaption className="meta">{fig.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    ),
    experience: (
      <section id="experience" className="section">
        <h2>Experience</h2>
        {content.experience.map((item) => (
          <article key={item.role} className="card">
            <div className="card-header">
              <div>
                <h3>{item.role}</h3>
                <p className="meta">
                  {item.org} · {item.period}
                </p>
              </div>
            </div>
            <ul className="bullet">
              {item.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    ),
    projects: (
      <section id="projects" className="section">
        <h2>Projects</h2>
        {content.projects.map((proj) => (
          <article key={proj.title} className="card">
            <h3>{proj.title}</h3>
            <p className="meta">{proj.subtitle}</p>
            <p>{proj.summary}</p>
            {proj.details && expandedProjects[proj.title] ? (
              <ul className="bullet">
                {proj.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            ) : null}
            {proj.details ? (
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setExpandedProjects((prev) => ({ ...prev, [proj.title]: !prev[proj.title] }))
                }
                aria-expanded={!!expandedProjects[proj.title]}
              >
                {expandedProjects[proj.title] ? 'Show less' : 'Read more'}
              </button>
            ) : null}
          </article>
        ))}
      </section>
    ),
  };

  return (
    <div className="layout">
      <aside className="sidebar" id="top">
        <div className="portrait">
          <img src={content.profile.portrait} alt={`Portrait of ${content.profile.name}`} />
        </div>
        <h1 className="name">{content.profile.name}</h1>
        <p className="title">{content.profile.title}</p>
        <p className="affiliation">
          {content.profile.affiliationLine1}
          <br />
          {content.profile.affiliationLine2}
        </p>
        <div className="sidebar-links">
          <a href={`mailto:${content.profile.contacts.email}`}>Email</a>
          <a href={content.profile.contacts.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href={content.profile.contacts.github} target="_blank" rel="noopener">
            GitHub
          </a>
          <a href={content.profile.contacts.cvMl} target="_blank" rel="noopener">
            CV (ML)
          </a>
          <a href={content.profile.contacts.cvResearch} target="_blank" rel="noopener">
            CV (Research)
          </a>
        </div>
        <nav className="side-nav" aria-label="Section navigation">
          {content.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(link.href.replace('#', ''));
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="content">
        <div className="tabs" role="tablist" aria-label="Profile sections">
          {content.navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const active = activeTab === id;
            return (
              <button
                key={link.href}
                className={`tab ${active ? 'active' : ''}`}
                role="tab"
                aria-selected={active}
                aria-controls={id}
                onClick={() => setActiveTab(id)}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {sectionOrder.map((id) => (
          <div
            key={id}
            role="tabpanel"
            id={id}
            aria-hidden={activeTab !== id}
            className={activeTab === id ? 'tab-panel active' : 'tab-panel'}
          >
            {sectionContent[id]}
          </div>
        ))}
      </main>
    </div>
  );
}
