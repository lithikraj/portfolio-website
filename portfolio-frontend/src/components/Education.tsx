import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      school: "CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY",
      degree: "B.E IN INFORMATION TECHNOLOGY",
      location: "Hyderabad, India",
      cgpa: "7.49 / 10.0",
      period: "2022-2025"
    },
    {
      school: "TRR COLLEGE OF TECHNOLOGY(POLYTECHNIC)",
      degree: "DIPLOMA IN COMPUTER ENGINEERING IN CME",
      location: "Hyderabad, India",
      cgpa: "6.44 / 10.0",
      period: "2018-2021"
    },
    {
      school: "DILSUKHNAGAR PUBLIC SCHOOL",
      degree: "CLASS X",
      location: "Hyderabad, India",
      cgpa: "8.5/10.0",
      period: "2012-2018"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    }
  };

  return (
    <section id="education" className="education-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        Education
      </motion.h2>
      <motion.div 
        className="education-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <h3>{edu.school}</h3>
            <h4>{edu.degree}</h4>
            <p>{edu.location}</p>
            <p>CGPA: {edu.cgpa}</p>
            <span className="period">{edu.period}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education; 