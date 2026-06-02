'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Earth, Users } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

const backgroundImages = [
    "/images/hero.png",
    "/images/materials.png",
    "/images/groundnut-shell.png",
    "/images/pellets.png"
];

export default function AboutPage() {
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-900 text-white">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={backgroundImages[currentImage]}
                                alt="Background"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-emerald-400/30 backdrop-blur-md">
                            <Factory className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-black mb-10 text-white leading-tight">
                            Precision-Engineered <br />
                            <span className="text-primary italic">Carbon Neutral</span> Energy
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50/80 font-light leading-relaxed">
                            Established in the heart of Tiruvannamalai, Tamil Nadu, Dheepham Agro Fuels was founded with a singular, transformative vision: to turn agricultural abundance into industrial energy. We stand at the intersection of rural sustainability and urban industrial growth, delivering power that doesn&apos;t cost the earth.
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
                                <div className="bg-emerald-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-emerald-100 col-span-2">
                                    <h3 className="text-5xl font-black text-primary mb-3 italic">100%</h3>
                                    <p className="text-slate-600 font-bold text-lg">Professional Industrial Enterprise</p>
                                    <p className="text-slate-500 mt-2">Committed to transparency and professional industrial standards.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 text-secondary italic">Our Commitment</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    We operate on three core pillars: transparency, uncompromising quality, and environmental stewardship. Our state-of-the-art manufacturing facility leverages advanced engineering to process raw biomass into standardized, high-density fuels that outperform traditional alternatives.
                                </p>
                                <p>
                                    Our primary mission is to empower Indian industries to transition from coal and fossil fuels to carbon-neutral alternatives. We believe that true progress happens when sustainability and profitability go hand-in-hand, providing a cleaner future for the next generation of business leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            {/* Profile Visual Area */}
                            <div className="lg:col-span-5 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="relative z-10 aspect-[4/5] bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] border-2 border-slate-100 overflow-hidden shadow-2xl group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-amber-500/10 group-hover:scale-110 transition-transform duration-700"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-12">
                                            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 border border-slate-50">
                                                <Factory className="w-12 h-12 text-primary" />
                                            </div>
                                            <h4 className="text-3xl font-outfit font-black text-secondary mb-2 tracking-tight uppercase">Visionary<br />Leadership</h4>
                                            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Credential Tags */}
                                    <div className="absolute bottom-10 left-10 right-10 flex gap-3">
                                        <div className="bg-white/80 backdrop-blur-md px-5 py-2 rounded-2xl border border-white/40 shadow-lg">
                                            <p className="text-primary font-black text-xs uppercase tracking-widest leading-none">Established</p>
                                            <p className="text-secondary font-bold text-sm">2026</p>
                                        </div>
                                        <div className="bg-primary text-white px-5 py-2 rounded-2xl shadow-lg shadow-emerald-200">
                                            <p className="font-black text-xs uppercase tracking-widest leading-none opacity-70">Quality</p>
                                            <p className="font-bold text-sm">ISO Standard</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Decorative elements behind the "photo" card */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -z-0"></div>
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -z-0"></div>
                            </div>

                            {/* Text Content Area */}
                            <div className="lg:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <div className="inline-flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-full mb-8">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Our Founder</span>
                                    </div>

                                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-black text-secondary mb-8 tracking-tighter leading-[0.9]">
                                        T. TAMILARASAN <br />
                                        <span className="text-primary italic font-light font-outfit">B.E., M.E.</span>
                                    </h3>

                                    <div className="space-y-8">
                                        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic border-l-8 border-primary/20 pl-10">
                                            &quot;Engineering is not just about manufacturing, it&apos;s about creating precise energy solutions for a sustainable tomorrow.&quot;
                                        </p>

                                        <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                                            <p>
                                                With an advanced Master&apos;s degree in Engineering, Mr. Tamilarasan combines decades of scientific expertise with a relentless focus on <span className="text-secondary font-bold underline decoration-primary/30 decoration-4 underline-offset-4">thermal efficiency</span>.
                                            </p>
                                            <p>
                                                Under his strategic guidance, Dheepham Agro Fuels has emerged as a globally trusted name, consistently delivering meticulously engineered biomass solutions optimized for maximum calorific value and environmental stewardship.
                                            </p>
                                        </div>

                                        <div className="pt-10 flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white text-3xl font-outfit select-none">
                                                TT
                                            </div>
                                            <div>
                                                <p className="text-xl font-outfit font-black text-slate-900">Managing Director</p>
                                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Dheepham Agro Fuels</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
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
                            { icon: ShieldCheck, title: "Technical Precision", desc: "We don't just manufacture; we engineer. Every batch undergoes rigorous testing to ensure optimal calorific value and minimal ash content." },
                            { icon: Earth, title: "Global Sustainability", desc: "Our mission is to decarbonize the industrial sector. Every ton of our fuel directly offsets carbon emissions from traditional fossil fuels." },
                            { icon: Users, title: "Rural Prosperity", desc: "By converting agricultural residues into premium energy, we create a sustainable revenue stream for local farmers and strengthen the rural economy." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100 hover:scale-[1.02] transition-transform">
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
