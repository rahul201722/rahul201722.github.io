import React from 'react';

export default function Research({ researchInterests, publications, researchFigures }) {
  return (
    <section id="research" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Research & Publications
        </h2>

        {/* Research Interests */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-8 border border-border shadow-sm">
          <h3 className="text-2xl font-semibold text-primary mb-4">Research Interests</h3>
          <ul className="space-y-3">
            {researchInterests.map((interest, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-secondary/90">{interest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Publications */}
        <h3 className="text-2xl font-semibold text-primary mb-6">Selected Publications</h3>
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h4 className="text-xl font-semibold text-primary mb-2">
                {pub.title}
              </h4>
              <p className="text-sm text-secondary/70 mb-1">{pub.authors}</p>
              <p className="text-sm text-secondary/70 mb-4">{pub.venue}</p>
              <p className="text-secondary/90 mb-4">{pub.blurb}</p>
              {pub.link ? (
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-blue-700 font-medium transition-colors duration-200 cursor-pointer"
                >
                  View paper
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="inline-flex items-center text-sm text-secondary/70">
                  PDF available on request
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Research Figures */}
        {researchFigures?.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchFigures.map((fig, idx) => (
              <figure 
                key={idx}
                className="bg-white rounded-xl p-4 border border-border shadow-sm"
              >
                <img 
                  src={fig.src} 
                  alt={fig.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg mb-3"
                />
                <figcaption className="text-sm text-secondary/70">
                  {fig.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
