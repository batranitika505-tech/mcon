import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Award, Clock, ShieldCheck, Trophy } from 'lucide-react';

const StatCounter = ({ value, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            springValue.set(numericValue);
        }
    }, [isInView, numericValue, springValue]);

    return (
        <div ref={ref} className="text-center">
            <div className="flex justify-center items-end mb-2">
                <motion.span className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#333F48] tracking-tight">
                    {displayValue}
                </motion.span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#F58220] ml-1 mb-2">{suffix}</span>
            </div>
            <p className="text-[#666] uppercase tracking-[0.3em] text-[9px] font-bold">{label}</p>
        </div>
    );
};

const reasons = [
    {
        icon: <Trophy size={40} strokeWidth={1} />,
        title: 'Legacy of Excellence',
        text: 'A legacy of excellence built through decades of structural engineering and architectural innovation.',
    },
    {
        icon: <Award size={40} strokeWidth={1} />,
        title: 'Bespoke Quality',
        text: 'We utilize state-of-the-art materials and rigorous quality checks to ensure every detail is perfect.',
    },
    {
        icon: <Clock size={40} strokeWidth={1} />,
        title: 'Punctual Execution',
        text: 'Our streamlined project management systems ensure milestones are met and projects are delivered on schedule.',
    },
    {
        icon: <ShieldCheck size={40} strokeWidth={1} />,
        title: 'Built on Trust',
        text: 'A transparent approach to construction that has earned us the trust of thousands of premium clients.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#f9f9f9] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group"
                        >
                            <div className="mb-6 text-[#F58220] group-hover:scale-110 transition-transform duration-700 ease-out origin-left opacity-70 group-hover:opacity-100">
                                {reason.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 tracking-tight text-[#333F48] group-hover:text-[#F58220] transition-colors duration-500">
                                {reason.title}
                            </h4>
                            <p className="text-[#666] font-light leading-relaxed text-sm">
                                {reason.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Dynamic Stats Row with Count Up */}
                <div className="mt-16 pt-16 border-t border-black/5 grid grid-cols-2 lg:grid-cols-4 gap-12">
                    <StatCounter value="450+" label="Projects Built" />
                    <StatCounter value="1200" label="Happy Clients" />
                    <StatCounter value="35" label="Awards Won" />
                    <StatCounter value="180" label="Team Experts" />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
