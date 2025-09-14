'use client';

import LightRays from "@/components/ui/LightRays";
import Hero from "@/components/home/Hero";
import Menu from "@/components/menu/Menu";
import About from "@/components/home/About";
import {useEffect, useState} from "react";
import GradualBlur from "@/components/ui/GradualBlur";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-900 relative overflow-hidden">
            <div className="h-screen overflow-y-auto p-6">
                <div className="relative overflow-hidden shadow-2xl">
                    <LightRays
                        raysOrigin="bottom-center"
                        raysColor="#fff"
                        raysSpeed={0.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays absolute inset-0 z-0"
                    />

                    <Menu/>
                    <Hero/>
                </div>
                <About/>
                <About/>
                <About/>
                <About/>
                <About/>
                <About/>
            </div>

            <GradualBlur
                target="parent"
                position="top"
                height="6rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            />
        </div>
    )
}