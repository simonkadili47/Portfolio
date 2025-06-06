import React from "react";

const Freelancing = () => {
  return (
    <div className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto text-center bg-slate-50 w-full p-6 md:p-12 rounded-xl shadow-lg"> 
          <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">I'm Available for Freelancing</h3> 
          <p className="text-lg md:text-2xl text-gray-600 mb-4 md:mb-6"> 
            You can now hire me remotely via Upwork Freelancing Platform.
          </p>
          <a
            href="https://www.upwork.com/freelancers/~YOUR_PROFILE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-base md:text-xl transition-colors duration-300" 
          >
            HIRE ME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Freelancing;