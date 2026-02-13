import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';
import { getTechIcon } from '../utils/techIcons';

// Define type for skills
type Skill = {
  name: string;
  icon: string;
};

// Updated skills with official logos (using the names from techIcons.tsx)
const skills: Record<string, Skill[]> = {
  "Languages": [
    { name: "Java", icon: "java" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "C", icon: "c" },
    { name: "C++", icon: "cpp" },
    { name: "Scala", icon: "scala" },
    { name: "PHP", icon: "php" },
    { name: "Dart", icon: "dart" }
  ],
  "Frontend": [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "React Native", icon: "reactnative" },
    { name: "Angular", icon: "angular" },
    { name: "Vue.js", icon: "vue" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "HTML5/CSS3", icon: "html5css3" },
    { name: "Bootstrap", icon: "bootstrap" }
  ],
  "Backend": [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Django", icon: "django" },
    { name: "Spring Boot", icon: "springboot" },
    { name: "Laravel", icon: "laravel" },
    { name: "JEE", icon: "jee" }
  ],
  "Architecture & Design Patterns": [
    { name: "MVC", icon: "mvc" },
    { name: "MTV", icon: "mtv" },
    { name: "Microservices", icon: "microservices" },
    { name: "REST API", icon: "restapi" },
    { name: "Singleton Pattern", icon: "mvc" },
    { name: "Factory Method Pattern", icon: "mvc" }
  ],
  "Cloud/DevOps": [
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Jenkins", icon: "jenkins" },
    { name: "GitHub Actions", icon: "githubactions" },
    { name: "CI/CD", icon: "cicd" },
    { name: "AWS", icon: "aws" },
    { name: "Nexus", icon: "nexus" },
    { name: "Git", icon: "git" }
  ],
  "Databases": [
    { name: "MongoDB", icon: "mongodb" },
    { name: "MongoDB Atlas", icon: "mongodbatlas" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Oracle", icon: "oracle" },
    { name: "Firebase", icon: "firebase" }
  ],
  "Mobile": [
    { name: "Android (Kotlin)", icon: "android" },
    { name: "React Native", icon: "reactnative" },
    { name: "Flutter", icon: "flutter" }
  ],
  "Middleware & Services": [
    { name: "Kafka", icon: "kafka" },
    { name: "Eureka", icon: "eureka" }
  ],
  "Design": [
    { name: "Figma", icon: "figma" },
    { name: "UI/UX Principles", icon: "figma" }
  ]
};


// Extracurricular activities
const activities = [
  {
    title: "JCMP ESI - School of Information Science",
    description: "As an active member of this student club, I actively participated in organizing academic events and carrying out social and humanitarian activities within the School of Information Science. This experience helped me develop important skills in team coordination and collaborative work."
  },
  {
    title: "JCMP - Young Moroccan Public-Economic Community",
    description: "Engaged in a community dedicated to promoting economic development and civic participation, where I contributed to initiatives aimed at helping young people better understand the economic and political landscape of the country and fostering their integration into public life."
  }
];

const About = () => {
  const { currentTheme } = useTheme();
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
        ease: "easeOut" as const
      },
    },
  };

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${currentTheme.sectionBg} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r ${currentTheme.blobPrimary} ${currentTheme.blobSecondary} rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r ${currentTheme.blobSecondary} ${currentTheme.blobPrimary} rounded-full blur-3xl`} />
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
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text text-transparent`}
            whileInView={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} mx-auto mb-8 rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            className={`text-lg md:text-xl ${currentTheme.textSecondary} max-w-4xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I am an engineering student at the <span className={`${currentTheme.secondary} font-semibold`}>School of Information Science</span> in Rabat,
            specializing in <span className={`${currentTheme.primary} font-semibold`}>Information Systems and Digital Transformation</span>.
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
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${currentTheme.textColor}`}
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
                  className={`${currentTheme.cardBg} bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl border ${currentTheme.cardBorder} hover:${currentTheme.hoverColor} transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: currentTheme.cardShadow,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.primaryLight} ${currentTheme.secondaryLight} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <motion.h4
                    className={`text-xl md:text-2xl font-bold mb-6 ${currentTheme.textColor} flex items-center relative z-10`}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`mr-3 p-2 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category === 'Languages' && <Code className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                      {category === 'Frontend' && <Smartphone className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                      {category === 'Backend' && <Database className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                      {category === 'Mobile' && <Smartphone className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                      {category === 'Cloud/DevOps' && <Cloud className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                      {category === 'Databases' && <Database className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                      {category === 'Design' && <Code className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                      {category === 'Architecture & Design Patterns' && <Code className={`w-5 h-5 ${currentTheme.iconColor}`} />}
                    </motion.div>
                    {category}
                  </motion.h4>

                  <motion.div
                    className="flex flex-wrap gap-2 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {(items as Skill[]).map((skill, skillIndex) => (
                      <motion.div
                        key={`${skill.name}-${skillIndex}`}
                        className={`${currentTheme.skillBg} ${currentTheme.skillText} px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-sm border ${currentTheme.skillBorder} ${currentTheme.skillHoverBorder} hover:shadow-md hover:shadow-blue-200 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-w-[80px]`}
                        whileHover={{
                          scale: 1.05,
                          y: -3,
                          backgroundColor: currentTheme.skillHoverBg,
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
                        <div className="w-5 h-5 mb-0.5">
                          {getTechIcon(skill.icon)}
                        </div>
                        <span className="text-[0.7rem]">{skill.name}</span>
                      </motion.div>
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
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${currentTheme.textColor}`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Extracurricular Activities
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  className={`relative h-full ${currentTheme.cardBg} backdrop-blur-xl rounded-2xl border ${currentTheme.cardBorder} overflow-hidden flex flex-col group`}
                  whileHover={{
                    y: -5,
                    boxShadow: currentTheme.cardShadow,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`} />

                  {/* Background Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.primaryLight} ${currentTheme.secondaryLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full items-center text-center">
                    <h4 className={`text-xl font-bold ${currentTheme.textColor} mb-4 group-hover:${currentTheme.primary} transition-colors duration-300`}>
                      {activity.title}
                    </h4>

                    <p className={`${currentTheme.textSecondary} text-sm sm:text-base leading-relaxed flex-grow`}>
                      {activity.description}
                    </p>
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