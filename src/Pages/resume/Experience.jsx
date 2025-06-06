import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div 
      id="Experience" 
      className="w-full mb-12 md:mb-20 pt-4 md:pt-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p 
        className="text-blue-700 text-left font-bold text-2xl md:text-3xl mb-6 md:mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Experience
      </motion.p>
      
      {/* First Experience */}
      <motion.div 
        className="mt-4 flex items-center justify-start"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-blue-700 rounded-full p-3 md:p-4 shadow-lg">
          <div className="text-white text-xl md:text-2xl">💼</div>
        </div>
        <p className="ml-4 text-gray-700 text-base md:text-lg font-semibold">12/2024 - Present</p>
      </motion.div>

      <motion.div 
        className="mb-6 ml-14 md:ml-16 text-left w-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.p 
          className="text-xl md:text-2xl font-bold text-black mb-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Web Developer
        </motion.p>
        <motion.p 
          className="text-base md:text-lg text-gray-800 mb-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55 }}
        >
          Upwork, World-Wide
        </motion.p>
        
        <div className="mt-4 space-y-3 w-full">
          {[
            "Designed and developed websites, portals, and large-scale web applications for multiple clients.",
            "Utilized a diverse range of technologies to create dynamic web applications tailored to client needs.",
            "Collaborated closely with UI and UX professionals to enhance the usability and visual appeal of websites.",
            "Prepared and delivered design presentations and proposals to clients."
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-gray-600 text-base md:text-lg flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-blue-600 text-xs md:text-sm mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0">•</div>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="border-t border-gray-300 mt-6 w-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        />
      </motion.div>

      {/* Second Experience */}
      <motion.div 
        className="mt-6 md:mt-8 flex items-center justify-start"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1 }}
      >
        <div className="bg-blue-700 rounded-full p-3 md:p-4 shadow-lg">
          <div className="text-white text-xl md:text-2xl">💼</div>
        </div>
        <p className="ml-4 text-gray-700 text-base md:text-lg font-semibold">07/2024-10/2024</p>
      </motion.div>

      <motion.div 
        className="mb-6 ml-14 md:ml-16 text-left w-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.p 
          className="text-xl md:text-2xl font-bold text-black mb-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
        >
          Web Master
        </motion.p>
        <motion.p 
          className="text-base md:text-lg text-gray-800 mb-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.35 }}
        >
          Amecore Limited, Dar es Salaam
        </motion.p>
        
        <div className="mt-4 space-y-3 w-full">
          {[
            "Developed company website mrkuku.org and company newsletter-blog blog.mrkuku.org",
            "Assisted employees with the use of company websites through one-on-one support, user guides, and training sessions.",
            "Maintained current knowledge of best practices and emerging developments in web design, web development, and technology.",
            "Performed other related duties as assigned."
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-gray-600 text-base md:text-lg flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <div className="text-blue-600 text-xs md:text-sm mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0">•</div>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="border-t border-gray-300 mt-6 w-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Experience;