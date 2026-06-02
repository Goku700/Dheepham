'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { Flame, Star, ShieldCheck, Zap } from 'lucide-react';

const products = [
    {
        title: "Bio Mass Briquette",
        description: "Engineered for maximum thermal density, our 90mm briquettes are the ideal coal alternative for high-capacity industrial boilers, delivering 4200+ Kcal/Kg calorific value.",
        image: "/images/briquettes-90.png",
        specs: ["Main Fuel Product", "4200+ Kcal/Kg", "Low Ash (< 5%)"]
    },
    {
        title: "Premium Pellets",
        description: "Ultra-low moisture wood pellets (<8%) designed for automated screw-feeding systems in power plants and thermal heaters, ensuring uniform combustion.",
        image: "/images/pellets.png",
        specs: ["6mm - 10mm Sizes", "Low Moisture (< 8%)", "Automated Feeding"]
    },
    {
        title: "Cashew Shell Cake",
        description: "A potent renewable resource offering exceptional calorific value, perfect for brick kilns and heavy-duty combustion processes in industrial settings.",
        image: "/images/cashew-shell-cake.png",
        specs: ["De-oiled Quality", "Intense Thermal Power", "Cost Effective"]
    },
    {
        title: "Palm Shell",
        description: "High oil content shells providing intense, long-lasting heat. Preferred for its robust energy-to-volume ratio in large thermal power units.",
        image: "/images/palm-shell.png",
        specs: ["High Oil Content", "Long Steady Burn", "Minimal Smoke"]
    },
    {
        title: "Wood Chips",
        description: "Standardized sizing perfectly suited for vibrating grate boilers, ensuring uniform combustion and zero clinking in industrial furnaces.",
        image: "/images/wood-chips.png",
        specs: ["Uniform Sizing", "Vibrate Grate Ready", "Fast Ignition"]
    },
    {
        title: "Tamarind Husk",
        description: "A professional-grade cost-effective biomass option for fluid bed combustion, widely used in chemical and textile processing units.",
        image: "/images/tamarind-husk.png",
        specs: ["Fluid Bed Ready", "Textile & Chemical Use", "Bulk Industrial Supply"]
    },
    {
        title: "Groundnut Shell",
        description: "Dry, versatile agro-residue fuel with rapid ignition properties, ideal for small to medium scale thermal steam applications.",
        image: "/images/groundnut-shell.png",
        specs: ["Rapid Ignition", "Dry Matter Quality", "Steam Efficiency"]
    },
    {
        title: "Saw Dust",
        description: "High-surface-area byproduct that ensures rapid temperature spikes in specialized burner systems and biomass co-firing plants.",
        image: "/images/saw-dust.png",
        specs: ["Kiln-Dry Quality", "Instant Heat Spikes", "Zero Additives"]
    },
    {
        title: "Rice Husk",
        description: "Clean-burning residue with high silica content, providing a reliable and steady heat source for rice mills and parboiling units.",
        image: "/images/rice-husk.png",
        specs: ["High Silica (Steady)", "Certified Agro-Waste", "Continuous Supply"]
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-emerald-900 text-white relative overflow-hidden">
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold mb-6">
                        Sustainable Energy <span className="text-primary italic">Catalogue</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                        High-performance biomass products designed to replace traditional coal and fossil fuels with carbon-neutral efficiency.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product, idx) => (
                            <ProductCard key={idx} product={product} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-secondary italic">Why Switch to Dheepham Bio-Fuels?</h2>
                            <p className="text-slate-500 mt-4 text-lg">Experience the thermal power of engineered biomass sustainability.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Zap, title: "High Efficiency", desc: "Thermal output comparable to C-grade coal." },
                                { icon: Flame, title: "Steady Burn", desc: "Denser composition for a long-lasting flame." },
                                { icon: ShieldCheck, title: "Clean Air", desc: "Minimal emissions for a healthier planet." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-emerald-50 transition-all group">
                                    <div className="bg-white p-4 rounded-2xl text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
