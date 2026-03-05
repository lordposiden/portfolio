import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Background elements moved to global Background component */}

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative inline-block mb-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 blur-2xl rounded-full" />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 glass border border-white/20 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            <img
                                src={profileImg}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="inline-block"
                    >
                        <span className="glass px-4 py-2 rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            👋 Welcome to my portfolio
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                        Hi, I'm <span className="text-gradient font-extrabold">{personalInfo.name}</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
                        {personalInfo.role} based in <span className="text-white">{personalInfo.location}</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">
                        {personalInfo.tagline}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className="cursor-pointer bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] block"
                            >
                                Get in touch
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className="cursor-pointer glass px-8 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-colors duration-300 block"
                            >
                                View Projects
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-12">
                        <motion.a whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }} href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }} href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors p-2 glass rounded-full duration-300 shadow-[0_0_10px_rgba(0,119,181,0.1)]">
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }} href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-pink-500 transition-colors p-2 glass rounded-full duration-300 shadow-[0_0_10px_rgba(236,72,153,0.1)]">
                            <Mail className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
                <Link to="about" spy={true} smooth={true} duration={500} offset={-80}>
                    <ChevronDown className="w-8 h-8 text-gray-500 hover:text-white transition-colors" />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
