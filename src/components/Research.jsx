import React from 'react';

export default function Research({ caseStudies = [], researchInterests, publications, researchFigures }) {
  const [copiedCitation, setCopiedCitation] = React.useState(null);
  const publicationText = publications
    .map((pub) => `${pub.title ?? ''} ${pub.venue ?? ''}`.toLowerCase())
    .join(' ');

  const dedupedCaseStudies = caseStudies.filter((study) => {
    const text = `${study.title ?? ''} ${study.context ?? ''} ${study.problem ?? ''}`.toLowerCase();
    if (!text.trim()) return true;

    const keyPhrases = text
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((token) => token.length >= 6);

    return !keyPhrases.some((phrase) => publicationText.includes(phrase));
  });

  const copyCitation = (citation, index) => {
    navigator.clipboard.writeText(citation);
    setCopiedCitation(index);
    setTimeout(() => setCopiedCitation(null), 2000);
  };

  return (
    <section id="research" className="py-10 md:py-12 px-3 sm:px-5 lg:px-6 bg-surface-soft">
      <div className="max-w-6xl mx-auto">
        <div id="research-case-studies" className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-secondary/60 mb-2">Research</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Research & Publications
          </h2>
        </div>

        {dedupedCaseStudies.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Flagship Case Studies</h3>
            <div className="space-y-4">
              {dedupedCaseStudies.map((study, idx) => (
                <article
                  key={idx}
                  className="card-lift bg-surface rounded-2xl p-4 md:p-5 border border-border/80 shadow-sm"
                >
                  <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">{study.title}</h4>
                  {study.context && <p className="text-sm text-secondary/70 mb-3">{study.context}</p>}

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary/60 mb-2">Problem</p>
                      <p className="text-secondary/90">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary/60 mb-2">Practical Impact</p>
                      <p className="text-secondary/90">{study.practicalImpact}</p>
                    </div>
                  </div>

                  {study.approach?.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary/60 mb-2">Approach</p>
                      <ul className="space-y-2">
                        {study.approach.map((item, approachIdx) => (
                          <li key={approachIdx} className="flex items-start">
                            <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-secondary/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {study.results?.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary/60 mb-2">Key Results</p>
                      <ul className="space-y-2">
                        {study.results.map((item, resultIdx) => (
                          <li key={resultIdx} className="flex items-start">
                            <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-sm text-secondary/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {study.assets?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.assets.map((asset, assetIdx) => (
                        <a
                          key={assetIdx}
                          href={asset.href}
                          target={asset.href.startsWith('http') ? '_blank' : undefined}
                          rel={asset.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center px-3 py-2 border border-border/80 text-primary rounded-lg hover:bg-surface-soft font-medium text-sm transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                        >
                          {asset.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <>
        <h3 className="text-xl font-semibold text-primary mb-4">Selected Publications</h3>
        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <div 
              key={idx}
              className="card-lift bg-surface rounded-2xl p-4 md:p-5 border border-border/80 shadow-sm hover:shadow-[0_14px_30px_rgba(20,18,16,0.12)] transition-shadow duration-200"
            >
              <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">
                {pub.title}
              </h4>
              <p className="text-sm text-secondary/70 mb-1">{pub.authors}</p>
              <p className="text-sm text-secondary/70 mb-4">{pub.venue}</p>
              <p className="text-secondary/90 mb-4">{pub.blurb}</p>
              {pub.plainLanguageImpact && (
                <p className="text-sm text-primary/90 bg-surface-soft rounded-xl px-3 py-2 mb-4">
                  <span className="font-semibold">Why this matters:</span> {pub.plainLanguageImpact}
                </p>
              )}
              {pub.keyResults?.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {pub.keyResults.map((result, resultIdx) => (
                    <li key={resultIdx} className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-sm text-secondary/90">{result}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-2">
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Paper
                  </a>
                )}
                
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-border/80 text-primary rounded-lg hover:bg-surface-soft font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    DOI
                  </a>
                )}
                
                {pub.availableOnRequest && !pub.link && (
                  <span className="inline-flex items-center px-4 py-2 border border-border/80 text-secondary/70 rounded-lg bg-surface-soft font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Available upon request
                  </span>
                )}
                
                {pub.citationBibtex && (
                  <button
                    onClick={() => copyCitation(pub.citationBibtex, idx)}
                    className="inline-flex items-center px-4 py-2 border border-border/80 text-primary rounded-lg hover:bg-surface-soft font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                  >
                    {copiedCitation === idx ? (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Cite (BibTeX)
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
          </>
        )}

        {/* Research Interests */}
        <div className="bg-surface rounded-2xl p-4 md:p-5 mt-5 border border-border/80 shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-3">Research Interests</h3>
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

        {/* Research Figures */}
        {researchFigures?.length > 0 && (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchFigures.map((fig, idx) => (
              <figure 
                key={idx}
                className="bg-surface rounded-2xl p-4 border border-border/80 shadow-sm group cursor-pointer hover:shadow-[0_14px_30px_rgba(20,18,16,0.12)] transition-all duration-200"
                onClick={() => window.open(fig.src, '_blank')}
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img 
                    src={fig.src} 
                    alt={fig.alt}
                    loading="lazy"
                    decoding="async"
                    width={fig.width}
                    height={fig.height}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
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
