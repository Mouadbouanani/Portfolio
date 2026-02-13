import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Code2, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Full-Stack Development Internship',
    company: 'Office Chérifien des Phosphates (OCP)',
    location: 'Ben Guerir',
    date: 'July - August 2025',
    type: 'internship',
    description: 'Developed a web application for managing weekend/holiday on-call duties using MERN stack with Docker deployment, automatic escalation system, and JWT authentication.',
    technologies: ['MERN Stack', 'Docker', 'REST API', 'MongoDB Atlas', 'JWT', 'UML'],
    achievements: [
      '82% test coverage with unit/integration testing',
      'Complete technical documentation with Swagger UI',
      'Multi-role authentication system',
      'Automatic escalation functionality'
    ]
  },
  {
    role: 'SEO & Digital Marketing Internship',
    company: 'ProBioWell - E-commerce Health Supplements',
    location: 'Remote',
    date: 'August - September 2025',
    type: 'internship',
    description: 'Conducted comprehensive SEO audit and optimization of WordPress/WooCommerce site, implementing Morocco-localized keyword strategy.',
    technologies: ['WordPress', 'WooCommerce', 'Google Search Console', 'RankMath', 'SEO'],
    achievements: [
      'Improved Yoast/RankMath score to >80% on 10+ pages',
      'Implemented morocco-localized keyword strategy',
      'Resolved transactional email issues with SMTP configuration',
      'Enhanced site speed and technical SEO structure'
    ]
  },
  {
    role: 'Web Development Internship',
    company: 'École Normale Supérieure of Casablanca',
    location: 'ENS Casablanca',
    date: 'July - September 2024',
    type: 'internship',
    description: 'Developed and configured ArchUH2 digital archiving platform for Hassan II University using DSpace 8.0 with custom Angular interface.',
    technologies: ['DSpace 8.0', 'PostgreSQL', 'Java', 'Angular', 'Metadata Management'],
    achievements: [
      'Configured enterprise-grade archiving platform',
      'Customized Angular UI to match university branding',
      'Structured academic resources and metadata',
      'Implemented archiving standards compliance'
    ]
  }
];

const projects = [

  {
    title: 'Skill Matching Platform',
    subtitle: 'Mobile & Web Application',
    description: 'Designed and developed a skill-based matching platform connecting users with relevant opportunities using microservices architecture, real-time notifications, secure authentication, and an intelligent matching engine.',
    technologies: [
      'Spring Boot',
      'Spring Cloud',
      'API Gateway',
      'Eureka Discovery',
      'Kafka',
      'JWT Authentication',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Angular',
      'Flutter ',
      'Firebase (Auth & FCM)'
    ],
    type: 'Academic Project'
  },
  {
    title: 'CollabSpace',
    subtitle: 'Microservices Collaboration Platform',
    description: 'Designed and developed a Trello/Slack-like collaboration platform to practice microservices architecture, featuring project and task management, real-time messaging, and event-driven notifications.',
    technologies: [
      'Spring Boot',
      'Spring Cloud',
      'API Gateway',
      'Eureka Discovery',
      'Kafka',
      'JWT Authentication',
      'PostgreSQL',
      'Docker',
      'Angular'
    ],
    type: 'Personal Project'
  },
  {
    title: 'E-commerce Platform for Natural Products',
    subtitle: 'Mobile Application (taawoniyate)',
    description: 'Designed and developed an e-commerce platform for selling natural products from Moroccan cooperatives with mobile app and web backoffice.',
    technologies: ['Spring Boot', 'React Native', 'Angular', 'REST API', 'Swagger', 'Docker'],
    type: 'Academic Project'
  },
  {
    title: 'Hospital Management Application',
    subtitle: 'Desktop Application',
    description: 'Complete desktop application for hospitalization management including patient management and medical procedures.',
    technologies: ['Spring Boot', 'JavaFX', 'PostgreSQL'],
    type: 'Academic Project'
  },
  {
    title: 'Employee Management System',
    subtitle: 'HR Management Platform with CI/CD',
    description: 'Full-stack HR system managing the complete employee lifecycle. Features include UML architecture design, Spring Boot REST APIs, Docker containerization, and an automated CI/CD pipeline using Jenkins and Nexus.',
    technologies: ['Spring Boot', 'Docker', 'Jenkins', 'Nexus', 'REST API', 'UML'],
    type: 'Academic Project'
  }

];

