import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Placeholder top-bar to verify Tailwind is loading */}
      <div className="bg-green-500 text-white p-4 text-center">
        Tailwind is now working (placeholder)!
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;