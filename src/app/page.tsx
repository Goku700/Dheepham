import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import HomeHero from '@/components/HomeHero';
import FeaturesStrip from '@/components/FeaturesStrip';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dheepham Agro Fuels | Leading Biomass Briquettes & Pellets Manufacturer",
  description: "Dheepham Agro Fuels produces high-quality biomass briquettes and pellets in Tamil Nadu. Eco-friendly, carbon-neutral energy solutions for industrial boilers and furnaces.",
  keywords: "Biomass Briquettes, Bio Pellets, Sustainable Fuel, Industrial Energy, Tamil Nadu Biofuel, Dheepham Agro"
};

const productsSummary = [
  {
    title: "Bio Mass Briquette 90MM",
    description: "High-density cylindrical briquettes with 90mm diameter, perfect for industrial boilers.",
    image: "/images/briquettes-90.png",
    specs: ["90mm Diameter", "High Calorific Value", "Low Ash Content"]
  },
  {
    title: "Briquette 70MM",
    description: "Multi-purpose 70mm diameter briquettes offering balanced burning rates.",
    image: "/images/briquettes-70.png",
    specs: ["70mm Diameter", "Consistent Quality", "Easy Storage"]
  },
  {
    title: "Pellet Briquette",
    description: "Premium wood pellets available in multiple sizes for automated heating systems.",
    image: "/images/pellets.png",
    specs: ["6mm, 8mm, 10mm Sizes", "Low Moisture", "Uniform Shape"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HomeHero />
      <FeaturesStrip />

      {/* --- Products Summary --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-6 text-secondary italic">Our Bio-Fuel Range</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Precisely engineered biomass products optimized for thermal efficiency and environmental sustainability.
          </p>
        </div>
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productsSummary.map((product, idx) => (
            <ProductCard key={idx} product={product} index={idx} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="/products" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all">
            Explore All Products & Specs <span className="text-2xl">→</span>
          </a>
        </div>
      </section>

      {/* --- About Brief --- */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-8 text-slate-900 italic">Sustainable Power for India</h2>
            <div className="space-y-6 text-slate-800 text-lg leading-relaxed">
              <p>
                Based in <span className="text-[#15803d] font-bold">Tiruvannamalai, Tamil Nadu</span>,
                Dheepham Agro Fuels produces clean-burning fuel that helps industries reduce their carbon footprint.
              </p>
              <p>
                As a GST-registered enterprise, we provide guaranteed quality and consistent supply for our industrial partners.
              </p>
              <div className="pt-6">
                <a href="/about" className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-secondary transition-all shadow-xl shadow-emerald-100">
                  Our Story & Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-outfit font-extrabold mb-8 italic">Ready to Switch to Green Fuel?</h2>
          <p className="text-xl text-emerald-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today for bulk orders, pricing, and technical consultation. Let's build a greener future together.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all shadow-2xl">
              Get a Quote Now
            </a>
            <a href="tel:+919087383421" className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              Call +91 90873 83421
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
