import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="contact-intro">
          <p>Feel free to reach out. I’m active on LinkedIn and GitHub, and you can always drop an email.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon"><Mail size={24} /></div>
            <h4 className="contact-title">Email</h4>
            <p className="contact-desc">Let’s connect directly via email.</p>
            <a
              href="mailto:sandeepganesh@email.com"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} /> Send Email
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><Linkedin size={24} /></div>
            <h4 className="contact-title">LinkedIn</h4>
            <p className="contact-desc">View my profile and message me.</p>
            <a
              href="https://www.linkedin.com/in/sandeep-ganesh-259063290/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} /> Open LinkedIn
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><Github size={24} /></div>
            <h4 className="contact-title">GitHub</h4>
            <p className="contact-desc">Browse my projects and contributions.</p>
            <a
              href="https://github.com/githubhealer"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} /> Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
