import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Intro = ({ onComplete }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Phase 1: Show centered for 1.5s
        const timer1 = setTimeout(() => {
            setIsTransitioning(true);
        }, 1800);

        // Phase 2: Fade out entire overlay after transition completes
        const timer2 = setTimeout(() => {
            onComplete();
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-[200] bg-white flex items-center justify-center pointer-events-none"
        >
            <div className="relative text-center w-full">
                <motion.div
                    initial={{ y: 0, opacity: 0, scale: 0.95 }}
                    animate={{
                        y: isTransitioning ? -150 : 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        opacity: { duration: 1.2, ease: 'easeOut' },
                        scale: { duration: 1.2, ease: 'easeOut' },
                        y: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-5xl md:text-8xl font-light text-[#1a1a1a] tracking-tight">
                        MCON <span className="font-bold text-[#8AB339]">BUILDRZ</span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTransitioning ? 0 : 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#8AB339] uppercase font-bold tracking-[0.5em] text-[10px] md:text-xs mt-8"
                    >
                        Architecting Sustainable Futures
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Intro;
