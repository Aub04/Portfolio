import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-darker relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider text-sm">PORTFOLIO</span>
                    <h2 className="text-4xl font-bold text-white mt-2 mb-6">Mes Projets Récents</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Une sélection de mes travaux en Data Science, IA et Développement Web.
                        Cliquez sur un projet pour voir les détails.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 group shadow-lg hover:shadow-primary/10 transition-all cursor-pointer flex flex-col h-full"
                        >
                            {/* Project Image Placeholder */}
                            <div className="relative h-48 overflow-hidden bg-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10"></div>
                                {/* Use image if available, otherwise letter placeholder */}
                                {project.image && project.image !== "" ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-600 font-bold text-2xl group-hover:scale-105 transition-transform duration-500">
                                        {project.title.charAt(0)}
                                    </div>
                                )}
                                <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-darker/80 backdrop-blur text-xs font-medium text-white rounded-full border border-white/10">
                                    {project.type}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded">+{project.tech.length - 3}</span>
                                    )}
                                </div>

                                <div className="flex items-center justify-end text-primary text-sm font-medium mt-auto group-hover:underline decoration-primary/50 underline-offset-4">
                                    En savoir plus <ArrowRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`project-${projects.indexOf(selectedProject)}`}
                            className="bg-darker border border-white/10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="h-40 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
                                {selectedProject.image && selectedProject.image !== "" && (
                                    <div className="absolute inset-0">
                                        <img src={selectedProject.image} alt="" className="w-full h-full object-cover opacity-30" />
                                    </div>
                                )}
                                <h2 className="text-3xl font-bold text-white relative z-10 text-center px-4">{selectedProject.title}</h2>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold border border-primary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2">À propos du projet</h3>
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    {selectedProject.details || selectedProject.description}
                                </p>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium"
                                        >
                                            <Github size={18} />
                                            {selectedProject.private ? "Repo Privé" : "Voir le Code"}
                                        </a>
                                    )}
                                    {selectedProject.link && selectedProject.link !== "#" && (
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-sky-600 text-white rounded-lg transition-colors font-medium shadow-lg shadow-primary/20"
                                        >
                                            <ExternalLink size={18} />
                                            Démo Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
