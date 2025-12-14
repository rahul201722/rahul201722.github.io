import React, { useState } from 'react';
import content from './content.js';

function AboutSection() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>{content.about.blurb}</p>
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
  );
}

function ResearchSection() {
  return (
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
  );
}

function ExperienceSection() {
  return (
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
  );
}

function ProjectsSection({ expandedProjects, onToggle }) {
  return (
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
              onClick={() => onToggle(proj.title)}
              aria-expanded={!!expandedProjects[proj.title]}
            >
              {expandedProjects[proj.title] ? 'Show less' : 'Read more'}
            </button>
          ) : null}
        </article>
      ))}
    </section>
  );
}

export default function App() {
  const tabs = content.navLinks.map((link) => ({
    id: link.href.replace('#', ''),
    label: link.label,
  }));

  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? 'about');
  const [expandedProjects, setExpandedProjects] = useState({});

  const sections = {
    about: <AboutSection />,
    research: <ResearchSection />,
    experience: <ExperienceSection />,
    projects: (
      <ProjectsSection
        expandedProjects={expandedProjects}
        onToggle={(title) =>
          setExpandedProjects((prev) => ({ ...prev, [title]: !prev[title] }))
        }
      />
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
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className="text-button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <div className="tabs" role="tablist" aria-label="Profile sections">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`tab ${active ? 'active' : ''}`}
                role="tab"
                aria-selected={active}
                aria-controls={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={tab.id}
            aria-hidden={activeTab !== tab.id}
            className={activeTab === tab.id ? 'tab-panel active' : 'tab-panel'}
          >
            {sections[tab.id]}
          </div>
        ))}
      </main>
    </div>
  );
}
