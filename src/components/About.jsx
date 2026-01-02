import React from 'react';

export default function About({ about, contacts }) {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About & Contact</h2>
        
        {/* Blurb */}
        <p className="text-lg text-secondary/90 leading-relaxed mb-8">
          {about.blurb}
        </p>

        {/* Highlights */}
        {about.highlights?.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12">
            {about.highlights.map((highlight, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Recent Updates */}
        {about.updates?.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8 border border-border">
            <h3 className="text-2xl font-semibold text-primary mb-6">Recent Updates</h3>
            <ul className="space-y-4">
              {about.updates.map((update, idx) => (
                <li key={idx} className="flex flex-col md:flex-row md:items-start gap-2">
                  <span className="text-accent font-semibold text-sm md:text-base md:min-w-[140px]">
                    {update.date}
                  </span>
                  <span className="text-secondary/90">
                    {update.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {about.techStack?.length > 0 && (
          <div className="bg-white rounded-xl p-6 md:p-8 mb-8 border border-border shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.techStack.map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg font-semibold text-primary">
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-secondary/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="bg-gradient-to-br from-accent/5 to-blue-50 rounded-xl p-6 md:p-8 mb-8 border border-accent/20">
          <h3 className="text-2xl font-semibold text-primary mb-4">Contact</h3>
          <div className="space-y-2 text-secondary/90">
            <p>
              <span className="font-semibold text-primary">Email:</span>{' '}
              <a 
                href={`mailto:${contacts.email}`} 
                className="text-accent hover:text-blue-700 transition-colors duration-200"
              >
                {contacts.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-primary">Phone:</span>{' '}
              <a 
                href={`tel:${contacts.phone}`}
                className="text-accent hover:text-blue-700 transition-colors duration-200"
              >
                {contacts.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-primary">LinkedIn:</span>{' '}
              <a 
                href={contacts.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-blue-700 transition-colors duration-200"
              >
                {contacts.linkedin.replace('https://', '')}
              </a>
            </p>
          </div>
        </div>

        {/* Education */}
        {about.education?.length > 0 && (
          <div className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
            <ul className="space-y-4">
              {about.education.map((edu, idx) => (
                <li key={idx}>
                  <p className="text-lg font-semibold text-primary">
                    {edu.degree}
                  </p>
                  <p className="text-secondary/90">
                    {edu.school} ({edu.years})
                    {edu.note && ` — ${edu.note}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
