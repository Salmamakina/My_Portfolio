import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from "react";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";


function App() {
  const contactRef = useRef(null);
  return (
    <div className="App">
       <NavBar contactRef={contactRef} />
       <Banner contactRef={contactRef}/>
       <Skills />
       <Projects />
       <Contact ref={contactRef} />
    </div>
  );
}

export default App;
