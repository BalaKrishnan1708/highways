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
                        <a href="#hero">Home</a>
                        <a href="#about">About</a>
                        <a href="#celebrities">Celebrities</a>
                        <a href="#glimpses">Glimpses</a>
                        <a href="https://www.acesvce.in/" target="_blank" rel="noopener noreferrer">Passes</a>
                        <a href="#location">Location</a>
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
                    <p>&copy; 2026 Highways SVCE. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
