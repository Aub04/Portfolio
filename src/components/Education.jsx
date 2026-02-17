import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-darker relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold text-white mb-10 flex items-center gap-3"
                >
                    <GraduationCap className="text-secondary" /> Formation
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((school, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark p-6 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-1">{school.school}</h3>
                                <p className="text-secondary font-medium text-sm mb-2">{school.degree}</p>
                                <span className="text-xs text-slate-500 block mb-4">{school.period}</span>
                                <p className="text-slate-400 text-sm">
                                    {school.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
