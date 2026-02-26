const Glimpses = () => {
    const images = [
        '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png',
        '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png',
        '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png',
        '31.png', '32.png', '33.png'
    ];

    return (
        <section id="glimpses" className="glimpses-section" style={{ paddingTop: '150px' }}>
            <div className="section-header">
                <h2 className="section-title center">PAST GLIMPSES</h2>
            </div>
            <div className="glimpses-ticker">
                <div className="ticker-track ltr">
                    {images.map((img, i) => (
                        <div key={i} className="glimpse-card">
                            <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                        </div>
                    ))}
                    {images.map((img, i) => (
                        <div key={`dup-${i}`} className="glimpse-card">
                            <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Glimpses;
