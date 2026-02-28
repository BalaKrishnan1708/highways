import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <style>
        {`
          @keyframes slideUpFade {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          .giant-footer-text {
            /* Adjusted for better mobile scaling */
            font-size: clamp(2.5rem, 10vw, 15rem); 
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
            font-weight: 400;
            text-align: center;
            line-height: 1;
            letter-spacing: -0.02em;
            margin: 0 auto;
            color: #fce4e4;
            white-space: nowrap; 
            animation: slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            transition: transform 0.5s ease, opacity 0.5s ease;
            cursor: default;
          }
          
          .giant-footer-text:hover {
            transform: scale(1.01); 
            opacity: 0.9;
          }
          
          .footer-nav-link {
            color: #ffffff;
            text-decoration: none;
            opacity: 0.7;
            font-weight: bold;
            font-size: 0.85rem;
            letter-spacing: 1px;
            transition: opacity 0.3s ease;
          }
          
          .footer-nav-link:hover {
            opacity: 1;
          }

          /* --- Responsive Grid System --- */
          .footer-top-grid {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
            gap: 40px;
            padding-bottom: 60px;
          }

          .footer-heading {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 25px;
            opacity: 0.4;
            font-weight: 700;
          }

          .footer-links-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .footer-circle-logo {
            width: 100px;
            height: 100px;
            border: 1px dashed rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .logo-text {
            font-size: 1.2rem;
            font-family: serif;
            letter-spacing: 2px;
            margin: 0;
          }

          .logo-est {
            font-size: 0.5rem;
            opacity: 0.5;
            letter-spacing: 1px;
          }

          .brand-tagline p {
            font-family: serif;
            font-size: 1.1rem;
            margin: 0;
          }

          /* Media query to stack layout on mobile devices */
          @media (max-width: 950px) {
            .footer-top-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 50px;
            }
          }

          @media (max-width: 550px) {
            .footer-top-grid {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .brand-section, .footer-circle-logo {
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}
      </style>

      <footer
        style={{
          background: 'radial-gradient(circle at top, #3a1111 0%, #1a0505 80%, #000000 100%)',
          color: '#ffffff',
          padding: '80px 6% 20px',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        <div className="footer-top-grid">
          {/* Section 1: Brand Identity */}
          <div className="brand-section">
            <div className="footer-circle-logo">
              <h2 className="logo-text">SVCE</h2>
              <span className="logo-est">EST. 2026</span>
            </div>
            <div className="brand-tagline">
              <p>Highways 2026</p>
              <p className="opacity-50 text-[0.7rem] uppercase tracking-[2px]">Sacred Carnival</p>
            </div>
          </div>

          {/* Section 2: Quick Navigation */}
          <div className="nav-section">
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-links-list">
              <li><Link to="/events" className="footer-nav-link">Events</Link></li>
              <li><a href="https://www.acesvce.in/" className="footer-nav-link" target="_blank" rel="noopener noreferrer">Get Passes</a></li>
              <li><Link to="/sponsors" className="footer-nav-link">Sponsors</Link></li>
              <li><Link to="/team" className="footer-nav-link">Team</Link></li>
            </ul>
          </div>

          {/* Section 3: Location Info */}
          <div className="location-section">
            <h4 className="footer-heading">Reach Us</h4>
            <div className="location-details text-[0.85rem] leading-[2] opacity-70 font-bold">
              <p>Sri Venkateswara</p>
              <p>College Of Engineering</p>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

          {/* Section 4: Connect */}
          <div className="connect-section">
            <h4 className="footer-heading">Social</h4>
            <ul className="footer-links-list">
              <li><a href="https://www.instagram.com/svce_highways?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-nav-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Giant Text & Copyright Reordered */}
        <div style={{ width: '100%', textAlign: 'center' }}>

          {/* The Giant Animated Text */}
          <h1 className="giant-footer-text">HIGHWAYS'26</h1>

          <div
            style={{
              opacity: 0.4,
              fontSize: '11px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              marginTop: '10px',
              paddingTop: '20px',
            }}
          >
            © 2026 HIGHWAYS SVCE.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;