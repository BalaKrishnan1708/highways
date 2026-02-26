import React from 'react';

const Passes = () => {
    return (
        <section id="passes" className="passes-section world-red" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">GRAB YOUR ENTRY</h2>
                <div className="pass-row">
                    <div className="pass-card basic">
                        <div className="pass-tag">Internal</div>
                        <h3>SVCE STUDENTS</h3>
                        <div className="pass-price">₹TBD</div>
                        <ul className="pass-benefits">
                            <li><i className="fas fa-check"></i> Standard Fest Entry</li>
                            <li><i className="fas fa-check"></i> Participation in Events</li>
                            <li><i className="fas fa-check"></i> Access to Stalls</li>
                        </ul>
                        <a href="https://acesvce.in" className="btn-pass">Buy Now</a>
                    </div>
                    <div className="pass-card premium">
                        <div className="pass-tag gold">Celebratory</div>
                        <h3>EXTERNAL GUESTS</h3>
                        <div className="pass-price">₹TBD</div>
                        <ul className="pass-benefits">
                            <li><i className="fas fa-check"></i> Full Access Pass</li>
                            <li><i className="fas fa-check"></i> Matsuri Kit</li>
                            <li><i className="fas fa-check"></i> Exclusive Concert Access</li>
                        </ul>
                        <a href="https://acesvce.in" className="btn-pass gold">Join Us</a>
                    </div>
                    <div className="pass-card basic">
                        <div className="pass-tag">Legacy</div>
                        <h3>ALUMNI & STAFF</h3>
                        <div className="pass-price">₹TBD</div>
                        <ul className="pass-benefits">
                            <li><i className="fas fa-check"></i> Guest Entry</li>
                            <li><i className="fas fa-check"></i> Networking Lounge</li>
                            <li><i className="fas fa-check"></i> Dinner Invitation</li>
                        </ul>
                        <a href="https://acesvce.in" className="btn-pass">Register</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Passes;
