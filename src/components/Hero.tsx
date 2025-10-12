import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code, Database, Cloud } from 'lucide-react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentTitle, setCurrentTitle] = useState(0);

    const titles = [
        "Software Engineer",
        "Full-Stack Developer",
        "MERN Stack Developer",
        "Cloud Solutions Architect"
    ];

    const name = "Mouad EL BOUANANI";

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    const particleVariants = {
        animate: {
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
            transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear" as const
            }
        }
    };

    const nameVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        },
    };

    const particles = Array.from({ length: 50 }, (_, i) => (
        <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full opacity-20"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
            animate={particleVariants.animate}
        />
    ));

    const geometricShapes = Array.from({ length: 8 }, (_, i) => (
        <motion.div
            key={i}
            className={`absolute opacity-10 ${
                i % 3 === 0 ? 'w-32 h-32 border-2 border-secondary' :
                    i % 3 === 1 ? 'w-24 h-24 bg-gradient-to-br from-primary to-secondary' :
                        'w-20 h-20 bg-gradient-to-br from-secondary to-primary transform rotate-45'
            }`}
            style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear" as const
            }}
        />
    ));

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                }}
            />

            <div className="absolute inset-0 overflow-hidden">
                {particles}
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {geometricShapes}
            </div>

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: mousePosition.x * 50,
                    y: mousePosition.y * 50,
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full opacity-20 blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: mousePosition.x * -30,
                    y: mousePosition.y * -30,
                }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="text-center z-10 max-w-6xl mx-auto px-4">
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        background: 'linear-gradient(45deg, #ffffff, #14B8A6, #052d75)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% 200%'
                    }}
                >
                    {name.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.div
                    className="h-20 mb-8 flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <motion.p
                        key={currentTitle}
                        className="text-xl md:text-3xl text-gray-300 font-light"
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        {titles[currentTitle]}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex justify-center space-x-8 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    {[Code, Database, Cloud].map((Icon, index) => (
                        <motion.div
                            key={index}
                            className="p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20"
                            whileHover={{
                                scale: 1.2,
                                rotate: 360,
                                backgroundColor: 'rgba(20, 184, 166, 0.2)'
                            }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.3
                                }
                            }}
                        >
                            <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <motion.a
                        href="#projects"
                        className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full overflow-hidden shadow-2xl"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 20px 40px rgba(20, 184, 166, 0.3)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 font-semibold">View My Work</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="group px-8 py-4 border-2 border-white text-white rounded-full backdrop-blur-sm bg-white bg-opacity-10 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            borderColor: '#14B8A6',
                            color: '#0F172A'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="font-semibold">Get In Touch</span>
                    </motion.a>

                    <motion.a
                        href="./assets/EL_BOUANANI_Mouad_En.pdf"
                        target="_blank"
                        download
                        className="group px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300 shadow-lg flex items-center space-x-2"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(20, 184, 166, 0.8)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download className="w-5 h-5" />
                        <span className="font-semibold">Download CV</span>
                    </motion.a>
                </motion.div>

                <motion.div
                    className="flex justify-center space-x-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                >
                    {[
                        { Icon: Github, href: "https://github.com/Mouadbouanani", label: "GitHub" },
                        { Icon: Linkedin, href: "https://linkedin.com/in/mouad-el-bouanani", label: "LinkedIn" },
                        { Icon: Mail, href: "mailto:mouad.el-bouanani@esi.ac.ma", label: "Email" }
                    ].map(({ Icon, href, label }, index) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20 hover:border-secondary transition-all duration-300"
                            whileHover={{
                                scale: 1.2,
                                rotate: 360,
                                backgroundColor: 'rgba(20, 184, 166, 0.2)',
                                borderColor: '#14B8A6'
                            }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.5
                                }
                            }}
                        >
                            <Icon className="w-6 h-6 text-white group-hover:text-secondary transition-colors" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-white rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;