import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'ENS Casablanca',
    date: 'July 2023 - Aug 2023',
    description: 'Developed a web application for managing internships for the preparatory cycle students.'
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'Freelance',
    date: 'June 2023 - Present',
    description: 'Working on a variety of projects using the MERN stack, focusing on building RESTful APIs and dynamic front-end applications.'
  },
  {
    role: 'SEO & Digital Marketing Intern',
    company: 'Freelance',
    date: 'Jan 2023 - Mar 2023',
    description: 'Improved search engine rankings for several clients through on-page and off-page SEO techniques. Managed social media campaigns.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-700"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-secondary rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-5/12">
                <div className={`bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-secondary/50 transition-shadow duration-300 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-md font-semibold text-secondary mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.date}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;