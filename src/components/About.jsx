import { motion } from 'framer-motion';
import { personalData } from '../data';
import { Plane, MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">À Propos de Moi</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        {personalData.bio}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* International Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-darker/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Plane size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Parcours International</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <span className="text-2xl">🇭🇺</span>
                                <div>
                                    <h4 className="font-semibold text-white">Budapest, Hongrie</h4>
                                    <p className="text-sm text-slate-400">Semestre académique à Óbuda University. Cours techniques en anglais et immersion culturelle au cœur de l'Europe Centrale.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-2xl">🇨🇱</span>
                                <div>
                                    <h4 className="font-semibold text-white">Santiago, Chili (À venir)</h4>
                                    <p className="text-sm text-slate-400">Erasmus de 5 mois prévu en 2026. Objectif : maîtrise de l'espagnol et ouverture sur l'Amérique Latine.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Work Ethic Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-darker/50 p-8 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all group"
                    >
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Pourquoi l'Alternance ?</h3>
                        <p className="text-slate-400 mb-6">
                            Après 4 ans de formation théorique et pratique à l'ESAIP, je cherche à concrétiser et développer mes compétences sur le terrain.
                            Mon expérience agricole m'a appris la valeur du travail, l'autonomie et la résilience, des qualités que j'applique aujourd'hui dans mes projets d'ingénierie.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/5">Disponibilité Immédiate</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/5">Mobilité Internationale</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/5">Anglais B2</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
