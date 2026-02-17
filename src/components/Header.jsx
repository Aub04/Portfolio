import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import cvFile from '../assets/CV-Aubin-Herault.pdf';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Expériences', href: '#experience' },
        { name: 'Formation', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-primary transition-colors">
                    Aubin Hérault
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors hover:scale-105 transform"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href={cvFile} target="_blank" className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded-full text-sm font-medium transition-all">
                        Télécharger CV
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-darker/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-slate-300 hover:text-primary block"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href={cvFile} target="_blank" className="px-4 py-3 bg-primary text-white text-center rounded-lg font-medium mt-2">
                        Télécharger CV
                    </a>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
