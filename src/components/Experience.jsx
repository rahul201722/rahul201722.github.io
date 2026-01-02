import React from 'react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Experience</h2>
        
        <div className="space-y-6">
          {experience.map((item, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 rounded-xl p-6 md:p-8 border border-border hover:border-accent/30 transition-colors duration-200"
            >
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                  {item.role}
                </h3>
                <p className="text-secondary/90 font-medium">
                  {item.org} · {item.period}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
