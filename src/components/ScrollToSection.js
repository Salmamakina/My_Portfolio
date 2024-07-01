import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = ({ sectionId, children }) => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.hash === `#${sectionId}`) {
      scrollToSection();
    }

    window.addEventListener('hashchange', scrollToSection);

    return () => window.removeEventListener('hashchange', scrollToSection);
  }, [location.hash, sectionId]);

  return children;
};

export default ScrollToSection;