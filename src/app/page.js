/* eslint-disable */

import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1>Hi, my name is Brad Weatherby, Full Stack Software Developer</h1>
      
      <hr style={{ width: '85%', margin: '2rem auto' }} />

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '2rem',
        justifyContent: 'center',
        margin: '2rem 0',
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
          <h3>About me</h3>
          I am a motivated and detail-oriented full-stack developer with a strong background in customer service and problem-solving. My experience running a successful garage door business for two years has sharpened my skills in operational efficiency, cost management, and leadership. Nashville Software School graduate with a strong foundation in front and back end software development and hands-on experience in coding, debugging, and testing applications both alone and as part of a group. Proficient in JS, HTML, CSS, Python/Django, and REACT/Next.js. Adept at collaborating in team environments with scrum methodology and driven by a passion for learning and problem-solving. Seeking a software developer position to apply technical skills, learn new methods and languages, and contribute to innovative projects.
        </div>
      </div>

      <hr style={{ width: '85%', margin: '2rem auto' }} />

      <div>
        <h3>Projects</h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
  <div style={{ 
    width: '400px', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between' 
  }}>
    <h4 style={{ textDecoration: 'underline' }}>Putter</h4>
    <Image
      src="/images/PutterLogin.png"
      alt="Putter Login"
      width={400}
      height={300}
      style={{
        objectFit: 'contain',
        objectPosition: 'center',
        width: '100%',
        height: 'auto',
      }}
    />
  </div>
  <div style={{ 
    border: '2px solid #ccc', 
    padding: '1.2rem', 
    width: '400px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    lineHeight: '1.6',
    textAlign: 'justify'
  }}>
    Putter is a tinder style golf application desgined to let the user find a playing partner nearby with matching playing times, message that partner and past matches, add and select from courses added by other users. This application was built entirely on the front end using React
  </div>
</div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
  <div style={{ 
    width: '400px', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between' 
  }}>
    <h4 style={{ textDecoration: 'underline' }}>Let's Eat!</h4>
    <Image
      src="/images/PutterLogin.png"
      alt="Putter Login"
      width={400}
      height={300}
      style={{
        objectFit: 'contain',
        objectPosition: 'center',
        width: '100%',
        height: 'auto',
      }}
    />
  </div>
  <div style={{ 
    border: '2px solid #ccc', 
    padding: '1.2rem', 
    width: '400px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    lineHeight: '1.6',
    textAlign: 'justify'
  }}>
    Lets Eat aims to lkjljkljlkjl;kj;lkjlk;jlj;khiu hiluhliuh liuh uk hiu hklh ukh liukh liuk hlukli huklh iukh ilul hiukl hukl ihu hlu hilu hiluliby ybh uykb ukybjhkgyu l guykb ugykb ubyk uybk uyb
  </div>
</div>
      </div>

      <hr style={{ width: '85%', margin: '2rem auto' }} />

      <div>
        <h3>Tech Stack</h3>
      </div>
    </div>
  );
}

export default Home;
