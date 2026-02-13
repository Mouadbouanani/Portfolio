import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

type Theme = 'dark' | 'light' | 'pastel' | 'tech' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
  currentTheme: ThemePalette;
}

interface ThemePalette {
  primary: string; // Tailwind color name for main elements (e.g., bg-primary)
  secondary: string; // Tailwind color name for secondary elements (e.g., text-secondary)
  accent: string; // Tailwind color name for accent elements
  text: string; // Tailwind class for general text color
  background: string; // Tailwind class for general background
  cardBg: string; // Tailwind class for card background
  cardBorder: string; // Tailwind class for card border
  sectionBg: string; // Tailwind class for section background
  blobPrimary: string; // Tailwind 'from-' class for blob gradients
  blobSecondary: string; // Tailwind 'to-' class for blob gradients
  goldTextLight: string; // Tailwind class for specific gold text light color
  activityText: string; // Tailwind class for activity description text
  navBg: string; // Tailwind class for navbar background
  border: string; // Tailwind class for general border
  inputText: string; // Tailwind class for input text
  // New granular properties
  primaryColor: string; // Hex value for primary color
  secondaryColor: string; // Hex value for secondary color
  accentColor: string; // Hex value for accent color
  primaryLight: string; // RGBA value for primary color with light opacity
  secondaryLight: string; // RGBA value for secondary color with light opacity
  accentLight: string; // RGBA value for accent color with light opacity
  gradientFrom: string; // Tailwind 'from-' class for general gradients (e.g., from-blue-500)
  gradientTo: string; // Tailwind 'to-' class for general gradients (e.g., to-purple-500)
  cardShadow: string; // CSS string for box-shadow property (e.g., '0 20px 40px rgba(0, 0, 0, 0.2)')
  cardShadowTailwind: string; // Tailwind class for shadow utility (e.g., shadow-md)
  skillBg: string; // Tailwind class for skill tag background
  skillBorder: string; // Tailwind class for skill tag border
  skillHoverBg: string; // Tailwind class for skill tag hover background
  skillHoverBorder: string; // Tailwind class for skill tag hover border
  skillText: string; // Tailwind class for skill tag text
  iconColor: string; // Tailwind class for general icon color
  hoverTextColor: string; // Tailwind class for text color on hover

