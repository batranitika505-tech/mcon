import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from './Logo';

const introImages = [
    {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        entry: 'right' // Enters from right (slides left)
    },
    {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        entry: 'left' // Enters from left (slides right)
    },
    {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        entry: 'right' // Enters from right (slides left)
    }
];

const Intro = ({ onComplete }) => {
    const [phase, setPhase] = useState('logo'); // 'logo', 'img0', 'img1', 'img2', 'out'

    useEffect(() => {
        const timers = [];

        // Logo shows for 1.5s
        timers.push(setTimeout(() => setPhase('img0'), 1500));

        // Each image phase takes 2s (smooth shift + brief stay)
        timers.push(setTimeout(() => setPhase('img1'), 3500));
        timers.push(setTimeout(() => setPhase('img2'), 5500));

        // Final fade out starting after images
        timers.push(setTimeout(() => setPhase('out'), 7000));

        // Component complete - Snappier 7.8s total sequence
        timers.push(setTimeout(() => onComplete(), 7800));

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [onComplete]);

    const getMotionProps = (entryDirection) => {
        return {
            initial: { x: entryDirection === 'left' ? '-100%' : '100%', opacity: 1 },
            animate: { x: 0, opacity: 1 },
            exit: { x: entryDirection === 'left' ? '100%' : '-100%', opacity: 1 },
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
        };
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === 'out' ? 0 : 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[200] bg-white flex items-center justify-center overflow-hidden"
        >
            <AnimatePresence>
                {phase === 'logo' && (
                    <motion.div
                        key="logo"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center z-[210] relative"
                    >
                        <Logo className="h-48 md:h-72 mb-10" />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-[#F58220] uppercase font-bold tracking-[0.6em] text-[12px] md:text-sm"
                        >
                            Specialized in High-End Renovations
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Images are separate from the logo to ensure they can overlap or follow instantly */}
            <AnimatePresence mode="popLayout">
                {introImages.map((img, idx) => (
                    (phase === `img${idx}` || (idx === introImages.length - 1 && phase === 'out')) && (
                        <motion.div
                            key={`img${idx}`}
                            {...getMotionProps(img.entry)}
                            className="absolute inset-0 w-full h-full z-[205]"
                        >
                            <img
                                src={img.url}
                                alt="Architectural Building"
                                className="w-full h-full object-cover"
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-black/30" />
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default Intro;
