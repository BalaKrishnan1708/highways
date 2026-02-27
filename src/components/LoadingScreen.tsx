import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const CinematicTitle: React.FC<{ text: string, className?: string, delay?: number }> = ({ text, className, delay = 0 }) => {
    return (
        <div className={`animated-word ${className}`}>
            {text.split('').map((char, i) => {
                // Determine which side to come from (0: Top, 1: Right, 2: Bottom, 3: Left)
                const side = Math.floor(Math.random() * 4);
                let startX = 0;
                let startY = 0;
                const offset = 2000; // Far off-screen

                switch (side) {
                    case 0: // Top
                        startX = (Math.random() - 0.5) * 3000;
                        startY = -offset;
                        break;
                    case 1: // Right
                        startX = offset;
                        startY = (Math.random() - 0.5) * 3000;
                        break;
                    case 2: // Bottom
                        startX = (Math.random() - 0.5) * 3000;
                        startY = offset;
                        break;
                    case 3: // Left
                        startX = -offset;
                        startY = (Math.random() - 0.5) * 3000;
                        break;
                }



                return (
                    <span
                        key={i}
                        className="character-roll"
                        style={{
                            '--startX': `${startX}px`,
                            '--startY': `${startY}px`,
                            '--startRot': `${Math.random() * 720 - 360}deg`,
                            animationDelay: `${delay + i * 0.25}s`,
                            whiteSpace: char === ' ' ? 'pre' : 'normal'
                        } as React.CSSProperties}
                    >
                        {char}
                    </span>
                );
            })}
        </div>
    );
};

const LoadingScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6500); // 1s extra to view the settled state (5.5s + 1s)

        const removeTimer = setTimeout(() => {
            setShouldRender(false);
        }, 7500); // 1s extra total time

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <div className={`loading-wrapper ${!isLoading ? 'fade-out' : ''}`}>
            <div className={`shoji-door left ${!isLoading ? 'open' : ''}`}>
                <div className="shoji-pattern"></div>
            </div>
            <div className={`shoji-door right ${!isLoading ? 'open' : ''}`}>
                <div className="shoji-pattern"></div>
            </div>

            <div className={`loading-center-content ${!isLoading ? 'zoom-out' : ''}`}>
                <div className="mon-logo">
                    <div className="circle-border"></div>
                    <span className="kanji">日本</span>
                </div>

                <div className="title-container">
                    <div className="opening-title">
                        <CinematicTitle text="HIGHWAYS'26" delay={1.2} />
                    </div>
                </div>

                <div className="opening-sub">ENTERING THE REALM</div>

                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ animationDuration: '5.5s' }}></div>
                </div>
            </div>

            <div className="sakura-transition">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="transition-petal" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}></div>
                ))}
            </div>
        </div>
    );
};

export default LoadingScreen;
