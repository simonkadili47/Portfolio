import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className='font-sans'>
        <Navbar />
        <Routes>
          {/* Redirect root path (/) to /home */}
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
