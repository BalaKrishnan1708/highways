const Location = () => {
    return (
        <section id="location" className="location-section world-pink" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">REACH US</h2>
                <div className="location-flex">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps?q=Post+Bag+No.+1,+Chennai+-+Bengaluru+High+Road,+Pennalur,+Sriperumbudur,+Tamil+Nadu+602117&output=embed"
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

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
