import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="education" className="py-24 relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 glass rounded-xl text-blue-400">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold">Education</h2>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-gray-400 font-medium">
                                        {edu.institution} {edu.year && <span className="text-gray-500">• {edu.year}</span>}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 glass rounded-xl text-pink-400">
                                <Award className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold">Certifications</h2>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    className="glass p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-pink-500/30 transition-all duration-300 group"
                                >
                                    <Award className="w-6 h-6 text-pink-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <p className="text-gray-300 font-medium text-lg">{cert}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;
