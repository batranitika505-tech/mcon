import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ backgroundImage }) => {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-white">
            {/* Background with slow cinematic zoom */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                transition={{
                    opacity: { duration: 1.5, ease: 'easeOut' },
                    scale: { duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }
                }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={backgroundImage}
                    alt="Sustainable Luxury Architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            {/* Content Container - Shifted Down and Right */}
            <div className="relative z-10 w-full h-full flex items-end justify-end pr-0 pb-20 md:pb-32 pl-6 md:pl-12 lg:pl-24">

                {/* Floating Box - Compact & Grounded */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white p-8 md:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] max-w-full lg:max-w-[850px]"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
                        {/* Refined Typography */}
                        <div className="flex-1">
                            <h2 className="text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] font-light leading-[1.1] tracking-tight text-[#1a1a1a]">
                                Building <br />
                                <span className="text-[#8AB339]">sanctuaries</span> for <br />
                                the modern world.
                            </h2>
                        </div>

                        <div className="w-full lg:w-[320px] flex flex-col space-y-8">
                            <p className="text-[#666] text-sm md:text-base font-light leading-relaxed">
                                Transforming visions into architectural reality. We build high-end residential and commercial spaces that define the future.
                            </p>

                            <motion.button
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-6 group text-[#8AB339] font-bold uppercase tracking-[0.4em] text-[9px] whitespace-nowrap"
                            >
                                <span>Discover Our Work</span>
                                <div className="h-[1px] w-12 bg-[#8AB339] transition-all duration-300 group-hover:w-20" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Minimal Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-12 z-20"
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
