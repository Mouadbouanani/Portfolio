import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const smoothScroll = (e :React.MouseEvent<HTMLAnchorElement>, section : string) => {
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
            className="bg-slate-900 text-gray-400 py-8 sm:py-10 md:py-12 mt-16 sm:mt-20 border-t border-slate-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="flex flex-col space-y-6 sm:space-y-8">

                    {/* Brand & Social - Top on mobile */}
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* Brand */}
                        <motion.div
                            className="text-white font-semibold text-base sm:text-lg text-center sm:text-left"
                            whileHover={{ scale: 1.02 }}
                        >
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                © {new Date().getFullYear()} Mouad El Bouanani
              </span>
                        </motion.div>

                        {/* Social Links */}
                        <div className="flex space-x-6 sm:space-x-8">
                            <motion.a
                                href="https://github.com/Mouadbouani"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={24} className="sm:w-6 sm:h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/mouad-el-bouanani-809418299/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={24} className="sm:w-6 sm:h-6" />
                            </motion.a>
                            <motion.a
                                href="mailto:mouad.el-bouani@esi.ac.ma"
                                aria-label="Email"
                                className="hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Mail size={24} className="sm:w-6 sm:h-6" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Navigation Links - Grid on mobile */}
                    <nav className="border-t border-slate-800 pt-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center gap-4 sm:gap-6 md:space-x-8">
                            {["Home", "About", "Experience", "Projects", "Certifications", "Contact"].map((section, index) => (
                                <motion.a
                                    key={section}
                                    href={`#${section.toLowerCase()}`}
                                    onClick={(e) => smoothScroll(e, section)}
                                    className="text-sm sm:text-base hover:text-blue-400 transition-colors duration-300 text-center"
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
                    <div className="text-center text-xs sm:text-sm text-gray-500 border-t border-slate-800 pt-6">
                        <p>Built with React, Tailwind CSS & Framer Motion</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;