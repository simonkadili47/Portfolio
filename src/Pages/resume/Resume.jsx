import React, { useState, useEffect } from "react";
import Skills from "./Skills";
import Experience from "./Experience";

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
    <div className="px-4 md:px-0 flex flex-col md:flex-row w-full relative min-h-screen">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className="hidden md:block font-bold ml-6 space-y-6 text-left w-1/4 sticky top-28 h-fit">
        {["Education", "Experience", "Skills"].map((section) => (
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

      {/* Mobile tabs - Shown on mobile, hidden on desktop */}
      <div className="md:hidden flex justify-around mb-6 sticky top-20 bg-white py-4 z-10 border-b">
        {["Education", "Experience", "Skills"].map((section) => (
          <button
            key={section}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeSection === section
                ? "bg-blue-600 text-white font-bold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => scrollToSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="md:ml-40 w-full">
        <div id="Education" className="w-full mb-12 md:mb-20 pt-4 md:pt-8">
          <p className="text-blue-700 font-bold text-2xl md:text-3xl text-left mb-6 md:mb-8">Education</p>
          
          <div className="mt-4 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-3 md:p-4 shadow-lg">
              <div className="text-white text-xl md:text-2xl">🎓</div>
            </div>
            <p className="ml-4 text-gray-700 text-base md:text-lg font-semibold">2022-2025</p>
          </div>

          <div className="mb-6 ml-14 md:ml-16 text-left">
            <p className="text-xl md:text-2xl font-bold text-black mb-2">Bachelor of Science in Information Technology</p>
            <p className="text-base md:text-lg text-gray-800 mb-1">Ardhi University</p>
            <p className="text-gray-500 text-base md:text-lg mb-4">Graduated with GPA</p>
            <div className="border-t border-gray-300 mt-4 w-full"></div>
          </div>

          <div className="mt-6 md:mt-8 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-3 md:p-4 shadow-lg">
              <div className="text-white text-xl md:text-2xl">🎓</div>
            </div>
            <p className="ml-4 text-gray-700 text-base md:text-lg font-semibold">2017-2020</p>
          </div>

          <div className="mb-6 ml-14 md:ml-16 text-left">
            <p className="text-xl md:text-2xl font-bold text-black mb-2">Diploma</p>
            <p className="text-base md:text-lg text-gray-800 mb-1">Ardhi Institute Morogoro</p>
            <p className="text-gray-500 text-base md:text-lg mb-4">Took science subjects</p>
            <div className="border-t border-gray-300 mt-4 w-full"></div>
          </div>
          
          <div className="mt-6 md:mt-8 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-3 md:p-4 shadow-lg">
              <div className="text-white text-xl md:text-2xl">🎓</div>
            </div>
            <p className="ml-4 text-gray-700 text-base md:text-lg font-semibold">2013-2016</p>
          </div>

          <div className="mb-6 ml-14 md:ml-16 text-left">
            <p className="text-xl md:text-2xl font-bold text-black mb-2">Secondary Education</p>
            <p className="text-base md:text-lg text-gray-800 mb-1">Kisarawe Lutheran Junior Seminary</p>
            <p className="text-gray-500 text-base md:text-lg mb-4">Took science subjects</p>
            <div className="border-t border-gray-300 mt-4 w-full"></div>
          </div>
        </div>

        <Experience />

        <div id="Skills" className="w-full mb-12 md:mb-20 pt-4 md:pt-8">
          <Skills /> 
        </div>
      </div>
    </div>
  );
};

export default Resume;