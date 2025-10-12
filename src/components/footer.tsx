import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
    <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-dark text-gray-400 py-8 mt-20"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Brand */}
            <div className="text-white font-semibold text-lg">
                © {new Date().getFullYear()} Mouad El Bouanani
            </div>

            {/* Navigation links */}
            <nav className="space-x-6">
                {["Home", "About", "Experience", "Projects", "Certifications", "Contact"].map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className="hover:text-primary transition-colors"
                    >
                        {section}
                    </a>
                ))}
            </nav>

            {/* Social */}
            <div className="flex space-x-6">
                <a
                    href="https://github.com/Mouadbouani"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-primary transition-colors"
                >
                    <Github size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/mouad-el-bouanani-809418299/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-primary transition-colors"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="mailto:mouad.el-bouani@esi.ac.ma"
                    aria-label="Email"
                    className="hover:text-primary transition-colors"
                >
                    <Mail size={24} />
                </a>
            </div>
        </div>
    </motion.footer>
);

export default Footer;
