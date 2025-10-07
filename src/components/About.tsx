import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

const skills = {
  "Languages": ["Java", "JavaScript/TypeScript", "Python", "PHP"],
  "Frontend": ["React.js", "Angular", "HTML5/CSS3", "Bootstrap"],
  "Backend": ["Node.js/Express", "Spring Boot", "Laravel", "JEE"],
  "Mobile": ["Android (Kotlin)", "React Native"],
  "Cloud/DevOps": ["Docker", "Jenkins", "GitHub Actions", "CI/CD"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
            I am an engineering student at the National Higher School of Arts and Crafts (ENSAM) in Casablanca, currently in my 4th year (equivalent to the first year of the engineering cycle). I am specializing in Information Systems and Digital Transformation. I am passionate about solving complex problems and building innovative solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-secondary flex items-center">
                  {category === 'Languages' && <Code className="mr-2" />}
                  {category === 'Frontend' && <Code className="mr-2" />}
                  {category === 'Backend' && <Database className="mr-2" />}
                  {category === 'Mobile' && <Smartphone className="mr-2" />}
                  {category === 'Cloud/DevOps' && <Cloud className="mr-2" />}
                  {category === 'Databases' && <Database className="mr-2" />}
                  {category}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <li key={skill} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;