import React, { useEffect, useState } from 'react';

const SakuraEffect = () => {
    const [petals, setPetals] = useState<any[]>([]);

    useEffect(() => {
        const petalCount = 15;
        const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            size: Math.random() * 10 + 10 + 'px',
            duration: Math.random() * 10 + 10 + 's',
            delay: Math.random() * 5 + 's',
        }));
        setPetals(newPetals);
    }, []);

    return (
        <div className="sakura-container">
            {petals.map(p => (
                <div
                    key={p.id}
                    className="petal"
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default SakuraEffect;
