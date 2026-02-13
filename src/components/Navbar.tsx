import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import DownloadButton from './DownloadButton';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentTheme } = useTheme();
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Certifications', 'Contact'];

  const handleScroll = () => {
    const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
    const scrollPosition = window.scrollY + 100;

    // Update navbar background on scroll
    setIsScrolled(window.scrollY > 50);

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
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 backdrop-blur-xl border-b ${isScrolled ? currentTheme.navBg : 'bg-transparent'} ${currentTheme.border} shadow-2xl`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="#home"
              onClick={(e) => smoothScroll(e, 'home')}
              className={`text-xl md:text-2xl font-bold hover:scale-105 transition-transform duration-300 font-heading gradient-text bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mouad EL BOUANANI
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => smoothScroll(e, item.toLowerCase())}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                    ? `${currentTheme.activeColor} font-semibold`
                    : `${currentTheme.textColor} ${currentTheme.hoverColor}`
                    }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className={`absolute inset-0 ${currentTheme.tabBg} rounded-full`}
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.a>
              ))}
            </div>

            <div className="ml-4 flex items-center space-x-3">
              <DownloadButton
                href={`${import.meta.env.BASE_URL}CV_EL_BOUANANI_Mouad_en.pdf`}
                fileName="CV_EL_BOUANANI_Mouad_en.pdf"
                variant="secondary"
              />
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-full backdrop-blur-sm border ${currentTheme.border} ${currentTheme.textColor} ${currentTheme.hoverColor} transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className={`px-4 pt-4 pb-4 space-y-2 ${currentTheme.mobileBg} backdrop-blur-xl rounded-xl mt-3 border ${currentTheme.border} ${currentTheme.textColor}`}>
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => smoothScroll(e, item.toLowerCase())}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                  ? currentTheme.mobileActive
                  : `${currentTheme.textColor} ${currentTheme.mobileItemHover}`
                  }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;