import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



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
        // Calculate target date: 25 days from now (Feb 22 -> March 19)
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
            {/* World 1: Red (Edo Traditional) */}
            <section id="home" className="hero">
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
                        <Link to="/events" className="btn-outline">Explore Events</Link>
                    </div>
                </div>

                <div className="hero-bottom-decor"></div>
                <div className="wave-divider" style={{ position: 'absolute', bottom: 0 }}></div>
            </section>



            {/* World 3: White (Parchment/History) */}
            <section id="glimpses" className="glimpses-section">
                <div className="section-header">
                    <h2 className="section-title center">PAST GLIMPSES</h2>
                </div>

                {/* Layer 1: Leftward Ticker */}
                <div className="glimpses-ticker">
                    <div className="ticker-track ltr">
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {/* Seamless loop duplicate */}
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={`dup1-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Layer 2: Rightward Ticker */}
                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track rtl">
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {/* Seamless loop duplicate */}
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={`dup2-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Layer 3: Leftward Ticker (Bottom) */}
                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track ltr">
                        {[
                            '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {/* Seamless loop duplicate */}
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

            {/* World 2: Pink (Zen/Sakura) */}
            <section id="celebrity" className="celebrity-section">
                <div className="container">
                    <h2 className="section-title center">CELEBRITY GUESTS</h2>
                    <div className="celebrity-grid">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="celebrity-card">
                                <div className="celeb-image-placeholder">
                                    <span className="mystery-mark">?</span>
                                </div>
                                <div className="celeb-info">
                                    <h3>Mystery Guest {i}</h3>
                                    <p>To be revealed soon!</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
