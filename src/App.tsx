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
    const createRipple = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple-effect';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 800);
    };

    window.addEventListener('click', createRipple);

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
