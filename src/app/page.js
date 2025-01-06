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
      {/* Title Section */}
      <div className="section white-bg scroll-animate" style={{ height: '600px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>⚡</div>
          <h1 style={{
            maxWidth: '1000px',
            margin: '0 auto',
            color: 'black',
            textAlign: 'center',
            lineHeight: '2',
            fontSize: '3.5rem'
          }}>
            Hi! I'm{' '}
            <span style={{
              background: 'linear-gradient(-45deg, #2a5298, #4286f4, #3674db, #2a5298)',
              backgroundSize: '400% 400%',
              animation: 'gradientBG 15s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              fontSize: '4rem'
            }}>
              Brad Weatherby
            </span>
            <br />
            Full Stack Developer Turning "What If?" into "Check This Out!"
          </h1>
          <div style={{ fontSize: '3rem', marginTop: '2rem' }}>⚡</div>
        </div>
      </div>

      <div className="divider"></div>

      {/* About Section */}
      <div className="section gradient-bg scroll-animate" style={{ minHeight: '800px', padding: '40px 20px' }}>
        <h3 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem', 
          fontSize: '3rem',
          textDecoration: 'underline',
          marginTop: '2rem'
        }}>About Me</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8rem',
          justifyContent: 'center',
          maxWidth: '1400px',
          margin: '2rem auto',
        }}>
          <Image
            src="/images/Profile1.jpg"
            alt="Brad Weatherby Profile"
            width={300}
            height={300}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: '0 0',
              aspectRatio: '1/1'
            }}
          />
          <div style={{ maxWidth: '800px', textAlign: 'left', fontSize: '1.5rem', lineHeight: '1.8' }}>
            I am a motivated and detail-oriented full-stack developer with a strong background in customer service and problem-solving. My experience running a successful garage door business for two years has sharpened my skills in operational efficiency, cost management, and leadership. Nashville Software School graduate with a strong foundation in front and back end software development and hands-on experience in coding, debugging, and testing applications both alone and as part of a group. Proficient in JS, HTML, CSS, Python/Django, and REACT/Next.js. Adept at collaborating in team environments with scrum methodology and driven by a passion for learning and problem-solving. Seeking a software developer position to apply technical skills, learn new methods and languages, and contribute to innovative projects.
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Projects Section - Larger text and spacing */}
      <div className="section white-bg scroll-animate">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 0' }}>
          <h3 style={{
            textAlign: 'center',
            textDecoration: 'underline',
            marginBottom: '5rem',
            fontSize: '3rem'
          }}>Projects</h3>
          
          {/* First Project */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '6rem'
          }}>
            <div style={{ width: '50%' }}>
              <h4 style={{ textDecoration: 'underline', marginBottom: '1rem' }}>Putter</h4>
              <p style={{ 
                fontSize: '1.4rem',
                lineHeight: '1.6',
                textAlign: 'justify',
                marginBottom: '2rem'
              }}>
                Putter is a tinder style golf application desgined to let the user find a playing partner nearby with matching playing times, message that partner and past matches, add and select from courses added by other users. This application was built entirely on the front end using React
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#1E3A8A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Live Page</button>
                <button style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#1E3A8A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Git Repo</button>
              </div>
            </div>
            <Image
              src="/images/PutterLogin.png"
              alt="Putter Login"
              width={500}
              height={400}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                width: '45%',
                height: 'auto',
              }}
            />
          </div>

          {/* Second Project */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            <div style={{ width: '50%' }}>
              <h4 style={{ textDecoration: 'underline', marginBottom: '1rem' }}>Let's Eat!</h4>
              <p style={{ 
                fontSize: '1.4rem',
                lineHeight: '1.6',
                textAlign: 'justify',
                marginBottom: '2rem'
              }}>
                Lets Eat aims to lkjljkljlkjl;kj;lkjlk;jlj;khiu hiluhliuh liuh uk hiu hklh ukh liukh liuk hlukli huklh iukh ilul hiukl hukl ihu hlu hilu hiluliby ybh uykb ukybjhkgyu l guykb ugykb ubyk uybk uyb
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#1E3A8A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Live Page</button>
                <button style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#1E3A8A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Git Repo</button>
              </div>
            </div>
            <Image
              src="/images/PutterLogin.png"
              alt="Putter Login"
              width={500}
              height={400}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                width: '45%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Tech Stack Section */}
      <div className="section gradient-bg scroll-animate" style={{ minHeight: '600px' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          textAlign: 'center' 
        }}>
          <h3 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem',
            textDecoration: 'underline' 
          }}>Tech Stack</h3>
          {/* Tech Stack content */}
        </div>
      </div>
    </div>
  );
}

export default Home;
