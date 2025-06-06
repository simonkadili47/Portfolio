import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${sectionId}`);
      setIsMenuOpen(false); 
    }
  };

  return (
    <nav className="p-4 fixed top-0 left-0 w-full bg-black z-50 shadow-md">
      <div className="flex font-sans justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white text-xl font-semibold">
          <p className="font-bold text-4xl text-blue-400 flex items-center">Simon</p>
        </div>

        <div className="flex items-center">
          <div className="text-white font-semibold hidden md:flex space-x-12">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="relative hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 hover:after:w-full transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="relative hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 hover:after:w-full transition-all duration-300"
            >
              About
            </a>
            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, "resume")}
              className="relative hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 hover:after:w-full transition-all duration-300"
            >
              Resume
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="relative hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 hover:after:w-full transition-all duration-300"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="relative hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 hover:after:w-full transition-all duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="relative hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-400 hover:after:w-full transition-all duration-300"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden ml-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Opens below the navbar */}
      <div
        className={`md:hidden bg-black shadow-lg w-full fixed left-0 ${
          isMenuOpen ? "top-16" : "-top-full"
        } transition-all duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-start p-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-white font-semibold py-2 hover:text-blue-400 w-full"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="text-white font-semibold py-2 hover:text-blue-400 w-full"
          >
            About
          </a>
          <a
            href="#resume"
            onClick={(e) => handleNavClick(e, "resume")}
            className="text-white font-semibold py-2 hover:text-blue-400 w-full"
          >
            Resume
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="text-white font-semibold py-2 hover:text-blue-400 w-full"
          >
            Services
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleNavClick(e, "testimonials")}
            className="text-white font-semibold py-2 hover:text-blue-400 w-full"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-white font-semibold py-2 hover:text-blue-400 w-full"
          >
            Contact
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;