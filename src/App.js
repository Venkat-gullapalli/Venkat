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

import hackathonImage from './assets/hackathon.jpg';
import ideathonImage from './assets/ideathon.jpg'; // ✅ NEW IMPORT

function App() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedAchievement, setExpandedAchievement] = useState(null);

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
    {
      name: " Amaravati Drone Summit 2024 ",
      description: "Awarded 3rd place in prestigious Amaravati Drone Summit 2024 for a project on crack detection using drones. The innovative solution showcased the use of unmanned aerial vehicles (UAVs) and deep learning for automated structural health monitoring, helping to identify cracks in infrastructure with greater accuracy and efficiency.",
      image: hackathonImage
    },
    {
      name: " Ideathon 2023 ",
      description: "Secured 4th place in Ideathon 2023 conducted by ACIC-KL Startups Foundation. The project demonstrated innovation in applying emerging technologies to real-world problems. Awarded a cash prize of ₹2500 as recognition for impactful idea presentation and practical feasibility.",
      image: ideathonImage
    }
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const toggleAchievement = (index) => {
    setExpandedAchievement(expandedAchievement === index ? null : index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo-text">
            <img src={require('./assets/logo.png')} alt="Logo" className="logo-image" />
            Gullapalli Venkat
          </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About</h2>
          <div className="about-container">
            <img src={MyPhoto} alt="Venkat" className="about-image" />
            <div className="about-text">
              <p>
                I'm Venkat, a passionate Computer Science student with a strong interest in the dynamic world of technology and innovation. With a deep fascination for drone manufacturing, artificial intelligence, and the ever-evolving landscape of technology, I am committed to exploring and developing cutting-edge solutions. My curiosity drives me to discover how AI and automation can reshape industries and make an impactful difference. As I continue my journey, I am excited to collaborate with like-minded professionals, innovators, and mentors in the fields of AI, drone technology, and innovation. Let's connect and drive forward this exciting technological revolution together!
              </p>
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                <button className="resume-button">Resume</button>
              </a>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {[
              { img: pythonLogo, name: 'Python' },
              { img: reactLogo, name: 'ReactJS' },
              { img: aiLogo, name: 'AI' },
              { img: droneLogo, name: 'Drone' },
              { img: javaLogo, name: 'Java' },
              { img: flaskLogo, name: 'Flask' },
              { img: canvaLogo, name: 'Canva' },
              { img: figmaLogo, name: 'Figma' }
            ].map(skill => (
              <div className="skill-box" key={skill.name}>
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="education-container">
            {[{
              img: klUniversityImage, title: "Bachelor of Engineering in Computer Science & Engineering",
              school: "KL University, Guntur", duration: "2022 - 2026 | Pursuing"
            }, {
              img: sriChaitanyaImage, title: "Higher Secondary | S.S.C",
              school: "Sri Chaitanya Junior College", duration: "2020 - 2022 | Completed"
            }, {
              img: drGowthamImage, title: "10th | C.B.S.E",
              school: "Dr. K.K.R’s Gowtham School", duration: "2019 - 2020 | Completed"
            }].map((edu, idx) => (
              <div className="education-card" key={idx}>
                <img src={edu.img} alt={edu.school} />
                <div>
                  <h3>{edu.title}</h3>
                  <p>{edu.school}</p>
                  <p>{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="Projects">
          <h2>Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => toggleProject(index)}
              >
                <h3 className="project-title">{project.name}</h3>
                {expandedProject === index && (
                  <p className="project-description">{project.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          <div className="timeline">
            {[
              {
                title: "AWS Certified Cloud Practitioner",
                issuer: "AWS"
              },
              {
                title: "Linguaskill General",
                issuer: "Cambridge"
              },
              {
                title: "Azure AI Fundamentals",
                issuer: "Microsoft"
              },
              {
                title: "AUTOMATION ANYWHERE CERTIFIED ESSENTIALS RPA PROFESSIONAL 2023",
                issuer: "AUTOMATION ANYWHERE"
              }
            ].map((cert, idx) => (
              <div className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
                <div className="timeline-content">
                  <h3>{cert.title}</h3>
                  <p><strong>Issued by:</strong> {cert.issuer}</p>
                  <p>{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <div className="achievements-container">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card"
                onClick={() => toggleAchievement(index)}
              >
                <h3 className="achievement-title">{achievement.name}</h3>
                {expandedAchievement === index && (
                  <div className="achievement-details">
                    <img src={achievement.image} alt={achievement.name} className="achievement-image" />
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-container">
            <div>
              <p><strong>Email:</strong> venkatchowdary144256@gmail.com</p>
              <p><strong>Phone:</strong> +91 9247456666</p>
              <p><strong>Location:</strong> Vijayawada, India</p>
            </div>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>Designed with ❤️ by Venkat</p>
      </footer>
    </div>
  );
}

export default App;
