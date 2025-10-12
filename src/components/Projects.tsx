import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Loader, AlertCircle, Search, Star, GitFork, Calendar, Filter } from 'lucide-react';
import { GITHUB_CONFIG } from '../config/github';

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
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'updated' | 'stars' | 'name'>('updated');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.topics?.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply technology filter
    if (activeFilter !== 'All') {
      filtered = filtered.filter(p => p.topics?.includes(activeFilter));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'updated':
        default:
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }
    });

    setFilteredProjects(filtered);
  }, [projects, activeFilter, searchTerm, sortBy]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('📦 Loading repositories from static file...');

      const response = await fetch('/Portfolio/projects.json');

      if (!response.ok) {
        throw new Error('Failed to load projects file');
      }

      const data: Project[] = await response.json();

      console.log(`✅ Loaded ${data.length} repositories from cache`);

      setProjects(data);

      // Calculate last updated time
      if (data.length > 0) {
        const mostRecent = data.reduce((latest, project) => {
          return new Date(project.updated_at) > new Date(latest.updated_at) ? project : latest;
        });
        setLastUpdated(mostRecent.updated_at);
      }

      // Extract unique technologies
      const allTopics = data.flatMap(p => p.topics || []);
      const uniqueTopics = Array.from(new Set(allTopics)).sort();
      setTechnologies(['All', ...uniqueTopics]);

    } catch (err) {
      console.error('❌ Error loading repositories:', err);
      setError('Failed to load repositories. The file may not exist yet. Please trigger the GitHub Action manually.');
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = (tech: string) => {
    setActiveFilter(tech);
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

  if (loading) {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12">
              <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
              >
                My Projects
              </motion.h2>
              <div className="flex justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Loader className="text-secondary" size={48} />
                </motion.div>
              </div>
              <p className="mt-4 text-gray-400">Loading repositories...</p>
            </div>
          </div>
        </section>
    );
  }

  if (error) {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-primary bg-clip-text text-transparent">
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
                <p className="text-gray-400">
                  Please trigger the GitHub Action to generate the projects file:
                </p>
                <motion.a
                    href={`https://github.com/${GITHUB_CONFIG.USERNAME}/Portfolio/actions`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  Go to GitHub Actions
                </motion.a>
              </div>
            </div>
          </div>
        </section>
    );
  }

  return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse" />
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
              My Projects
            </motion.h2>
            <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            />
            <motion.p
                className="text-center text-gray-400 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
              Showing {filteredProjects.length} of {projects.length} {projects.length === 1 ? 'repository' : 'repositories'}
            </motion.p>
            {lastUpdated && (
                <motion.p
                    className="text-center text-gray-500 text-sm mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                  Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                </motion.p>
            )}
          </motion.div>

          {/* Search and Filters */}
          <motion.div
              className="mb-12 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
          >
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 bg-opacity-50 backdrop-blur-xl border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <Filter size={16} className="text-gray-400" />
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'updated' | 'stars' | 'name')}
                    className="bg-slate-800 bg-opacity-50 backdrop-blur-xl border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="updated">Recently Updated</option>
                  <option value="stars">Most Stars</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Technology Filters */}
            {technologies.length > 1 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {technologies.map((tech, index) => (
                      <motion.button
                          key={tech}
                          onClick={() => filterProjects(tech)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                              activeFilter === tech
                                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                                  : 'bg-slate-800 bg-opacity-50 backdrop-blur-xl border border-slate-700 text-gray-300 hover:bg-slate-700 hover:scale-105'
                          }`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                        {tech !== 'All' && (
                            <span className="ml-2 text-xs opacity-70">
                      ({projects.filter(p => p.topics?.includes(tech)).length})
                    </span>
                        )}
                      </motion.button>
                  ))}
                </div>
            )}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700 hover:border-secondary transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)"
                    }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <motion.h3
                          className="text-xl font-bold text-white group-hover:text-secondary transition-colors leading-tight"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                      >
                        {project.name}
                      </motion.h3>
                      {project.language && (
                          <motion.span
                              className="flex items-center px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 border"
                              style={{
                                backgroundColor: `${getLanguageColor(project.language)}20`,
                                borderColor: getLanguageColor(project.language),
                                color: getLanguageColor(project.language)
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                              viewport={{ once: true }}
                          >
                            <div
                                className="w-2 h-2 rounded-full mr-1"
                                style={{ backgroundColor: getLanguageColor(project.language) }}
                            />
                            {project.language}
                          </motion.span>
                      )}
                    </div>

                    {/* Description */}
                    <motion.p
                        className="text-gray-300 text-sm mb-4 line-clamp-3 min-h-[60px] leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                    >
                      {project.description || 'No description available'}
                    </motion.p>

                    {/* Topics */}
                    {project.topics && project.topics.length > 0 && (
                        <motion.div
                            className="flex flex-wrap gap-2 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                        >
                          {project.topics
                              .slice(0, 4)
                              .map((topic, topicIndex) => (
                                  <motion.span
                                      key={topic}
                                      className="bg-slate-700/80 text-gray-300 px-2 py-1 rounded-full text-xs hover:bg-slate-600 transition-colors cursor-pointer"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3, delay: topicIndex * 0.05 }}
                                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.2)' }}
                                      viewport={{ once: true }}
                                  >
                                    #{topic}
                                  </motion.span>
                              ))}
                          {project.topics.length > 4 && (
                              <span className="text-gray-400 text-xs self-center">
                        +{project.topics.length - 4}
                      </span>
                          )}
                        </motion.div>
                    )}

                    {/* Stats & Links */}
                    <motion.div
                        className="flex justify-between items-center pt-4 border-t border-white/10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <motion.span
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.1 }}
                        >
                          <Star size={14} />
                          {project.stargazers_count}
                        </motion.span>
                        <motion.span
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.1 }}
                        >
                          <GitFork size={14} />
                          {project.forks_count}
                        </motion.span>
                      </div>

                      <div className="flex space-x-3">
                        <motion.a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-secondary transition-colors"
                            title="View on GitHub"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                          <Github size={22} />
                        </motion.a>
                        {project.homepage && (
                            <motion.a
                                href={project.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-secondary transition-colors"
                                title="Live Demo"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink size={22} />
                            </motion.a>
                        )}
                      </div>
                    </motion.div>

                    {/* Last Updated */}
                    <motion.div
                        className="mt-3 text-xs text-gray-500 flex items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                        viewport={{ once: true }}
                    >
                      <Calendar size={12} className="mr-1" />
                      Updated: {new Date(project.updated_at).toLocaleDateString()}
                    </motion.div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && !loading && (
              <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
          )}
        </div>
      </section>
  );
};

export default Projects;