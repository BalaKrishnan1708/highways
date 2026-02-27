import { useEffect, useState } from 'react';
import svceLogo from '../assets/svce-logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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
                <a href="#hero" className="logo-container" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
                    <img src={svceLogo} alt="SVCE Logo" className="logo-img-svce" />
                    <div className="brand-text-single">
                        <span className="brand-highways">HIGHWAYS</span>
                        <span className="brand-year">'26</span>
                    </div>
                </a>

                <div className="mobile-toggle" onClick={toggleMobileMenu}>
                    <div className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></div>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                    <a href="#hero" className="nav-link" onClick={closeMobileMenu}>
                        <span>Home</span>
                    </a>

                    <a href="#about" className="nav-link" onClick={closeMobileMenu}>
                        <span>About</span>
                    </a>

                    <a href="#celebrities" className="nav-link" onClick={closeMobileMenu}>
                        <span>Celebrities</span>
                    </a>

                    <a href="#glimpses" className="nav-link" onClick={closeMobileMenu}>
                        <span>Glimpses</span>
                    </a>

                    <a href="https://www.acesvce.in/" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        <span>Get Passes</span>
                    </a>

                    <a href="#location" className="nav-link" onClick={closeMobileMenu}>
                        <span>Location</span>
                    </a>

                    <a href="https://www.acesvce.in/" className="nav-cta" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Register</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
