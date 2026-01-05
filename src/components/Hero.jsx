import React from 'react';

export default function Hero({ profile, highlights = [] }) {
  const quickFacts = profile.quickFacts ?? [];
  return (
    <section className="relative min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl motion-safe:animate-float-slow" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-black/5 blur-3xl motion-safe:animate-float-slow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-0 grid items-center gap-8 lg:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 text-center lg:text-left">
          <span className="inline-flex items-center justify-center lg:justify-start text-sm uppercase tracking-[0.35em] text-secondary/70">
            Research Portfolio
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-semibold text-primary leading-[0.95] tracking-tight motion-safe:animate-fade-up">
            {profile.name}
          </h1>

          <p className="text-2xl md:text-3xl text-secondary font-semibold motion-safe:animate-fade-up-slow motion-safe:[animation-delay:120ms]">
            {profile.title}
          </p>

          <div className="text-base md:text-lg text-secondary/80 space-y-1 motion-safe:animate-fade-up-slow motion-safe:[animation-delay:200ms]">
            <p>{profile.affiliationLine1}</p>
            <p>{profile.affiliationLine2}</p>
          </div>

          {quickFacts.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-3 pt-2">
              {quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-white/70 px-4 py-3 text-left shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary/60">
                    {fact.label}
                  </p>
                  <p className="text-lg font-semibold text-primary">{fact.value}</p>
                  {fact.detail && (
                    <p className="text-sm text-secondary/80">{fact.detail}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1">
            {profile.contacts.cv && (
              <a
                href={profile.contacts.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors duration-200 cursor-pointer shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M7 4h7l3 3v13a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z" />
                </svg>
                Resume (PDF)
              </a>
            )}
            <a
              href={`mailto:${profile.contacts.email}`}
              className="inline-flex items-center px-6 py-3 text-base bg-accent text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 cursor-pointer shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
            {profile.contacts.scholar && (
              <a
                href={profile.contacts.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg md:text-xl border border-primary/20 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              >
                <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l9 6-9 6-9-6 9-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9v9a2 2 0 002 2h14a2 2 0 002-2V9" />
                </svg>
                Scholar
              </a>
            )}
            <a
              href={profile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base border border-primary/20 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={profile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base border border-primary/20 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            {profile.contacts.researchSummary && (
              <a
                href={profile.contacts.researchSummary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base border border-primary/20 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              >
                One-page Summary
              </a>
            )}
          </div>
        </div>

        <div className="relative lg:justify-self-end w-full max-w-xl self-stretch">
          <div className="bg-white/95 border border-white/60 shadow-lg rounded-3xl p-6 md:p-9 backdrop-blur h-full flex flex-col gap-6">
            <div className="relative mb-6 rounded-2xl border border-dashed border-border/80 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:16px_16px] p-4">
              <span className="absolute -top-3 right-4 rounded-full border border-primary/20 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary shadow-sm">
                Lab Note · Updated {profile.lastUpdated}
              </span>
              <div className="flex items-center gap-5">
              <div className="w-[40vw] h-[40vw] max-w-[140px] max-h-[140px] sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-border shadow-sm">
                <img
                  src={profile.portrait}
                  alt={`Portrait of ${profile.name}`}
                  width={800}
                  height={828}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-secondary/60 mb-2">Research Snapshot</p>
                <p className="text-xl font-semibold text-primary">Edge AI + Mobile Health</p>
                <p className="text-base text-secondary/70">Clinical-grade, on-device vitals</p>
              </div>
              </div>
            </div>
            {highlights.length > 0 && (
              <ul className="grid gap-3">
                {highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-border/80 bg-surface-soft px-4 py-3 text-base text-secondary/90"
                  >
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto flex flex-wrap justify-center gap-3">
              {profile.contacts.scholar && (
                <a
                  href={profile.contacts.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-6 py-3 text-base font-semibold text-primary hover:bg-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                >
                  Scholar
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10v9a2 2 0 002 2h9" />
                  </svg>
                </a>
              )}
              {profile.contacts.cv && (
                <a
                  href={profile.contacts.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-6 py-3 text-base font-semibold text-primary hover:bg-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                >
                  CV (PDF)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10v9a2 2 0 002 2h9" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
