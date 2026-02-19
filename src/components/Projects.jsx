import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'The Azure Residence',
        category: 'Luxury Living',
        image: 'https://images.unsplash.com/photo-1600585154340-be6199fce10c?auto=format&fit=crop&q=80&w=1200',
    },
    {
        title: 'Summit Office Park',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    },
    {
        title: 'Neo-Modern Villa',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    },
    {
        title: 'Glass Tower One',
        category: 'Corporate',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    },
];

const Projects = ({ residencyImg, commercialImg }) => {
    const displayProjects = projects.map((p, i) => {
        if (i === 0) return { ...p, image: residencyImg };
        if (i === 1) return { ...p, image: commercialImg };
        return p;
    });

    return (
        <section id="projects" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="space-y-3">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="text-[#F58220] uppercase tracking-[0.4em] font-bold text-xs"
                        >
                            Portfolio
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#333F48]"
                        >
                            Legendary <span className="serif text-[#F58220] font-light italic">Manifestations</span>
                        </motion.h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                            className="group relative h-[450px] md:h-[550px] overflow-hidden bg-white"
                        >
                            {/* Background Image with Hover Zoom */}
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full object-cover brightness-[0.85] group-hover:brightness-100 transition-all duration-1000"
                            />

                            {/* Dark Overlay Fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700" />

                            {/* Content Slide Up */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                                    className="space-y-3"
                                >
                                    <p className="text-[#F58220] text-[10px] font-bold uppercase tracking-[0.3em]">
                                        {project.category}
                                    </p>
                                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                        {project.title}
                                    </h4>

                                    <motion.div
                                        className="h-[1.5px] w-12 bg-[#F58220] origin-left group-hover:w-32 transition-all duration-700 ease-out"
                                    />

                                    <div className="overflow-hidden">
                                        <p className="text-white/80 text-sm font-light transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-100 opacity-0 group-hover:opacity-100">
                                            Discover architectural perfection in every detail of this signature project.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
