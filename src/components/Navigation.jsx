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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
      <ul className="flex gap-1 md:gap-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
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
