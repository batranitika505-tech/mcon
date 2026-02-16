import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Assets
import heroImg from './assets/hero.png';
import aboutImg from './assets/about.png';
import project1Img from './assets/project1.png';
import project2Img from './assets/project2.png';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Reveal content slightly after intro starts its phase 2
    // The intro stays for 1.8s then animates for 1s.
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (contentVisible) {
      const sections = document.querySelectorAll('section:not(:first-of-type)');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, [contentVisible]);

  return (
    <main className="bg-white min-h-screen text-[#2c2c2c] selection:bg-[#8AB339] selection:text-white">
      <AnimatePresence>
        {showIntro && (
          <Intro key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {contentVisible && (
        <div className="relative z-10">
          <Navbar />
          <Hero backgroundImage={heroImg} />
          <About image={aboutImg} />
          <Services />
          <Projects residencyImg={project1Img} commercialImg={project2Img} />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;
