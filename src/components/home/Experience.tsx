import {Briefcase} from "lucide-react";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Experience() {
    const experiences = [
        {
            role: 'N/A',
            company: 'N/A',
            period: '2022 - Present',
            description: 'N/A',
            achievements: []
        },
        {
            role: 'Full-Stack Developer',
            company: 'Digital Solutions Co.',
            period: '2020 - 2022',
            description: 'Built responsive web applications and RESTful APIs. Implemented CI/CD pipelines and automated testing frameworks.',
            achievements: ['Improved test coverage to 85%', 'Migrated legacy systems', 'Optimized database queries']
        }
    ];

    return (
        <section id="experience" className="relative bg-slate-900 text-white py-32 overflow-hidden">
            <AnimatedGrid />
            <FloatingParticles count={15} />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-indigo-400 mb-16 text-center">
                        Experience
                    </h2>

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative pl-8 border-l-2 border-indigo-500/30">
                                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-indigo-500 rounded-full border-4 border-slate-900 animate-pulse"></div>

                                <div className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                                <p className="text-indigo-400 font-semibold flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="text-white/60 bg-slate-700/50 px-4 py-1 rounded-full text-sm border border-slate-600/50">{exp.period}</span>
                                        </div>

                                        <p className="text-white/70 mb-4 leading-relaxed">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.achievements.map((achievement, j) => (
                                                <span
                                                    key={j}
                                                    className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30"
                                                >{achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}