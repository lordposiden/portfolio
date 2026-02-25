import React from 'react';
import { personalInfo } from '../data';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/80 border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
                <div className="flex gap-6 mb-8">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                    Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by {personalInfo.name}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
