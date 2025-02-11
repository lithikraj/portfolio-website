import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      school: "CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY",
      degree: "B.E IN INFORMATION TECHNOLOGY",
      location: "Hyderabad, India",
      cgpa: "7.26 / 10.0",
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

  return (
    <section id="education" className="education-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{edu.school}</h3>
            <h4>{edu.degree}</h4>
            <p>{edu.location}</p>
            <p>CGPA: {edu.cgpa}</p>
            <span className="period">{edu.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education; 