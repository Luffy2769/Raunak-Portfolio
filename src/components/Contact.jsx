import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="social-links fade-in">
        <a href="https://github.com/Luffy2769" target="_blank" rel="noopener noreferrer" className="social-icon github tooltip" data-tooltip="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/raunak-r-561a01320" target="_blank" rel="noopener noreferrer" className="social-icon linkedin tooltip" data-tooltip="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com/vasc0smos" target="_blank" rel="noopener noreferrer" className="social-icon instagram tooltip" data-tooltip="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/918369961495" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp tooltip" data-tooltip="WhatsApp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://t.me/vasc0smos" target="_blank" rel="noopener noreferrer" className="social-icon telegram tooltip" data-tooltip="Telegram">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a href="mailto:raunak.rawat69@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon gmail tooltip" data-tooltip="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
