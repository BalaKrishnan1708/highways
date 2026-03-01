import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "What is Highways?", a: "Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE), featuring a vibrant celebration of art, talent, and expression with a Japanese carnival theme." },
        { q: "Who can participate?", a: "Students from any recognized college across the country can participate in Highways events." },
        { q: "How to register?", a: "You can register through the 'Get Passes' section in the navigation menu or visit acesvce.in for more details." },
        { q: "Is registration free?", a: "Different events have different registration fees. Check the pass details for specific pricing information." },
        { q: "Will there be pro-shows?", a: "Yes! Stay tuned for celebrity announcements and exciting pro-shows throughout the festival." },
        { q: "When is Highways 2026?", a: "The exact dates will be announced soon. Keep checking our website and social media for updates." },
        { q: "Where is the venue?", a: "Highways takes place at Sri Venkateswara College of Engineering, Sriperumbudur, Tamil Nadu." },
        { q: "What events are included?", a: "Highways features a wide range of cultural events including music, dance, drama, art, and various competitions. Check the Events page for details." },
    ];

    return (
        <section id="faq" className="faq-section" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="faq-accordion">
                    {faqs.map((item, i) => (
                        <div key={i} className={`faq-accordion-item ${openIndex === i ? 'active' : ''}`}>
                            <button 
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span>{item.q}</span>
                                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
                            </button>
                            <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .faq-accordion {
                    max-width: 900px;
                    margin: 50px auto 0;
                }
                .faq-accordion-item {
                    background: rgba(22, 27, 34, 0.6);
                    border: 1px solid rgba(255, 183, 3, 0.2);
                    margin-bottom: 15px;
                    border-radius: 4px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .faq-accordion-item.active {
                    border-color: var(--kin);
                    box-shadow: 0 0 20px rgba(255, 183, 3, 0.2);
                }
                .faq-question {
                    width: 100%;
                    padding: 25px 30px;
                    background: transparent;
                    border: none;
                    color: var(--gofun);
                    font-size: 1.1rem;
                    font-weight: 700;
                    text-align: left;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                }
                .faq-question:hover {
                    color: var(--kin);
                }
                .faq-icon {
                    font-size: 1.5rem;
                    color: var(--kin);
                    font-weight: 300;
                    transition: transform 0.3s ease;
                }
                .faq-accordion-item.active .faq-icon {
                    transform: rotate(180deg);
                }
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease, padding 0.4s ease;
                }
                .faq-answer.open {
                    max-height: 500px;
                    padding: 0 30px 25px;
                }
                .faq-answer p {
                    color: #ccc;
                    line-height: 1.8;
                    margin: 0;
                }
            `}</style>
        </section>
    );
};

export default FAQ;
