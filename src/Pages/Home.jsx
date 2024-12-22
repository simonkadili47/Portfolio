import React, { useRef, useEffect } from "react";
import { Typed } from "react-typed";
import About from "./About";
import Resume from "./Resume";

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
    <div className="mt-28 font-sans"> 
      <div className="text-blue-500">
        <p>HEY! I AM</p>
      </div>
      <div className="mt-8 text-6xl font-bold">
        <p>Simon Kadili</p>
      </div>
      <div className="mt-4 text-xl text-gray-600">
        {/* Use the ref for the typed component */}
        <span ref={typedRef}></span>
      </div>

      <div className="mt-6">
        <About />
      </div> 
      <div>
    <Resume/>
      </div>
    </div>
  );
};

export default Home;
