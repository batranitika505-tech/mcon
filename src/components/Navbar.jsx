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
            className={`fixed w-full z-[100] transition-all duration-700 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-xl border-b border-black/5' : 'bg-transparent py-10'
                }`}
        >
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                {/* Brand Logo - Top Left with Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold tracking-tight"
                    >
                        <span className={scrolled ? "text-[#1a1a1a] transition-colors" : "text-white transition-colors"}>MCON</span>
                        <span className="text-[#8AB339]"> BUILDRZ</span>
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className={`text-[11px] uppercase tracking-[0.6em] font-bold mt-2 ${scrolled ? "text-[#666]" : "text-white/60"}`}
                    >
                        Sustainable Luxury Architecture
                    </motion.span>
                </motion.div>

                {/* Purely Minimal Hamburger Menu - Top Right */}
                <div className="flex items-center space-x-12">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group flex items-center space-x-4 transition-all duration-300 ${scrolled ? "text-[#1a1a1a]" : "text-white"}`}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden md:block group-hover:text-[#8AB339]">Menu</span>
                        <div className="relative w-8 h-4 flex flex-col justify-between">
                            <span className={`w-full h-[1.5px] transition-all duration-300 ${scrolled ? "bg-[#1a1a1a]" : "bg-white"} group-hover:bg-[#8AB339]`} />
                            <span className={`w-3/4 h-[1.5px] self-end transition-all duration-300 ${scrolled ? "bg-[#1a1a1a]" : "bg-white"} group-hover:bg-[#8AB339] group-hover:w-full`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Luxurious Full Screen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fixed inset-0 bg-white z-[200] flex flex-col md:flex-row"
                    >
                        {/* Left Side - Visual/Brand Panel */}
                        <div className="hidden md:flex w-1/2 bg-[#f9f9f9] items-center justify-center p-24 border-r border-black/5">
                            <div className="max-w-md">
                                <h3 className="text-[#8AB339] uppercase tracking-[0.4em] font-bold text-xs mb-8">Architecting the future</h3>
                                <p className="text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-12">
                                    Creating spaces where <span className="serif italic">luxury</span> meets <span className="text-[#8AB339]">sustainability</span>.
                                </p>
                                <div className="h-[1px] w-24 bg-[#8AB339]" />
                            </div>
                        </div>

                        {/* Right Side - Links Panel */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-12 right-12 text-[#1a1a1a] hover:text-[#8AB339] transition-colors"
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>

                            <nav className="space-y-6 md:space-y-8">
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
                                            <span className="text-xs md:text-sm font-bold text-[#8AB339] opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                            <span className="text-4xl md:text-6xl lg:text-7xl font-light text-[#1a1a1a] group-hover:text-[#8AB339] transition-all duration-300 group-hover:translate-x-4">
                                                {link.name}
                                            </span>
                                        </a>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-20 flex flex-col space-y-4">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#999]">Get in touch</p>
                                <a href="mailto:hello@mconbuildrz.com" className="text-lg font-light text-[#1a1a1a] hover:text-[#8AB339] transition-colors line-clamp-1">hello@mconbuildrz.com</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
