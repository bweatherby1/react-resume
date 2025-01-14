/* eslint-disable */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
              ⇪
            </span>
            <p>© {new Date().getFullYear()} Brad Weatherby</p>
            <div className="social-links d-flex justify-content-between px-5">
              <a href="https://github.com/bweatherby1" target="_blank" rel="noopener noreferrer">
                <Image src="/images/githublogo.png" alt="GitHub" width={30} height={30} />
              </a>
              <a href="https://www.linkedin.com/in/brad-weatherby1/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedinlogo.png" alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="mailto:bweatherby1@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/emailLogoNBG.png" alt="Email" width={30} height={30} style={{ cursor: 'pointer' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
