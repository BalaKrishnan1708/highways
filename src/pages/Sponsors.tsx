const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors-section world-pink" style={{ paddingTop: '150px' }}>
            <div className="container">
                <h2 className="section-title center">OUR PARTNERS</h2>
                <div className="sponsors-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="sponsor-placeholder reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            Sponsor {i}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
