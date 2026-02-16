import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white py-20 px-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">
                        <span className="text-[#1a1a1a]">MCON</span>
                        <span className="text-[#8AB339]"> BUILDRZ</span>
                    </h2>
                    <p className="text-[#666] max-w-sm text-sm font-light">
                        Setting the standard in high-end sustainable construction and architectural excellence.
                    </p>
                </div>

                {/* Links */}
                <div className="flex space-x-12">
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-[#1a1a1a] font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Company</h4>
                        <a href="#" className="text-[#666] hover:text-[#8AB339] transition-colors text-sm">About Us</a>
                        <a href="#" className="text-[#666] hover:text-[#8AB339] transition-colors text-sm">Properties</a>
                        <a href="#" className="text-[#666] hover:text-[#8AB339] transition-colors text-sm">Press</a>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-[#1a1a1a] font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Support</h4>
                        <a href="#" className="text-[#666] hover:text-[#8AB339] transition-colors text-sm">Contact</a>
                        <a href="#" className="text-[#666] hover:text-[#8AB339] transition-colors text-sm">Privacy</a>
                        <a href="#" className="text-[#666] hover:text-[#8AB339] transition-colors text-sm">Terms</a>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex space-x-6">
                    {[<Linkedin size={20} />, <Twitter size={20} />, <Instagram size={20} />, <Facebook size={20} />].map((icon, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ scale: 1.15, color: '#8AB339' }}
                            className="text-gray-400 transition-colors"
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 text-center text-gray-400 text-[10px] uppercase tracking-[0.3em] font-medium">
                &copy; {new Date().getFullYear()} MCON BUILDRZ. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
