import React from "react";
import {Github, Zap, Sparkles, Code2, Rocket} from "lucide-react";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function About() {
    return (
        <section id="about" className="relative bg-slate-900 text-white py-32 overflow-hidden">
            <AnimatedGrid />
            <FloatingParticles count={15} />

            <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-indigo-400 mb-12 text-center">
                        About me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 text-justify">
                            <p className="text-xl text-white/80 leading-relaxed">
                                I'm a passionate developer with <span className="text-indigo-400 font-semibold">5+ years of experience</span> building innovative solutions across the full stack. From elegant frontends to robust backends, I love bringing ideas to life.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed">
                                My journey in tech has been driven by curiosity and a relentless desire to solve complex problems. I specialize in creating seamless, performant applications that users love.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/eripe14" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-indigo-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-indigo-500/20">
                                    <Github className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Zap, title: 'Fast', desc: 'Optimized for performance' },
                                { icon: Sparkles, title: 'Modern', desc: 'Latest technologies' },
                                { icon: Code2, title: 'Clean', desc: 'Maintainable code' },
                                { icon: Rocket, title: 'Scalable', desc: 'Built to grow' },
                            ].map((item, i) => (
                                <div key={i} className="relative group bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <item.icon className="w-8 h-8 text-indigo-400 mb-3 relative z-10" />
                                    <h3 className="text-lg font-bold mb-2 relative z-10">{item.title}</h3>
                                    <p className="text-white/60 text-sm relative z-10">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}