import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const aboutOffset = document.getElementById('about')?.offsetTop || 0;
      const experienceOffset = document.getElementById('experience')?.offsetTop || 0;
      const projectsOffset = document.getElementById('projects')?.offsetTop || 0;

      if (window.pageYOffset < aboutOffset) {
        setActiveSection('');
      } else if (window.pageYOffset < experienceOffset) {
        setActiveSection('about');
      } else if (window.pageYOffset < projectsOffset) {
        setActiveSection('experience');
      } else {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
      <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
      <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
    </nav>
  );
};

export default Header;
