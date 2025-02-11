import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"]
    },
    {
      category: "Web Technologies",
      skills: ["React.js", "Node.js", "HTML5", "CSS3", "Express.js", "MongoDB"]
    },
    {
      category: "Cloud Technologies",
      skills: ["Google Cloud Platform", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Linux", "Agile"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 