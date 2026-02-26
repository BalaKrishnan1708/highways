import React from 'react';

const Schedule = () => {
    return (
        <section id="schedule" className="schedule-section world-white" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">FESTIVAL TIMELINE</h2>
                <div className="schedule-tabs">
                    <div className="tab active">DAY 1</div>
                    <div className="tab">DAY 2</div>
                    <div className="tab">DAY 3</div>
                </div>
                <div className="schedule-content">
                    <div className="scroll-roller left"></div>
                    <div className="scroll-roller right"></div>
                    <div className="schedule-content-scroll">
                        <div className="tbd-message">
                            <i className="fas fa-clock"></i>
                            <h3>Timelines are being finalized!</h3>
                            <p>Stay tuned for the full event schedule.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
