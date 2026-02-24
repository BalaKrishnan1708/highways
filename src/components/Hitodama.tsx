import React, { useEffect, useState } from 'react';

const Hitodama = () => {
    const [wisps, setWisps] = useState<any[]>([]);

    useEffect(() => {
        const wispCount = 12;
        const newWisps = Array.from({ length: wispCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            size: Math.random() * 60 + 20 + 'px',
            duration: Math.random() * 20 + 15 + 's',
            delay: Math.random() * -20 + 's', // Random start phase
            color: i % 3 === 0 ? 'var(--murasaki)' : (i % 3 === 1 ? 'var(--cyan)' : 'var(--kin)'),
            drift: Math.random() * 200 - 100 + 'px'
        }));
        setWisps(newWisps);
    }, []);

    return (
        <div className="hitodama-container">
            {wisps.map(w => (
                <div
                    key={w.id}
                    className="wisp"
                    style={{
                        left: w.left,
                        top: w.top,
                        width: w.size,
                        height: w.size,
                        backgroundColor: w.color,
                        animationDuration: w.duration,
                        animationDelay: w.delay,
                        filter: `blur(${parseInt(w.size) / 2}px)`
                    }}
                />
            ))}
        </div>
    );
};

export default Hitodama;
