import React from 'react';

const Team = () => {
    return (
        <section id="team" className="team-section" style={{ paddingTop: '150px' }}>
            <div className="container">
                <h2 className="section-title center">MEET THE TEAM</h2>
                <div className="team-grid">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="team-card">
                            <div className="team-photo-placeholder"></div>
                            <h3>Organizer {i}</h3>
                            <p>Coordinator</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
