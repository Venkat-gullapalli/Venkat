import React, { useState } from 'react';
import './App.css';
import ResumePDF from './resume.pdf';
import MyPhoto from './assets/venkat.jpg';

// Technology Logos
import pythonLogo from './assets/python.png';
import reactLogo from './assets/React.png';
import aiLogo from './assets/ai.png';
import droneLogo from './assets/drone.png';
import javaLogo from './assets/java.png';
import flaskLogo from './assets/flask.png';
import canvaLogo from './assets/canva.png';
import figmaLogo from './assets/figma.png';

// Institution & Award Images
import klUniversityImage from './assets/kl.png';
import sriChaitanyaImage from './assets/sri-chaitanya.jpeg';
import drGowthamImage from './assets/dr-gowtham.jpg';
import hackImage from './assets/hack.jpg';
import hackathonImage from './assets/hackathon.jpg';
import ideathonImage from './assets/ideathon.jpg'; 

function App() {
  const [expandedProject, setExpandedProject] = useState(null);

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
      name: "Library Management System",
      description: "The Library Management System (LMS) aims to streamline the process of managing library resources, including books, users, and transactions, through a web-based application developed using Flask. The system allows for efficient book cataloging, user registration, borrowing, and returning of books, with real-time tracking of book availability. Admins can manage book details, user accounts, and monitor transaction history. The application utilizes a simple, user-friendly interface, ensuring ease of access for both library staff and users. This solution improves operational efficiency, reduces manual workload, and enhances user experience in managing library resources."
    }
  ];

  const achievements = [
    { name: "HackAP Hackathon", rank: "3rd Place", image: hackImage, description: "Awarded for predictive maintenance solutions focused on infrastructure monitoring." },
    { name: "Amaravati Drone Summit 2024", rank: "3rd Place", image: hackathonImage, description: "Recognized for innovative UAV-based crack detection using deep learning." },
    { name: "Ideathon 2023", rank: "4th Place", image: ideathonImage, description: "Recognized for impactful idea presentation and practical feasibility." }
  ];

  const education = [
    { img: klUniversityImage, school: "KL University, Guntur", degree: "B.Tech in Computer Science", year: "2022 - 2026 | Pursuing" },
    { img: sriChaitanyaImage, school: "Sri Chaitanya Junior College", degree: "Higher Secondary | S.S.C", year: "2020 - 2022 | Completed" },
    { img: drGowthamImage, school: "Dr. K.K.R’s Gowtham School", degree: "10th | C.B.S.E", year: "2019 - 2020 | Completed" }
  ];

  // Certifications data to be displayed
  const certifications = [
    { title: "AWS Certified Cloud Practitioner", issuer: "AWS" },
    { title: "Azure AI Fundamentals", issuer: "Microsoft" },
    { title: "Linguaskill General", issuer: "Cambridge" },
    { title: "RPA Professional 2023", issuer: "Automation Anywhere" }
  ];

  return (
    <div className="App">
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
              <p>I’m G.Venkat, a Computer Science student dedicated to the intersection of AI and Robotics. My work focuses on pushing the boundaries of drone technology and automation—from designing custom UAVs to implementing YOLO-based computer vision for real-world infrastructure challenges. I’m driven by a curiosity to see how intelligent machines can reshape our world.</p>
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
            ].map(skill => (
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
                <img src={edu.img} alt={edu.school} className="edu-logo" />
                <div className="edu-info">
                  <h3>{edu.school}</h3>
                  <p>{edu.degree} | <span>{edu.year}</span></p>
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

        {/* ADDED CERTIFICATIONS SECTION HERE */}
        <section id="certifications" className="section">
          <h2 className="heading">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div className="cert-card" key={i}>
                <h4>{cert.title}</h4>
                <p>Issued by: <span>{cert.issuer}</span></p>
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
              <form className="modern-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="6" required></textarea>
                <button type="submit" className="btn-gradient">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer><p>© 2026 Designed by Venkat Chowdary</p></footer>
    </div>
  );
}

export default App;
