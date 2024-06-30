import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import Resume from './components/Resume';
import ScrollToSection from './components/ScrollToSection';

function App() {
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <NavBar contactRef={contactRef} />
        <Routes>
          <Route path="/" element={
            <>
              <Banner contactRef={contactRef} />
              <ScrollToSection sectionId="skills">
                <Skills />
              </ScrollToSection>
              <ScrollToSection sectionId="projects">
                <Projects />
              </ScrollToSection>
              <Contact ref={contactRef} />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;