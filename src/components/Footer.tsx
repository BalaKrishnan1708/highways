import { Link } from 'react-router-dom';
import svceLogo from '../assets/svce-logo.png';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src={svceLogo} alt="SVCE" className="footer-logo-svce" />
                        <h3 className="footer-text-branding">HIGHWAYS '26</h3>
                    </div>

                    <div className="footer-links-group" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/events">Events</Link>
                        <a href="https://www.acesvce.in/" target="_blank" rel="noopener noreferrer">Passes</a>
                        <Link to="/schedule">Schedule</Link>
                        <Link to="/sponsors">Sponsors</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/location">Location</Link>
                    </div>

                    <div className="footer-social">
                        <div className="social-icons">
                            <a href="https://www.instagram.com/svce_highways?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <p style={{ display: 'inline', marginLeft: '15px', color: '#666', fontSize: '0.8rem' }}>highways@svce.ac.in</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Highways SVCE. All Rights Reserved. <span className="made-by">Theme: Imperial Japanese</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
