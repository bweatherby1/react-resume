/* eslint-disable */

'use client';

import { useState, useEffect } from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer bg-dark text-white mt-auto">
      <div className="container text-center py-3">
        <div className="row">
          <div className="col">
            <span 
              onClick={scrollToTop}
              style={{
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              &#8682;
            </span>
            <p>© {new Date().getFullYear()} Brad Weatherby - NSS Template</p>
            <div className="social-links">
              <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noopener noreferrer" className="mx-2">
                GitHub
              </a>
              <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer" className="mx-2">
                LinkedIn
              </a>
              <a href="mailto:your.email@example.com" className="mx-2">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
