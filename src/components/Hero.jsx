import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ backgroundImage }) => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background with slow cinematic zoom - Fades in during Phase 2 */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.6, scale: 1.05 }}
                transition={{
                    opacity: { duration: 2, ease: 'easeOut' },
                    scale: { duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }
                }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={backgroundImage}
                    alt="Modern Architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </motion.div>

            {/* Content - Hero Title enters during Phase 2 */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                    className="text-[#D4AF37] uppercase tracking-[0.6em] font-semibold mb-6 text-xs md:text-sm"
                >
                    Engineering Excellence
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-[9rem] font-bold text-white mb-10 tracking-tighter leading-none"
                >
                    MCON <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFA500]">BUILDRZ</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                    className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed tracking-wide"
                >
                    Transforming visions into architectural reality. We build high-end residential and commercial spaces that define the future of living.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                    className="flex flex-col md:flex-row gap-6 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.04, backgroundColor: '#FFFFFF', color: '#000000', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-xl"
                    >
                        Explore Projects
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.04, backgroundColor: '#FFFFFF', color: '#000000', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 bg-white/5 backdrop-blur-sm"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 100, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5, ease: 'easeInOut' }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent"
            />
        </section>
    );
};

export default Hero;
