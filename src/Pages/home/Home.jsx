import React, { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import About from "../about/About";
import Resume from "../resume/Resume";
import Services from "../services/Service";
import RecentProjects from "../project/Project";
import Testimonials from "../testimonials/Testimonials";
import Freelancing from "../testimonials/Freelancing";
import Contact from "../contact/Contact";

const Home = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const freelancingRef = useRef(null);
  const contactRef = useRef(null);
  const typedRef = useRef(null);

  // Handle scrolling to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  React.useEffect(() => {
    const hash = window.location.hash;
    const sectionRefs = {
      "#home": homeRef,
      "#about": aboutRef,
      "#resume": resumeRef,
      "#services": servicesRef,
      "#projects": projectsRef,
      "#testimonials": testimonialsRef,
      "#freelancing": freelancingRef,
      "#contact": contactRef,
    };

    if (hash && sectionRefs[hash]) {
      scrollToSection(sectionRefs[hash]);
    }
  }, []);

  return (
    <div className="font-sans">
      <div className="bg-gray-100 py-20 mt-16" ref={homeRef} id="home">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-blue-500 text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
            }}
            initial="hidden"
            animate="visible"
          >
            <p>HEY! I AM</p>
          </motion.div>
          <motion.div
            className="mt-6 text-6xl font-bold text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <p>Simon Kadili</p>
          </motion.div>
          <div className="mt-3 text-xl text-gray-600 text-center">
            <TypeAnimation
              sequence={[
                "I am a Full Stack Developer.",
                2000,
                "I am a Frontend Developer.",
                2000,
                "I am a Backend Developer.",
                2000,
              ]}
              speed={20}
              deletionSpeed={15}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              ref={typedRef}
            />
          </div>
        </div>
      </div>
      <div className="bg-white" ref={aboutRef} id="about">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <About />
        </div>
      </div>
      <div className="bg-white" ref={resumeRef} id="resume">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Resume />
        </div>
      </div>
      <div className="bg-white" ref={servicesRef} id="services">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Services />
        </div>
      </div>
      <div className="bg-white" ref={projectsRef} id="projects">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <RecentProjects />
        </div>
      </div>
      <div className="bg-white" ref={testimonialsRef} id="testimonials">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Testimonials />
        </div>
      </div>
      <div className="bg-white" ref={freelancingRef} id="freelancing">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Freelancing />
        </div>
      </div>
      <div className="bg-white" ref={contactRef} id="contact">
        <div className="max-w-7xl mx-auto px-8 pt-8 pb-0">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;