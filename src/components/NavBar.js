import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { animateScroll as scroll } from 'react-scroll';

export const NavBar = ({ contactRef }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  const handleNavLinkClick = (path, sectionId) => {
    navigate(path);
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const handleConnectClick = () => {
    navigate('/', { state: { scrollToContact: true } });
  };


  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand onClick={() => handleNavLinkClick('/#home', 'home')}>
          <span className="my-logo">SM.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}> 
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/#skills-section" className={activeLink === 'skills'? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                Skills
                </Nav.Link>
                <Nav.Link as={Link} to="/#projects-section" className={activeLink === 'projects'? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                Projects
                </Nav.Link>
            <Nav.Link as={Link} to="/resume#resume-section" className={activeLink === 'resume' ? 'active-navbar-link' : 'navbar-link'}>
              Resume
            </Nav.Link> */}
            <Nav.Link onClick={() => handleNavLinkClick('/#home', 'home')} className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('/#skills-section', 'skills-section')} className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}>
              Skills
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('/#projects-section', 'projects-section')} className={activeLink === 'projects'? 'active-navbar-link' : 'navbar-link'}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('/resume#resume-section')} className={activeLink === 'resume' ? 'active-navbar-link' : 'navbar-link'}>
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/salma-makina/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100055834089001" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/Salmamakina" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={
              handleConnectClick
            }>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;