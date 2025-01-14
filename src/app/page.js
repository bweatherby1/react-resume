/* eslint-disable */
'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactPopup from '../components/ContactPopup';

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="section white-bg scroll-animate">
        <div className="title-container">
          <div className="lightning-emoji">⚡</div>
          <h1 className="main-title">
            Hi! I'm{' '}
            <span className="gradient-text">Brad Weatherby</span>
            <br />
            Full Stack Developer
          </h1>
          <div className="lightning-emoji">⚡</div>
        </div>
      </div>
        <div className="divider"></div>
        <div className="section gradient-bg scroll-animate">
          <div className="project-container">
            <h3 className="section-heading">About Me</h3>
            <div className="about-container">
              <div className="profile-section">
                <Image
                  src="/images/blueSteeleStare.jpg"
                  alt="Brad Weatherby Profile"
                  width={400}
                  height={400}
                  className="profile-image"
                />
                <div className="profile-buttons">
                  <Link href="/documents/brad-weatherby-resume.pdf" target="_blank">
                    <button className="profile-button">Resume</button>
                  </Link>
                  <button className="profile-button" onClick={() => setIsContactOpen(true)}>Contact</button>
                </div>
              </div>
              <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
              <div className="about-text">
                <p>
                  As a full-stack developer and recent Nashville Software School graduate, I bring a unique blend of technical expertise and real-world experience. My journey began with a passion for technology, gaming, and problem-solving, which initially led me into the garage door industry. Over two years, I built and operated my own garage door business, mastering everything from client relationships and operational efficiency to practical problem-solving. This hands-on experience taught me invaluable lessons in self-reliance, precision, and delivering reliable solutions - skills that translate perfectly into software development.
                </p>

                <p>
                  At NSS, I transformed my natural affinity for logic and mechanics into a robust foundation in software development. Now proficient in JS, HTML, CSS, Python/Django, and REACT/Next.js, I combine my hands-on mechanical background with clean, efficient code development. My experience in both solo and group projects using scrum methodology has prepared me to tackle complex challenges with creativity and precision.
                </p>

                <p>
                  The transition from garage door business owner to software developer was driven by my desire to challenge myself intellectually while leveraging my practical experience in creating solutions. I'm excited to bring this powerful combination of technical skills, problem-solving abilities, and real-world experience to a software development role where I can continue growing while creating innovative solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section white-bg scroll-animate">
          <div className="project-container">
            <h3 className="section-heading">Projects</h3>
          
            <div className="project-card">
              <div className="project-content">
                <h4 className="project-title">Putter</h4>
                <Image
                  src="/images/favicon.ico"
                  alt="Putter Icon"
                  width={60}
                  height={60}
                  className="project-icon"
                />
                <p className="project-description">
                  Putter is a tinder style golf application desgined to let the user find a playing partner nearby with matching playing times, message that partner and past matches, add and select from courses added by other users. This application was built entirely on the front end using React, Next.js, and Bootstrap, and is desployed on Netlify.
                </p>
                <div className="button-container">
                <Link href="https://fairwayfriends.netlify.app/" target="_blank">
                  <button className="project-button">Live Page</button>
                </Link>
                <Link href="https://github.com/bweatherby1/friends" target="_blank">
                  <button className="project-button">Repo</button>
                </Link>
                </div>
              </div>
              <Image
                src="/images/PutterLogin.png"
                alt="Putter Login"
                width={500}
                height={400}
                className="project-image"
              />
            </div>

            <div className="project-card">
              <Image
                src="/images/letsEatLogin.png"
                alt="Putter Login"
                width={500}
                height={400}
                className="project-image"
              />
              <div className="project-content">
                <h4 className="project-title">Let's Eat!</h4>
                <Image
                  src="/images/letsEatLogo.png"
                  alt="Lets Eat Icon"
                  width={60}
                  height={60}
                  className="project-icon"
                />
                <p className="project-description">
                  Lets Eat aims to eliminate the time spent picking a restaurant by letting users add their favorite restaurants to a list and then randomly selecting one of the restaurants via a random spinner. This both saves time and adds a bit of fun to the process. Built using React, Django, and Python and deployed with Railway.(Currently in Early Deploy)
                </p>
                <div className="button-container">
                  <Link href="https://clientletseat-production.up.railway.app" target="_blank">
                    <button className="project-button">Live Page</button>
                  </Link>
                  <Link href="https://github.com/bweatherby1-let-s-eat" target="_blank">
                    <button className="project-button">Repo</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="project-card">
              <div className="project-content">
                <h4 className="project-title">Putter</h4>
                <p className="project-description">
                  Putter is a tinder style golf application...
                </p>
                <div className="button-container">
                  <button className="project-button">Live Page</button>
                  <button className="project-button">Git Repo</button>
                </div>
              </div>
              <Image
                src="/images/PutterLogin.png"
                alt="Putter Login"
                width={500}
                height={400}
                className="project-image"
              />
            </div> */}

            {/* <div className="project-card"> 
              <div className="project-content">
                <h4 className="project-title">Let's Eat!</h4>
                <p className="project-description">
                  Lets Eat aims to...
                </p>
                <div className="button-container">
                  <button className="project-button">Live Page</button>
                  <button className="project-button">Git Repo</button>
                </div>
              </div>
              <Image
                src="/images/PutterLogin.png"
                alt="Putter Login"
                width={500}
                height={400}
                className="project-image"
              />
            </div> */}
          </div>
        </div>
        <div className="divider"></div>
        <div className="section gradient-bg scroll-animate">
          <div className="project-container">
            <h3 className="section-heading">Tech Stack</h3>
              <div className="tech-stack-container">
                <div className="tech-row">
                  <Image src="/images/pythonlogo.png" alt="Python Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/reactlogo.png" alt="React Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/jslogo.png" alt="JavaScript Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/html5logo.png" alt="HTML5 Logo" width={150} height={150} className="tech-logo" />
                </div>
                <div className="tech-row">
                  <Image src="/images/css3logo.png" alt="CSS3 Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/djangologo.png" alt="Django Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/nextjslogo.png" alt="Next.js Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/sqllogo.png" alt="SQL Logo" width={150} height={150} className="tech-logo" />
                </div>
                <div className="tech-row">
                  <Image src="/images/Bootstrap_logo.svg.png" alt="Bootstrap Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/githublogo.png" alt="GitHub Logo" width={150} height={150} className="tech-logo" />
                  <Image src="/images/postmanlogo.png" alt="Postman Logo" width={150} height={150} className="tech-logo" />
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
