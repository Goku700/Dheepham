import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import HomeHero from '@/components/HomeHero';
import FeaturesStrip from '@/components/FeaturesStrip';
import ClientsSection from '@/components/ClientsSection';
import LoadingScreen from '@/components/LoadingScreen';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dheepham Agro Fuels | Leading Biomass Briquettes & Pellets Manufacturer",
  description: "Dheepham Agro Fuels produces high-quality biomass briquettes (90mm, 70mm) and pellets in Tamil Nadu. Specialized in high calorific value white coal for industrial boilers and furnaces.",
  keywords: "Biomass Briquettes Tamil Nadu, Bio Pellets Chennai, White Coal Manufacturer Coimbatore, Industrial Boiler Fuel, Agro Waste Energy, High Calorific Value Briquettes, Sustainable Fuel Tiruvannamalai"
};

const productsSummary = [
  {
    title: "Bio Mass Briquette 90MM",
    description: "Industrial-grade 90mm diameter briquettes engineered for high-capacity boilers and thermal efficiency.",
    image: "/images/briquettes-90.png",
    specs: ["Max Thermal Density", "4200+ Kcal/Kg", "Low Ash (< 5%)"]
  },
  {
    title: "Briquette 70MM",
    description: "Versatile 70mm biomass briquettes offering a balanced burn rate for diverse industrial furnaces.",
    image: "/images/briquettes-70.png",
    specs: ["Balanced Burn", "Multi-purpose Use", "Consistent Quality"]
  },
  {
    title: "Bio Pellets (6mm-10mm)",
    description: "Premium wood pellets optimized for automated feeding systems with ultra-low moisture content.",
    image: "/images/pellets.png",
    specs: ["Screw-Feed Ready", "Low Moisture (< 8%)", "Uniform Combustion"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <LoadingScreen />
      <Navbar />
      <HomeHero />
      <FeaturesStrip />
      <ClientsSection />

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
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-8 text-slate-900 italic">Engineering a Greener India</h2>
            <div className="space-y-6 text-slate-800 text-lg leading-relaxed">
              <p>
                Led by advanced engineering principles and headquartered in <span className="text-[#15803d] font-bold">Tiruvannamalai, Tamil Nadu</span>,
                Dheepham Agro Fuels is more than just a manufacturer. We are tech-driven energy partners specializing in high-calorific biomass solutions.
              </p>

              <div className="pt-8">
                <a href="/about" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:bg-secondary transition-all shadow-xl shadow-emerald-100 hover:scale-105 inline-block">
                  Discover Our Vision
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
            Contact us today for bulk orders, pricing, and technical consultation. Let&apos;s build a greener future together.
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
