import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SakuraEffect from './components/SakuraEffect';
import Hitodama from './components/Hitodama';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Passes from './pages/Passes';
import Schedule from './pages/Schedule';
import Location from './pages/Location';
import Sponsors from './pages/Sponsors';

function App() {
  useEffect(() => {
    const createSlash = (e: MouseEvent) => {
      const slash = document.createElement('div');
      slash.className = 'katana-slash';
      slash.style.left = `${e.clientX}px`;
      slash.style.top = `${e.clientY}px`;
      slash.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(slash);
      setTimeout(() => slash.remove(), 600);
    };

    window.addEventListener('mousedown', createSlash);

    return () => {
      window.removeEventListener('click', createRipple);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <LoadingScreen />

        {/* Global Japan Texture Overlay */}
        <div className="matsuri-overlay"></div>
        <SakuraEffect />
        <Hitodama />

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/passes" element={<Passes />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/location" element={<Location />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
