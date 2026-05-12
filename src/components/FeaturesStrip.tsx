'use client';

import React from 'react';
import { Leaf, Flame, Settings, CheckCircle2 } from 'lucide-react';

const FeaturesStrip = () => {
    const features = [
        {
            icon: Leaf,
            label: "Efficiency",
            title: "100% Eco-Friendly",
            desc: "Zero chemical additives"
        },
        {
            icon: Flame,
            label: "Energy",
            title: "High Calorific Value",
            desc: "4200+ Kcal/Kg output"
        },
        {
            icon: Settings,
            label: "Process",
            title: "State-of-art Facility",
            desc: "Standardized production"
        },
        {
            icon: CheckCircle2,
            label: "Trust",
            title: "GST Registered",
            desc: "Transparent business"
        }
    ];

    return (
        <section className="bg-white py-12 md:py-20 border-y border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-center lg:flex-col lg:text-center gap-6 group">
                            <div className="bg-emerald-50 p-5 rounded-[2rem] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                                <f.icon className="w-8 h-8 shrink-0" />
                            </div>
                            <div>
                                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-1">{f.label}</p>
                                <h4 className="text-xl font-bold text-secondary mb-1">{f.title}</h4>
                                <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesStrip;
