import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import svceLogo from '../assets/svce-logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        const newState = !mobileMenuOpen;
        setMobileMenuOpen(newState);
        if (newState) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo-container" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
                    <img src={svceLogo} alt="SVCE Logo" className="logo-img-svce" />
                    <div className="brand-text">
                        <span className="brand-highways">HIGHWAYS</span>
                        <span className="brand-year">'26</span>
                    </div>
                </Link>

                <div className="mobile-toggle" onClick={toggleMobileMenu}>
                    <div className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></div>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <span>Home</span>
                    </Link>

                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <span>About</span>
                    </Link>

                    <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <span>Events</span>
                    </Link>

                    <a href="https://www.acesvce.in/" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        <span>Get Passes</span>
                    </a>

                    <Link to="/schedule" className={`nav-link ${location.pathname === '/schedule' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <span>Schedule</span>
                    </Link>

                    <Link to="/sponsors" className={`nav-link ${location.pathname === '/sponsors' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <span>Sponsors</span>
                    </Link>

                    <Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <span>Team</span>
                    </Link>

                    <Link to="/location" className={`nav-link ${location.pathname === '/location' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <span>Location</span>
                    </Link>

                    <a href="https://www.acesvce.in/" className="nav-cta" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Register</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
