import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll Spy Logic
            const sections = ['home', 'about', 'services', 'before-after-basement', 'contact'];
            const scrollPos = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section === 'home' ? 'hero' : section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevents background scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Projects', href: '#before-after-basement', id: 'before-after-basement' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <>
            {/* 1. Main Navbar Bar - Decoupled from Menu Overlay */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center"
                    >
                        <Logo className="h-12 sm:h-16 md:h-28" light={!scrolled} />
                    </motion.div>

                    <div className="flex items-center space-x-12">
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`group flex items-center space-x-4 transition-all duration-300 ${scrolled ? "text-[#333F48]" : "text-white"}`}
                        >
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden md:block group-hover:text-[#F58220]">Menu</span>
                            <div className="relative w-8 h-4 flex flex-col justify-between">
                                <span className={`w-full h-[1.5px] transition-all duration-300 ${scrolled ? "bg-[#333F48]" : "bg-white"} group-hover:bg-[#F58220]`} />
                                <span className={`w-3/4 h-[1.5px] self-end transition-all duration-300 ${scrolled ? "bg-[#333F48]" : "bg-white"} group-hover:bg-[#F58220] group-hover:w-full`} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* 2. Fullscreen Menu Overlay - Decoupled and Fixed Layering */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fixed inset-0 bg-white z-[9999] flex flex-col md:flex-row h-[100dvh] w-full"
                    >
                        {/* Left Side: Brand Panel */}
                        <div className="hidden md:flex w-1/2 bg-[#f4f4f4] items-center justify-center p-24 border-r border-black/5">
                            <div className="max-w-md">
                                <h3 className="text-[#F58220] uppercase tracking-[0.4em] font-bold text-xs mb-8">Mastering the Art of Renovation</h3>
                                <p className="text-4xl lg:text-5xl font-light text-[#333F48] leading-tight mb-12">
                                    Transforming <span className="serif italic">existing</span> spaces into modern <span className="text-[#F58220]">masterpieces</span>.
                                </p>
                                <div className="h-[1px] w-24 bg-[#F58220]" />
                            </div>
                        </div>

                        {/* Right Side: Navigation Panel */}
                        <div className="w-full md:w-1/2 bg-white flex flex-col justify-between py-24 md:py-0 md:justify-center px-10 sm:px-12 md:px-24 relative overflow-y-auto">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 md:top-12 md:right-12 text-[#333F48] hover:text-[#F58220] transition-colors p-3"
                            >
                                <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                            </button>

                            <nav className="flex flex-col space-y-8 sm:space-y-10 md:space-y-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center space-x-8"
                                        >
                                            <span className={`text-[10px] sm:text-[12px] md:text-sm font-bold text-[#F58220] transition-opacity ${activeSection === link.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>0{i + 1}</span>
                                            <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-300 group-hover:translate-x-4 ${activeSection === link.id ? 'text-[#F58220]' : 'text-[#333F48] group-hover:text-[#F58220]'}`}>
                                                {link.name}
                                            </span>
                                        </a>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-12 md:mt-20 flex flex-col space-y-3 sm:space-y-4">
                                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-bold text-[#999]">Get in touch</p>
                                <a href="mailto:hello@mconbuildrz.com" className="text-base sm:text-lg font-light text-[#333F48] hover:text-[#F58220] transition-colors line-clamp-1 italic">hello@mconbuildrz.com</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
