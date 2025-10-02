// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add click tracking for navigation
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add intersection observer for section highlighting
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all nav items
        navItems.forEach(item => item.classList.remove('active'));
        // Add active class to current section's nav item
        const activeNavItem = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (activeNavItem) {
          activeNavItem.classList.add('active');
        }
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Add stagger animation to list items
  const listItems = document.querySelectorAll('li');
  listItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in-item');
  });
});
