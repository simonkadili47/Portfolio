import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariantsUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const progressCircleVariants = {
  hidden: { strokeDashoffset: 251.2, opacity: 0, y: 10 },
  visible: {
    strokeDashoffset: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const progressBarVariants = {
  hidden: { width: 0, opacity: 0, y: 5 },
  visible: (proficiency) => ({
    width: `${proficiency}%`,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const Skills = () => {
  const categorySkills = [
    { name: "Backend Development", current: 80, lastYear: 75 },
    { name: "Frontend Development", current: 80, lastYear: 70 },
    { name: "Cross-Platform Apps", current: 50, lastYear: 40 },
  ];

  const detailedSkills = [
    { name: "PHP & Laravel", proficiency: 80 },
    { name: "MySQL & Postgress", proficiency: 75 },
    { name: "JavaScript, React.js & Next.js", proficiency: 80 },
    { name: "Bootstrap, Tailwind", proficiency: 80 },
    { name: "HTML 5 & CSS", proficiency: 80 },
  ];

  return (
    <motion.div 
      className="flex flex-col w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h2 
        className="text-blue-700 text-left font-bold text-3xl mb-8"
        variants={itemVariantsUp}
      >
        Skills
      </motion.h2>
      
      {/* Category Skills */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between mb-12"
        variants={containerVariants}
      >
        {categorySkills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md text-center w-full md:w-1/3 mx-0 md:mx-2 mb-4 md:mb-0"
            variants={itemVariantsUp}
            custom={index * 0.2}
          >
            <h3 className="text-black font-bold text-lg mb-2">{skill.name}</h3>
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  strokeDasharray={`${(skill.current / 100) * 251.2} 251.2`}
                  transform="rotate(-90 50 50)"
                  variants={progressCircleVariants}
                  custom={index * 0.2}
                />
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dy="0.3em"
                  className="text-black font-bold text-2xl"
                >
                  {skill.current}%
                </text>
              </svg>
            </div>
            <p className="text-gray-600 mt-2">{skill.lastYear}% last year</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Detailed Skills */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {detailedSkills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex items-center space-x-4"
            variants={itemVariantsUp}
            custom={index * 0.1}
          >
            <div className="w-3/4"> 
              <p className="text-black font-semibold text-lg mb-1">{skill.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-blue-600 h-2 rounded-full"
                  variants={progressBarVariants}
                  custom={skill.proficiency}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </div>
            <p className="text-black font-bold text-lg">{skill.proficiency}%</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;