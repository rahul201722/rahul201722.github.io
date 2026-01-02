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
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Research Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
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
                  className="text-accent hover:text-blue-700 font-medium transition-colors duration-200 cursor-pointer"
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
