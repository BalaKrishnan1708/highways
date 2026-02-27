import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const CinematicTitle: React.FC<{ text: string, className?: string, delay?: number }> = ({ text, className, delay = 0 }) => {
    return (
        <div className={`animated-word ${className}`}>
            {text.split('').map((char, i) => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 800 + Math.random() * 800; // Large distance for "every angle"
                const startX = Math.cos(angle) * distance;
                const startY = Math.sin(angle) * distance;
                const rotX = Math.random() * 720 - 360;
                const rotY = Math.random() * 720 - 360;

                return (
                    <span
                        key={i}
                        className="character-roll"
                        style={{
                            '--startX': `${startX}px`,
                            '--startY': `${startY}px`,
                            '--startRotX': `${rotX}deg`,
                            '--startRotY': `${rotY}deg`,
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
                <div className="vertical-line"></div>
            </div>
            <div className={`shoji-door right ${!isLoading ? 'open' : ''}`}>
                <div className="shoji-pattern"></div>
                <div className="vertical-line"></div>
            </div>

            <div className={`loading-center-content ${!isLoading ? 'zoom-out' : ''}`}>
                <div className="mon-logo">
                    <div className="circle-border"></div>
                    <span className="kanji">日本</span>
                </div>

                <div className="title-container">
                    <div className="opening-title">
                        <CinematicTitle text="SVCE HIGHWAYS '26" delay={1.2} />
                    </div>
                </div>

                <div className="opening-sub">ENTERING THE REALM</div>

                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ animationDuration: '5.5s' }}></div>
                    <div className="progress-line-red"></div>
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
