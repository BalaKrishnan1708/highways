import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section world-white" style={{ paddingTop: '150px' }}>
            <div className="container">
                <div className="about-flex">
                    <div className="about-text">
                        <h2 className="section-title left">OUR HERITAGE</h2>
                        <p>Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE). Known for its vibrant atmosphere and creative energy, Highways brings together students from across the states to celebrate art, talent, and expression.</p>
                        <p>This year, for <strong>Highways '26</strong>, we are embracing the spirit of the <em>Japanese Carnival</em>. Imagine the glow of a thousand lanterns, the rhythm of taiko drums, and the festive magic of a Matsuri night, all right here on our campus.</p>
                        <div className="about-highlights">
                            <div className="highlight"><i className="fas fa-drum"></i> Cultural Fusion</div>
                            <div className="highlight"><i className="fas fa-mask"></i> Artistic Expression</div>
                            <div className="highlight"><i className="fas fa-fire"></i> Infinite Energy</div>
                        </div>
                    </div>
                    <div className="about-image-container">
                        <div className="image-frame">
                            <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&q=80" alt="Carnival Vibe" className="main-about-img" />
                            <div className="accent-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
