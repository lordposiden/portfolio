import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-black/20">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {experience.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:flex items-center justify-between glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors duration-300">
                                <div className="hidden md:flex absolute left-1/2 -ml-24 items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 border-4 border-[var(--color-dark-bg)] z-10 -translate-x-[60px]">
                                    <Briefcase className="w-5 h-5 text-blue-400" />
                                </div>

                                <div className="md:w-[45%] mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{edu.role}</h3>
                                    <p className="text-lg text-blue-400 font-medium">{edu.company}</p>
                                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 mt-2">
                                        {edu.duration}
                                    </span>
                                </div>

                                <div className="md:w-[45%]">
                                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                                        {edu.description.map((desc, idx) => (
                                            <li key={idx} className="leading-relaxed">{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
