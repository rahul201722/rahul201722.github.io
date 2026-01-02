import React from 'react';

export default function Navigation({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-4xl bg-white/85 backdrop-blur-md border border-border/80 rounded-full px-4 py-2 shadow-md">
      <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 ${
                activeSection === item.id
                  ? 'bg-accent text-white'
                  : 'text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
