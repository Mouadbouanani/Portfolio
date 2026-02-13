/**
 * Loading Screen Component
 * Creates a custom loading animation for the portfolio
 */

import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const { currentTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loader for 1.5 seconds minimum

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed top-0 left-0 w-full h-full ${currentTheme.background} z-[9999] flex items-center justify-center`}>
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className={`absolute top-0 left-0 w-6 h-6 bg-${currentTheme.secondary} rounded-full animate-pulse`} style={{ animationDelay: '0s' }}></div>
          <div className={`absolute top-0 right-0 w-6 h-6 bg-${currentTheme.secondary} rounded-full animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
          <div className={`absolute bottom-0 left-0 w-6 h-6 bg-${currentTheme.secondary} rounded-full animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>
        <p className={`${currentTheme.textColor} text-lg font-poppins tracking-wider`}>LOADING PORTFOLIO</p>
      </div>
    </div>
  );
};

export default LoadingScreen;