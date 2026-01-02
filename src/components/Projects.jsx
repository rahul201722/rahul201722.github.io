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
    <section id="projects" className="py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-surface-soft">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary/60 mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">Research Projects</h2>
        </div>
        
        <div className="space-y-5">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-surface rounded-2xl p-5 md:p-7 border border-border/80 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
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
                  className="text-accent hover:text-blue-700 font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
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
