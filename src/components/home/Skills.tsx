import React from "react";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import FloatingParticles from "@/components/ui/FloatingParticles";
import {Database, Globe, Terminal, Cpu, Box, Code2, Bot, Lock, Layers} from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: Globe,
            skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Backend',
            icon: Database,
            skills: ['Node.js', 'Java', 'Kotlin', 'Python', 'C++', 'JavaScript', 'TypeScript'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'DevOps',
            icon: Terminal,
            skills: ['Docker', 'AWS', 'Linux', 'Kubernetes'],
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Tools',
            icon: Cpu,
            skills: ['GitHub', 'GitLab', 'Postman', 'VS Code'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Minecraft',
            icon: Box,
            skills: ['SpigotAPI', 'Velocity', 'Bungeecord', 'NMS'],
            color: 'from-emerald-500 to-teal-500'
        }
    ];

    const specializations = [
        {
            icon: Code2,
            title: 'Advanced Minecraft Plugins',
            description: 'Custom plugins with complex mechanics, hooks to other plugins, and server management tools',
            gradient: 'from-green-500 to-emerald-600'
        },
        {
            icon: Bot,
            title: 'Discord Bots',
            description: 'Feature-rich Discord bots with moderation, music, leveling systems and custom commands',
            gradient: 'from-indigo-500 to-purple-600'
        },
        {
            icon: Globe,
            title: 'Web Applications',
            description: 'Modern, responsive websites and web apps with seamless user experience',
            gradient: 'from-blue-500 to-cyan-600'
        },
        {
            icon: Lock,
            title: 'Authentication Systems',
            description: 'Secure login systems, OAuth integration, JWT tokens, and session management',
            gradient: 'from-orange-500 to-red-600'
        }
    ];

    return (
        <section id="skills" className="relative bg-slate-900 text-white py-32 overflow-hidden">
            <AnimatedGrid/>
            <FloatingParticles count={20}/>

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950/10 to-slate-900"></div>
            <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                 style={{animationDelay: '1s'}}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-indigo-400 mb-4 text-center">
                        Skills & Technologies
                    </h2>

                    <p className="text-xl text-white/60 mb-16 text-center max-w-3xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {skillCategories.map((category, i) => (
                            <div
                                key={i}
                                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border
                                border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300
                                hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                ></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                                            <category.icon className="w-6 h-6 text-white"/>
                                        </div>

                                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                    </div>

                                    <ul className="space-y-2">
                                        {category.skills.map((skill, j) => (
                                            <li key={j}
                                                className="text-white/70 flex items-center gap-2 group-hover:text-white/90 transition-colors text-sm">
                                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                    <div className="relative">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                What I can build for you
                            </h3>

                            <p className="text-lg text-white/60">
                                Specialized in creating custom solutions tailored to your needs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {specializations.map((spec, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-800/30
                                    backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50
                                    hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br
                                     ${spec.gradient} opacity-0 group-hover:opacity-10
                                      transition-opacity duration-300`}
                                    ></div>

                                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br
                                    from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150
                                    transition-transform duration-500"
                                    ></div>

                                    <div className="relative z-10">
                                        <div
                                            className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${spec.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <spec.icon className="w-8 h-8 text-white"/>
                                        </div>

                                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                                            {spec.title}
                                        </h4>

                                        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                                            {spec.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <div
                            className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 text-center">
                            <Layers className="w-12 h-12 text-indigo-400 mx-auto mb-4"/>

                            <h4 className="text-2xl font-bold text-white mb-3">
                                Looking for something specific?
                            </h4>

                            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                                I love tackling unique challenges. If you have a custom project in mind,
                                let's discuss how I can bring your vision to life.
                            </p>

                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                                className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/30"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}