const Experience = () => {
  const { currentTheme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.6,
        damping: 20,
        stiffness: 100
      },
    },
  };

  return (
    <section id="experience" className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${currentTheme.sectionBg} relative overflow-hidden`}>
      {/* Background effects - reduced on mobile */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className={`absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r ${currentTheme.blobPrimary} ${currentTheme.blobSecondary} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r ${currentTheme.blobSecondary} ${currentTheme.blobPrimary} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text text-transparent px-4`}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className={`w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} mx-auto mb-6 sm:mb-8 rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="relative mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line - adjusted for mobile */}
          <div className={`absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-8 sm:mb-12 flex flex-col md:flex-row items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 pl-10 sm:pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  className={`${currentTheme.cardBg} bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border ${currentTheme.cardBorder} hover:${currentTheme.hoverColor} transition-all duration-300 group`}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                    boxShadow: currentTheme.cardShadow
                  }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2 space-x-2">
                      <Briefcase className={`w-4 h-4 sm:w-5 sm:h-5 ${currentTheme.iconColor}`} />
                      <span className={`text-xs uppercase tracking-wide ${currentTheme.secondary} font-semibold`}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${currentTheme.textColor} mb-2 ${currentTheme.hoverTextColor} transition-colors`}>
                      {exp.role}
                    </h3>
                    <p className={`text-base sm:text-lg font-semibold ${currentTheme.secondary} mb-2`}>
                      {exp.company}
                    </p>
                    <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm ${currentTheme.textSecondary} mb-4`}>
                      <span className="flex items-center">
                        <Calendar className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 ${currentTheme.iconColor}`} />
                        {exp.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 ${currentTheme.iconColor}`} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-left text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${currentTheme.textSecondary}`}>
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className={`text-xs sm:text-sm font-semibold ${currentTheme.secondary} mb-2 flex items-center`}>
                      <Code2 className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 ${currentTheme.iconColor}`} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className={`px-2 sm:px-3 py-1 ${currentTheme.skillBg} ${currentTheme.skillText} text-xs rounded-full border ${currentTheme.skillBorder}`}
                          whileHover={{ scale: 1.05, backgroundColor: currentTheme.skillHoverBg }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className={`text-xs sm:text-sm font-semibold ${currentTheme.secondary} mb-2 sm:mb-3 flex items-center`}>
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className={`${currentTheme.textSecondary} text-xs sm:text-sm flex items-start`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${currentTheme.primaryColor} rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <motion.div
                className={`absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full border-2 sm:border-4 ${currentTheme.cardBg} z-10 flex items-center justify-center`}
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 ${currentTheme.cardBg} rounded-full`}></div>
              </motion.div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Notable Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 ${currentTheme.textColor} px-4`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Notable Academic Projects
          </motion.h3>
          <motion.p
            className={`text-center ${currentTheme.textSecondary} mb-8 sm:mb-12 max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Highlighted projects showcasing architecture, design patterns and full-stack development skills.
          </motion.p>

          <motion.div
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`relative ${currentTheme.cardBg} bg-opacity-80 backdrop-blur-xl rounded-xl sm:rounded-2xl border ${currentTheme.cardBorder} overflow-hidden`}
                  whileHover={{
                    y: -3,
                    boxShadow: currentTheme.cardShadow
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Left accent border */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`} />

                  <div className="p-5 sm:p-6 pl-6 sm:pl-8">
                    {/* Top row: number + type badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold uppercase tracking-widest ${currentTheme.secondary}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider ${currentTheme.skillBg} ${currentTheme.skillText} border ${currentTheme.skillBorder}`}>
                          {project.type}
                        </span>
                      </div>
                      <Briefcase size={16} className={`${currentTheme.iconColor} opacity-40 group-hover:opacity-100`} style={{ transition: 'opacity 0.3s' }} />
                    </div>

                    {/* Title + subtitle */}
                    <h4 className={`text-lg sm:text-xl font-bold ${currentTheme.textColor} mb-1 leading-tight`}>
                      {project.title}
                    </h4>
                    <p className={`${currentTheme.secondary} font-medium text-sm mb-3`}>
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className={`${currentTheme.textSecondary} text-sm mb-4 leading-relaxed`}>
                      {project.description}
                    </p>

                    {/* Tech stack — horizontal scroll on mobile */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 text-[0.65rem] font-medium rounded-md ${currentTheme.skillBg} ${currentTheme.skillText} border ${currentTheme.skillBorder}`}
                        >
                          {tech}
                        </span>
                      ))}
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

export default Experience;