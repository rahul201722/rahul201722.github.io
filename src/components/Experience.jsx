import React from 'react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-10 md:py-12 px-3 sm:px-5 lg:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-secondary/60 mb-2">Experience</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">Research & Professional Experience</h2>
        </div>
        
        <div className="relative space-y-4 before:hidden md:before:block md:before:absolute md:before:left-[124px] md:before:top-3 md:before:bottom-3 md:before:w-px md:before:bg-border/80">
          {experience.map((item, idx) => (
            <div 
              key={idx}
              className="card-lift md:grid md:grid-cols-[112px_1fr] md:gap-4 items-start bg-surface-soft rounded-2xl p-4 md:p-5 border border-border/80 hover:border-accent/30 transition-colors duration-200"
            >
              <div className="mb-3 md:mb-0">
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.period}
                </span>
              </div>

              <div>
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
                  {item.role}
                </h3>
                <p className="text-secondary/90 font-medium mb-1">
                  {item.org}
                </p>
                {item.context && (
                  <p className="text-sm text-accent/90 italic">
                    {item.context}
                  </p>
                )}
                {item.supervisor && (
                  <p className="text-sm text-secondary/70">
                    Supervisor: {item.supervisor}
                  </p>
                )}
              </div>
              
              <ul className="space-y-3">
                {item.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-secondary/90">{detail}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
