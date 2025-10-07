import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  const handleScroll = () => {
    const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/10 dark:bg-slate-900/50 backdrop-blur-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="text-2xl font-bold text-slate-800 dark:text-white">Mouad</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => smoothScroll(e, item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-secondary text-white'
                      : 'text-slate-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}>
                  {item}
                </a>
              ))}
              <button onClick={toggleDarkMode} className="p-2 rounded-full text-slate-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
