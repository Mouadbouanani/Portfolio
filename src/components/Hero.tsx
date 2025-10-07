import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const name = "Mouad EL BOUANANI";

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark animate-gradient-xy"></div>
      </div>

      <div className="text-center z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">Software Engineer | Full-Stack Developer</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#projects" className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition-colors">View Projects</a>
          <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-dark transition-colors">Contact Me</a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Mouadbouanani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors"><Github size={28} /></a>
          <a href="https://linkedin.com/in/mouad-el-bouanani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors"><Linkedin size={28} /></a>
          <a href="mailto:mouad.el-bouanani@esi.ac.ma" className="text-white hover:text-secondary transition-colors"><Mail size={28} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;