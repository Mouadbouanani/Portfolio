import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, MoonStar } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme, currentTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      className={`p-2 rounded-full ${currentTheme.cardBg} backdrop-blur-sm border ${currentTheme.border} ${currentTheme.textColor} ${currentTheme.hoverColor} transition-colors`}
      aria-label="Change theme"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <MoonStar className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;