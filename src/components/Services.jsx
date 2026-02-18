import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Layout, PencilRuler } from 'lucide-react';

const services = [
    {
        icon: <Home size={32} strokeWidth={1} />,
        title: 'Residential Renovations',
        description: 'Complete remodeling of premium homes, specializing in luxury kitchen and bath transformations.',
    },
    {
        icon: <Building2 size={32} strokeWidth={1} />,
        title: 'Custom Builds',
        description: 'Bespoke residential construction tailored to your unique lifestyle and architectural vision.',
    },
    {
        icon: <PencilRuler size={32} strokeWidth={1} />,
        title: 'Structural Remodeling',
        description: 'Expert structural changes and expansions to modernize and improve existing floor plans.',
    },
    {
        icon: <Layout size={32} strokeWidth={1} />,
        title: 'Modern Restoration',
        description: 'Artfully restoring historic and older structures while integrating modern technology.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-[#f9f9f9]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-[#F58220] uppercase tracking-[0.4em] font-bold text-xs mb-8"
                    >
                        Our Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-[#333F48]"
                    >
                        Precision <span className="serif text-[#F58220] font-light italic">&</span> Expertise
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5 overflow-hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative p-12 bg-white hover:bg-[#F58220] transition-all duration-700 flex flex-col justify-between h-full min-h-[400px]"
                        >
                            <div className="space-y-8">
                                <div className="text-[#F58220] group-hover:text-white group-hover:scale-110 transition-all duration-700 ease-out origin-left">
                                    {service.icon}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold tracking-tight text-[#333F48] group-hover:text-white transition-colors duration-500">{service.title}</h4>
                                    <p className="text-[#666] group-hover:text-white/80 font-light leading-relaxed text-sm transition-colors duration-500">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="h-[1px] w-12 bg-black/10 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-out" />
                                <span className="text-[10px] uppercase tracking-widest font-black text-black/5 group-hover:text-white/10 transition-colors duration-700 block">
                                    Service 0{index + 1}
                                </span>
                            </div>

                            <motion.div
                                whileHover={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                className="absolute inset-0 border border-[#F58220]/20 pointer-events-none transition-opacity duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
