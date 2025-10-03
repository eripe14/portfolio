import React, { useState } from 'react';
import { Github, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly via email.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative bg-slate-900 text-white py-32 overflow-hidden">
            <AnimatedGrid />
            <FloatingParticles count={20} />

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-indigo-400 mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-white/70">
                            Have a project in mind? Let's create something amazing together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        <div className="relative">
                            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    {status.message && (
                                        <div className={`flex items-center gap-3 p-4 rounded-xl ${
                                            status.type === 'success'
                                                ? 'bg-green-500/20 border border-green-500/50'
                                                : 'bg-red-500/20 border border-red-500/50'
                                        }`}>
                                            {status.type === 'success' ? (
                                                <CheckCircle className="w-5 h-5 text-green-400" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 text-red-400" />
                                            )}
                                            <p className="text-sm">{status.message}</p>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                                <p className="text-white/70 leading-relaxed mb-8">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or contact me directly.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Mail,
                                        label: 'Email',
                                        value: 'karol.dronia@gmail.com',
                                        link: 'mailto:karol.dronia@gmail.com'
                                    },
                                    {
                                        icon: Github,
                                        label: 'GitHub',
                                        value: 'github.com/eripe14',
                                        link: 'https://github.com/eripe14'
                                    },
                                    {
                                        icon: FaDiscord,
                                        label: 'Discord',
                                        value: 'eripe14',
                                        link: null
                                    }
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.link || '#'}
                                        target={item.link ? '_blank' : undefined}
                                        rel={item.link ? 'noopener noreferrer' : undefined}
                                        className={`group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 flex items-center gap-4 ${!item.link && 'cursor-default'}`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative z-10 p-3 bg-indigo-500/20 rounded-xl">
                                            <item.icon className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="relative z-10 text-left">
                                            <p className="text-white/60 text-sm mb-1">{item.label}</p>
                                            <p className="text-white font-semibold">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-8">
                                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                                    <div className="text-3xl font-bold text-indigo-400 mb-2">24h</div>
                                    <div className="text-sm text-white/60">Average response Time</div>
                                </div>
                                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                                    <div className="text-3xl font-bold text-indigo-400 mb-2">100%</div>
                                    <div className="text-sm text-white/60">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-slate-800/50 text-center text-white/60 relative z-10">
                <p>© 2025 Karol Dronia. Built with passion and Next.js</p>
            </footer>
        </section>
    );
}