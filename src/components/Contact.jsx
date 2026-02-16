import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#8AB339] uppercase tracking-widest font-bold text-sm mb-4"
                        >
                            Get In Touch
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-8 text-[#1a1a1a]"
                        >
                            Let's Build Something <br />
                            <span className="serif text-[#8AB339] italic">Exceptional.</span>
                        </motion.h3>
                        <p className="text-[#555] text-lg mb-12 max-w-md font-light">
                            Whether you have a vision for a luxury home or a large-scale commercial project, our team of experts is ready to assist.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Phone size={20} />, title: 'Call Us', detail: '+1 (555) 123-4567' },
                                { icon: <Mail size={20} />, title: 'Email Us', detail: 'hello@mconbuildrz.com' },
                                { icon: <MapPin size={20} />, title: 'Visit Us', detail: '782 Architecture Blvd, New York, NY' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center space-x-6 group"
                                >
                                    <div className="w-12 h-12 bg-[#f9f9f9] flex items-center justify-center text-[#8AB339] group-hover:bg-[#8AB339] group-hover:text-white transition-all duration-300 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-[#8AB339] font-bold mb-1">{item.title}</p>
                                        <p className="text-lg font-medium text-[#1a1a1a]">{item.detail}</p>
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
                        className="bg-[#fcfcfc] p-8 md:p-12 border border-black/5 shadow-xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 p-4 text-[#1a1a1a] outline-none focus:border-[#8AB339] transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 p-4 text-[#1a1a1a] outline-none focus:border-[#8AB339] transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-white border border-gray-200 p-4 text-[#1a1a1a] outline-none focus:border-[#8AB339] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Message</label>
                                <textarea
                                    className="w-full bg-white border border-gray-200 p-4 text-[#1a1a1a] outline-none focus:border-[#8AB339] transition-colors h-32"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button className="btn-primary w-full">
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
