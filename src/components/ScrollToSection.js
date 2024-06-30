import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = ({ sectionId, children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === `#${sectionId}`) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash, sectionId]);

  return children;
};

export default ScrollToSection;