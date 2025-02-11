import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Google Cloud Skills Boost",
      details: [
        "Gold league in Google Cloud Skills Boost",
        "Complete the intermediate Build Infrastructure with Terraform on Google Cloud skill badge",
        "Complete the intermediate Develop your Google Cloud Network on Google Cloud skill badge"
      ]
    },
    {
      title: "Certifications",
      details: [
        "Google Cloud Career Launchpad Cloud Engineer track",
        "Codegnan MERN Stack Developer Intern",
        "Bytexl Python Product Based Training"
      ]
    },
    {
      title: "Sports Achievement",
      details: [
        "Annual Sports Winner SHRUTHI '23 Basket Ball Men"
      ]
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Achievements & Certifications
      </motion.h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{achievement.title}</h3>
            <ul>
              {achievement.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements; 