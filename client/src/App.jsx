import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Test box to verify Tailwind is installed */}
      <div className="bg-green-500 text-white p-4 text-center">
        Tailwind is now working!
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
