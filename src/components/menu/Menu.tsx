'use client';

import {useEffect, useState} from "react";

export default function Menu() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                        <span className="text-indigo-400">eripe</span>14
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-white/80 hover:text-indigo-400 transition-colors duration-300 font-medium"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:text-indigo-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-slate-800/95 backdrop-blur-lg rounded-2xl border border-slate-700/50 overflow-hidden">
                        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, i) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="w-full text-left px-6 py-4 text-white/80 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 font-medium border-b border-slate-700/50 last:border-b-0"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}