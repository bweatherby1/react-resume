/* eslint-disable */

import Link from 'next/link';
import Image from 'next/image';
  function Home() {
    return (
      <div>
        {/* Title Section */}
        <div style={{ 
          background: 'white', 
          padding: '20px', 
          height: '400px', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
            <h1 style={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              color: 'black',
              textAlign: 'center',
              lineHeight: '1.8'
            }}>
              Hi! I'm{' '}
              <span style={{ 
                background: 'linear-gradient(-45deg, #2a5298, #4286f4, #3674db, #2a5298)',
                backgroundSize: '400% 400%',
                animation: 'gradientBG 15s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Brad Weatherby
              </span>
              <br />
              Full Stack Developer Turning "What If?" into "Check This Out!"
            </h1>
            <div style={{ fontSize: '2rem', marginTop: '1rem' }}>⚡</div>
          </div>
        </div>
        {/* About Section */}
        <div style={{ padding: '20px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Me</h3>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6rem',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            <Image
                src="/images/Profile1.jpg"
                alt="Brad Weatherby Profile"
                width={200}
                height={200}
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: '0 0',
                }}
              />
              <div style={{ maxWidth: '600px', textAlign: 'left' }}>
                I am a motivated and detail-oriented full-stack developer with a strong background in customer service and problem-solving. My experience running a successful garage door business for two years has sharpened my skills in operational efficiency, cost management, and leadership. Nashville Software School graduate with a strong foundation in front and back end software development and hands-on experience in coding, debugging, and testing applications both alone and as part of a group. Proficient in JS, HTML, CSS, Python/Django, and REACT/Next.js. Adept at collaborating in team environments with scrum methodology and driven by a passion for learning and problem-solving. Seeking a software developer position to apply technical skills, learn new methods and languages, and contribute to innovative projects.
              </div>
          </div>
        </div>
        {/* Projects Section */}
        <div style={{ background: 'white', padding: '20px', color: 'black' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ 
              textAlign: 'center', 
              textDecoration: 'underline',
              marginBottom: '4rem',
              fontSize: '2rem'
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
        {/* Tech Stack Section */}
        <div style={{ padding: '20px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3>Tech Stack</h3>
            {/* Tech Stack content */}
          </div>
        </div>
      </div>
    );
  }
export default Home;
