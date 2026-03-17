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
    // List of critical assets to preload for a clear first impression
    const essentialImages = [
      '/assets/logos/highways-logo.webp',
      '/assets/logos/svce-logo.webp',
      // Adding back top-level background assets for clarity
      'https://images.unsplash.com/photo-1522383225053-ed111181a951?q=80&w=2000&auto=format&fit=crop',
    ];

    const essentialVideos = [
      '/videos/IMG_0151.MOV'
    ];

    const totalAssets = essentialImages.length + essentialVideos.length;
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.floor((loadedCount / totalAssets) * 100);
      setProgress(newProgress);
    };

    const preloadAssets = async () => {
      // Preload Images
      const imagePromises = essentialImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          // @ts-ignore
          img.fetchPriority = 'high';
          img.src = src;
          img.onload = () => { updateProgress(); resolve(null); };
          img.onerror = () => { updateProgress(); resolve(null); };
        });
      });

      // Preload Videos (Wait for enough data to play)
      const videoPromises = essentialVideos.map(src => {
        return new Promise((resolve) => {
          const video = document.createElement('video');
          video.src = src;
          video.preload = 'auto';
          video.oncanplaythrough = () => { updateProgress(); resolve(null); };
          video.onerror = () => { updateProgress(); resolve(null); };
          // Fallback if canplaythrough takes too long on slow connections
          setTimeout(() => resolve(null), 5000); 
        });
      });

      await Promise.all([...imagePromises, ...videoPromises]);
      
      // Artificial slight delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShouldRender(false), 1000);
      }, 500);
    };

    preloadAssets();

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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
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
      </div>

      <div className="grain-overlay"></div>
    </div>
  );
};

export default LoadingScreen;