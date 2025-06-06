import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Experience from "./Experience";

// Enhanced Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const educationItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const sidebarItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.6,
      ease: "backOut"
    }
  })
};

const Resume = () => {
  const [activeSection, setActiveSection] = useState("Education");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Education", "Experience", "Skills"];
      const scrollPosition = window.scrollY + 200;

      let currentSection = "Education";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop - 200 && scrollPosition < elementBottom) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    setTimeout(() => {
      handleScroll();
    }, 100);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div 
      className="px-4 md:px-0 flex flex-col md:flex-row w-full relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <motion.div 
        className="hidden md:block font-bold ml-6 space-y-6 text-left w-1/4 sticky top-28 h-fit"
        variants={containerVariants}
      >
        {["Education", "Experience", "Skills"].map((section, i) => (
          <motion.p 
            key={section}
            className={`cursor-pointer transition-all duration-300 text-lg hover:text-blue-500 ${
              activeSection === section 
                ? "text-blue-600 font-extrabold scale-105 border-l-4 border-blue-600 pl-4" 
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={sidebarItemVariants}
            custom={i}
          >
            {section}
          </motion.p>
        ))}
      </motion.div>

      {/* Mobile tabs - Shown on mobile, hidden on desktop */}
      <motion.div 
        className="md:hidden flex justify-around mb-6 sticky top-20 bg-white py-4 z-10 border-b"
        variants={itemVariants}
      >
        {["Education", "Experience", "Skills"].map((section) => (
          <motion.button
            key={section}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeSection === section
                ? "bg-blue-600 text-white font-bold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {section}
          </motion.button>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="md:ml-40 w-full">
        <motion.div 
          id="Education" 
          className="w-full mb-12 md:mb-20 pt-4 md:pt-8"
          variants={containerVariants}
        >
          <motion.p 
            className="text-blue-700 font-bold text-2xl md:text-3xl text-left mb-6 md:mb-8"
            variants={itemVariants}
          >
            Education
          </motion.p>
          
          {[
            {
              period: "2022-2025",
              degree: "Bachelor of Science in Information Technology",
              institution: "Ardhi University",
              description: "Graduated with GPA"
            },
            {
              period: "2017-2020",
              degree: "Diploma",
              institution: "Ardhi Institute Morogoro",
              description: "Took Geomatics"
            },
            {
              period: "2013-2016",
              degree: "Secondary Education",
              institution: "Kisarawe Lutheran Junior Seminary",
              description: "Took science subjects"
            }
          ].map((edu, i) => (
            <motion.div 
              key={i} 
              variants={containerVariants}
              custom={i}
            >
              <motion.div 
                className="mt-6 md:mt-8 flex items-center justify-start"
                variants={educationItemVariants}
                custom={i}
              >
                <motion.div 
                  className="bg-blue-700 rounded-full p-3 md:p-4 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.4 + i * 0.15,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  <div className="text-white text-xl md:text-2xl">🎓</div>
                </motion.div>
                <motion.p 
                  className="ml-4 text-gray-700 text-base md:text-lg font-semibold"
                  variants={educationItemVariants}
                  custom={i + 0.3}
                >
                  {edu.period}
                </motion.p>
              </motion.div>

              <motion.div 
                className="mb-6 ml-14 md:ml-16 text-left"
                variants={educationItemVariants}
                custom={i + 0.5}
              >
                <p className="text-xl md:text-2xl font-bold text-black mb-2">{edu.degree}</p>
                <p className="text-base md:text-lg text-gray-800 mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-base md:text-lg mb-4">{edu.description}</p>
                <motion.div 
                  className="border-t border-gray-300 mt-4 w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    delay: 0.6 + i * 0.15,
                    duration: 0.5
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <Experience />

        <div id="Skills" className="w-full mb-12 md:mb-20 pt-4 md:pt-8">
          <Skills /> 
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;