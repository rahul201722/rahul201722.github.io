import React from 'react';

export default function About({ about, contacts }) {
  return (
    <section id="about" className="pt-10 pb-14 md:pt-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary/60 mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">About & Contact</h2>
        </div>
        
        {/* Blurb */}
        {Array.isArray(about.blurb) ? (
          <div className="space-y-3 mb-7">
            {about.blurb.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-secondary/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-lg text-secondary/90 leading-relaxed mb-7">
            {about.blurb}
          </p>
        )}

        {/* Highlights */}
        {about.highlights?.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-9">
            {about.highlights.map((highlight, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Recent Updates */}
        {about.updates?.length > 0 && (
          <div className="bg-surface-soft rounded-2xl p-5 md:p-7 mb-7 border border-border/80 shadow-sm">
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
          <div className="bg-surface rounded-2xl p-5 md:p-7 mb-7 border border-border/80 shadow-sm">
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
        <div className="bg-gradient-to-br from-accent/10 to-surface-soft rounded-2xl p-5 md:p-7 mb-7 border border-accent/20 shadow-sm">
          <h3 className="text-2xl font-semibold text-primary mb-4">Contact</h3>
          <div className="space-y-2 text-secondary/90">
            <p>
              <span className="font-semibold text-primary">Email:</span>{' '}
              <a 
                href={`mailto:${contacts.email}`} 
                className="text-accent hover:text-blue-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              >
                {contacts.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-primary">Phone:</span>{' '}
              <a 
                href={`tel:${contacts.phone}`}
                className="text-accent hover:text-blue-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              >
                {contacts.phoneDisplay ?? contacts.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-primary">LinkedIn:</span>{' '}
              <a 
                href={contacts.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-blue-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              >
                {contacts.linkedin.replace('https://', '')}
              </a>
            </p>
            {contacts.scholar && (
              <p>
                <span className="font-semibold text-primary">Google Scholar:</span>{' '}
                <a
                  href={contacts.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-blue-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                >
                  scholar.google.com.au
                </a>
              </p>
            )}
            {contacts.cv && (
              <p>
                <span className="font-semibold text-primary">CV:</span>{' '}
                <a
                  href={contacts.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-blue-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                >
                  PDF on Google Drive
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Education */}
        {about.education?.length > 0 && (
          <div className="bg-surface rounded-2xl p-5 md:p-7 border border-border/80 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
            <ul className="space-y-4">
              {about.education.map((edu, idx) => (
                <li key={idx}>
                  <p className="text-lg font-semibold text-primary">
                    {edu.degree}
                  </p>
                  <p className="text-secondary/90">
                    {edu.school} ({edu.years})
                    {(edu.note || edu.thesis) && ` — ${edu.note ?? edu.thesis}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Collaboration */}
        {(about.collaboration || about.fundingReady) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
            {about.collaboration && (
              <div className="bg-surface rounded-2xl p-5 md:p-7 border border-border/80 shadow-sm">
                <h3 className="text-2xl font-semibold text-primary mb-4">Collaboration</h3>
                {about.collaboration.goals?.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-secondary/70 mb-2">Looking for</p>
                    <ul className="space-y-2 mb-4">
                      {about.collaboration.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-secondary/90">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {about.collaboration.offerings?.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-secondary/70 mb-2">What I bring</p>
                    <ul className="space-y-2 mb-4">
                      {about.collaboration.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-secondary/90">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {about.collaboration.availability && (
                  <p className="text-sm text-secondary/70">{about.collaboration.availability}</p>
                )}
              </div>
            )}

            {about.fundingReady && (
              <div className="bg-surface rounded-2xl p-5 md:p-7 border border-border/80 shadow-sm">
                <h3 className="text-2xl font-semibold text-primary mb-4">Funding-ready Profile</h3>
                {about.fundingReady.outcomes?.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-secondary/70 mb-2">Outcomes</p>
                    <ul className="space-y-2 mb-4">
                      {about.fundingReady.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-secondary/90">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {about.fundingReady.capabilities?.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-secondary/70 mb-2">Capabilities</p>
                    <ul className="space-y-2">
                      {about.fundingReady.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-secondary/90">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
