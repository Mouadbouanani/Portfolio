import { useEffect } from 'react';

export const useScrollProgress = () => {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      const scrollIndicator = document.getElementById('scroll-indicator');
      if (scrollIndicator) {
        scrollIndicator.style.height = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};