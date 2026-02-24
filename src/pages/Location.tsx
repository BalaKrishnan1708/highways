import React from 'react';

const Location = () => {
    return (
        <section id="location" className="location-section world-pink" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">REACH US</h2>
                <div className="location-flex">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003612503936!2d79.9917300750764!3d12.971658987343513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cc004473855%3A0x738e60477ad5aadb!2sSri%20Venkateswara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1709456000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="SVCE Location"
                        ></iframe>
                    </div>
                    <div className="address-info">
                        <h3>Sri Venkateswara College of Engineering</h3>
                        <a
                            href="https://maps.app.goo.gl/1vHZVM7RMqGM5TYA8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="address-link"
                        >
                            <p>
                                Post Bag No. 1, Chennai - Bengaluru High Road,<br />
                                Pennalur, Sriperumbudur,<br />
                                Tamil Nadu 602117
                            </p>
                            <span className="maps-link">View on Google Maps <i className="fas fa-external-link-alt"></i></span>
                        </a>
                        <div className="contact-details">
                            <p><i className="fas fa-phone"></i> +91 44 2715 2000</p>
                            <p><i className="fas fa-envelope"></i> highways@svce.ac.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
