import { useState, useEffect } from 'react';

const Team = () => {
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
    const [scrollOffset, setScrollOffset] = useState(0);

    const teams = [
        { id: 'council', name: 'STUDENT COUNCIL', members: ['Member 1', 'Member 2', 'Member 3'] },
        { id: 'web', name: 'WEB TEAM', members: ['Dev 1', 'Dev 2', 'Dev 3'] },
        { id: 'design', name: 'DESIGN TEAM', members: ['Designer 1', 'Designer 2'] },
        { id: 'content', name: 'CONTENT TEAM', members: ['Writer 1', 'Writer 2'] },
        { id: 'marketing', name: 'MARKETING TEAM', members: ['Marketer 1', 'Marketer 2'] },
        { id: 'sponsorship', name: 'SPONSORSHIP TEAM', members: ['Sponsor 1', 'Sponsor 2'] },
        { id: 'events', name: 'EVENT PLANNING', members: ['Coord 1', 'Coord 2'] },
        { id: 'emcee', name: 'EMCEE TEAM', members: ['Host 1', 'Host 2'] },
        { id: 'vigilance', name: 'VIGILANCE TEAM', members: ['Guard 1', 'Guard 2'] },
        { id: 'hospitality', name: 'HOSPITALITY TEAM', members: ['Host 1', 'Host 2'] },
        { id: 'art', name: 'ART & DECOR TEAM', members: ['Artist 1', 'Artist 2'] },
        { id: 'operations', name: 'OPERATIONS TEAM', members: ['Ops 1', 'Ops 2'] },
        { id: 'production', name: 'PRODUCTION TEAM', members: ['Producer 1', 'Producer 2'] },
    ];

    useEffect(() => {
        const randomStart = Math.random() * 100;
        setScrollOffset(randomStart);
    }, []);

    return (
        <section id="team" className="team-section" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">OUR TEAM</h2>

                <div className="team-marquee-container">
                    <div className="team-marquee" style={{ transform: `translateX(-${scrollOffset}%)` }}>
                        {[...teams, ...teams].map((team, idx) => (
                            <button
                                key={`${team.id}-${idx}`}
                                className={`team-marquee-btn ${selectedTeam === team.id ? 'active' : ''}`}
                                onClick={() => setSelectedTeam(team.id)}
                            >
                                {team.name}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedTeam && (
                    <div className="members-reveal magic-fade-in">
                        <h3 className="team-sub-title glow-gold">{teams.find(t => t.id === selectedTeam)?.name}</h3>
                        <div className="team-grid">
                            {teams.find(t => t.id === selectedTeam)?.members.map((member, idx) => (
                                <div key={idx} className="team-card reveal-active floating-member" style={{ animationDelay: `${idx * 0.15}s` }}>
                                    <div className="team-photo-placeholder burst-border">
                                        <div className="member-avatar kinetic-icon">☯</div>
                                    </div>
                                    <h3 className="member-name">{member}</h3>
                                    <p className="member-status">Team Member</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!selectedTeam && (
                    <div className="team-placeholder-text">
                        <p>Select a team to reveal its members</p>
                    </div>
                )}
            </div>

            <style>{`
                .team-marquee-container {
                    overflow: hidden;
                    margin-bottom: 50px;
                    padding: 20px 0;
                    position: relative;
                }
                .team-marquee-container::before,
                .team-marquee-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    width: 100px;
                    height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }
                .team-marquee-container::before {
                    left: 0;
                    background: linear-gradient(to right, var(--midnight), transparent);
                }
                .team-marquee-container::after {
                    right: 0;
                    background: linear-gradient(to left, var(--midnight), transparent);
                }
                .team-marquee {
                    display: flex;
                    gap: 20px;
                    animation: marquee-scroll 40s linear infinite;
                    will-change: transform;
                }
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .team-marquee-btn {
                    padding: 15px 30px;
                    background: var(--glass-bg);
                    border: 1px solid var(--kin);
                    color: var(--gofun);
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    white-space: nowrap;
                    flex-shrink: 0;
                }
                .team-marquee-btn:hover, .team-marquee-btn.active {
                    background: var(--kin);
                    color: var(--midnight);
                    box-shadow: 0 0 20px var(--accent-glow);
                    transform: translateY(-5px);
                }
                .members-reveal {
                    animation: fadeIn 0.8s ease-out;
                }
                .team-sub-title {
                    text-align: center;
                    color: var(--kin);
                    font-size: 2rem;
                    margin-bottom: 30px;
                    letter-spacing: 5px;
                }
                .team-placeholder-text {
                    text-align: center;
                    font-style: italic;
                    opacity: 0.6;
                    margin-top: 50px;
                }
                .member-avatar {
                    font-size: 3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: var(--kin);
                }
                .team-photo-placeholder {
                    background: rgba(0,0,0,0.3);
                    border: 2px solid var(--kin);
                    height: 200px;
                    margin-bottom: 15px;
                }
            `}</style>
        </section>
    );
};

export default Team;