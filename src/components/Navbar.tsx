import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          className={`fixed top-0 z-50 w-full transition-all duration-300 ${
              isScrolled
                  ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-white/10'
                  : 'bg-transparent'
          }`}
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
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                Mouad EL BOUANANI
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item, index) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => smoothScroll(e, item.toLowerCase())}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeSection === item.toLowerCase()
                                ? 'text-white'
                                : 'text-gray-300 hover:text-white'
                        }`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                      {activeSection === item.toLowerCase() && (
                          <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full"
                              layoutId="activeTab"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                      )}
                      <span className="relative z-10">{item}</span>
                    </motion.a>
                ))}

                {/* Dark Mode Toggle */}
                {/*<motion.button*/}
                {/*    onClick={toggleDarkMode}*/}
                {/*    className="p-2 ml-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"*/}
                {/*    whileHover={{ scale: 1.1, rotate: 180 }}*/}
                {/*    whileTap={{ scale: 0.9 }}*/}
                {/*    initial={{ opacity: 0 }}*/}
                {/*    animate={{ opacity: 1 }}*/}
                {/*    transition={{ duration: 0.5, delay: 0.5 }}*/}
                {/*>*/}
                {/*  <motion.div*/}
                {/*      initial={false}*/}
                {/*      animate={{ rotate: darkMode ? 180 : 0 }}*/}
                {/*      transition={{ duration: 0.3 }}*/}
                {/*  >*/}
                {/*    {darkMode ? <Sun size={20} /> : <Moon size={20} />}*/}
                {/*  </motion.div>*/}
                {/*</motion.button>*/}
              </div>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
                className="md:hidden flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              {navItems.map((item, index) => (
                  <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => smoothScroll(e, item.toLowerCase())}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                          activeSection === item.toLowerCase()
                              ? 'bg-gradient-to-r from-primary to-secondary text-white'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
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