import React, { useState, useEffect } from "react";
import Skills from "./Skills";
import Experience from "./Experience";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("Education");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Education", "Experience", "Skills",];
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
    <div className="px-4 flex w-full relative min-h-screen">
      <div className="font-bold ml-6 space-y-6 text-left w-1/4 sticky top-28 h-fit">
        {["Education", "Experience", "Skills",].map((section) => (
          <p 
            key={section}
            className={`cursor-pointer transition-all duration-300 text-lg hover:text-blue-500 ${
              activeSection === section 
                ? "text-blue-600 font-extrabold scale-105 border-l-4 border-blue-600 pl-4" 
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => scrollToSection(section)}
          >
            {section}
          </p>
        ))}
      </div>

      <div className="ml-40 flex flex-col items-start max-w-full w-full">
        <div id="Education" className="w-full max-w-full mb-20 pt-8">
          <p className="text-blue-700 font-bold text-3xl text-left mr-16 mb-8">Education</p>
          
          <div className="mt-4 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-4 shadow-lg">
              <div className="text-white text-2xl">🎓</div>
            </div>
            <p className="ml-4 text-gray-700 text-lg font-semibold">2022-2025</p>
          </div>

          <div className="mb-6 ml-16 text-left">
            <p className="text-2xl font-bold text-black mb-2">Bachelor of Science in Information Technology</p>
            <p className="text-lg text-gray-800 mb-1">Ardhi University</p>
            <p className="text-gray-500 text-lg mb-4">Graduated with GPA</p>
            <div className="border-t border-gray-300 mt-4 w-full"></div>
          </div>

          <div className="mt-8 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-4 shadow-lg">
              <div className="text-white text-2xl">🎓</div>
            </div>
            <p className="ml-4 text-gray-700 text-lg font-semibold">2017-2020</p>
          </div>

          <div className="mb-6 ml-16 text-left">
            <p className="text-2xl font-bold text-black mb-2">Diploma</p>
            <p className="text-lg text-gray-800 mb-1">Ardhi Institute Morogoro</p>
            <p className="text-gray-500 text-lg mb-4">Took science subjects</p>
            <div className="border-t border-gray-300 mt-4 w-full"></div>
          </div>
          
          <div className="mt-8 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-4 shadow-lg">
              <div className="text-white text-2xl">🎓</div>
            </div>
            <p className="ml-4 text-gray-700 text-lg font-semibold">2013-2016</p>
          </div>

          <div className="mb-6 ml-16 text-left">
            <p className="text-2xl font-bold text-black mb-2">Secondary Education</p>
            <p className="text-lg text-gray-800 mb-1">Kisarawe Lutheran Junior Seminary</p>
            <p className="text-gray-500 text-lg mb-4">Took science subjects</p>
            <div className="border-t border-gray-300 mt-4 w-full"></div>
          </div>
        </div>

        <Experience />

        <div id="Skills" className="w-full max-w-full mb-20 pt-8">
          <Skills /> 
        </div>
      </div>
    </div>
  );
};

export default Resume;