  // Properties needed by other components
  textColor?: string; // Added for components that expect this property
  textSecondary?: string; // Added for components that expect this property
  inputBg?: string; // Added for Projects component
  inputBorder?: string; // Added for Projects component
  inputFocus?: string; // Added for Projects component
  btnPrimary?: string; // Added for HeroTechModernPro component
  btnSecondary?: string; // Added for HeroTechModernPro component
  socialIcon?: string; // Added for HeroTechModernPro component
  socialBorder?: string; // Added for HeroTechModernPro component
  photoBorder?: string; // Added for HeroTechModernPro component
  glassBg?: string; // Added for HeroTechModernPro component
  glassBorder?: string; // Added for HeroTechModernPro component
  gradientText?: string; // Added for HeroTechModernPro component
  activeColor?: string; // Added for Navbar component
  hoverColor?: string; // Added for Navbar component
  tabBg?: string; // Added for Navbar component
  mobileBg?: string; // Added for Navbar component
  mobileItemHover?: string; // Added for Navbar component
  mobileActive?: string; // Added for Navbar component
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const palettes: Record<Theme, ThemePalette> = {
  dark: {
    primary: 'bg-[#000000]', // Black
    secondary: 'text-[#64FFDA]', // Vibrant Aqua
    accent: 'text-[#8892B0]', // Grayish Blue
    text: 'text-[#E6F1FF]', // Lightest Blue/White
    background: 'bg-[#000000]', // Black
    cardBg: 'bg-[#1A3050]', // Lighter dark blue for cards
    cardBorder: 'border-[#8892B0]/40', // Brighter border color
    sectionBg: 'bg-[#000000]', // Black
    blobPrimary: 'from-[#64FFDA]',
    blobSecondary: 'to-[#8892B0]',
    goldTextLight: 'text-[#64FFDA]', // Adapted for blue accent
    activityText: 'text-[#E6F1FF]/70',
    navBg: 'bg-[#000000]/80',
    border: 'border-[#233554]',
    inputText: 'text-[#E6F1FF]',
    primaryColor: '#000000',
    secondaryColor: '#64FFDA',
    accentColor: '#8892B0',
    primaryLight: 'rgba(17, 34, 64, 0.2)', // Darker blue with more opacity for visibility on black
    secondaryLight: 'rgba(100, 255, 218, 0.1)', // Vibrant Aqua with light opacity
    accentLight: 'rgba(136, 146, 176, 0.1)', // Grayish Blue with light opacity
    gradientFrom: 'from-[#64FFDA]',
    gradientTo: 'to-[#8892B0]',
    cardShadow: '0 0 15px rgba(136, 146, 176, 0.2)', // Subtle glow using accentLight
    cardShadowTailwind: 'shadow-2xl',
    skillBg: 'bg-[#1A3050]', // Same as new cardBg
    skillBorder: 'border-[#233554]',
    skillHoverBg: 'hover:bg-[#1A3050]/70', // Hover for new cardBg
    skillHoverBorder: 'hover:border-[#64FFDA]',
    skillText: 'text-[#64FFDA]',
    iconColor: 'text-[#8892B0]',
    hoverTextColor: 'group-hover:text-[#64FFDA]'
  },
  light: {
    primary: 'bg-blue-600',
    secondary: 'text-blue-600',
    accent: 'text-blue-500',
    text: 'text-gray-800',
    background: 'bg-white',
    cardBg: 'bg-white',
    cardBorder: 'border-blue-100',
    sectionBg: 'bg-gray-50',
    blobPrimary: 'from-blue-400',
    blobSecondary: 'to-blue-600',
    goldTextLight: 'text-blue-600',
    activityText: 'text-gray-600',
    navBg: 'bg-white/80',
    border: 'border-blue-200',
    inputText: 'text-gray-900',
    // New granular properties
    primaryColor: '#2563EB',
    secondaryColor: '#3B82F6',
    accentColor: '#1D4ED8',
    primaryLight: 'rgba(37, 99, 235, 0.1)',
    secondaryLight: 'rgba(59, 130, 246, 0.1)',
    accentLight: 'rgba(29, 78, 216, 0.1)',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    cardShadow: '0 10px 25px rgba(37, 99, 235, 0.1)',
    cardShadowTailwind: 'shadow-md',
    skillBg: 'bg-blue-50',
    skillBorder: 'border-blue-200',
    skillHoverBg: 'hover:bg-blue-100',
    skillHoverBorder: 'hover:border-blue-400',
    skillText: 'text-blue-800',
    iconColor: 'text-blue-600',
    hoverTextColor: 'group-hover:text-blue-600'
  },
  pastel: {
    primary: 'bg-pink-300',
    secondary: 'text-pink-400',
    accent: 'text-orange-300',
    text: 'text-pink-800',
    background: 'bg-pink-50',
    cardBg: 'bg-white/70',
    cardBorder: 'border-pink-200',
    sectionBg: 'bg-pink-50',
    blobPrimary: 'from-[#FFB5A7]',
    blobSecondary: 'to-[#FCD5CE]',
    goldTextLight: 'text-pink-700',
    activityText: 'text-pink-600',
    navBg: 'bg-pink-100/80',
    border: 'border-pink-200',
    inputText: 'text-pink-800',
    // New granular properties
    primaryColor: '#F8F8F2',
    secondaryColor: '#FFB5A7',
    accentColor: '#FCD5CE',
    primaryLight: 'rgba(248, 248, 242, 0.1)',
    secondaryLight: 'rgba(255, 181, 167, 0.1)',
    accentLight: 'rgba(252, 213, 206, 0.1)',
    gradientFrom: 'from-pink-400',
    gradientTo: 'to-orange-400',
    cardShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    cardShadowTailwind: 'shadow-md',
    skillBg: 'bg-pink-100',
    skillBorder: 'border-pink-300',
    skillHoverBg: 'hover:bg-pink-200',
    skillHoverBorder: 'hover:border-pink-400',
    skillText: 'text-pink-800',
    iconColor: 'text-pink-400',
    hoverTextColor: 'group-hover:text-pink-400'
  },
  tech: {
    primary: 'bg-[#0D1117]',
    secondary: 'text-[#00C2FF]',
    accent: 'text-[#1DCD9F]',
    text: 'text-white',
    background: 'bg-[#0D1117]',
    cardBg: 'bg-white/10',
    cardBorder: 'border-[#00C2FF]/20',
    sectionBg: 'bg-[#0D1117]',
    blobPrimary: 'from-[#00C2FF]',
    blobSecondary: 'to-[#1DCD9F]',
    goldTextLight: 'text-white',
    activityText: 'text-[#C9D1D9]',
    navBg: 'bg-gray-900/80',
    border: 'border-white/10',
    inputText: 'text-white',
    // New granular properties
    primaryColor: '#0D1117',
    secondaryColor: '#00C2FF',
    accentColor: '#1DCD9F',
    primaryLight: 'rgba(13, 17, 23, 0.1)',
    secondaryLight: 'rgba(0, 194, 255, 0.1)',
    accentLight: 'rgba(29, 205, 159, 0.1)',
    gradientFrom: 'from-[#00C2FF]',
    gradientTo: 'to-[#1DCD9F]',
    cardShadow: '0 20px 40px rgba(0, 194, 255, 0.1)',
    cardShadowTailwind: 'shadow-lg',
    skillBg: 'bg-white/5',
    skillBorder: 'border-[#00C2FF]/20',
    skillHoverBg: 'hover:bg-white/10',
    skillHoverBorder: 'hover:border-[#00C2FF]',
    skillText: 'text-white',
    iconColor: 'text-[#00C2FF]',
    hoverTextColor: 'group-hover:text-[#00C2FF]'
  },
  system: {
    primary: 'bg-blue-600',
    secondary: 'text-blue-600',
    accent: 'text-blue-500',
    text: 'text-gray-800',
    background: 'bg-white',
    cardBg: 'bg-white',
    cardBorder: 'border-blue-100',
    sectionBg: 'bg-gray-50',
    blobPrimary: 'from-blue-400',
    blobSecondary: 'to-blue-600',
    goldTextLight: 'text-blue-600',
    activityText: 'text-gray-600',
    navBg: 'bg-white/80',
    border: 'border-blue-200',
    inputText: 'text-gray-900',
    // New granular properties
    primaryColor: '#2563EB',
    secondaryColor: '#3B82F6',
    accentColor: '#1D4ED8',
    primaryLight: 'rgba(37, 99, 235, 0.1)',
    secondaryLight: 'rgba(59, 130, 246, 0.1)',
    accentLight: 'rgba(29, 78, 216, 0.1)',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    cardShadow: '0 10px 25px rgba(37, 99, 235, 0.1)',
    cardShadowTailwind: 'shadow-md',
    skillBg: 'bg-blue-50',
    skillBorder: 'border-blue-200',
    skillHoverBg: 'hover:bg-blue-100',
    skillHoverBorder: 'hover:border-blue-400',
    skillText: 'text-blue-800',
    iconColor: 'text-blue-600',
    hoverTextColor: 'group-hover:text-blue-600'
  }
};

const getSystemTheme = (): 'dark' | 'light' => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(getSystemTheme());

  const getActualTheme = (currentTheme: Theme): 'dark' | 'light' => {
    if (currentTheme === 'system') {
      return getSystemTheme();
    }
    return ['dark', 'tech'].includes(currentTheme) ? 'dark' : 'light';
  };

  useEffect(() => {
    const actualTheme = getActualTheme(theme);
    setResolvedTheme(actualTheme);
    document.documentElement.classList.remove('dark-theme', 'light-theme', 'pastel-theme', 'tech-theme', 'system-theme');
    document.documentElement.classList.add(`${theme}-theme`);
    document.documentElement.classList.toggle('dark', actualTheme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const systemTheme = getSystemTheme();
        setResolvedTheme(systemTheme);
        document.documentElement.classList.toggle('dark', systemTheme === 'dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const setTheme = (selectedTheme: Theme) => {
    setThemeState(selectedTheme);
  };

  const currentTheme = useMemo(() => {
    if (theme === 'system') {
      return palettes[resolvedTheme];
    }
    return palettes[theme];
  }, [theme, resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};