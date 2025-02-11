import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "CLOUD KITCHEN APP",
      tech: "Flutter, Dart, Firebase",
      description: [
        "Developed a cross-platform food delivery app using Flutter and Dart, enabling customers to explore menus, place orders, and track deliveries in real time.",
        "Integrated Firebase for backend services (authentication, database, analytics), ensuring <0.5s latency for real-time updates.",
        "Designed a user-friendly admin dashboard for restaurant owners to manage orders, inventory, and sales analytics, improving operational efficiency by 25%.",
        "Achieved 90% customer satisfaction through seamless UI/UX and cross-platform compatibility (Android/iOS)."
      ]
    },
    {
      title: "COLLEGE ACE PORTAL",
      tech: "React.js, Node.js, Express.js, MongoDB",
      description: [
        "Designed and developed a full-stack academic portal for students and faculty at CBIT College, streamlining attendance tracking, resource sharing, and event management.",
        "Built RESTful APIs using Node.js and Express.js, coupled with MongoDB for database operations, achieving 99% uptime and handling daily requests with <1s response time.",
        "Implemented role-based authentication and secure data encryption, reducing unauthorized access incidents.",
        "Enhanced user experience with React.js for frontend interactivity, cutting average page load time by 35% through code optimization and lazy loading."
      ]
    },
    {
      title: "DRIVER DROWSINESS DETECTION",
      tech: "Python, OpenCV, TensorFlow, CNN (Deep Learning)",
      description: [
        "Engineered a real-time drowsiness detection system using Convolutional Neural Networks (CNNs) to analyze facial features (eye closure, yawning, head position) from live video feeds.",
        "Trained the model on a dataset of 15,000+ labeled images/videos, achieving 96% accuracy in detecting fatigue states during validation.",
        "Integrated OpenCV for real-time frame processing and TensorFlow for model deployment, reducing latency to <0.3 seconds per frame.",
        "Implemented audio-visual alerts to warn drivers, demonstrating a 70% reduction in simulated accident risks during testing."
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <div className="tech-stack">
              <span>{project.tech}</span>
            </div>
            <ul>
              {project.description.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + index * 0.2 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 