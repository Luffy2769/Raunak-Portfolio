import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const glitchRef = useRef(null);

  useEffect(() => {
    // Simple Glitch Effect Simulation
    const interval = setInterval(() => {
      if (glitchRef.current && Math.random() > 0.9) {
        glitchRef.current.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
          if (glitchRef.current) {
            glitchRef.current.style.transform = 'translate(0, 0)';
          }
        }, 50);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content fade-in">
        <span className="greeting">Hi there,</span>
        <h1 className="glitch-text" data-text="I'm Raunak 👋" ref={glitchRef}>
          I'm Raunak 👋
        </h1>
        <h2 className="typing-text">
          A <span className="highlight">Self-taught Full Stack Developer</span>
        </h2>
        <h2 className="typing-text delay">Developer & Student.</h2>
        <div className="hero-buttons">
          <a href="https://www.veabroad.com" className="btn primary-btn">
            View Live Project <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-image fade-in">
        {/* We use standard asset path. Place profile.png into public/assets/ if missing */}
        <img src="/assets/profile.png" alt="Raunak" />
      </div>
    </section>
  );
};

export default Hero;
