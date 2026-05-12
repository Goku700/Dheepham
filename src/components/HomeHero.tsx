'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import Link from 'next/link';

const HomeHero = () => (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-50 -z-0 rounded-l-[5rem] hidden lg:block"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-20 -z-0"></div>

        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
                    <Flame className="w-4 h-4" /> Eco-Friendly Energy Solutions
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-extrabold leading-[1.1] mb-8 text-secondary">
                    Clean Fuel for a <span className="text-primary italic">Sustainable</span> Tomorrow
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                    High-performance biomass briquettes and pellets.
                    The smarter, carbon-neutral alternative to coal for modern industrial needs.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/products" className="bg-emerald-800 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-100 scale-hover">
                        Explore Range
                    </Link>
                    <Link href="/contact" className="border-2 border-slate-200 text-slate-800 px-10 py-5 rounded-2xl font-bold text-lg hover:border-emerald-800 hover:text-emerald-800 transition-all">
                        Get a Quote
                    </Link>
                </div>

                <div className="mt-12 flex items-center gap-6">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px]">DAF</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 font-medium italic">Trusted by 50+ Industrial Units in Tamil Nadu</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative px-4 lg:px-0"
            >
                <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                    <Image
                        src="/images/hero.png"
                        alt="Dheepham Agro Fuels Product"
                        width={800}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 z-20 hidden md:block">
                    <p className="text-secondary font-black text-4xl italic">4200+</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Kcal/Kg Energy</p>
                </div>
            </motion.div>
        </div>
    </section>
);

export default HomeHero;
