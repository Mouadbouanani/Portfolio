import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

// Updated skills based on CV
const skills = {
  "Languages": ["Java", "JavaScript/TypeScript", "Python", "PHP"],
  "Frontend": ["React.js", "React Native", "Angular",  "Tailwind CSS","HTML5/CSS3", "Bootstrap"],
  "Backend": ["Node.js/Express", "Spring Boot", "Laravel", "JEE","Django"],
  "Mobile": ["Android (Kotlin)", "React Native", "Flutter"],
  "Cloud/DevOps": ["Docker", "Jenkins", "GitHub Actions", "CI/CD", "AWS"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  "Architecture & Design Patterns": [
    "MVC ",
      "MTV",
    // "MEVN Stack (MongoDB, Express, Vue, Node)",
    "Singleton Pattern",
    "Factory Method Pattern"
    // "Abstract Factory Pattern"
  ],
  "Design": ["Figma", "UI/UX Principles"]
};


// Extracurricular activities
const activities = [
  {
    title: "Member of JCMP Maroc",
    description: "Engaged in social and educational initiatives nationwide, contributing to community development and educational outreach programs.",
    icon: ""
  },
  {
    title: "Active Member of JCMESI Club",
    description: "Participating in organizing academic events and digital awareness projects at École des Sciences de l'Information.",
    icon: ""
  }
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [] // easeOut bezier curve
      },
    },
  };

  return (
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-primary bg-clip-text text-transparent"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            />
            <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
              I am an engineering student at the <span className="text-secondary font-semibold">School of Information Science</span> in Rabat,
              specializing in <span className="text-primary font-semibold">Information Systems and Digital Transformation</span>.
              With hands-on experience in full-stack development using Spring Boot, Node.js, Angular, and React,
              I'm passionate about solving complex problems and building innovative digital solutions.
            </motion.p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
          >
            <motion.h3
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              Technical Skills
            </motion.h3>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                      key={category}
                      variants={itemVariants}
                      className="group relative"
                  >
                    <motion.div
                        className="bg-slate-800 bg-opacity-50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 hover:border-secondary transition-all duration-300 shadow-2xl relative overflow-hidden"
                        whileHover={{
                          y: -10,
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <motion.h4
                          className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center relative z-10"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                      >
                        <motion.div
                            className="mr-3 p-2 bg-gradient-to-br from-primary to-secondary rounded-lg"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        >
                          {category === 'Languages' && <Code className="w-5 h-5 text-white" />}
                          {category === 'Frontend' && <Smartphone className="w-5 h-5 text-white" />}
                          {category === 'Backend' && <Database className="w-5 h-5 text-white" />}
                          {category === 'Mobile' && <Smartphone className="w-5 h-5 text-white" />}
                          {category === 'Cloud/DevOps' && <Cloud className="w-5 h-5 text-white" />}
                          {category === 'Databases' && <Database className="w-5 h-5 text-white" />}
                          {category === 'Design' && <Code className="w-5 h-5 text-white" />}
                          {category === 'Architecture & Design Patterns' && <Code className="w-5 h-5 text-white" />}
                        </motion.div>
                        {category}
                      </motion.h4>

                      <motion.div
                          className="flex flex-wrap gap-3 relative z-10"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                      >
                        {items.map((skill, skillIndex) => (
                            <motion.span
                                key={skill}
                                className="bg-slate-700 bg-opacity-80 text-gray-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-slate-600 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 cursor-pointer"
                                whileHover={{
                                  scale: 1.05,
                                  y: -2,
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.1 + skillIndex * 0.05 + 0.5
                                }}
                                viewport={{ once: true }}
                            >
                              {skill}
                            </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Extracurricular Activities */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <motion.h3
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              Extracurricular Activities
            </motion.h3>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {activities.map((activity, index) => (
                  <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                  >
                    <motion.div
                        className="bg-slate-800 bg-opacity-50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700 hover:border-secondary transition-all duration-300 shadow-2xl relative overflow-hidden"
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          boxShadow: "0 15px 30px rgba(20, 184, 166, 0.1)"
                        }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="flex items-start space-x-4">
                          <motion.div
                              className="text-3xl"
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                          >
                            {activity.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                              {activity.title}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {activity.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;