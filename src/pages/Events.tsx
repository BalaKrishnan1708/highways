import { useState } from 'react';

const Events = () => {
    const [activeDomain, setActiveDomain] = useState<string | null>(null);

    const domains = [
        { id: 'music', title: 'Music', kanji: '音楽', icon: 'fa-music', desc: 'Solo, Groups & Battle of Bands' },
        { id: 'dance', title: 'Dance', kanji: '踊り', icon: 'fa-shoe-prints', desc: 'Street, Classical & Freestyle' },
        { id: 'drama', title: 'Drama', kanji: '演劇', icon: 'fa-masks-theater', desc: 'Mime, Skits & Street Plays' },
        { id: 'tech', title: 'Technical', kanji: '技術', icon: 'fa-code', desc: 'Hackathons & Tech Quizzes' },
        { id: 'game', title: 'Gaming', kanji: '競技', icon: 'fa-gamepad', desc: 'Esports & PC Competitions' },
        { id: 'art', title: 'Art', kanji: '美術', icon: 'fa-palette', desc: 'Digital, Fine Arts & Craft' },
        { id: 'lite', title: 'Lite', kanji: '文芸', icon: 'fa-feather', desc: 'Lyrical & Literary Talents' },
        { id: 'quiz', title: 'Quiz', kanji: '知識', icon: 'fa-lightbulb', desc: 'General & Themed Quizzes' }
    ];

    const sampleEvents = [
        { name: 'MANDATORY RYTHM', type: 'Flagship', fee: '₹300' },
        { name: 'SILENT STORM', type: 'Competitive', fee: '₹150' },
        { name: 'NEON WAVE', type: 'Open Mic', fee: 'Free' },
    ];

    return (
        <section id="events" className="events-categories world-red" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">EVENT DOMAINS</h2>

                {!activeDomain ? (
                    <div className="category-grid">
                        {domains.map((cat, i) => (
                            <div
                                key={cat.id}
                                className="category-card reveal"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                                onClick={() => setActiveDomain(cat.id)}
                            >
                                <div className="cat-icon floating-element"><i className={`fas ${cat.icon}`}></i></div>
                                <div className="kanji-sub">{cat.kanji}</div>
                                <h3>{cat.title}</h3>
                                <div className="card-divider"></div>
                                <p>{cat.desc}</p>
                                <span className="cat-link">Enter Domain</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="events-reveal animate-fade">
                        <button className="back-link" onClick={() => setActiveDomain(null)}>
                            <i className="fas fa-arrow-left"></i> BACK TO DOMAINS
                        </button>
                        <h3 className="domain-heading">{domains.find(d => d.id === activeDomain)?.title} DOMAIN</h3>

                        <div className="events-placeholder-grid">
                            {sampleEvents.map((event, id) => (
                                <div key={id} className="event-item-card reveal-active">
                                    <div className="event-visual-placeholder">
                                        <div className="impact-text">雷</div>
                                    </div>
                                    <div className="event-details">
                                        <span className="event-type">{event.type}</span>
                                        <h4>{event.name}</h4>
                                        <div className="event-footer">
                                            <span>{event.fee}</span>
                                            <button className="btn-matsuri small">REGISTER</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .domain-heading {
                    text-align: center;
                    color: var(--kin);
                    font-size: 2.5rem;
                    margin: 40px 0;
                    letter-spacing: 10px;
                }
                .events-placeholder-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                }
                .event-item-card {
                    background: rgba(22, 27, 34, 0.8);
                    border: 1px solid rgba(255, 183, 3, 0.2);
                    border-radius: 4px;
                    overflow: hidden;
                    transition: all 0.4s ease;
                }
                .event-item-card:hover {
                    border-color: var(--kin);
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.5);
                }
                .event-visual-placeholder {
                    height: 180px;
                    background: #1a1a1a;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .impact-text {
                    font-size: 4rem;
                    color: var(--kin);
                    opacity: 0.3;
                    text-shadow: 0 0 20px var(--gold-glow);
                }
                .event-details {
                    padding: 20px;
                }
                .event-type {
                    font-size: 0.7rem;
                    color: var(--kin);
                    letter-spacing: 2px;
                    font-weight: 800;
                }
                .event-details h4 {
                    margin: 10px 0;
                    font-size: 1.5rem;
                }
                .event-footer {
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 15px;
                }
                .btn-matsuri.small {
                    padding: 8px 20px;
                    font-size: 0.8rem;
                }
            `}</style>
        </section>
    );
};

export default Events;
