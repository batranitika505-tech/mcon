import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Alexander Rossi',
        role: 'CEO, Rossi Enterprises',
        text: 'MCON BUILDRZ delivered our corporate headquarters ahead of schedule with a level of craftsmanship that is truly rare in the industry today.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&q=80&w=200',
    },
    {
        name: 'Elena Gilbert',
        role: 'Homeowner, The Azure',
        text: "Building our dream home was a seamless experience. The attention to detail and the design team's vision exceeded all our expectations.",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&q=80&w=200',
    },
    {
        name: 'Marcus Thorne',
        role: 'Director, Urban Dev',
        text: "MCON's commitment to quality and architectural integrity is why we keep coming back to them for our large-scale commercial developments.",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&q=80&w=200',
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Decorative Background Icon */}
            <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/5 w-[400px] h-[400px]" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#F58220] mb-6 flex justify-center"
                >
                    <Quote size={32} md={48} />
                </motion.div>

                <div className="h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <p className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed text-[#444] px-4">
                                "{testimonials[index].text}"
                            </p>

                            <div className="flex flex-col items-center">
                                <img
                                    src={testimonials[index].image}
                                    alt={testimonials[index].name}
                                    className="w-16 h-16 rounded-full border-2 border-[#F58220] mb-4 object-cover"
                                />
                                <h5 className="text-xl font-bold text-[#333F48]">{testimonials[index].name}</h5>
                                <p className="text-sm text-[#F58220] uppercase tracking-widest font-semibold">{testimonials[index].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center space-x-3 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i ? 'bg-[#F58220] w-8' : 'bg-gray-200'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
