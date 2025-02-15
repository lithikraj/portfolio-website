import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="name-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          LITHIKRAJ NARAYANA
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Full Stack Developer</h2>
          <span className="role-text">Cloud Engineer</span>
          <span className="role-text">Python Developer</span>
        </motion.div>

        <motion.div 
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:lithikraj03@gmail.com">
            <i className="fas fa-envelope"></i>
            lithikraj03@gmail.com
          </a>
          <a href="tel:+919618500442">
            <i className="fas fa-phone"></i>
            +91-9618500442
          </a>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="https://www.linkedin.com/in/lithikraj12" target="_blank" rel="noopener noreferrer" className="animated-button">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
          <a href="https://github.com/lithikraj" target="_blank" rel="noopener noreferrer" className="animated-button">
            <i className="fab fa-github"></i>
            GitHub
          </a>
          <a href="https://leetcode.com/u/lithikraj03/" target="_blank" rel="noopener noreferrer" className="animated-button">
            <i className="fas fa-code"></i>
            LeetCode
          </a>
          <a href="https://www.cloudskillsboost.google/public_profiles/3c024265-cc0c-4790-a002-da754279cb1b" 
             target="_blank" 
             rel="noopener noreferrer"
             className="animated-button">
            <i className="fab fa-google"></i>
            Cloud Skills Boost
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home; 