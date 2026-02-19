import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-darker relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white relative inline-block"
                    >
                        <span className="relative z-10">Compétences Techniques</span>
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary to-secondary -z-10 opacity-20 transform -skew-x-12"></span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform duration-300">
                                <skillGroup.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">{skillGroup.title}</h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((item, idx) => (
                                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
