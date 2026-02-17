import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold text-white mb-10 flex items-center gap-3"
                >
                    <Briefcase className="text-primary" /> Expériences
                </motion.h2>

                <div className="max-w-4xl mx-auto border-l-2 border-slate-700 ml-3 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8"
                        >
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-darker border-2 border-primary"></span>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <div className="flex flex-col md:items-end mt-2 md:mt-0 text-slate-400 text-xs">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            {exp.details && (
                                <ul className="list-disc list-inside text-slate-400 text-sm mb-4 space-y-1">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
