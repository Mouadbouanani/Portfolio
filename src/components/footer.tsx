import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
    const { currentTheme } = useTheme();
    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${currentTheme.cardBg} ${currentTheme.textSecondary} py-10 sm:py-12 md:py-16 mt-16 sm:mt-20 border-t ${currentTheme.border} bg-opacity-80 backdrop-blur-xl`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="flex flex-col space-y-8 sm:space-y-10">

                    {/* Brand & Social - Top on mobile */}
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
                        {/* Brand */}
                        <motion.div
                            className="font-semibold text-base sm:text-lg text-center sm:text-left font-heading"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className={`gradient-text bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text text-transparent`}>
                                © {new Date().getFullYear()} Mouad El Bouanani
                            </span>
                        </motion.div>

                        {/* Social Links */}
                        <div className="flex space-x-5 sm:space-x-7">
                            <motion.a
                                href="https://github.com/Mouadbouanani"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={`p-2 rounded-full bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} backdrop-blur-sm border ${currentTheme.border} hover:from-blue-600 hover:to-blue-800 transition-all duration-300`}
                                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} className="sm:w-5 sm:h-5 text-white" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/mouad-el-bouanani-809418299/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={`p-2 rounded-full bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} backdrop-blur-sm border ${currentTheme.border} hover:from-blue-600 hover:to-blue-800 transition-all duration-300`}
                                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={20} className="sm:w-5 sm:h-5 text-white" />
                            </motion.a>
                            <motion.a
                                href="mailto:mouad.el-bouanani@esi.ac.ma"
                                aria-label="Email"
                                className={`p-2 rounded-full bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} backdrop-blur-sm border ${currentTheme.border} hover:from-blue-600 hover:to-blue-800 transition-all duration-300`}
                                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Mail size={20} className="sm:w-5 sm:h-5 text-white" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Navigation Links - Grid on mobile */}
                    <nav className={`border-t ${currentTheme.border} pt-8`}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center gap-3 sm:gap-4 md:space-x-6">
                            {["Home", "About", "Experience", "Projects", "Certifications", "Contact"].map((section, index) => (
                                <motion.a
                                    key={section}
                                    href={`#${section.toLowerCase()}`}
                                    onClick={(e) => smoothScroll(e, section)}
                                    className={`text-sm sm:text-base ${currentTheme.textSecondary} ${currentTheme.hoverTextColor} transition-colors duration-300 text-center font-sans`}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    viewport={{ once: true }}
                                >
                                    {section}
                                </motion.a>
                            ))}
                        </div>
                    </nav>

                    {/* Additional Info */}
                    <div className={`text-center text-xs sm:text-sm ${currentTheme.textSecondary} border-t ${currentTheme.border} pt-8`}>
                        <p className="font-sans">Built with React, Tailwind CSS & Framer Motion</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;