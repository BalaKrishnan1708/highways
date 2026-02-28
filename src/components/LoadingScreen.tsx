import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const CinematicTitle: React.FC<{ text: string, className?: string, delay?: number }> = ({ text, className, delay = 0 }) => {
    return (
        <div className={`animated-word ${className}`}>
            {text.split('').map((char, i) => {
                const offset = 2000;
                const angle = Math.random() * Math.PI * 2;
                const distance = offset + Math.random() * 1000;
                const startX = Math.cos(angle) * distance;
                const startY = Math.sin(angle) * distance;



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
                <div className="spirit-orb-container">
                    <div className="spirit-orb s1"></div>
                    <div className="spirit-orb s2"></div>
                    <div className="spirit-orb s3"></div>
                </div>

                <div className="mon-logo">
                    <div className="circle-border"></div>
                    <span className="kanji hand-drawn">日本</span>
                </div>

                <div className="title-container">
                    <div className="opening-title">
                        <CinematicTitle text="HIGHWAYS'26" delay={1.2} />
                    </div>
                </div>

                <div className="opening-sub pulsing-text">ENTERING THE REALM</div>
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
        </div >
    );
};

export default LoadingScreen;
