import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="app">
        {/* Header */}
        <header className="header">
          <h1>Tal Simantov</h1>
          <p>Full Stack Developer</p>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>

        {/* About */}
        <motion.section
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <h2>About Me</h2>
          <p>
            Full Stack Developer with 3+ years of experience building scalable, user-centric web applications and cloud-based solutions.
            Proficient in React, Node.js, Express, MongoDB, and Docker, with strong expertise in both frontend and backend development.
            Experienced in authentication, API integrations, and cloud deployment.
            Known for clean, maintainable code, problem-solving skills, and a collaborative approach.
            Eager to deliver impactful solutions as part of an innovative team.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <h2>Technical Skills</h2>
          <ul className="skills">
            <li>HTML5 / CSS3 / JavaScript</li>
            <li>React / Node.js / Express</li>
            <li>MongoDB / SQL</li>
            <li>Git / GitHub / Docker / REST APIs</li>
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={fadeInUp}
        >
          <h2>My Projects</h2>
          <div className="projects">
            <motion.div
              className="project"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/Top-Tech.png" alt="Top-Tech Project" className="project-img" />
              <h3>Top Tech</h3>
              <p>Built a full-stack e-commerce app with React, Node.js, Express, and MongoDB</p>
              <a href="https://github.com/Talsi95/Top-Tech-App.git" target="_blank">🔗 GitHub</a>
              <a href="https://top-tech.onrender.com" target="_blank">🔗 Live Demo</a>
            </motion.div>
            <motion.div
              className="project"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/YelpCamp.png" alt="YelpCamp Project" className="project-img" />
              <h3>YelpCamp</h3>
              <p>Built campground management system with authentication, authorization, and CRUD operations</p>
              <a href="https://github.com/Talsi95/YelpCamp-React-Talsi.git" target="_blank">🔗 GitHub</a>
              <a href="https://yelpcamp-talsi.onrender.com" target="_blank">🔗 Live Demo</a>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeInUp}
        >
          <h2>Contact Me</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/tal-simantov-a6a787382" target="_blank">🔗 LinkedIn</a>
            <a href="https://github.com/Talsi95" target="_blank">🔗 GitHub</a>
            <a href="https://wa.me/972585881800" target="_blank">🔗 WhatsApp</a>
            <a href="mailto:talsiman95@gmail.com">✉️ Email</a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer>
          <p>© 2025 Tal Simantov | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
