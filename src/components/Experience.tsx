import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Code2, Briefcase } from 'lucide-react';
import type { Transition } from 'framer-motion';

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
    title: 'Chatbot Development',
    subtitle: 'NLP Project',
    description: 'Created a rule-based chatbot using Python with NLTK library for Natural Language Processing.',
    technologies: ['Python', 'NLTK', 'NLP'],
    type: 'Academic Project'
  },
  {
    title: 'E-commerce Website',
    subtitle: 'Full-Stack Application (Personal)',
    description: 'Developed an e-commerce site with user role management (Customer, Supplier, Administrator), product management, cart, orders, and payment tracking.',
    technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Git'],
    type: 'Personal Project'
  }
];

const Experience = () => {
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
      } as Transition,
    },
  };

  return (
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              Professional Experience
            </motion.h2>
            <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            />
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
              className="relative mb-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>

            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`mb-12 flex flex-col md:flex-row items-start md:items-center w-full ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                        className="bg-slate-800 bg-opacity-50 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-700 hover:border-secondary transition-all duration-300 group"
                        whileHover={{
                          y: -10,
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)"
                        }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2 space-x-2">
                          <Briefcase className="w-5 h-5 text-secondary" />
                          <span className="text-xs uppercase tracking-wide text-secondary font-semibold">
                        {exp.type}
                      </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.date}
                      </span>
                          <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                      </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-left mb-6 leading-relaxed text-gray-300">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-secondary mb-2 flex items-center">
                          <Code2 className="w-4 h-4 mr-1" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                  key={tech}
                                  className="px-3 py-1 bg-slate-700 bg-opacity-80 text-gray-300 text-xs rounded-full border border-slate-600"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.2)' }}
                                  viewport={{ once: true }}
                              >
                                {tech}
                              </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                  key={achIndex}
                                  className="text-gray-300 text-sm flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                                  viewport={{ once: true }}
                              >
                                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                      className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-slate-900 z-10 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
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
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              Notable Academic Projects
            </motion.h3>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                        className="bg-slate-800 bg-opacity-50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700 hover:border-secondary transition-all duration-300 shadow-2xl relative overflow-hidden"
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          boxShadow: "0 15px 30px rgba(20, 184, 166, 0.1)"
                        }}
                    >
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="mb-4">
                      <span className="text-xs uppercase tracking-wide text-secondary font-semibold mb-2 block">
                        {project.type}
                      </span>
                          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-primary font-semibold mb-3">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                              <motion.span
                                  key={tech}
                                  className="px-3 py-1 bg-slate-700 bg-opacity-80 text-gray-300 text-xs rounded-full border border-slate-600"
                                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.2)' }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                  viewport={{ once: true }}
                              >
                                {tech}
                              </motion.span>
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