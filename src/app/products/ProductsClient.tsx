'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { Flame, Star, ShieldCheck, Zap } from 'lucide-react';

const products = [
    {
        title: "Bio Mass Briquette 90MM",
        description: "Our flagship high-density cylindrical briquettes with 90mm diameter. These are specifically engineered for heavy industrial boilers, providing sustained heat and minimal smoke.",
        image: "/images/briquettes-90.png",
        specs: ["90mm Diameter", "4200+ Kcal/Kg", "Ash Content < 8%"]
    },
    {
        title: "Briquette 70MM",
        description: "Versatile 70mm diameter briquettes ideal for medium-scale industrial furnaces, commercial heating, and specialized kilns requiring precise temperature control.",
        image: "/images/briquettes-70.png",
        specs: ["70mm Diameter", "4000+ Kcal/Kg", "Consistent Burn Rate"]
    },
    {
        title: "Premium Bio Pellets",
        description: "Premium wood and biomass pellets available in 6mm to 10mm sizes. Perfectly suited for automated feeding systems, domestic pellet stoves, and high-efficiency boilers.",
        image: "/images/pellets.png",
        specs: ["6mm - 10mm Sizes", "Low Moisture < 10%", "Uniform Density"]
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-emerald-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-8"
                    >
                        <Star className="w-4 h-4 text-emerald-400" /> Premium Fuel Solutions
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-6">
                        Sustainable Energy <span className="text-primary italic">Catalogue</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                        High-performance biomass products designed to replace traditional coal and fossil fuels with carbon-neutral efficiency.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product, idx) => (
                            <ProductCard key={idx} product={product} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison/Technical Section */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 text-secondary">Why Switch to Dheepham Bio-Fuels?</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Zap, title: "High Thermal Efficiency", desc: "Our products offer high calorific values comparable to C-grade coal." },
                                    { icon: Flame, title: "Longer Ignition Time", desc: "Denser composition ensures a steady, long-lasting flame for industrial use." },
                                    { icon: ShieldCheck, title: "Clean Combustion", desc: "Minimal sulfur and nitrogen oxides emissions, preserving your equipment and the planet." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                                        <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative flex flex-col items-center text-center overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                            <h3 className="text-3xl font-outfit font-bold mb-6 italic tracking-tight">Need a Custom Size?</h3>
                            <p className="text-slate-400 mb-8 max-w-sm">
                                We can produce briquettes and pellets in custom diameters tailored to your specific industrial requirements.
                            </p>
                            <a href="/contact" className="bg-primary hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-900/50">
                                Request Technical Specs
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
