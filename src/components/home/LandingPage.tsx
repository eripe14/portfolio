'use client';

import React from "react";
import Menu from "@/components/menu/Menu";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Testimonials from "@/components/home/Testimonials";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                        opacity: 0.6;
                    }
                }

                ::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className="overflow-y-auto h-screen" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <Menu />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Testimonials />
                <Contact />
            </div>
        </div>
    );
}