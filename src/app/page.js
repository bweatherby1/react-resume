/* eslint-disable */
'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Home() {
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
                  src="/images/Profile1.jpg"
                  alt="Brad Weatherby Profile"
                  width={400}
                  height={400}
                  className="profile-image"
                />
                <div className="profile-buttons">
                  <button className="profile-button">Resume</button>
                  <button className="profile-button">Contact</button>
                </div>
              </div>
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
                <p className="project-description">
                  Putter is a tinder style golf application desgined to let the user find a playing partner nearby with matching playing times, message that partner and past matches, add and select from courses added by other users. This application was built entirely on the front end using React
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
            </div>

            <div className="project-card">
              <div className="project-content">
                <h4 className="project-title">Let's Eat!</h4>
                <p className="project-description">
                  Lets Eat aims to lkjljkljlkjl;kj;lkjlk;jlj;khiu hiluhliuh liuh uk hiu hklh ukh liukh liuk hlukli huklh iukh ilul hiukl hukl ihu hlu hilu hiluliby ybh uykb ukybjhkgyu l guykb ugykb ubyk uybk uyb
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
            </div>
            <div className="project-card">
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
            </div>

            <div className="project-card">
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
            </div>
          </div>
        </div>
          
        <div className="divider"></div>
        <div className="section gradient-bg scroll-animate">
          <div className="project-container">
            <h3 className="section-heading">Tech Stack</h3>
          </div>
        </div>
      </div>
  );
}

export default Home;
