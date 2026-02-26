const FAQ = () => {
    return (
        <section id="faq" className="faq-section" style={{ paddingTop: '150px' }}>
            <div className="container">
                <h2 className="section-title center">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="faq-grid">
                    {[
                        { q: "Who can participate?", a: "Students from any recognized college across the country can participate." },
                        { q: "How to register?", a: "You can register through the 'Passes' section or visit acesvce.in." },
                        { q: "Is registration free?", a: "Different events have different registration fees. Check the pass details." },
                        { q: "Will there be pro-shows?", a: "Yes! Stay tuned for celebrity announcements." }
                    ].map((item, i) => (
                        <div key={i} className="faq-item">
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
