'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Earth, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#166534] text-white relative">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-emerald-400/30">
                            <Factory className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-8 text-white">
                            Pioneering <span className="text-[#4ade80]">Sustainable</span> Industry
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50 font-light leading-relaxed">
                            Based in Tiruvannamalai, Tamil Nadu, Dheepham Agro Fuels was founded with a clear vision: to bridge the gap between agricultural abundance and industrial energy needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 mt-12">
                                    <h3 className="text-4xl font-black text-primary mb-2 italic">100%</h3>
                                    <p className="text-slate-600 font-bold">GST Registered</p>
                                </div>
                                <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                                    <h3 className="text-4xl font-black text-primary mb-2 italic">ZERO</h3>
                                    <p className="text-slate-400 font-bold">Coal Mixing</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 text-secondary italic">Our Commitment</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    As a GST-registered enterprise, we pride ourselves on transparency, quality, and environmental stewardship.
                                    Our facility leverages state-of-the-art machinery to process raw biomass into standardized high-density fuels.
                                </p>
                                <p>
                                    Our mission is to help industries transition from coal to carbon-neutral alternatives without compromising on thermal power.
                                    We believe that sustainability and profitability should go hand-in-hand for modern Indian businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-slate-900 italic">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: ShieldCheck, title: "Quality First", desc: "No compromises on calorific value. Every batch is tested for consistency and performance." },
                            { icon: Earth, title: "Environmental Impact", desc: "Every ton of briquette used is a ton of coal kept in the ground. We fight climate change through fuel." },
                            { icon: Users, title: "Farmer Partnership", desc: "We provide fair market value to local farmers for their agricultural waste, supporting the rural economy." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100 hover:scale-[1.02] transition-transform">
                                <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                    <value.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-slate-800">{value.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
