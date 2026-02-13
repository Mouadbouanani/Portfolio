import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from './ParticleBackground';

const Hero3D = () => {
    const { currentTheme } = useTheme();

    return (
        <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${currentTheme.background}`} id="home">
            {/* Backgrounds */}
            <ParticleBackground />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(29,205,159,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(29,205,159,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm font-mono uppercase tracking-widest text-[#1DCD9F]"
                        >
                            Welcome to my digital universe
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        >
                            <span className={currentTheme.textColor}> </span>
                            <span className={`bg-clip-text text-transparent font-extrabold bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`}>
                                EL BOUANANI Mouad
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className={`text-2xl md:text-3xl font-semibold ${currentTheme.accentColor}`}
                        >
                            Software Engineer & Full-Stack Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className={`text-lg max-w-lg ${currentTheme.textSecondary}`}
                        >
                            Crafting immersive, high-performance web experiences with modern tech stacks.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: currentTheme.cardShadow }}
                                className={`px-8 py-4 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} text-white font-bold rounded-lg ${currentTheme.cardShadowTailwind}`}
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, boxShadow: currentTheme.cardShadow }}
                                className={`px-8 py-4 border ${currentTheme.border} ${currentTheme.textColor} rounded-lg hover:bg-[${currentTheme.primaryLight}]`}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Socials */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex gap-6 justify-center lg:justify-start"
                        >
                            {[
                                { Icon: Github, href: "https://github.com/Mouadbouanani" },
                                { Icon: Linkedin, href: "https://linkedin.com/in/mouad-el-bouanani" },
                                { Icon: Mail, href: "mailto:mouad.el-bouanani@esi.ac.ma" },
                            ].map(({ Icon, href }) => (
                                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                                    className={`p-3 ${currentTheme.socialIcon} ${currentTheme.socialBorder} rounded-lg hover:border-${currentTheme.accentColor} hover:bg-${currentTheme.accentColor}/10 transition-all`}
                                >
                                    <Icon className={`w-6 h-6 ${currentTheme.iconColor} hover:${currentTheme.accentColor}`} />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-full h-96 lg:h-full min-h-[500px] flex items-center justify-center"
                    >
                        <img
                            src="mouad.png"
                            alt="Mouad El Bouanani"
                            className={`w-80 h-80 object-cover rounded-full border-8 ${currentTheme.photoBorder} ${currentTheme.cardShadowTailwind} hover:scale-110 hover:rotate-3 hover:shadow-purple-500/50 transition-all duration-700 ease-out animate-pulse`}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <div className={`border-2 ${currentTheme.secondaryLight} rounded-full p-2 w-8 h-12 flex items-center justify-center`}>
                    <div className={`w-1 h-3 ${currentTheme.secondaryColor} rounded-full animate-pulse`} />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero3D;