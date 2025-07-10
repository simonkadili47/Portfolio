import React from 'react';
import image from "../../assets/kadili.jpeg";
import cvFile from "../../Pages/about/SIMON KADILI Cv IT.pdf"

const About = () => {
  
  const handleDownloadCV = () => {

    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Simon Kadili CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about" className="px-4 md:px-8 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={image}
            alt="Kadili"
            className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-2/3 md:ml-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">About Me</h1>
          <p className="text-base md:text-lg mt-4 font-sans leading-relaxed text-gray-700">
            Simon Kadili is a Full Stack Developer with 1 year of experience.
            He uses his passion and skills to create and build web products. I
            can work independently, with web agencies, companies, startups, and
            individuals to create digital blueprints.
          </p>
          

          <div className="mt-6 space-y-3 md:space-y-2">
            <div className="flex flex-col md:flex-row">
              <span className="font-bold text-lg md:text-xl min-w-[120px]">Name:</span>
              <span className="text-lg md:text-xl text-gray-600 md:ml-4">Simon Kadili</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="font-bold text-lg md:text-xl min-w-[120px]">Date of birth:</span>
              <span className="text-lg md:text-xl text-gray-600 md:ml-4">Feb 18, *****</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="font-bold text-lg md:text-xl min-w-[120px]">Address:</span>
              <span className="text-lg md:text-xl text-gray-600 md:ml-4">Tanzania, Dar es Salaam</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="font-bold text-lg md:text-xl min-w-[120px]">Email:</span>
              <span className="text-lg md:text-xl text-gray-600 md:ml-4">simonkadili47@gmail.com</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="font-bold text-lg md:text-xl min-w-[120px]">Phone:</span>
              <span className="text-lg md:text-xl text-gray-600 md:ml-4">+255-714-529-620</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="font-bold text-lg md:text-xl min-w-[120px]">Language:</span>
              <span className="text-lg md:text-xl text-gray-600 md:ml-4">English, Swahili</span>
            </div>
            
            <div className="pt-4 text-center md:text-left">
              <span className="text-blue-600">2</span> Project Completed
            </div>
            
            <div className="mt-4 text-center md:text-left">
              <button 
                onClick={handleDownloadCV}
                className="rounded-full hover:bg-blue-700 transition-colors bg-blue-600 text-white px-6 py-2 text-sm md:text-base"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;