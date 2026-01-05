import React, { useState, useEffect } from 'react';
import content from './content.js';
import Hero from './components/Hero.jsx';
import Navigation from './components/Navigation.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen text-text">
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        resumeUrl={content.profile.contacts.cv}
      />
      
      <div id="hero">
        <Hero profile={content.profile} highlights={content.about.highlights} />
      </div>
      
      <About about={content.about} contacts={content.profile.contacts} />
      
      <Research 
        researchInterests={content.researchInterests}
        publications={content.publications}
        researchFigures={content.researchFigures}
      />
      
      <Experience experience={content.experience} />
      
      <Projects projects={content.projects} />
      
      <Footer profile={content.profile} />
    </div>
  );
}
