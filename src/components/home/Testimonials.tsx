'use client';

import {useState, useEffect} from 'react';
import {Star, Quote, ChevronLeft, ChevronRight} from 'lucide-react';
import AnimatedGrid from '@/components/ui/AnimatedGrid';
import FloatingParticles from '@/components/ui/FloatingParticles';

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: 'Sikatsu',
            company: 'DevRoom',
            role: 'Plugin developer',
            image: 'from-blue-500 to-cyan-500',
            text: 'It was great working with eripe14, he completed the task with ease and fullfilled all our wishes. Would recommend working with him if you need your job done!',
            rating: 5,
            project: 'Chat tag plugin',
            reviewDate: '16/04/2025'
        },
        {
            name: 'Hademir',
            company: 'DevRoom',
            role: 'Plugin developer',
            image: 'from-purple-500 to-pink-500',
            text: 'He helped me a lot in all matters and delivered my plugin to me successfully.',
            rating: 5,
            project: 'Cross server warps plugin',
            reviewDate: '07/05/2025'
        },
        {
            name: 'Hightierglazer',
            company: 'DevRoom',
            role: 'Plugin developer',
            image: 'from-green-500 to-teal-500',
            text: 'The real-time chat application Karol developed handles thousands of concurrent users flawlessly. His problem-solving skills and dedication to quality are remarkable.',
            rating: 5,
            project: 'Custom event plugin',
            reviewDate: '11/05/2025'
        },
        {
            name: 'Hademir',
            company: 'DevRoom',
            role: 'Plugin developer',
            image: 'from-orange-500 to-red-500',
            text: 'He successfully added the plugin he made to my own plugin, the plugin works perfectly 10/10',
            rating: 5,
            project: 'Cross server chat hover plugin',
            reviewDate: '18/05/2025'
        },
        {
            name: 'Hademir',
            company: 'DevRoom',
            role: 'Plugin developer',
            image: 'from-rose-500 to-pink-500',
            text: 'He delivered the plugin very quickly, a helpful person, he made an additional plugin for a plugin that was not working. I thank him',
            rating: 5,
            project: 'Report bot using AI-based filtering system',
            reviewDate: '22/05/2025'
        },
        {
            name: 'Volcanogoblin21',
            company: 'DevRoom',
            role: 'Plugin developer',
            image: 'from-amber-500 to-orange-500',
            text: 'Vary good quality, finished very quickly, easy to communicate with in terms of telling them exactly what is wanted definitely worth the price as he offered the lowest.',
            rating: 5,
            project: 'Spawners plugin',
            reviewDate: '16/07/2025'
        },
        {
            name: 'Volcanogoblin21',
            company: 'DevRoom',
            role: 'Plugin developer',
            image: 'from-violet-500 to-purple-500',
            text: 'Very helpful with everything we needed and has updated the plug-in multiple times to fix all the bugs and updates would definitely recommend to other people. Pricing was very reasonable. This is my second commission with this person and both times he has gone above and beyond with both plugins perfecting them.',
            rating: 5,
            project: 'Artefacts plugin',
            reviewDate: '12/09/2025'
        },
        {
            name: 'Oink',
            company: 'Rollerite',
            role: 'Plugin developer',
            image: 'from-emerald-500 to-green-500',
            text: 'N/A',
            rating: 5,
            project: 'Groups plugin',
            reviewDate: '18/05/2025'
        },
        {
            name: 'Quazar',
            company: 'Rollerite',
            role: 'Plugin developer',
            image: 'from-sky-500 to-blue-500',
            text: 'eripe14 built a fantastic HUD plugin for our survival server that require integration with WorldGuard, PlaceholderAPI, MySQL, and HikariCP. Eripe nailed it!. Now we have a beautiful customized HUD for our server which displays exactly the data our players need. 5/5 TY eripe!',
            rating: 5,
            project: 'Custom plugin',
            reviewDate: '22/06/2025'
        },
        {
            name: 'Quazar',
            company: 'Rollerite',
            role: 'Plugin developer',
            image: 'from-fuchsia-500 to-purple-500',
            text: 'N/A',
            rating: 5,
            project: 'Custom plugin',
            reviewDate: '26/06/2025'
        },
        {
            name: 'Quazar',
            company: 'Rollerite',
            role: 'Plugin developer',
            image: 'from-lime-500 to-green-500',
            text: 'N/A',
            rating: 5,
            project: 'Custom plugin',
            reviewDate: '07/07/2025'
        },
        {
            name: 'Quazar',
            company: 'Rollerite',
            role: 'Plugin developer',
            image: 'from-red-500 to-rose-500',
            text: 'N/A',
            rating: 5,
            project: 'Custom plugin',
            reviewDate: '08/07/2025'
        },
        {
            name: 'Daniel',
            company: 'Rollerite',
            role: 'Plugin developer',
            image: 'from-teal-500 to-cyan-500',
            text: '10/10, amazing work done by eripe14!',
            rating: 5,
            project: 'Infinite buckets plugin',
            reviewDate: '16/07/2025'
        },
        {
            name: 'Daniel',
            company: 'Rollerite',
            role: 'Plugin developer',
            image: 'from-indigo-500 to-blue-500',
            text: '10/10 would recommend.',
            rating: 5,
            project: 'Custom sponges plugin',
            reviewDate: '27/07/2025'
        },
        {
            name: 'Unai',
            company: 'Candor Studios',
            role: 'Plugin developer',
            image: 'from-yellow-500 to-amber-500',
            text: 'Eripe is great! Fast dev and really helpful, always willing to iterate on the code and help.',
            rating: 5,
            project: 'Custom plugin',
            reviewDate: '18/05/2025'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="relative bg-slate-900 text-white py-32 overflow-hidden">
            <AnimatedGrid/>
            <FloatingParticles count={20}/>

            <div
                className="absolute top-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"
                 style={{animationDelay: '1.5s'}}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-indigo-400 mb-4 text-center">
                        Client testimonials
                    </h2>
                    <p className="text-xl text-white/60 mb-16 text-center">
                        What people say about working with me
                    </p>

                    <div className="relative min-h-[550px] h-auto md:h-[550px] mb-12">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 transition-all duration-700 ${
                                    i === currentTestimonial
                                        ? 'opacity-100 scale-100 translate-y-0'
                                        : i < currentTestimonial
                                            ? 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                                            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                                }`}
                            >
                                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-lg
                                rounded-3xl p-6 md:p-12 border border-slate-700/50 shadow-2xl min-h-[500px] flex flex-col"
                                >
                                    <div
                                        className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                                    <div
                                        className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

                                    <div className="relative mb-6">
                                        <Quote className="w-16 h-16 text-indigo-400/30"/>
                                    </div>

                                    <div className="flex-1 mb-8 relative">
                                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
                                            "{testimonial.text}"
                                        </p>
                                    </div>

                                    <div className="flex gap-1 mb-6 relative">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse"
                                                style={{animationDelay: `${i * 0.1}s`}}
                                            />
                                        ))}
                                    </div>

                                    {/* Client Info */}
                                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative">
                                        <div
                                            className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonial.image} flex items-center justify-center text-2xl font-bold shadow-lg ring-4 ring-slate-800`}>
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-2xl font-bold text-white mb-1">{testimonial.name}</h4>
                                            <p className="text-indigo-400 font-semibold text-lg">{testimonial.role}</p>
                                            <p className="text-white/60">{testimonial.company}</p>
                                            <p className="text-white/60">{testimonial.reviewDate}</p>
                                        </div>
                                        <div className="md:text-right">
                                            <div
                                                className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm border border-indigo-500/30">
                                                {testimonial.project}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm rounded-full border border-slate-600/50 transition-all duration-300 hover:scale-110 z-10 hover:shadow-lg hover:shadow-indigo-500/20"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 text-white"/>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm rounded-full border border-slate-600/50 transition-all duration-300 hover:scale-110 z-10 hover:shadow-lg hover:shadow-indigo-500/20"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 text-white"/>
                        </button>
                    </div>

                    <div className="flex justify-center gap-3 mb-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentTestimonial(i)}
                                className={`transition-all duration-300 rounded-full ${
                                    i === currentTestimonial
                                        ? 'w-12 h-3 bg-indigo-500 shadow-lg shadow-indigo-500/50'
                                        : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                                }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <p className="text-xl text-white/60 text-center">
                        Disclaimer: DevRoom & Rollerite are freelancing companies.
                    </p>
                </div>
            </div>
        </section>
    );
}