import React, { useRef, useEffect } from "react";
import { Typed } from "react-typed";
import About from "../about/About";
import Resume from "../resume/Resume";
import Services from "../services/Service";
import RecentProjects from "../project/Project";
import Testimonials from "../testimonials/Testimonials";
import Freelancing from "../testimonials/Freelancing";
import Contact from "../contact/Contact";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: [
          "I am a Full Stack Developer.",
          "I am a Frontend Developer.",
          "I am a Backend Developer.",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
      });
    }
  }, []);

  return (
    <div className="font-sans">
      <div className="bg-gray-100 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-blue-500 text-center">
            <p>HEY! I AM</p>
          </div>
          <div className="mt-6 text-6xl font-bold text-center">
            <p>Simon Kadili</p>
          </div>
          <div className="mt-3 text-xl text-gray-600 text-center">
            <span ref={typedRef}></span>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <About />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Resume />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Services />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <RecentProjects />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Testimonials />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Freelancing />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-8 pt-8 pb-0">
          <Contact />
        </div>
      </div>

      
    </div>
  );
};

export default Home;