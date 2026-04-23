import React, { useState } from 'react';
import './App.css';
import ResumePDF from './resume.pdf';
import MyPhoto from './assets/venkat.jpg';

import pythonLogo from './assets/python.png';
import reactLogo from './assets/React.png';
import aiLogo from './assets/ai.png';
import droneLogo from './assets/drone.png';
import javaLogo from './assets/java.png';
import flaskLogo from './assets/flask.png';
import canvaLogo from './assets/canva.png';
import figmaLogo from './assets/figma.png';

import klUniversityImage from './assets/kl.png';
import sriChaitanyaImage from './assets/sri-chaitanya.jpeg';
import drGowthamImage from './assets/dr-gowtham.jpg';
import hackImage from './assets/hack.jpg';
import hackathonImage from './assets/hackathon.jpg';
import ideathonImage from './assets/ideathon.jpg';
import texpoImage from './assets/texpo.jpg';

const DroneSVG = () => (
  <svg width="110" height="64" viewBox="0 0 90 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="14" rx="14" ry="5" fill="rgba(94,234,212,0.12)" stroke="#5eead4" strokeWidth="0.8"/>
    <ellipse cx="72" cy="14" rx="14" ry="5" fill="rgba(94,234,212,0.12)" stroke="#5eead4" strokeWidth="0.8"/>
    <ellipse cx="18" cy="38" rx="14" ry="5" fill="rgba(94,234,212,0.12)" stroke="#5eead4" strokeWidth="0.8"/>
    <ellipse cx="72" cy="38" rx="14" ry="5" fill="rgba(94,234,212,0.12)" stroke="#5eead4" strokeWidth="0.8"/>
    <line x1="18" y1="14" x2="32" y2="26" stroke="#5eead4" strokeWidth="1.2"/>
    <line x1="72" y1="14" x2="58" y2="26" stroke="#5eead4" strokeWidth="1.2"/>
    <line x1="18" y1="38" x2="32" y2="26" stroke="#5eead4" strokeWidth="1.2"/>
    <line x1="72" y1="38" x2="58" y2="26" stroke="#5eead4" strokeWidth="1.2"/>
    <rect x="28" y="20" width="34" height="12" rx="4" fill="#0d0d0d" stroke="#5eead4" strokeWidth="1"/>
    <rect x="40" y="22" width="10" height="8" rx="2" fill="rgba(94,234,212,0.25)"/>
    <line x1="45" y1="32" x2="45" y2="44" stroke="#5eead4" strokeWidth="1"/>
    <circle cx="45" cy="47" r="3" fill="rgba(94,234,212,0.5)" stroke="#5eead4" strokeWidth="0.8"/>
    <circle cx="18" cy="14" r="3" fill="#5eead4"/>
    <circle cx="72" cy="14" r="3" fill="#5eead4"/>
    <circle cx="18" cy="38" r="3" fill="#3b82f6"/>
    <circle cx="72" cy="38" r="3" fill="#3b82f6"/>
  </svg>
);

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  // ✅ ADD THESE TWO RIGHT HERE
  const [formStatus, setFormStatus] = useState('idle');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mqkgrzab', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleEnter = () => {   // your existing code continues...
    setExiting(true);
    setTimeout(() => setShowLanding(false), 900);
  };

  const projects = [
    {
      name: "Drone based Infrastructure Monitoring",
      description: "As urban infrastructure ages, regular inspection and maintenance are essential for ensuring safety. Cracks in concrete and corrosion on iron surfaces can lead to catastrophic failures if undetected. This project presents an integrated UAV-based system using drones and deep learning to automatically detect concrete cracks and iron corrosion from aerial imagery. By leveraging transfer learning with models like ResNet and VGG16, the system provides a cost-effective, automated solution for early damage detection, enhancing maintenance planning and public safety."
    },
    {
      name: "Drone based Animal Surveillance using AI",
      description: "This project utilizes autonomous drones equipped with AI to monitor animals within predefined boundaries. The system employs object detection algorithms to track animal movement, and if an animal crosses a virtual geofenced boundary, the drone triggers real-time alerts. This helps prevent animals from entering restricted zones or unsafe areas, supporting wildlife management, reducing human-animal conflict, and enhancing safety in agricultural or forest-edge regions."
    },
    {
  name: "Drone-Based Current Pole Detection System",
  description: "The Drone-Based Current Pole Detection System is designed to automate the identification and monitoring of electric poles using aerial imagery captured by drones. The system leverages Artificial Intelligence and Computer Vision techniques to detect current poles in real-time and accurately map their locations using GPS coordinates. This helps in efficient infrastructure inspection, maintenance planning, and fault detection in power distribution networks. The application processes drone-captured images or video streams, identifies poles using trained deep learning models (such as YOLO), and visualizes their positions on a map interface. Admins or operators can monitor detected poles, analyze their conditions, and generate reports, making the system highly useful for smart grid management and reducing manual inspection efforts."
    }
  ];

  const achievements = [
    { name: "TEXPO'26 - INFINITUS", rank: "Runner-Up 🥈", image: texpoImage, description: "Secured Runner-Up position at TEXPO'26 during INFINITUS'26 organized by SRM-AP." },
    { name: "HackAP Hackathon", rank: "3rd Place", image: hackImage, description: "Awarded for predictive maintenance solutions focused on infrastructure monitoring." },
    { name: "Amaravati Drone Summit 2024", rank: "3rd Place", image: hackathonImage, description: "Recognized for innovative UAV-based crack detection using deep learning." },
    { name: "Ideathon 2023", rank: "4th Place", image: ideathonImage, description: "Recognized for impactful idea presentation and practical feasibility." },
  ];

  const education = [
    { img: klUniversityImage, school: "KL University, Guntur", degree: "B.E in Computer Science", year: "2022 - 2026 | Pursuing" },
    { img: sriChaitanyaImage, school: "Sri Chaitanya Junior College", degree: "Higher Secondary | S.S.C", year: "2020 - 2022 | Completed" },
    { img: drGowthamImage, school: "Dr. K.K.R's Gowtham School", degree: "10th | C.B.S.E", year: "2019 - 2020 | Completed" }
  ];

  const certifications = [
    { title: "AWS Certified Cloud Practitioner", issuer: "AWS" },
    { title: "Azure AI Fundamentals", issuer: "Microsoft" },
    { title: "Linguaskill General", issuer: "Cambridge" },
    { title: "RPA Professional 2023", issuer: "Automation Anywhere" }
  ];

  if (showLanding) {
    return (
      <div className={`landing-page ${exiting ? 'landing-exit' : ''}`}>
        <div className="landing-grid"></div>
        <div className="landing-scan"></div>
        <div className="landing-glow landing-glow-left"></div>
        <div className="landing-glow landing-glow-right"></div>

        <div className="landing-corner lc-tl"></div>
        <div className="landing-corner lc-tr"></div>
        <div className="landing-corner lc-bl"></div>
        <div className="landing-corner lc-br"></div>
        <div className="landing-blink lb-1"></div>
        <div className="landing-blink lb-2"></div>

        <div className="drone-wrap">
          <div className="drone-trail"></div>
          <div className="drone-signal"></div>
          <div className="drone-beam"></div>
          <DroneSVG />
        </div>

        <div className="landing-content">
          <p className="landing-tag">Welcome to my portfolio</p>
          <h1 className="landing-name">Venkat <span>Chowdary</span></h1>
          <p className="landing-role">AI & Robotics Enthusiast · Drone Developer</p>
          <p className="landing-sub">Computer Science · KL University</p>
          <button className="landing-btn" onClick={handleEnter}>
            Enter Portfolio →
          </button>
          <div className="landing-dots">
            <span className="landing-dot"></span>
            <span className="landing-dot"></span>
            <span className="landing-dot"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App portfolio-fadein">
      <header className="navbar">
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#Projects">PROJECTS</a></li>
          <li><a href="#certifications">CERTIFICATIONS</a></li>
          <li><a href="#achievements">ACHIEVEMENTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="hero-container">
            <div className="hero-visual">
              <div className="glow-border">
                <img src={MyPhoto} alt="Venkat Chowdary" className="profile-img" />
              </div>
            </div>
            <div className="hero-text">
              <h5>Hi There, I'm</h5>
              <h1>Venkat <span>Chowdary</span></h1>
              <p>I'm G.Venkat, a Computer Science student dedicated to the intersection of AI and Robotics. My work focuses on pushing the boundaries of drone technology and automation—from designing custom UAVs to implementing YOLO-based computer vision for real-world infrastructure challenges. I'm driven by a curiosity to see how intelligent machines can reshape our world.</p>
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="btn-primary">View CV</a>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="heading">My <span>Skills</span></h2>
          <div className="skills-grid">
            {[
  { img: pythonLogo, name: 'Python' }, { img: reactLogo, name: 'ReactJS' },
  { img: aiLogo, name: 'AI' }, { img: droneLogo, name: 'Drone' },
  { img: javaLogo, name: 'Java' }, { img: flaskLogo, name: 'Flask' },
  { img: canvaLogo, name: 'Canva' }, { img: figmaLogo, name: 'Figma' }
]
.concat([
  { img: pythonLogo, name: 'Python' }, { img: reactLogo, name: 'ReactJS' },
  { img: aiLogo, name: 'AI' }, { img: droneLogo, name: 'Drone' },
  { img: javaLogo, name: 'Java' }, { img: flaskLogo, name: 'Flask' },
  { img: canvaLogo, name: 'Canva' }, { img: figmaLogo, name: 'Figma' }
])
.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <div className="icon-box"><img src={skill.img} alt={skill.name} /></div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="heading">Education</h2>
          <div className="edu-column">
            {education.map((edu, idx) => (
              <div className="edu-card" key={idx}>
  <div className="edu-inner">

    {/* FRONT */}
    <div className="edu-front">
      <img src={edu.img} alt={edu.school} className="edu-logo" />
      <div className="edu-info">
        <h3>{edu.school}</h3>
        <p>{edu.degree} | <span>{edu.year}</span></p>
      </div>
    </div>

    {/* BACK */}
    <div className="edu-back">
      <h3>{edu.school}</h3>
      <p>{edu.degree}</p>
      <span>{edu.year}</span>
    </div>

  </div>
</div>
            ))}
          </div>
        </section>

        <section id="Projects" className="section">
          <h2 className="heading">Featured <span>Projects</span></h2>
          <div className="projects-column">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-item-card ${expandedProject === index ? 'expanded' : ''}`}
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="toggle-icon">{expandedProject === index ? '−' : '+'}</span>
                </div>
                <div className="project-body">
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="section">
          <h2 className="heading">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div className="cert-card" key={i}>
  <div className="cert-inner">
    
    {/* FRONT */}
    <div className="cert-front">
      <h4>{cert.title}</h4>
      <p>Issued by: <span>{cert.issuer}</span></p>
    </div>

    {/* BACK */}
    <div className="cert-back">
      <h4>✔ Certified</h4>
      <p>{cert.title}</p>
      <span>{cert.issuer}</span>
    </div>

  </div>
</div>
            ))}
          </div>
        </section>

        <section id="achievements" className="section">
          <h2 className="heading">Major <span>Achievements</span></h2>
          <div className="achieve-gallery">
            {achievements.map((ach, index) => (
              <div key={index} className="achieve-box">
                <img src={ach.image} alt={ach.name} className="achieve-bg" />
                <div className="achieve-content">
                  <span className="rank">{ach.rank}</span>
                  <h4>{ach.name}</h4>
                  <p className="detail-text">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
  <h2 className="heading">Contact <span>Me</span></h2>
  <div className="contact-container">
    <div className="contact-info">
      <p><strong>Email:</strong> venkatchowdary144256@gmail.com</p>
      <p><strong>Phone:</strong> +91 9247456666</p>
      <p><strong>Location:</strong> Vijayawada, India</p>
    </div>
    <div className="contact-form-wrapper">
      {formStatus === 'success' ? (
        <div className="form-success">
          <h3>✅ Message Sent!</h3>
          <p>Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <form
          className="modern-form"
          action="https://formspree.io/mqkgrzab"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="btn-gradient" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
          {formStatus === 'error' && (
            <p className="form-error">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  </div>
</section>
      </main>

      <footer><p>© 2026 Designed with By Venkat Chowdary</p></footer>
    </div>
  );
}

export default App;
