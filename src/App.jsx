import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners'; // Changed to PulseLoader
import Navbar from './Components/Navbar';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Resume from './Pages/resume/Resume';
import Services from './Pages/services/Service';
import RecentProjects from './Pages/project/Project';
import Testimonials from './Pages/testimonials/Testimonials';
import Contact from './Pages/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsFadingOut(true); 
      setTimeout(() => setIsLoading(false), 500); 
    }, 3000); 

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div 
        className={`flex items-center justify-center min-h-screen bg-gray-50 transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      >
        <PulseLoader 
          color="#3B82F6"  
          size={25}      
          speedMultiplier={0.8} 
        />
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<RecentProjects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;