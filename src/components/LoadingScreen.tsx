import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Complete loading after exit animation
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className={`text-center ${isExiting ? 'intro-fade-out' : ''}`}>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground intro-text">
          <span className="block mb-2">Archit Shukla</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-mono">
            Portfolio
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;