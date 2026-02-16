import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tighter">
                    <span className="text-white">MCON</span>
                    <span className="text-[#D4AF37]"> BUILDRZ</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-12 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-[#D4AF37] transition-all duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <button className="px-6 py-2 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
                        Get Quote
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-12 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-bold text-white hover:text-[#D4AF37] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest">
                            Get Quote
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
