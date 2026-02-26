const Events = () => {
    return (
        <section id="events" className="events-categories world-red" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">EVENT DOMAINS</h2>
                <div className="category-grid">
                    {[
                        { title: 'Music', kanji: '音楽', icon: 'fa-music', desc: 'Solo, Groups & Battle of Bands' },
                        { title: 'Dance', kanji: '踊り', icon: 'fa-shoe-prints', desc: 'Street, Classical & Freestyle' },
                        { title: 'Drama', kanji: '演劇', icon: 'fa-masks-theater', desc: 'Mime, Skits & Street Plays' },
                        { title: 'Technical', kanji: '技術', icon: 'fa-code', desc: 'Hackathons & Tech Quizzes' },
                        { title: 'Gaming', kanji: '競技', icon: 'fa-gamepad', desc: 'Esports & PC Competitions' },
                        { title: 'Art', kanji: '美術', icon: 'fa-palette', desc: 'Digital, Fine Arts & Craft' },
                        { title: 'Lite', kanji: '文芸', icon: 'fa-feather', desc: 'Lyrical & Literary Talents' },
                        { title: 'Quiz', kanji: '知識', icon: 'fa-lightbulb', desc: 'General & Themed Quizzes' }
                    ].map((cat, i) => (
                        <div key={i} className="category-card">
                            <div className="cat-icon"><i className={`fas ${cat.icon}`}></i></div>
                            <div className="kanji-sub">{cat.kanji}</div>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                            <span className="cat-link">View Details</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
