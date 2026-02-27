import { useEffect, useState } from 'react';



const Lantern = ({ delay = '0s', left = '0%' }: { delay?: string, left?: string }) => (
    <div className="lantern" style={{ left, animationDelay: delay }}>
        <div className="lantern-string"></div>
        <div className="lantern-body">
            <div className="lantern-text">祭</div>
        </div>
    </div>
);

const Home = ({ world = 'heikai' }: { world?: string }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 25, hours: 0, minutes: 0 });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 25);
        targetDate.setHours(targetDate.getHours(), 0, 0, 0);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            });
        }, 1000);

        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section id="hero" className="hero">
                <div className="shimenawa-rope"></div>
                <div className="fuji-motif"></div>
                <div className="lantern-row">
                    <Lantern delay="0s" left="5%" />
                    <Lantern delay="0.5s" left="15%" />
                    <Lantern delay="1.2s" left="25%" />
                    <Lantern delay="0.8s" left="35%" />
                    <Lantern delay="1.5s" left="45%" />
                    <Lantern delay="0.3s" left="55%" />
                    <Lantern delay="1.1s" left="65%" />
                    <Lantern delay="0.9s" left="75%" />
                    <Lantern delay="1.4s" left="85%" />
                    <Lantern delay="0.6s" left="95%" />
                </div>

                <div className="hero-content animate-fade">
                    <div className="festival-aura"></div>

                    <div className="torii-gate-frame">
                        <h1 className="hero-title-main floating-neon">
                            <span className="title-japan text-glitch" data-text="ハイウェイズ">ハイウェイズ</span>
                            <span className="title-japan-sub">エスブイシーイー</span>
                            <span className="title-carnival">{world.toUpperCase()}</span>
                        </h1>
                    </div>

                    <div className="hero-main-branding">
                        <h2 className="highways-26-text text-glitch" data-text="HIGHWAYS 2026">HIGHWAYS 2026</h2>
                    </div>
                    <div className="hero-info">
                        <div className="countdown-container">
                            <div className="countdown-item"><span>{timeLeft.days.toString().padStart(2, '0')}</span><p>Days</p></div>
                            <div className="countdown-item"><span>{timeLeft.hours.toString().padStart(2, '0')}</span><p>Hours</p></div>
                            <div className="countdown-item"><span>{timeLeft.minutes.toString().padStart(2, '0')}</span><p>Mins</p></div>
                        </div>
                        <div className="date-badge">TBD</div>
                        <p className="hero-tagline">WHERE TRADITION MEETS THE FUTURE</p>
                    </div>
                    <div className="hero-btns">
                        <a href="https://www.acesvce.in/" className="btn-matsuri" target="_blank" rel="noopener noreferrer">Get Your Pass</a>
                        <a href="#glimpses" className="btn-outline">Explore More</a>
                    </div>
                </div>

                <div className="hero-bottom-decor"></div>
                <div className="wave-divider" style={{ position: 'absolute', bottom: 0 }}></div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="about-section world-white" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="about-flex">
                        <div className="about-text">
                            <h2 className="section-title left">OUR HERITAGE</h2>
                            <p>Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE). Known for its vibrant atmosphere and creative energy, Highways brings together students from across the states to celebrate art, talent, and expression.</p>
                            <p>This year, for <strong>Highways '26</strong>, we are embracing the spirit of the <em>Japanese Carnival</em>. Imagine the glow of a thousand lanterns, the rhythm of taiko drums, and the festive magic of a Matsuri night, all right here on our campus.</p>
                            <div className="about-highlights">
                                <div className="highlight"><i className="fas fa-drum"></i> Cultural Fusion</div>
                                <div className="highlight"><i className="fas fa-mask"></i> Artistic Expression</div>
                                <div className="highlight"><i className="fas fa-fire"></i> Infinite Energy</div>
                            </div>
                        </div>
                        <div className="about-image-container">
                            <div className="image-frame" style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&q=80" alt="Carnival Vibe" className="main-about-img" style={{ width: '100%', border: '5px solid var(--murasaki)', boxShadow: '15px 15px 0 var(--kin)' }} />
                                <div className="hanko-stamp">HIGHWAYS 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CELEBRITY GUESS SECTION */}
            <section id="celebrities" className="celebrity-section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className="section-title center">CELEBRITY GUESS</h2>
                    <div className="celebrity-grid">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="celebrity-card">
                                <div className="celeb-image-placeholder">
                                    <span className="mystery-mark">?</span>
                                </div>
                                <div className="celeb-info">
                                    <h3>Mystery Guest {i}</h3>
                                    <p>Can you guess who's coming?</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLIMPSES SECTION */}
            <section id="glimpses" className="glimpses-section" style={{ padding: '100px 0' }}>
                <div className="section-header">
                    <h2 className="section-title center">PAST GLIMPSES</h2>
                </div>

                <div className="glimpses-ticker">
                    <div className="ticker-track ltr">
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={`dup1-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track rtl">
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={`dup2-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track ltr">
                        {[
                            '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png'
                        ].map((img, i) => (
                            <div key={`dup3-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCATION SECTION */}
            <section id="location" className="location-section world-pink" style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className="section-title center">REACH US</h2>
                    <div className="location-flex">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003612503936!2d79.9917300750764!3d12.971658987343513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cc004473855%3A0x738e60477ad5aadb!2sSri%20Venkateswara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1709456000000!5m2!1sen!2sin"
                                width="100%"
                                height="450px"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="SVCE Location"
                            ></iframe>
                        </div>
                        <div className="address-info">
                            <h3>Sri Venkateswara College of Engineering</h3>
                            <a
                                href="https://maps.app.goo.gl/1vHZVM7RMqGM5TYA8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="address-link"
                            >
                                <p>
                                    Post Bag No. 1, Chennai - Bengaluru High Road,<br />
                                    Pennalur, Sriperumbudur,<br />
                                    Tamil Nadu 602117
                                </p>
                                <span className="maps-link">View on Google Maps <i className="fas fa-external-link-alt"></i></span>
                            </a>
                            <div className="contact-details">
                                <p><i className="fas fa-phone"></i> +91 44 2715 2000</p>
                                <p><i className="fas fa-envelope"></i> highways@svce.ac.in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
