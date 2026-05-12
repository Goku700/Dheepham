'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Wind, Droplets } from 'lucide-react';

const rawMaterials = [
    { name: "Groundnut shell", category: "Agro-Waste" },
    { name: "Sawdust", category: "Timber Waste" },
    { name: "Woodchips", category: "Timber Waste" },
    { name: "Coffee husk", category: "Agro-Waste" },
    { name: "Palm shell", category: "Industrial waste" },
    { name: "Cashew shell cake", category: "Agro-Waste" },
    { name: "Wood bark", category: "Natural Resource" },
    { name: "Rice husk", category: "Agro-Waste" },
    { name: "Wheat husk", category: "Agro-Waste" },
    { name: "Juliflora wood chips", category: "Invasive Species" },
    { name: "Coal", category: "Mining Product" }
];

export default function MaterialsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
                        >
                            Sourcing & Sustainability
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-secondary mb-8 leading-tight">
                            Premium Raw <span className="text-primary italic">Materials</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            The quality of our fuel starts with the quality of our ingredients. We carefully select agricultural by-products with high energy potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Materials Image & Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/materials.png"
                                    alt="Raw Materials Collection"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary p-3 rounded-2xl text-white">
                                        <Recycle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold">Renewable Rate</p>
                                        <p className="text-2xl font-outfit font-black text-secondary">100% Organic</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div>
                            <h2 className="text-3xl font-outfit font-bold mb-6 text-secondary">A Diverse Sourcing Network</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                By utilizing various biomass sources, we ensure a steady supply for our clients throughout the year, regardless of seasonal agricultural harvest cycles. Our processing facility is equipped to handle complex material blends to maintain consistent calorific output.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {rawMaterials.map((material, idx) => (
                                    <div key={idx} className="group p-4 rounded-2xl border border-slate-100 hover:border-primary/30 hover:bg-emerald-50/30 transition-all">
                                        <p className="font-bold text-slate-800 group-hover:text-primary transition-colors">{material.name}</p>
                                        <p className="text-xs text-slate-400 font-medium">{material.category}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="py-24 bg-emerald-900 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Strict Quality Control</h2>
                        <p className="text-emerald-100/70 max-w-2xl mx-auto italic">Every load of raw material undergoes rigorous testing before entering our production line.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Droplets, title: "Moisture Testing", desc: "Materials are dried to optimal levels to ensure maximum energy density and zero rot during storage." },
                            { icon: Wind, title: "Purity Check", desc: "We remove contaminants like soil and stones that can damage industrial burners and cause excessive ash." },
                            { icon: Leaf, title: "Calorific Analysis", desc: "Constant sampling to verify that our material blends meet the promised thermal output for our clients." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur p-8 rounded-[2rem] border border-white/10 text-center hover:bg-white/10 transition-colors">
                                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-emerald-100/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
