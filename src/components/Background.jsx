import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 25 }).map(() => ({
            id: Math.random(),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-[#00f0ff] rounded-full shadow-[0_0_8px_1px_rgba(0,240,255,0.5)]"
                    style={{
                        top: p.top,
                        left: p.left,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-20, 20, -20],
                        opacity: [0.1, 0.5, 0.1]
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const Background = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();

    // Parallax effect for blobs based on scroll
    const y1 = useTransform(scrollY, [0, 2000], [0, 300]);
    const y2 = useTransform(scrollY, [0, 2000], [0, -300]);

    // Opacity gently dips on scroll
    const globalOpacity = useTransform(scrollY, [0, 500], [1, 0.8]);

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (e) => {
            animationFrameId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = (e.clientY / window.innerHeight - 0.5) * 2;
                setMousePosition({ x, y });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Spring physics for smooth mouse follow
    const springConfig = { damping: 20, stiffness: 100 };
    const mouseX = useSpring(mousePosition.x * 40, springConfig);
    const mouseY = useSpring(mousePosition.y * 40, springConfig);

    return (
        <motion.div
            className="fixed inset-0 z-[-1] bg-[#0f0f0f] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ opacity: globalOpacity }}
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:32px_32px] opacity-30" />

            {/* Network lines / Grid lines with radial mask */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:96px_96px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-50" />

            {/* Glowing Blobs */}

            {/* Electric Blue Blob */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none"
                style={{
                    x: mouseX,
                    y: useTransform(() => mouseY.get() + y1.get()),
                }}
            />

            {/* Violet Blob */}
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"
                style={{
                    x: useTransform(() => -mouseX.get()),
                    y: useTransform(() => -mouseY.get() + y2.get()),
                }}
            />

            {/* Accent Pink/Neon Blob in center */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"
                style={{
                    x: useTransform(() => mouseX.get() * -0.5),
                    y: useTransform(() => mouseY.get() * -0.5),
                }}
            />

            {/* Floating Particles */}
            <Particles />
        </motion.div>
    );
};

export default Background;
