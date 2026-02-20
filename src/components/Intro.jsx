import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from './Logo';

const introImages = [
    {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        entry: 'right'
    },
    {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        entry: 'top'
    },
    {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        entry: 'bottom'
    },
    {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2070',
        entry: 'right'
    }
];

const Intro = ({ onComplete }) => {
    const [phase, setPhase] = useState('logo'); // 'logo', 'img0', 'img1', 'img2', 'img3', 'out'
    const [prevImageIdx, setPrevImageIdx] = useState(null);

    useEffect(() => {
        const timers = [];

        // logo phase
        timers.push(setTimeout(() => setPhase('img0'), 1800));

        // image phases
        timers.push(setTimeout(() => {
            setPrevImageIdx(0);
            setPhase('img1');
        }, 4200));

        timers.push(setTimeout(() => {
            setPrevImageIdx(1);
            setPhase('img2');
        }, 6600));

        timers.push(setTimeout(() => {
            setPrevImageIdx(2);
            setPhase('img3');
        }, 9000));

        // exit phase
        timers.push(setTimeout(() => setPhase('out'), 11400));
        timers.push(setTimeout(() => onComplete(), 12500));

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [onComplete]);

    const getCurrentIdx = () => {
        if (phase === 'logo') return -1;
        if (phase === 'out') return introImages.length - 1;
        return parseInt(phase.replace('img', ''));
    };

    const currentIdx = getCurrentIdx();

    const getInitialMotion = (entry) => {
        switch (entry) {
            case 'right': return { x: '100%', y: 0 };
            case 'left': return { x: '-100%', y: 0 };
            case 'top': return { x: 0, y: '-100%' };
            case 'bottom': return { x: 0, y: '100%' };
            default: return { x: '100%', y: 0 };
        }
    };

    return (
        <div className="fixed inset-0 z-[200] bg-white flex items-center justify-center overflow-hidden">
            {/* Logo Layer */}
            <AnimatePresence>
                {phase === 'logo' && (
                    <motion.div
                        key="logo"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center z-[210] relative text-[#333F48]"
                    >
                        <Logo className="h-32 sm:h-40 md:h-72 mb-10 md:mb-12 max-w-[95vw]" light={false} />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-[#F58220] uppercase font-bold tracking-[0.2em] md:tracking-[0.6em] text-[8px] xs:text-[9px] md:text-sm text-center px-4 max-w-[85vw] mx-auto"
                        >
                            Specialized in High-End Renovations
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Layer */}
            <div className="absolute inset-0 w-full h-full z-[205] bg-white">
                {introImages.map((img, idx) => {
                    const isVisible = idx === currentIdx || idx === prevImageIdx;
                    const isNew = idx === currentIdx;

                    return (
                        <AnimatePresence key={idx}>
                            {isVisible && (
                                <motion.div
                                    initial={isNew ? getInitialMotion(img.entry) : false}
                                    animate={{ x: 0, y: 0 }}
                                    exit={idx === prevImageIdx ? { opacity: 0, transition: { duration: 1 } } : {}}
                                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 w-full h-full overflow-hidden"
                                    style={{ zIndex: isNew ? 10 : 5 }}
                                >
                                    <motion.img
                                        initial={{ scale: 1.15 }}
                                        animate={{ scale: 1.05 }}
                                        transition={{ duration: 8, ease: "linear" }}
                                        src={img.url}
                                        alt="Architecture"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    );
                })}
            </div>

            {/* Transition to Site Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'out' ? 1 : 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 z-[220] bg-white pointer-events-none"
            />
        </div>
    );
};

export default Intro;
