import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="flex font-sans justify-between items-center">
        <div className="text-black text-xl font-semibold">
          <p className='font-bold text-4xl text-blue-700 flex items-center'>
            Simon
          </p>
        </div>
        <div className="text-black font-semibold hidden md:flex space-x-12 pr-16">
          <a 
            href="/" 
            className="relative hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full transition-all duration-300">
            Home
          </a>
          <a 
            href="/about" 
            className="relative hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full transition-all duration-300">
            About
          </a>
          <a 
            href="/resume" 
            className="relative hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full transition-all duration-300">
            Resume
          </a>
          <a 
            href="/service" 
            className="relative hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full transition-all duration-300">
            Service
          </a>
          <a 
            href="/testimonial" 
            className="relative hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full transition-all duration-300">
            Testimonials
          </a>
          <a 
            href="/contact" 
            className="relative hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full transition-all duration-600">
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
