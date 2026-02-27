import { useState } from 'react';

const Team = () => {
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

    const teams = [
        { id: 'emcee', name: 'EMCEE', members: ['Member 1', 'Member 2', 'Member 3'] },
        { id: 'tech', name: 'TECH', members: ['Dev 1', 'Dev 2', 'Dev 3', 'Dev 4'] },
        { id: 'vigilance', name: 'VIGILANCE', members: ['Guard 1', 'Guard 2'] },
        { id: 'hospitality', name: 'HOSPITALITY', members: ['Host 1', 'Host 2', 'Host 3'] },
        { id: 'finance', name: 'FINANCE', members: ['Treasurer 1', 'Treasurer 2'] },
        { id: 'creative', name: 'CREATIVE', members: ['Artist 1', 'Artist 2'] },
        { id: 'media', name: 'MEDIA', members: ['Photog 1', 'Photog 2'] },
        { id: 'events', name: 'EVENTS', members: ['Coord 1', 'Coord 2'] },
    ];

    return (
        <section id="team" className="team-section" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">MYSTIC DIVISIONS</h2>

                <div className="team-categories">
                    {teams.map((team, i) => (
                        <button
                            key={team.id}
                            className={`team-btn reveal ${selectedTeam === team.id ? 'active' : ''}`}
                            style={{ transitionDelay: `${i * 0.05}s` }}
                            onClick={() => setSelectedTeam(team.id)}
                        >
                            {team.name}
                        </button>
                    ))}
                </div>

                {selectedTeam && (
                    <div className="members-reveal">
                        <h3 className="team-sub-title">{teams.find(t => t.id === selectedTeam)?.name} CLAN</h3>
                        <div className="team-grid">
                            {teams.find(t => t.id === selectedTeam)?.members.map((member, idx) => (
                                <div key={idx} className="team-card reveal-active">
                                    <div className="team-photo-placeholder">
                                        <div className="member-avatar">☯</div>
                                    </div>
                                    <h3>{member}</h3>
                                    <p>Official Member</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!selectedTeam && (
                    <div className="team-placeholder-text">
                        <p>Select a division to reveal its keepers</p>
                    </div>
                )}
            </div>

            <style>{`
                .team-categories {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 15px;
                    margin-bottom: 50px;
                }
                .team-btn {
                    padding: 15px;
                    background: var(--glass-bg);
                    border: 1px solid var(--kin);
                    color: var(--gofun);
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .team-btn:hover, .team-btn.active {
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

