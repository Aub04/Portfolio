import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data';
import profileImg from '../assets/portrait-placeholder.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-medium tracking-wider mb-4 block">PORTFOLIO D'ÉTUDIANT INGÉNIEUR</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Aubin <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Hérault</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Ingénieur IA en devenir, passionné par l'IA et la Data.
                        En route pour le Chili après Budapest et la Belgique.
                    </p>

                    <div className="flex gap-4 mb-10">
                        <a href="#projects" className="px-8 py-3 bg-primary hover:bg-sky-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-primary/25">
                            Voir mes projets
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-slate-600 hover:border-white text-slate-300 hover:text-white font-semibold rounded-full transition-all">
                            Me contacter
                        </a>
                    </div>

                    <div className="flex gap-6">
                        <a href={personalData.github} target="_blank" className="text-slate-400 hover:text-white transition-colors" rel="noreferrer"><Github size={24} /></a>
                        <a href={personalData.linkedin} target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors" rel="noreferrer"><Linkedin size={24} /></a>
                        <a href={`mailto:${personalData.email}`} className="text-slate-400 hover:text-primary transition-colors"><Mail size={24} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent z-10"></div>
                        {/* Placeholder for real image */}
                        <img
                            src={profileImg}
                            alt="Aubin Hérault"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => { e.target.src = 'https://placehold.co/600x800/1e293b/white?text=Aubin'; }}
                        />

                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium text-white">Open to Work</span>
                            </div>
                            <p className="text-xs text-slate-300">Basé à Angers, France</p>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-10 right-10 w-24 h-24 border-2 border-primary/30 rounded-full -z-10 animate-spin-slow"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 border border-secondary/20 rounded-full -z-10"></div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <ArrowDown size={24} />
            </motion.a>
        </section>
    );
};

export default Hero;
