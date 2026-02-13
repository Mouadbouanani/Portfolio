import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Loader, AlertCircle, Star, GitFork, Calendar, Code, ArrowUpRight } from 'lucide-react';
import { GITHUB_CONFIG } from '../config/github';
import { useTheme } from '../contexts/ThemeContext';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
}

type Project = GitHubRepo;

const Projects = () => {
  const { currentTheme } = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${import.meta.env.BASE_URL}projects.json`);

      if (!response.ok) {
        throw new Error('Failed to load projects file');
      }

      const data: Project[] = await response.json();

      // Sort by most recently updated
      const sorted = data.sort((a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

      setProjects(sorted);
    } catch (err) {
      console.error('❌ Error loading repositories:', err);
      setError('Failed to load repositories. The file may not exist yet. Please trigger the GitHub Action manually.');
    } finally {
      setLoading(false);
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Java': '#b07219',
      'HTML': '#e34c26',
      'CSS': '#1572B6',
      'React': '#61dafb',
      'Vue': '#4FC08D',
      'PHP': '#777bb4',
      'C++': '#f34b7d',
      'C': '#555555',
      'Shell': '#89e051',
    };
    return colors[language] || '#6b7280';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
      },
    },
  };

  if (loading) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <motion.h2
              className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text text-transparent flex items-center justify-center gap-3`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Code className="w-10 h-10" /> My Projects
            </motion.h2>
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader className={currentTheme.accentColor} size={48} />
              </motion.div>
            </div>
            <p className={`mt-4 ${currentTheme.textSecondary}`}>Loading repositories...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text text-transparent`}>
              My Projects
            </h2>
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AlertCircle className="text-red-500" size={48} />
            </motion.div>
            <p className="mt-4 text-red-500 font-semibold">{error}</p>
            <div className="mt-6 space-y-3">
              <p className={currentTheme.textSecondary}>
                Please trigger the GitHub Action to generate the projects file:
              </p>
              <motion.a
                href={`https://github.com/${GITHUB_CONFIG.USERNAME}/Portfolio/actions`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-4 px-6 py-3 ${currentTheme.secondary} hover:${currentTheme.secondary}/80 rounded-lg transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                Go to GitHub Actions
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text text-transparent`}
            whileInView={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} mx-auto mb-8 rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            className={`text-center ${currentTheme.textSecondary} max-w-2xl mx-auto text-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A collection of my open-source work — from full-stack platforms to blockchain DApps.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              <div
                className={`relative h-full ${currentTheme.cardBg} backdrop-blur-xl rounded-2xl border ${currentTheme.cardBorder} overflow-hidden flex flex-col`}
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Top gradient accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: project.language
                      ? `linear-gradient(90deg, ${getLanguageColor(project.language)}, ${getLanguageColor(project.language)}80, transparent)`
                      : `linear-gradient(90deg, #6366f1, #8b5cf6, transparent)`,
                  }}
                />

                <div className="p-6 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${currentTheme.skillBg} border ${currentTheme.skillBorder}`}>
                        <Code size={16} className={currentTheme.iconColor} />
                      </div>
                      <h3 className={`text-lg font-bold ${currentTheme.textColor} group-hover:${currentTheme.hoverTextColor} leading-tight`}>
                        {project.name.replace(/-/g, ' ')}
                      </h3>
                    </div>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1.5 rounded-lg ${currentTheme.skillBg} border ${currentTheme.skillBorder} opacity-60 group-hover:opacity-100 hover:scale-110 active:scale-95`}
                      style={{ transition: 'opacity 0.2s, transform 0.2s' }}
                    >
                      <ArrowUpRight size={14} className={currentTheme.iconColor} />
                    </a>
                  </div>

                  {/* Language badge */}
                  {project.language && project.language !== 'Not specified' && (
                    <div className="flex items-center gap-1.5 mb-3">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: getLanguageColor(project.language),
                          boxShadow: `0 0 0 2px ${getLanguageColor(project.language)}30`,
                        }}
                      />
                      <span className={`text-xs font-medium ${currentTheme.textSecondary}`}>
                        {project.language}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className={`${currentTheme.textSecondary} text-sm flex-grow mb-4 leading-relaxed line-clamp-3`}>
                    {project.description || 'No description available'}
                  </p>

                  {/* Topics */}
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className={`${currentTheme.skillBg} ${currentTheme.skillText} px-2.5 py-1 rounded-full text-[0.65rem] font-medium border ${currentTheme.skillBorder}`}
                        >
                          {topic}
                        </span>
                      ))}
                      {project.topics.length > 4 && (
                        <span className={`${currentTheme.textSecondary} text-[0.65rem] self-center font-medium`}>
                          +{project.topics.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer: Stats + Links */}
                  <div className={`flex justify-between items-center pt-4 border-t ${currentTheme.cardBorder}`}>
                    <div className={`flex items-center gap-4 ${currentTheme.textSecondary} text-xs`}>
                      <span className="flex items-center gap-1">
                        <Star size={13} />
                        {project.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={13} />
                        {project.forks_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${currentTheme.iconColor} hover:scale-110 active:scale-95`}
                        title="View on GitHub"
                        style={{ transition: 'transform 0.2s' }}
                      >
                        <Github size={18} />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${currentTheme.iconColor} hover:scale-110 active:scale-95`}
                          title="Live Demo"
                          style={{ transition: 'transform 0.2s' }}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results */}
        {projects.length === 0 && !loading && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className={`text-xl font-semibold ${currentTheme.textColor} mb-2`}>No projects found</h3>
            <p className={currentTheme.textSecondary}>Check back later for updates.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;