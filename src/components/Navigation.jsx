import React from 'react';

export default function Navigation({ activeSection, onNavigate, resumeUrl }) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <nav
      aria-label="Primary"
      className="fixed top-3 left-3 right-3 z-50 mx-auto max-w-6xl bg-surface/88 backdrop-blur-md border border-border/60 rounded-2xl px-2.5 py-1.5 shadow-[0_10px_30px_rgba(20,18,16,0.12)]"
    >
      <div className="flex items-center gap-2">
        <ul className="flex-1 min-w-0 flex items-center gap-1 md:gap-2 overflow-x-auto hide-scrollbar px-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] md:text-xs font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 ${
                  activeSection === item.id
                    ? 'bg-accent text-white shadow-[0_8px_18px_rgba(15,118,110,0.28)]'
                    : 'text-secondary hover:bg-accent/10 hover:text-primary'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    activeSection === item.id ? 'bg-white/90' : 'bg-secondary/40'
                  }`}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {resumeUrl && (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-[11px] md:text-xs font-semibold bg-primary text-white shadow-[0_8px_18px_rgba(20,18,16,0.18)] hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
          >
            Resume
          </a>
        )}
      </div>
    </nav>
  );
}
