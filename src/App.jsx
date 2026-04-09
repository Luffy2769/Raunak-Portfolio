import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import GithubStats from './components/GithubStats';

function App() {
  useEffect(() => {
    // Scroll Animation (Fade In) logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <BackgroundShapes />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
