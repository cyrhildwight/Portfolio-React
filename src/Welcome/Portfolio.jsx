import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import cyrhilImg from '../assets/images/cyrhil.png';
import LaravelLogo from '../assets/images/Laravel.svg';
import PHPLogo from '../assets/images/PHP.svg';
import JavaScriptLogo from '../assets/images/JavaScript.svg';
import CppLogo from '../assets/images/C++.svg';
import TailwindLogo from '../assets/images/Tailwind CSS.svg';
import MySQLLogo from '../assets/images/MySQL.svg';
import FirebaseLogo from '../assets/images/Firebase.svg';
import ArduinoLogo from '../assets/images/Arduino.svg';
import RaspberryPiLogo from '../assets/images/Raspberry Pi.svg';
import ESP8266Logo from '../assets/images/esp8266.svg';
import IndustrialLogo from '../assets/images/industrial.png';
import IoTLogo from '../assets/images/iot.svg';
import RobotLogo from '../assets/images/robot.png';
import GitHubLogo from '../assets/images/GitHub.svg';
import AutoCADLogo from '../assets/images/autocad.svg';
import MITLogo from '../assets/images/mit.png';

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

  // Skills data - Industrial Technology & Laravel focused with local brand logos
  const skills = {
    programming: [
      { name: "Laravel", logo: LaravelLogo },
      { name: "PHP", logo: PHPLogo },
      { name: "JavaScript", logo: JavaScriptLogo },
      { name: "C++", logo: CppLogo },
      { name: "Tailwind CSS", logo: TailwindLogo },
      { name: "MySQL", logo: MySQLLogo },
      { name: "Firebase", logo: FirebaseLogo }
    ],
    hardware: [
      { name: "Arduino", logo: ArduinoLogo },
      { name: "Raspberry Pi", logo: RaspberryPiLogo },
      { name: "ESP8266", logo: ESP8266Logo },
      { name: "PLC Programming", logo: IndustrialLogo }
    ],
    industrial: [
      { name: "Industrial Networking", logo: IndustrialLogo },
      { name: "IoT Integration", logo: IoTLogo },
      { name: "Robotics & Automation", logo: RobotLogo }
    ],
    tools: [
      { name: "Github", logo: GitHubLogo },
      { name: "AutoCAD", logo: AutoCADLogo },
      { name: "MIT App Inventor", logo: MITLogo },
      { name: "Firebase", logo: FirebaseLogo }
    ],
  };

  // Contact form state and handlers for API integration
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState('');
  const [contactError, setContactError] = useState('');

  const handleContactChange = e => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async e => {
    e.preventDefault();
    setContactLoading(true);
    setContactError('');
    setContactSuccess('');
    try {
  const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      const data = await res.json();
      if (res.ok) {
        setContactSuccess('Message sent!');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        setContactError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setContactError('Network error.');
    }
    setContactLoading(false);
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
            <a href="#about" className="nav-link">About</a>
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
          <a href="#about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</a>
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

      {/* About Me Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 
            className={`section-title fade-scroll${visibleElements.has('about-title') ? ' visible' : ''}`}
            data-animate="true"
            id="about-title"
            style={{ 
              opacity: visibleElements.has('about-title') ? 1 : 0,
              transform: visibleElements.has('about-title') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            About Me
          </h2>
          <div className="about-content">
            <div 
              className={`about-text fade-scroll${visibleElements.has('about-text') ? ' visible' : ''}`}
              data-animate="true"
              id="about-text"
              style={{ 
                opacity: visibleElements.has('about-text') ? 1 : 0,
                transform: visibleElements.has('about-text') ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <h3 className="about-subtitle">Computer Technologist & Web Developer</h3>
              <p className="about-description">
                With a passion for bridging the gap between hardware and software, I specialize in creating 
                innovative solutions that drive manufacturing efficiency. My expertise spans from industrial 
                automation and IoT integration to modern web development with Laravel.
              </p>
              <p className="about-description">
                I believe in the power of technology to transform industries, combining my background in 
                Computer Technology with hands-on experience in industrial automation, robotics, and 
                smart manufacturing systems.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-content">
                    <h4>Industrial Automation</h4>
                    <p>PLC programming, IoT integration, and smart manufacturing solutions</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💻</div>
                  <div className="highlight-content">
                    <h4>Web Development</h4>
                    <p>Laravel, PHP, and modern web technologies for business applications</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔧</div>
                  <div className="highlight-content">
                    <h4>Hardware Integration</h4>
                    <p>Arduino, Raspberry Pi, and embedded systems development</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className={`about-visual fade-scroll${visibleElements.has('about-visual') ? ' visible' : ''}`}
              data-animate="true"
              id="about-visual"
              style={{ 
                opacity: visibleElements.has('about-visual') ? 1 : 0,
                transform: visibleElements.has('about-visual') ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="about-image-container">
                <div className="about-image-placeholder">
                  <div className="tech-icons">
                    <div className="tech-icon">⚙️</div>
                    <div className="tech-icon">💻</div>
                    <div className="tech-icon">🔌</div>
                    <div className="tech-icon">📱</div>
                  </div>
                </div>
                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-number">2</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Technologies Mastered</div>
                  </div>
                </div>
              </div>  
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
            My Skills
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
                <div className="category-header">
                  <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                </div>
                <div className="skill-badges">
                  {skillList.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className={`skill-badge fade-scroll${visibleElements.has(`skill-category-${index}`) ? ' visible' : ''}`}
                      style={{ 
                        animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`,
                        opacity: visibleElements.has(`skill-category-${index}`) ? 1 : 0,
                        transform: visibleElements.has(`skill-category-${index}`) ? 'scale(1)' : 'scale(0.8)'
                      }}
                    >
                      <div className="skill-icon">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="skill-logo"
                        />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
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
            {/* Contact Info Section */}
            <div className="contact-info">
              <h3 className="contact-subtitle">Ready to Transform Your Ideas?</h3>
              <p className="contact-description">
                Whether you're looking to automate your manufacturing processes, build a custom web application, 
                or integrate IoT solutions, I'm here to help bring your vision to life with cutting-edge technology.
              </p>
              
              <div className="contact-features">
                <div className="contact-feature">
                  <div className="contact-feature-icon">⚡</div>
                  <div className="contact-feature-content">
                    <h4>Fast Response</h4>
                    <p>I typically respond within 24 hours to discuss your project requirements.</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="contact-feature-icon">🔧</div>
                  <div className="contact-feature-content">
                    <h4>Custom Solutions</h4>
                    <p>Tailored industrial automation and web development solutions for your specific needs.</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="contact-feature-icon">📈</div>
                  <div className="contact-feature-content">
                    <h4>Proven Results</h4>
                    <p>Successfully delivered 5+ projects with measurable efficiency improvements.</p>
                  </div>
                </div>
              </div>

              <div className="contact-stats">
                <div className="contact-stat">
                  <div className="contact-stat-number">24h</div>
                  <div className="contact-stat-label">Response Time</div>
                </div>
                <div className="contact-stat">
                  <div className="contact-stat-number">100%</div>
                  <div className="contact-stat-label">Project Success</div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="contact-form-header">
                  <h3 className="contact-form-title">Get In Touch</h3>
                  <p className="contact-form-subtitle">
                    Tell me about your project and let's discuss how we can work together to achieve your goals.
                  </p>
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your Full Name" 
                    className="form-input"
                    required 
                    value={contactForm.name}
                    onChange={handleContactChange}
                  />
                  <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="your.email@company.com" 
                    className="form-input"
                    required 
                    value={contactForm.email}
                    onChange={handleContactChange}
                  />
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Describe your project, timeline, and any specific requirements you have in mind..." 
                    className="form-textarea"
                    rows="6"
                    required
                    value={contactForm.message}
                    onChange={handleContactChange}
                  ></textarea>
                  <label htmlFor="message" className="form-label">Project Details</label>
                </div>
                <button type="submit" className="contact-button" disabled={contactLoading}>
                  <span>{contactLoading ? 'Sending...' : 'Send Message'}</span>
                  <span style={{ marginLeft: '8px' }}>→</span>
                </button>
                {contactSuccess && <div style={{ color: '#4caf50', marginTop: '1rem', textAlign: 'center' }}>{contactSuccess}</div>}
                {contactError && <div style={{ color: '#ff4d4f', marginTop: '1rem', textAlign: 'center' }}>{contactError}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-profile">
                <img 
                  src={cyrhilImg}
                  alt="Cyrhil Dwight Lozano" 
                  className="footer-avatar"
                />
                <div className="footer-profile-info">
                  <h3 className="footer-title">Cyrhil Dwight Lozano</h3>
                  <p className="footer-description">
                    Computer Technologist & Web Developer specializing in industrial automation and modern web solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <div className="footer-links">
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">About</a>
                <a href="#skills" className="footer-link">Skills</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-subtitle">Technologies</h4>
              <div className="footer-tech">
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Arduino</span>
                <span className="tech-tag">IoT</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Cyrhil Dwight Lozano. All rights reserved.</p>
            <div className="footer-social">
              <span className="social-text">Connect with me</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
