import React from 'react'
import image from "../../assets/kadili.jpeg"

const About = () => {
    return (
      <div>
        <div className="flex flex-col md:flex-row p-4 md:p-8 items-center">
          <div className="md:w-1/3">
            <img
              src={image}
              alt="Kadili"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Text Section with reduced spacing */}
          <div className="md:w-2/3 font-sans mt-8 md:ml-8 text-justify">
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            <p className="text-lg mt-1 font-sans leading-relaxed text-gray-700">
              Simon Kadili is a Full Stack Developer with 5 years of experience.
              He uses his passion and skills to create and build web products. He
              can work independently, with web agencies, companies, startups, and
              individuals to create digital blueprints.
            </p>
            <div className="space-y-2 mt-6">
              <p>
                <span className="font-bold text-xl">Name:</span>
                <span className="ml-20 text-xl text-gray-400">Simon Kadili</span>
              </p>
              <p>
                <span className="font-bold text-xl">Date of birth:</span>
                <span className="ml-6 text-xl text-gray-400"> Feb 18, *****</span>
              </p>
              <p>
                <span className="font-bold text-xl">Address:</span>
                <span className="ml-14 text-xl text-gray-400">
                  Tanzania, Dar es Salaam
                </span>
              </p>
              <p>
                <span className="font-bold text-xl">Email:</span>
                <span className="ml-20 text-xl text-gray-400">
                  simonkadili47@gmail.com
                </span>
              </p>
              <p>
                <span className="font-bold text-xl">Phone:</span>
                <span className="ml-16 text-xl text-gray-400">
                  +255-714-529-620
                </span>
              </p>
              <p>
                <span className="font-bold text-xl">Language:</span>
                <span className="ml-10 text-xl text-gray-400">
                  English, Swahili
                </span>
              </p>
              <p className="pt-4">
                <span className="text-blue-600">5</span> Project Completed
              </p>
              <div className="mt-3">
                <button className="rounded-full hover:text-black bg-blue-600 text-white px-6 py-2">
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