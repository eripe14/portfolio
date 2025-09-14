export default function About() {
    return (
        <section id="next-section" className="bg-slate-900 text-white py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-indigo-400">
                        About Us
                    </h2>
                    <p className="text-xl text-white/80 leading-relaxed">
                        We are passionate developers and designers who believe in the power of
                        technology to transform ideas into reality. Our team specializes in
                        creating innovative digital solutions that make a difference.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Innovation</h3>
                            <p className="text-white/70">
                                Cutting-edge solutions that push the boundaries of what's possible
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Quality</h3>
                            <p className="text-white/70">
                                Meticulous attention to detail in every project we deliver
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Impact</h3>
                            <p className="text-white/70">
                                Creating solutions that make a real difference for our clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}