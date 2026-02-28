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
            grid-template-columns: 1fr 2fr;
            gap: 60px;
            padding-bottom: 60px;
          }

          .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            text-transform: none;
          }

          .brand-container {
            display: flex;
            align-items: flex-start;
          }

          /* Media query to stack layout on mobile devices */
          @media (max-width: 850px) {
            .footer-top-grid {
              grid-template-columns: 1fr; /* Stacks Logo and Links */
              gap: 40px;
              padding-bottom: 40px;
            }
            .footer-links-grid {
              grid-template-columns: 1fr; /* Stacks the 3 links columns */
              gap: 30px;
              text-align: center; /* Centers text for a cleaner mobile look */
            }
            .brand-container {
              justify-content: center; /* Centers the SVCE circle on mobile */
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
          {/* Left Side: Brand / Emblem Area */}
          <div className="brand-container">
            <div
              style={{
                width: '140px',
                height: '140px',
                border: '1px dashed rgba(255,255,255,0.3)',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '20px'
              }}
            >
              <h2 style={{ margin: 0, letterSpacing: '3px', fontSize: '1.5rem', fontFamily: 'serif' }}>
                SVCE
              </h2>
              <span style={{ fontSize: '0.65rem', opacity: 0.8, marginTop: '8px', letterSpacing: '1px', fontWeight: 'bold' }}>
                EST. 2026
              </span>
            </div>
          </div>

          {/* Right Side: 3-Column Navigation & Info */}
          <div className="footer-links-grid">
            {/* Column 1: Navigation */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.8' }}>
                <li><Link to="/events" className="footer-nav-link">Events</Link></li>
                <li><a href="https://www.acesvce.in/" className="footer-nav-link">Get Passes</a></li>
                <li><Link to="/sponsors" className="footer-nav-link">Sponsors</Link></li>
                <li><Link to="/team" className="footer-nav-link">Team</Link></li>
              </ul>
            </div>

            {/* Column 2: Event / Contact Info */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.8' }}>

                <li style={{ opacity: 0.7, fontWeight: 'bold', fontSize: '0.85rem' }}>Highways 26</li>
                <li style={{ opacity: 0.7, fontWeight: 'bold', fontSize: '0.85rem' }}>Sri Venkateswara</li>
                <li style={{ opacity: 0.7, fontWeight: 'bold', fontSize: '0.85rem' }}>College</li>
                <li style={{ opacity: 0.7, fontWeight: 'bold', fontSize: '0.85rem' }}>Of Engineering</li>
                <li style={{ opacity: 0.7, fontWeight: 'bold', fontSize: '0.85rem' }}>Tamil Nadu, India</li>
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.8' }}>
                <li><a href="https://www.instagram.com/svce_highways?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-nav-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
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