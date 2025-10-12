import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;

    setScrollProgress(progress);
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <AnimatePresence>
        {isVisible && (
            <motion.div
                className="fixed bottom-8 right-8 z-50"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
            >
              {/* Progress Ring */}
              <div className="relative">
                <svg
                    className="w-14 h-14 transform -rotate-90 absolute inset-0"
                    viewBox="0 0 36 36"
                >
                  <path
                      className="text-slate-700"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                      className="text-secondary"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      strokeLinecap="round"
                      d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      style={{
                        strokeDasharray: `${scrollProgress}, 100`
                      }}
                      initial={{ strokeDasharray: "0, 100" }}
                      animate={{ strokeDasharray: `${scrollProgress}, 100` }}
                      transition={{ duration: 0.1 }}
                  />
                </svg>

                {/* Button */}
                <motion.button
                    onClick={scrollToTop}
                    className="relative w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center shadow-lg group overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(20, 184, 166, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                  {/* Animated background */}
                  <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                  />

                  {/* Icon container */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                    >
                      <ArrowUp size={20} />
                    </motion.div>
                  </div>

                  {/* Ripple effect */}
                  <motion.div
                      className="absolute inset-0 bg-white rounded-full"
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileTap={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </div>

              {/* Tooltip */}
              <motion.div
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
              >
                Back to top
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45" />
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
  );
};

export default ScrollToTopButton;