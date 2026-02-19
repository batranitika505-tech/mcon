import React from 'react';
import { motion } from 'framer-motion';

const About = ({ image }) => {
    return (
        <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#F58220]/30" />
                    <img
                        src={image}
                        alt="Architecture"
                        className="w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-all duration-1000 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#F58220]/30" />
                </motion.div>

                {/* Right Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="space-y-6"
                >
                    <div className="space-y-3">
                        <h2 className="text-[#F58220] uppercase tracking-[0.4em] font-bold text-xs">
                            About MCON
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#333F48]">
                            Designing <br />
                            <span className="serif text-[#F58220] lowercase italic">custom transformations.</span>
                        </h3>
                    </div>

                    <p className="text-[#555] text-base md:text-lg leading-relaxed font-light font-sans max-w-xl">
                        MCON BUILDRZ is a premier renovation-based firm specializing in custom builds and high-concept structural transformations that evoke inspiration and luxury.
                    </p>

                    <p className="text-[#666] text-base leading-relaxed font-light max-w-xl">
                        Our approach combines state-of-the-art technology with sustainable practices to ensure every project stands as a testament to durability and aesthetic brilliance.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4"
                    >
                        {['Expert Engineering', 'Sustainable Design', 'Premium Materials', 'On-time Delivery'].map((item) => (
                            <div key={item} className="flex items-center space-x-3">
                                <div className="w-2 h-2 rounded-full bg-[#F58220]" />
                                <span className="text-[10px] uppercase tracking-widest font-bold text-[#444]">{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    <div className="pt-6">
                        <button className="flex items-center space-x-6 group">
                            <span className="text-[#333F48] font-bold uppercase tracking-[0.3em] text-[10px]">Explore our journey</span>
                            <div className="h-[1px] w-20 bg-[#F58220] group-hover:w-32 transition-all duration-700 ease-[0.22, 1, 0.36, 1]" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
