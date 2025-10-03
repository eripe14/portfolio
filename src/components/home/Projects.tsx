'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Code2, Rocket, ChevronLeft, ChevronRight} from 'lucide-react';
import AnimatedGrid from '@/components/ui/AnimatedGrid';
import FloatingParticles from '@/components/ui/FloatingParticles';
import Link from "next/link";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const projects = [
        {
            title: 'Anglokom website',
            description: 'Language trainings company website built primarily with TypeScript, designed to provide robust and modern functionality for web applications. With a focus on clean architecture and maintainability, anglokom leverages TypeScript’s type safety and scalability.',
            tech: ['React', 'Next.js', 'Supabase', 'Strapi', 'TypeScript'],
            gradient: 'from-cyan-600 to-sky-700',
            link: 'https://anglokom.pl'
        },
        {
            title: 'License system',
            description: 'This is a full-stack application for managing software licenses. It features a secure administrative dashboard built with Next.js, Supabase, and Tailwind CSS, allowing for the creation, monitoring, and management of license keys and their activations.',
            tech: ['Next.js', 'Supabase', 'React'],
            gradient: 'from-green-500 to-cyan-600',
            link: 'https://github.com/eripe14/license-ui'
        },
        {
            title: 'Memory game',
            description: 'MemoryGame is a classic "Memory" (also known as "Find the Pairs") computer game written in C++. The goal of the game is to find all matching pairs of cards on the board in the shortest possible time and with the least number of moves. The project was created for participation in the Gigathon competition (Stage II).',
            tech: ['C++', 'Cmake'],
            gradient: 'from-orange-500 to-pink-600',
            link: 'https://github.com/eripe14/MemoryGame'
        },
        {
            title: 'Houses plugin',
            description: 'An advanced Minecraft role-playing plugin that allows players to rent or buy houses, exclusive properties, and apartments. It features an extensive management system through in-game GUI panels, allowing for a deeply immersive and customizable housing experience.',
            tech: ['Java', 'SpigotAPI'],
            gradient: 'from-purple-500 to-indigo-600',
            link: 'https://github.com/eripe14/houses'
        },
        {
            title: 'Backups plugin',
            description: 'A comprehensive Bukkit plugin that automatically creates backups of a player\'s inventory, armor, ender chest, and experience upon death. Administrators can manage these backups through an intuitive GUI, grant restoration rights, and players can easily reclaim their items.',
            tech: ['Java', 'SpigotAPI'],
            gradient: 'from-purple-500 to-indigo-600',
            link: 'https://github.com/eripe14/backups'
        },
        {
            title: 'Portfolio website',
            description: 'My personal portfolio website showcasing my projects, skills, and experience with a sleek, modern design.',
            tech: ['React', 'Next.js', 'Strapi', 'TypeScript'],
            gradient: 'from-red-500 to-orange-600',
            link: 'https://github.com/eripe14/portfolio'
        },
        {
            title: 'SimplePaste',
            description: 'SimplePaste is a lightweight paste service for developers. It allows users to quickly and easily share code snippets, logs, configs, or any text via a simple web interface. Built with Java for backend robustness and JavaScript, HTML, and CSS for a responsive frontend, SimplePaste delivers a fast and user-friendly experience.',
            tech: ['Java', 'SpigotAPI'],
            gradient: 'from-teal-500 to-green-600',
            link: 'https://anglokom.pl'
        },
        {
            title: 'Emplio',
            description: 'Wokring on it...',
            tech: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
            gradient: 'from-teal-500 to-green-600',
            link: 'https://github.com/eripe14/emplio'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % projects.length);
        }, 12000);
        return () => clearInterval(timer);
    }, [projects.length]);

    const nextProject = () => {
        setActiveProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleTouchStart  = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove  = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextProject();
        }
        if (touchStartX.current - touchEndX.current < -50) {
            prevProject();
        }
    };

    return (
        <section id="projects" className="relative bg-slate-900 text-white py-32 overflow-hidden">
            <AnimatedGrid/>
            <FloatingParticles count={25}/>

            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                 style={{animationDelay: '2s'}}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-indigo-400 mb-4 text-center">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-white/60 mb-16 text-center">
                        Explore my latest work and innovations
                    </p>

                    <div
                        className="relative min-h-[700px] md:h-[650px] mb-12"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="absolute inset-0 flex items-center justify-center md:block"
                             style={{perspective: '1500px'}}>
                            {projects.map((project, i) => {
                                const offset = (i - activeProject + projects.length) % projects.length;
                                const isActive = offset === 0;
                                const isPrev = offset === projects.length - 1;
                                const isNext = offset === 1;

                                let transform = 'translateX(0) scale(0.8) rotateY(0deg)';
                                let zIndex = 1;
                                let opacity = 0;

                                if (isActive) {
                                    transform = 'translateX(0) scale(1) rotateY(0deg)';
                                    zIndex = 30;
                                    opacity = 1;
                                } else if (isPrev) {
                                    transform = 'translateX(-80%) scale(0.85) rotateY(25deg)';
                                    zIndex = 20;
                                    opacity = 0.6;
                                } else if (isNext) {
                                    transform = 'translateX(80%) scale(0.85) rotateY(-25deg)';
                                    zIndex = 20;
                                    opacity = 0.6;
                                } else if (offset === 2) {
                                    transform = 'translateX(140%) scale(0.7) rotateY(-35deg)';
                                    zIndex = 10;
                                    opacity = 0.3;
                                } else if (offset === projects.length - 2) {
                                    transform = 'translateX(-140%) scale(0.7) rotateY(35deg)';
                                    zIndex = 10;
                                    opacity = 0.3;
                                }

                                return (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-full max-w-2xl transition-all duration-700 ease-out"
                                        style={{
                                            transform: `translate(-50%, -50%) ${transform}`,
                                            zIndex,
                                            opacity,
                                            pointerEvents: isActive ? 'auto' : 'none'
                                        }}
                                    >
                                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                                            <div className={`h-48 md:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden group`}>
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Code2 className="w-16 h-16 md:w-24 md:h-24 text-white/80 group-hover:scale-110 transition-transform duration-300"/>
                                                </div>
                                            </div>

                                            <div className="p-4 md:p-8">
                                                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white break-words">
                                                    {project.title}
                                                </h3>
                                                <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg break-words overflow-hidden">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                                    {project.tech.map((tech, j) => (
                                                        <span
                                                            key={j}
                                                            className="text-xs md:text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex gap-4">
                                                    <Link
                                                        className="flex-1 px-4 py-2.5 md:px-6 md:py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm md:text-base"
                                                        href={project.link}
                                                        target="_blank"
                                                    >
                                                        View Project <Rocket className="w-4 h-4"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveProject(i)}
                                className={`transition-all duration-300 rounded-full ${
                                    i === activeProject
                                        ? 'w-12 h-3 bg-indigo-500 shadow-lg shadow-indigo-500/50'
                                        : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                                }`}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}