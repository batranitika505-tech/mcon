import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#D4AF37] uppercase tracking-widest font-bold text-sm mb-4"
                        >
                            Get In Touch
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-8"
                        >
                            Let's Build Something <br />
                            <span className="text-gray-500">Legendary.</span>
                        </motion.h3>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            Whether you have a vision for a luxury home or a large-scale commercial project, our team of experts is ready to assist.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Phone />, title: 'Call Us', detail: '+1 (555) 123-4567' },
                                { icon: <Mail />, title: 'Email Us', detail: 'hello@mconbuildrz.com' },
                                { icon: <MapPin />, title: 'Visit Us', detail: '782 Architecture Blvd, New York, NY' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center space-x-6 group"
                                >
                                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-1">{item.title}</p>
                                        <p className="text-lg font-medium text-white">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-8 md:p-12 border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/30 border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37] transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/30 border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37] transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/30 border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Project Type</label>
                                <select className="w-full bg-black/30 border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Architecture</option>
                                    <option>Interior Design</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
                                <textarea
                                    className="w-full bg-black/30 border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37] transition-colors h-32"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
