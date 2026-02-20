import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 5s feels more premium than 2.5s for residential luxury
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden bg-white">
            {/* Background Sliding Carousel */}
            <div className="absolute inset-0 z-0 bg-black">
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ x: '100%', opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1.05 }}
                            transition={{ duration: 10, ease: 'linear' }}
                            className="w-full h-full"
                        >
                            <img
                                src={heroImages[index]}
                                alt="Sustainable Luxury Architecture"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center md:items-end justify-center md:justify-end pr-0 pb-12 md:pb-32 px-6 md:pl-12 lg:pl-24">

                {/* Floating Box - Snappier revealed after Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.1,
                        delay: 0.3, // Shorter delay since Intro is faster
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="bg-white p-6 md:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] max-w-full lg:max-w-[850px] mx-auto md:mx-0"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-10 lg:gap-16">
                        {/* Refined Typography */}
                        <div className="flex-1">
                            <h2 className="text-[1.3rem] xs:text-[1.5rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] font-light leading-[1.2] md:leading-[1.1] tracking-tight text-[#333F48]">
                                Redefining <br className="hidden xs:block" />
                                <span className="text-[#F58220]">spaces</span> through <br className="hidden xs:block" />
                                custom renovations.
                            </h2>
                        </div>

                        <div className="w-full lg:w-[320px] flex flex-col space-y-6 md:space-y-8">
                            <p className="text-[#666] text-xs sm:text-sm md:text-base font-light leading-relaxed">
                                Specializing in high-end renovations and custom builds. We bring new life to every structure we touch with precision and artistry.
                            </p>

                            <motion.button
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-6 group text-[#F58220] font-bold uppercase tracking-[0.4em] text-[9px] whitespace-nowrap"
                            >
                                <span>Discover Our Work</span>
                                <div className="h-[1px] w-12 bg-[#F58220] transition-all duration-300 group-hover:w-20" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Minimal Scroll Indicator - Hidden on Mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-12 z-20 hidden md:block"
            >
                <div className="flex items-center space-x-6">
                    <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [-100, 100] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-full bg-white/60"
                        />
                    </div>
                    <span className="text-white text-[9px] uppercase tracking-[0.6em] font-medium vertical-text opacity-60">Scroll to Explore</span>
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .vertical-text {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
            `}} />
        </section>
    );
};

export default Hero;
