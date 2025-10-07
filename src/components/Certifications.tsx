import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: '#' // Add actual link here
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    link: '#' // Add actual link here
  },
  // Add other certifications here
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-slate-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <Award className="h-12 w-12 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                <p className="text-md text-gray-400">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;