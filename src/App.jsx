import React, { useState, useEffect } from 'react';
import content from './content.js';
import Hero from './components/Hero.jsx';
import Navigation from './components/Navigation.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'projects', 'experience'];
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
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      
      <ScrollProgress />
      <BackToTop />
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        resumeUrl={content.profile.contacts.cv}
      />
      
      <main id="main-content">
        <div id="hero">
          <Hero profile={content.profile} highlights={content.about.highlights} />
        </div>
        
        <About about={content.about} contacts={content.profile.contacts} />
        
        <Research 
          caseStudies={content.caseStudies}
          researchInterests={content.researchInterests}
          publications={content.publications}
          researchFigures={content.researchFigures}
        />

        <Projects projects={content.projects} />
        
        <Experience experience={content.experience} />
      </main>

      <Footer profile={content.profile} />
    </div>
  );
}
