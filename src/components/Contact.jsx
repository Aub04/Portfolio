import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalData } from '../data';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'email' ? 'email' : e.target.placeholder.toLowerCase().includes('nom') ? 'name' : e.target.placeholder.toLowerCase().includes('sujet') ? 'subject' : 'message']: e.target.value });
    };

    // Helper to update state correctly since previous inputs didn't have name attributes
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-darker to-dark relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Prêt à collaborer ?</h2>
                    <p className="text-slate-400 mb-8 max-w-md text-lg">
                        Actuellement à la recherche d'une <span className="text-primary font-medium">alternance pour 2026-2027</span>.
                        Disponible pour échanger sur l'alternance, l'IA, ou mon futur voyage au Chili !
                    </p>

                    <div className="space-y-6">
                        <a href={`mailto:${personalData.email}`} className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors text-slate-300 group-hover:text-white">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-400 group-hover:text-primary transition-colors">Email</h3>
                                <p className="text-white text-lg">{personalData.email}</p>
                            </div>
                        </a>

                        <a href={`tel:${personalData.phone}`} className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors text-slate-300 group-hover:text-white">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-400 group-hover:text-secondary transition-colors">Téléphone</h3>
                                <p className="text-white text-lg">{personalData.phone}</p>
                            </div>
                        </a>

                        <a href="https://www.google.com/maps/search/?api=1&query=Angers,+France" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-300 group-hover:text-white transition-colors group-hover:bg-emerald-500">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-400 group-hover:text-emerald-500 transition-colors">Localisation</h3>
                                <p className="text-white text-lg">{personalData.location}</p>
                            </div>
                        </a>
                    </div>

                    <div className="flex gap-4 mt-10 ml-4">
                        <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                            <Linkedin size={20} />
                        </a>
                        <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-lg">
                            <Github size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-darker p-8 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-bold text-white mb-6">M'envoyer un message</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Nom</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Votre nom"
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="votre@email.com"
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Sujet</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Alternance, Projet..."
                                onChange={(e) => handleInputChange('subject', e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Message</label>
                            <textarea
                                rows="4"
                                required
                                className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Bonjour Aubin..."
                                onChange={(e) => handleInputChange('message', e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/25 transform hover:scale-[1.02]">
                            Envoyer le message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
