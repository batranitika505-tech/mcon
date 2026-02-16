import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">
                        <span className="text-white">MCON</span>
                        <span className="text-[#D4AF37]"> BUILDRZ</span>
                    </h2>
                    <p className="text-gray-500 max-w-sm">
                        Setting the standard in high-end luxury construction and architectural excellence since 1998.
                    </p>
                </div>

                {/* Links */}
                <div className="flex space-x-12">
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Company</h4>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">About Us</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Properties</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Press</a>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Support</h4>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Contact</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex space-x-6">
                    {[<Linkedin />, <Twitter />, <Instagram />, <Facebook />].map((icon, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ scale: 1.2, color: '#D4AF37' }}
                            className="text-gray-600 transition-colors"
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
                &copy; {new Date().getFullYear()} MCON BUILDRZ. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
