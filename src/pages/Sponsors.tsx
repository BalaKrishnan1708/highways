const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors-section world-pink" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">OUR PARTNERS</h2>
                <div className="sponsors-grid staggered-reveal">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="sponsor-placeholder logo-drift" style={{ animationDelay: `${i * 0.1}s` }}>
                            Sponsor {i}
                        </div>
                    ))}
                </div>

                <div className="sponsor-cta-section">
                    <div className="sponsor-cta-card">
                        <h3>Want to Sponsor Us?</h3>
                        <p>Join us in making Highways 2026 an unforgettable experience. Partner with one of the most vibrant cultural festivals and reach thousands of talented students.</p>
                        <a href="mailto:highways@svce.ac.in" className="btn-matsuri">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .sponsor-cta-section {
                    margin-top: 80px;
                    display: flex;
                    justify-content: center;
                }
                .sponsor-cta-card {
                    background: rgba(22, 27, 34, 0.8);
                    backdrop-filter: blur(20px);
                    border: 2px solid var(--kin);
                    border-radius: 8px;
                    padding: 50px;
                    max-width: 700px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    transition: all 0.4s ease;
                }
                .sponsor-cta-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 80px rgba(255, 183, 3, 0.3);
                }
                .sponsor-cta-card h3 {
                    color: var(--kin);
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    letter-spacing: 2px;
                }
                .sponsor-cta-card p {
                    color: #ccc;
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin-bottom: 30px;
                }
            `}</style>
        </section>
    );
};

export default Sponsors;
