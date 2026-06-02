'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ArrowRight, Zap, Target } from 'lucide-react';
import Link from 'next/link';

const heroImages = [
    "/images/hero.png",
    "/images/materials.png",
    "/images/briquettes-90.png",
    "/images/pellets.png"
];

const HomeHero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[radial-gradient(circle_at_top_left,_var(--background)_0%,_#f8fafc_100%)]">
            {/* Rich Decorative Elements */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-emerald-50/50 -z-0 rounded-l-[10rem] hidden lg:block backdrop-blur-3xl shadow-inner"></div>

            {/* Floating Orbs */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 right-[40%] w-64 h-64 bg-emerald-300 rounded-full blur-[100px] -z-0"
            ></motion.div>
            <motion.div
                animate={{ x: [0, 30, 0], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-80 h-80 bg-amber-200 rounded-full blur-[120px] -z-0"
            ></motion.div>

            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-emerald-100 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm">
                        <Flame className="w-4 h-4 animate-pulse" />
                        <span className="tracking-wide uppercase text-[10px] md:text-xs">Next-Gen Biomass Energy</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-outfit font-black leading-[1] mb-8 text-secondary tracking-tight">
                        Powering <br />
                        <span className="text-primary italic relative inline-block">
                            Sustainability
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11C60 4.33333 119 1 178 1C237 1 296 4.33333 300 11" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span> <br />
                        Through Fuel
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
                        High-calorific biomass briquettes & pellets.
                        The carbon-neutral industrial energy choice for a <span className="text-secondary font-bold underline decoration-primary/30 underline-offset-4">Cleaner Tamil Nadu</span>.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <Link href="/products" className="group bg-emerald-800 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg hover:bg-emerald-900 transition-all shadow-2xl shadow-emerald-200 flex items-center justify-center gap-3 active:scale-95">
                            Explore Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/contact" className="backdrop-blur-sm bg-white/40 border-2 border-slate-200 text-slate-800 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg hover:border-emerald-800 hover:text-emerald-800 transition-all flex items-center justify-center active:scale-95">
                            Talk To Expert
                        </Link>
                    </div>

                    <div className="mt-14 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-slate-200"></div>
                            <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em]">Industry Standards</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span className="text-sm font-bold text-slate-600">High Thermal Out</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Target className="w-4 h-4 text-primary" />
                                <span className="text-sm font-bold text-slate-600">Zero Coal Mixing</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Slideshow Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    {/* Main Image Container */}
                    <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] lg:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(21,128,61,0.2)] aspect-square border-8 border-white/50 backdrop-blur-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImage}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={heroImages[currentImage]}
                                    alt="Dheepham Agro Fuels Product"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Soft overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Slide Navigation Dots */}
                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                        {heroImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentImage(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentImage ? 'bg-primary h-12' : 'bg-slate-300 hover:bg-slate-400'}`}
                            />
                        ))}
                    </div>



                    {/* Secondary Floating Card */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -top-10 right-10 bg-[#166534]/90 backdrop-blur-lg px-8 py-5 rounded-3xl shadow-2xl z-20 hidden lg:block border border-white/20"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                            <p className="text-white font-bold text-sm italic tracking-wide">100% Sustainable</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default HomeHero;
