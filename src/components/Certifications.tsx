import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Star } from 'lucide-react';
import type { Transition } from 'framer-motion';

// Updated certifications based on CV
const certifications = [
  {
    name: 'AWS Cloud Practitioner (CLF-C02)',
    issuer: 'DataCamp',
    date: '2024',
    credentialUrl: 'https://www.datacamp.com/statement-of-accomplishment/track/20b26af7a3b2d8ede37e0d75533ce62a9086385a?raw=1',
    skills: ['Cloud Fundamentals', 'AWS Core Services', 'Security & Compliance', 'Billing & Cost Management'],
    badge: '',
    priority: 'high'
  },
  {
    name: 'AWS Cloud Technology and Services Concepts',
    issuer: 'DataCamp',
    date: '2024',
    credentialUrl: 'https://www.datacamp.com/statement-of-accomplishment/course/bc647eddf1d58d6abe6facbddcb891a8a06244a5?raw=1',
    skills: ['Compute Services', 'Storage & Databases', 'Networking & Content Delivery'],
    badge: '',
    priority: 'medium'
  },
  {
    name: 'AWS Security and Cost Management Concepts',
    issuer: 'DataCamp',
    date: '2024',
    credentialUrl: 'https://www.datacamp.com/statement-of-accomplishment/course/f578c2cefdb7b5dcff42180cb96cb6c0496c11ff?raw=1',
    skills: ['Security Skills', 'Cost Management', 'Overall AWS Skills'],
    badge: '',
    priority: 'medium'
  },
  {
    name: 'Agile Certification for Beginners',
    issuer: 'Great Learning',
    date: '2024',
    credentialUrl: 'https://www.mygreatlearning.com/certificate/QBZSZGTN',
    skills: ['Agile Principles', 'Scrum & Kanban Frameworks', 'Team Roles'],
    badge: '',
    priority: 'high'
  },
  {
    name: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    date: '2024',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/D6QSJE8YRCSZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    skills: ['Python Programming Fundamentals', 'Web Development', 'Data Science'],
    badge: '',
    priority: 'high'
  },
  {
    name: 'Understanding Cloud Computing',
    issuer: 'DataCamp',
    date: '2024',
    credentialUrl: 'https://www.datacamp.com/statement-of-accomplishment/course/379f5d23bc8f6aa85a66effbf7abf2f9ec52a8b2?raw=1',
    skills: ['Cloud Fundamentals', 'Deployment Models', 'Cloud Architectures'],
    badge: '',
    priority: 'medium'
  }
];

// Academic achievements
const academicAchievements = [
  {
    title: 'University Diploma of General Studies',
    institution: 'Faculty of Sciences Semlalia Marrakech',
    date: '2021-2023',
    description: 'Strong foundation in mathematics, physics, and computer science with honors recognition.',
    icon: <Star className="w-6 h-6" />
  },
  {
    title: 'Baccalaureate in Physical Sciences',
    institution: 'Bouchane High School',
    date: '2021',
    description: 'Graduated with honors in Physical Sciences, demonstrating strong analytical and problem-solving skills.',
    icon: <Award className="w-6 h-6" />
  }
];

const Certifications = () => {
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
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.5,
        damping: 20,
        stiffness: 100
      } as Transition,
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    } as Transition
  };

  return (
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                  key={i}
                  className={`absolute opacity-10 ${
                      i % 2 === 0 ? 'w-20 h-20 border-2 border-secondary' : 'w-16 h-16 bg-gradient-to-br from-primary to-secondary rotate-45'
                  }`}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 15 + 10,
                    repeat: Infinity,
                    ease: "linear" as const
                  }}
              />
          ))}
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
              Certifications & Achievements
            </motion.h2>
            <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            />
            <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
              Continuous learning and professional development through industry-recognized certifications
            </motion.p>
          </motion.div>

          {/* Professional Certifications */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20"
          >
            <motion.h3
                className="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              Professional Certifications
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                  <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group relative"
                  >
                    <motion.div
                        className={`h-full bg-slate-800 bg-opacity-50 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border transition-all duration-300 relative overflow-hidden ${
                            cert.priority === 'high'
                                ? 'border-secondary hover:border-primary'
                                : 'border-slate-700 hover:border-secondary'
                        }`}
                        whileHover={{
                          y: -10,
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)"
                        }}
                        animate={cert.priority === 'high' ? floatingAnimation : undefined}
                        whileTap={{ scale: 0.98 }}
                    >
                      {/* Priority indicator */}
                      {cert.priority === 'high' && (
                          <div className="absolute top-4 right-4">
                            <motion.div
                                className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                      )}

                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        {/* Header with badge */}
                        <div className="flex items-start justify-between mb-4">
                          <motion.div
                              className="text-4xl mb-2"
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                          >
                            {cert.badge}
                          </motion.div>
                          <motion.div
                              className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                          >
                            <Award className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors leading-tight">
                          {cert.name}
                        </h3>
                        <p className="text-primary font-semibold mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center text-gray-400 text-sm mb-4">
                          <Calendar className="w-4 h-4 mr-1" />
                          {cert.date}
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-secondary mb-2">Skills Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                                <motion.span
                                    key={skill}
                                    className="px-2 py-1 bg-slate-700 bg-opacity-80 text-gray-300 text-xs rounded-full border border-slate-600"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.2)' }}
                                    viewport={{ once: true }}
                                >
                                  {skill}
                                </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* View credential button */}
                        <motion.a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm rounded-full hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          <span>View Credential</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Achievements */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <motion.h3
                className="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              Academic Excellence
            </motion.h3>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {academicAchievements.map((achievement, index) => (
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
                        <div className="flex items-start space-x-4 mb-4">
                          <motion.div
                              className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                          >
                            {achievement.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                              {achievement.title}
                            </h4>
                            <p className="text-primary font-semibold mb-1">
                              {achievement.institution}
                            </p>
                            <div className="flex items-center text-gray-400 text-sm mb-3">
                              <Calendar className="w-4 h-4 mr-1" />
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
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

export default Certifications;