import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Rabat, Morocco",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mouad.el-bouanani@esi.ac.ma",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+212 6 51 80 95 42",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={28} />,
      href: "https://github.com/Mouadbouanani",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={28} />,
      href: "https://linkedin.com/in/mouad-el-bouanani",
      label: "LinkedIn",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID!,
          import.meta.env.VITE_TEMPLATE_ID!,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY!
      );

      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
      <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse" />
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's discuss opportunities, collaborations, or just have a chat
              about technology and innovation.
            </p>
          </motion.div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-2xl border border-slate-700 hover:border-secondary transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                      <div className="text-secondary p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          {info.label}
                        </p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                      <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-4 bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-2xl border border-slate-700 hover:border-secondary transition-all duration-300 text-gray-400 hover:text-secondary"
                          whileHover={{
                            scale: 1.1,
                            y: -5,
                            boxShadow: "0 10px 25px rgba(20, 184, 166, 0.2)",
                          }}
                          title={social.label}
                      >
                        {social.icon}
                      </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800 bg-opacity-50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send me a message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                        type="text"
                        name="from_name"
                        id="name"
                        className="w-full bg-slate-700 bg-opacity-50 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Your Name"
                        required
                    />
                  </div>

                  <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                        type="email"
                        name="from_email"
                        id="email"
                        className="w-full bg-slate-700 bg-opacity-50 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                    />
                  </div>
                </div>

                <div>
                  <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="w-full bg-slate-700 bg-opacity-50 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="What's this about?"
                      required
                  />
                </div>

                <div>
                  <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="w-full bg-slate-700 bg-opacity-50 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      required
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                    <motion.div
                        className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                      <CheckCircle size={20} />
                      <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                      <AlertCircle size={20} />
                      <span>{errorMessage}</span>
                    </motion.div>
                )}

                <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:from-secondary hover:to-primary transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                  {status === "sending" ? (
                      <>
                        <Loader className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </>
                  ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
