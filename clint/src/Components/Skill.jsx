// src/Components/Skill.js
import React, { useEffect, useRef } from 'react';
import { FaReact, FaCss3Alt, FaJs, FaHtml5, FaBootstrap, FaNodeJs, FaGitAlt, FaSass, FaPython, FaFigma } from 'react-icons/fa';
import './Skill.css';

const skills = [
  { name: 'React.js', icon: <FaReact className="icon react" /> },
  { name: 'CSS', icon: <FaCss3Alt className="icon css" /> },
  { name: 'JavaScript', icon: <FaJs className="icon js" /> },
  { name: 'HTML', icon: <FaHtml5 className="icon html" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="icon bootstrap" /> },
  { name: 'Node.js', icon: <FaNodeJs className="icon node" /> },
  { name: 'Git', icon: <FaGitAlt className="icon git" /> },
  { name: 'Sass', icon: <FaSass className="icon sass" /> },
  { name: 'Python', icon: <FaPython className="icon python" /> },
  { name: 'Figma', icon: <FaFigma className="icon figma" /> },
];

const Skill = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollCards = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // Scroll by 1 pixel

        // Reset scroll position if it reaches the end
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0; // Reset to start
        }
      }
    };

    const interval = setInterval(scrollCards, 30); // Adjust timing for speed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div id="skill" className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-row" ref={scrollRef}>
        {/* Render skills twice for continuous scrolling */}
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="skill-card">
            <div>{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
