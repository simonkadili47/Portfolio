import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Resume from './Pages/resume/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className='font-sans'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
