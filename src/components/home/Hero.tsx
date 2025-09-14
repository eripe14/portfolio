import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('next-section');
        if (nextSection) {
            nextSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            <div className="flex-1 flex items-center justify-center">
                <div className="text-center space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold">
                        Turn your ideas to <span className="text-indigo-400">Reality</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
                        We transform innovative concepts into powerful digital solutions
                    </p>
                </div>
            </div>

            {/* Animowana strzałka na dole */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={scrollToNextSection}
                    className="group flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-all duration-300"
                    aria-label="Scroll to next section"
                >
                    <div className="relative">
                        <ChevronDown
                            size={32}
                            className="animate-bounce group-hover:animate-pulse transition-all duration-300"
                        />
                        <ChevronDown
                            size={32}
                            className="absolute top-0 left-0 animate-bounce opacity-30 group-hover:opacity-60"
                            style={{animationDelay: '0.2s'}}
                        />
                    </div>
                </button>
            </div>
        </section>
    )
}