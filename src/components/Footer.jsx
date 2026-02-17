const Footer = () => {
    return (
        <footer className="bg-darker py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Aubin Hérault. Tous droits réservés.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Conçu avec React, Tailwind & Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
