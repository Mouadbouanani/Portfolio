import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add a toast notification here if you want
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-secondary" />
                <span className="text-gray-300">Ben Guerir, Morocco</span>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer" onClick={() => copyToClipboard('mouad.el-bouanani@esi.ac.ma')}>
                <Mail className="h-6 w-6 text-secondary" />
                <span className="text-gray-300 hover:text-secondary">mouad.el-bouanani@esi.ac.ma</span>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer" onClick={() => copyToClipboard('+212 6 51 80 95 42')}>
                <Phone className="h-6 w-6 text-secondary" />
                <span className="text-gray-300 hover:text-secondary">+212 6 51 80 95 42</span>
              </div>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/Mouadbouanani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><Github size={28} /></a>
              <a href="https://linkedin.com/in/mouad-el-bouanani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><Linkedin size={28} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" name="name" id="name" className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:ring-secondary focus:border-secondary" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" name="email" id="email" className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:ring-secondary focus:border-secondary" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:ring-secondary focus:border-secondary" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors">Send Message</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
