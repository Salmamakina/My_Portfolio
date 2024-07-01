import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeLayout from './components/ResumeLayout';
import { animateScroll as scroll } from 'react-scroll';

const Home = ({ contactRef }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      scroll.scrollTo(contactRef.current.offsetTop);
    }
  }, [location, contactRef]);

  return (
    <div id="home">
      <Banner contactRef={contactRef} />
      <section id="skills-section">
        <Skills />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <Contact ref={contactRef} />
    </div>
  );
};

function App() {
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <NavBar contactRef={contactRef} />
        <Routes>
          <Route path="/" element={<Home contactRef={contactRef} />} />
          <Route path="/resume" element={<ResumeLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
