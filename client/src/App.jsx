import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-900">
      

      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;