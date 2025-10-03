import {ChevronDown, Rocket, Sparkles} from 'lucide-react';
import React from "react";
import LightRays from "@/components/ui/LightRays";
import AnimatedGrid from "@/components/ui/AnimatedGrid";

export default function Hero() {
    const scrollToNextSection = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
            <AnimatedGrid />
            <LightRays
                raysSpeed={0.76}
                lightSpread={0.3}
                rayLength={0.8}
                mouseInfluence={0.05}
            />

            <div className="relative z-10 text-center space-y-8 px-6">
                <h1 className="text-6xl md:text-8xl font-bold">
                    I'm Karol <span className="text-indigo-400 relative">eripe14</span> Dronia
                </h1>

                <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                    Full-Stack Developer crafting exceptional digital experiences with passion and precision
                </p>

                <div className="flex gap-4 justify-center mt-8">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                        View Projects <Rocket className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 border-2 border-indigo-400 hover:bg-indigo-400/10 rounded-full font-semibold transition-all duration-300"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            <button
                onClick={scrollToNextSection}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
                aria-label="Scroll to next section"
            >
                <ChevronDown size={40} className="text-white/70 animate-bounce group-hover:text-indigo-400 transition-colors" />
            </button>
        </section>
    );
}