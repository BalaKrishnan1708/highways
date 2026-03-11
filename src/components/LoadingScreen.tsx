import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number, x: number, y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // List of critical assets to preload
    const essentialAssets = [
      // Logos
      '/assets/logos/highways-logo.webp',
      '/assets/logos/svce-logo.webp',
      // Team Leads
      '/members/Arivunithi R  - ARIVUNITHI R CSE.webp',
      '/members/IMG_9669 (1) - ASHISH S CSE.webp',
      '/members/Ashwin 1 - ASHWIN R ECE.webp',
      '/members/Balakrishnan.webp',
      '/members/KS Bharath - Sponsorship Lead - 007 BHARATH KS MN.webp',
      '/members/Rushil-Member_Operations - RUSHIL P BIO.webp',
      // Glimpses 2023
      ...['2', '4', '6', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map(n => `/assets/glimpses/Highways 23/${n}.webp`),
      // Glimpses 2024
      ...['1', '3', '5', '7'].map(n => `/assets/glimpses/Highways 24/${n}.webp`),
      // Glimpses 2025
      ...['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'].map(n => `/assets/glimpses/Highways 25/${n}.webp`)
    ];

    let loadedCount = 0;
    const totalImages = essentialAssets.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.floor((loadedCount / totalImages) * 100);
      setProgress(newProgress);
    };

    // Preload function
    const preloadImages = async () => {
      const promises = essentialAssets.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          // @ts-ignore - fetchPriority is supported in modern browsers
          img.fetchPriority = 'high';
          img.src = src;
          img.onload = () => { updateProgress(); resolve(null); };
          img.onerror = () => { updateProgress(); resolve(null); }; 
        });
      });
      await Promise.all(promises);
    };

    preloadImages();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev.slice(-5), newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); 

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 5500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className={`loading-wrapper ${!isLoading ? 'fade-out' : ''}`}
    >
      <div className="interactive-bg">
        <div
          className="cursor-glow"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        />

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          />
        ))}
      </div>

      <div className="loading-content">
        <div className="loader-ring">
          <div className="ring-inner"></div>
          <div className="ring-outer" style={{ borderTopColor: '#ff4d4d' }}></div>
        </div>

        <h1 className="loader-logo">HIGHWAYS</h1>
        <div className="loader-line">
          <div className="loader-progress" style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '300px', margin: '15px auto 0' }}>
            <p className="loader-status" style={{ margin: 0 }}>INITIALIZING EXPERIENCE</p>
            <p className="loader-status" style={{ margin: 0, color: '#ff4d4d' }}>{progress}%</p>
        </div>
        <div className="loader-hint">CLICK TO RIPPLE • MOVE TO GLOW</div>
      </div>

      <div className="grain-overlay"></div>
    </div>
  );
};

export default LoadingScreen;