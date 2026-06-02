'use client';

import React from 'react';


const clients = [
    "Solara Active Pharma",
    "Britannia",
    "Coca Cola",
    "JK Tyre",
    "Piramal Pharma",
    "Apex Laboratory",
    "Sthal India",
    "Polyhose India Private Limited",
    "Biocorn",
    "ITC",
    "Hindustan Unilever"
];

const ClientsSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">Market Leaders Trust Us</h2>
                <p className="text-3xl md:text-4xl font-outfit font-extrabold text-secondary italic">Our Prestigious Industrial Partners</p>
            </div>

            {/* Marquee effect */}
            <div className="relative flex overflow-x-hidden group">
                <div className="py-8 animate-marquee whitespace-nowrap flex gap-12 items-center">
                    {clients.map((client, i) => (
                        <span key={i} className="text-2xl md:text-3xl font-outfit font-black text-slate-200 uppercase tracking-tighter hover:text-primary transition-colors cursor-default px-4">
                            {client}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex gap-12 items-center">
                    {clients.map((client, i) => (
                        <span key={i} className="text-2xl md:text-3xl font-outfit font-black text-slate-200 uppercase tracking-tighter hover:text-primary transition-colors cursor-default px-4">
                            {client}
                        </span>
                    ))}
                </div>
            </div>

            {/* CSS for custom marquee if not using a library */}
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
            `}</style>
        </section>
    );
};

export default ClientsSection;
