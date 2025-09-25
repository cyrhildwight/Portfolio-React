import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import cyrhilImg from '../assets/images/cyrhil.png';

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());


  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          } else {
            setVisibleElements(prev => {
              const updated = new Set(prev);
              updated.delete(entry.target.id);
              return updated;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Projects data - Industrial Technology & Laravel focused
  const projects = [
    {
      id: 1,
      title: "Smart Home Automation System",
      description: "Comprehensive home automation platform using Arduino/ESP8266 with MIT App Inventor mobile app. Features Firebase real-time database for instant updates, biometric door access control, IoT device management, and phone-based remote control for lights, security systems, and door automation.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Smart Home
      technologies: ["C++ Programming Language", "Arduino IDE", "ESP8266", "MIT App Inventor", "Firebase"],
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Digital Time Record (DTR) System",
      description: "Employee attendance and time tracking system built with Laravel. Features face capture, real-time reporting, payroll integration, and mobile-responsive dashboard for HR management.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80", // DTR/Clock-in
      technologies: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Industrial Equipment Landing Page",
      description: "Modern, responsive landing page for industrial equipment company. Features product showcases, interactive demos, customer testimonials, and integrated contact forms with lead generation.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Industrial Equipment
      technologies: ["Laravel", "JavaScript", "Tailwind CSS"],
      githubUrl: "#"
    },
  ];

  // Skills data - Industrial Technology & Laravel focused
  const skills = {
    programming: ["Laravel", "PHP", "JavaScript", "C++", "Tailwind CSS", "MySQL", "Firebase"],
    hardware: ["Arduino", "Raspberry Pi", "ESP8266", "PLC Programming", "Circuit Design", "Sensors"],
    industrial: ["Industrial Networking", "IoT Integration", "Robotics andAutomation"],
    tools: ["Github", "AutoCAD", "MIT App Inventor", "Firebase"],
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Theme Toggle removed for fixed dark theme */}

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</a>
          <a href="#skills" className="mobile-nav-link" onClick={toggleMobileMenu}>Skills</a>
          <a href="#projects" className="mobile-nav-link" onClick={toggleMobileMenu}>Projects</a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="geometric-pattern"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 
              className={`hero-title fade-scroll${visibleElements.has('hero-title') ? ' visible' : ''}`}
              data-animate="true"
              id="hero-title"
              style={{ 
                animationDelay: visibleElements.has('hero-title') ? '0s' : '0.5s',
                opacity: visibleElements.has('hero-title') ? 1 : 0,
                transform: visibleElements.has('hero-title') ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              Hi, I'm <span className="highlight">Cyrhil Dwight Lozano</span>
            </h1>
            <h2 
              className={`hero-subtitle fade-scroll${visibleElements.has('hero-subtitle') ? ' visible' : ''}`}
              data-animate="true"
              id="hero-subtitle"
              style={{ 
                animationDelay: visibleElements.has('hero-subtitle') ? '0.2s' : '0.7s',
                opacity: visibleElements.has('hero-subtitle') ? 1 : 0,
                transform: visibleElements.has('hero-subtitle') ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              Computer Technologist and <br></br> Web Developer
            </h2>
            <p 
              className={`hero-description fade-scroll${visibleElements.has('hero-description') ? ' visible' : ''}`}
              data-animate="true"
              id="hero-description"
              style={{ 
                animationDelay: visibleElements.has('hero-description') ? '0.4s' : '0.9s',
                opacity: visibleElements.has('hero-description') ? 1 : 0,
                transform: visibleElements.has('hero-description') ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              Bridging the gap between hardware and software, I specialize in Laravel development 
              and industrial automation solutions that drive manufacturing efficiency.
            </p>
            <button 
              className={`cta-button fade-scroll${visibleElements.has('hero-cta') ? ' visible' : ''}`}
              data-animate="true"
              id="hero-cta"
              style={{ 
                animationDelay: visibleElements.has('hero-cta') ? '0.6s' : '1.1s',
                opacity: visibleElements.has('hero-cta') ? 1 : 0,
                transform: visibleElements.has('hero-cta') ? 'translateY(0)' : 'translateY(30px)'
              }}
              onClick={() => {
                const section = document.getElementById('projects');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              View Projects
            </button>
          </div>
          <div 
            className={`hero-image fade-scroll${visibleElements.has('hero-image') ? ' visible' : ''}`}
            data-animate="true"
            id="hero-image"
            style={{ 
              animationDelay: visibleElements.has('hero-image') ? '0.8s' : '1.3s',
              opacity: visibleElements.has('hero-image') ? 1 : 0,
              transform: visibleElements.has('hero-image') ? 'translateX(0)' : 'translateX(50px)'
            }}
          >
            <div className="avatar-container">
              <img 
                src={cyrhilImg}
                alt="Industrial Technology Engineer" 
                className="avatar"
              />
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 
            className={`section-title fade-scroll${visibleElements.has('skills-title') ? ' visible' : ''}`}
            data-animate="true"
            id="skills-title"
            style={{ 
              opacity: visibleElements.has('skills-title') ? 1 : 0,
              transform: visibleElements.has('skills-title') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            Technical Skills
          </h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={category}
                className={`skill-category fade-scroll${visibleElements.has(`skill-category-${index}`) ? ' visible' : ''}`}
                data-animate="true"
                id={`skill-category-${index}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: visibleElements.has(`skill-category-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`skill-category-${index}`) ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="skill-badges">
                  {skillList.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className={`skill-badge fade-scroll${visibleElements.has(`skill-category-${index}`) ? ' visible' : ''}`}
                      style={{ 
                        animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`,
                        opacity: visibleElements.has(`skill-category-${index}`) ? 1 : 0,
                        transform: visibleElements.has(`skill-category-${index}`) ? 'scale(1)' : 'scale(0.8)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 
            className={`section-title fade-scroll${visibleElements.has('projects-title') ? ' visible' : ''}`}
            data-animate="true"
            id="projects-title"
            style={{ 
              opacity: visibleElements.has('projects-title') ? 1 : 0,
              transform: visibleElements.has('projects-title') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            Featured Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-card fade-scroll${visibleElements.has(`project-${index}`) ? ' visible' : ''}`}
                data-animate="true"
                id={`project-${index}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: visibleElements.has(`project-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`project-${index}`) ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 
            className={`section-title fade-scroll${visibleElements.has('contact-title') ? ' visible' : ''}`}
            data-animate="true"
            id="contact-title"
            style={{ 
              opacity: visibleElements.has('contact-title') ? 1 : 0,
              transform: visibleElements.has('contact-title') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            Let's Work Together
          </h2>
          <div 
            className={`contact-content fade-scroll${visibleElements.has('contact-content') ? ' visible' : ''}`}
            data-animate="true"
            id="contact-content"
            style={{ 
              opacity: visibleElements.has('contact-content') ? 1 : 0,
              transform: visibleElements.has('contact-content') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <p className="contact-description">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
            <button className="contact-button">Get In Touch</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Cyrhil Dwight Lozano. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
