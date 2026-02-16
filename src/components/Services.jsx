import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Layout, PencilRuler } from 'lucide-react';

const services = [
    {
        icon: <Home size={32} strokeWidth={1} />,
        title: 'Residential',
        description: 'Bespoke luxury homes and high-end residential complexes tailored to modern living.',
    },
    {
        icon: <Building2 size={32} strokeWidth={1} />,
        title: 'Commercial',
        description: 'State-of-the-art office spaces, shopping complexes, and industrial warehouses.',
    },
    {
        icon: <PencilRuler size={32} strokeWidth={1} />,
        title: 'Architecture',
        description: 'Innovative architectural planning and structural design that pushes boundaries.',
    },
    {
        icon: <Layout size={32} strokeWidth={1} />,
        title: 'Renovation',
        description: 'Exquisite remodeling and restoration of historic and modern structures.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-[#D4AF37] uppercase tracking-[0.4em] font-bold text-xs mb-8"
                    >
                        Our Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter text-white"
                    >
                        Precision <span className="text-gray-700 italic font-light">&</span> Expertise
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative p-12 bg-black hover:bg-zinc-950 transition-all duration-700 flex flex-col justify-between aspect-square"
                        >
                            <div className="space-y-8">
                                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-700 ease-out origin-left">
                                    {service.icon}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold tracking-tight text-white">{service.title}</h4>
                                    <p className="text-gray-500 font-light leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="h-[1px] w-12 bg-zinc-800 group-hover:w-full group-hover:bg-[#D4AF37] transition-all duration-700 ease-out" />
                                <span className="text-[10px] uppercase tracking-widest font-black text-zinc-900 group-hover:text-[#D4AF37]/10 transition-colors duration-700 block">
                                    Service 0{index + 1}
                                </span>
                            </div>

                            {/* Hover lift effect simulation through shadow and border glow */}
                            <motion.div
                                whileHover={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                className="absolute inset-0 border border-[#D4AF37]/20 pointer-events-none transition-opacity duration-700 shadow-[inset_0_0_100px_rgba(212,175,55,0.05)]"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
