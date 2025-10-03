'use client';

import { useState, useEffect } from 'react';

export default function FloatingParticles({ count = 20 }) {
    const [particles, setParticles] = useState<{ left: number; top: number; duration: number; delay: number; }[]>([]);

    useEffect(() => {
        const newParticles = [...Array(count)].map(() => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, [count]);

    if (particles.length === 0) {
        return <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>;
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-indigo-400/20 rounded-full"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animation: `float ${particle.duration}s ease-in-out infinite`,
                        animationDelay: `${particle.delay}s`
                    }}
                ></div>
            ))}
        </div>
    );
}