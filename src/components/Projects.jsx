import React, { useState } from 'react';

export default function Projects({ projects }) {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (title) => {
    setExpandedProjects(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section id="projects" className="py-10 md:py-12 px-3 sm:px-5 lg:px-6 bg-surface-soft">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-secondary/60 mb-2">Projects</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">Research Projects</h2>
        </div>
        
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-surface rounded-2xl p-4 md:p-5 border border-border/80 shadow-sm hover:shadow-[0_14px_30px_rgba(20,18,16,0.12)] transition-shadow duration-200"
            >
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-3">
                {project.subtitle}
              </p>
              <p className="text-secondary/90 mb-4">
                {project.summary}
              </p>
              
              {project.details && expandedProjects[project.title] && (
                <ul className="space-y-2 mb-4 pl-4 border-l-2 border-accent/30">
                  {project.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-sm text-secondary/90">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {project.details && (
                <button
                  onClick={() => toggleProject(project.title)}
                  className="text-accent hover:text-accent/90 font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                  aria-expanded={!!expandedProjects[project.title]}
                >
                  {expandedProjects[project.title] ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
