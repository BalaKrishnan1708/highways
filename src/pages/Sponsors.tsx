const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors-section world-pink" style={{ paddingTop: '150px' }}>
            <div className="container">
                <h2 className="section-title center">OUR PARTNERS</h2>
                <div className="sponsors-container">
                    <div className="tier-section reveal">
                        <h3 className="tier-title">IMPERIAL PARTNERS</h3>
                        <div className="sponsors-grid luxury">
                            {[1, 2].map(i => (
                                <div key={i} className="sponsor-card gold-glow">
                                    <div className="logo-placeholder">殿</div>
                                    <p>PLATINUM SPONSOR</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tier-section reveal" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="tier-title">SHOGUN PARTNERS</h3>
                        <div className="sponsors-grid premium">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="sponsor-card silver-glow">
                                    <div className="logo-placeholder">将</div>
                                    <p>GOLD SPONSOR</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tier-section reveal" style={{ transitionDelay: '0.4s' }}>
                        <h3 className="tier-title">SAMURAI PARTNERS</h3>
                        <div className="sponsors-grid">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="sponsor-card">
                                    <div className="logo-placeholder">侍</div>
                                    <p>SILVER SPONSOR</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
