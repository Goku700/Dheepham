'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  TreePine,
  Flame,
  Settings,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Factory,
  Leaf
} from 'lucide-react';

// --- Data ---
const products = [
  {
    title: "Bio Mass Briquette 90MM",
    description: "High-density cylindrical briquettes with 90mm diameter, perfect for industrial boilers and large-scale heating applications.",
    image: "/images/briquettes-90.png",
    specs: ["90mm Diameter", "High Calorific Value", "Low Ash Content"]
  },
  {
    title: "Briquette 70MM",
    description: "Multi-purpose 70mm diameter briquettes offering balanced burning rates for various industrial and commercial furnaces.",
    image: "/images/briquettes-70.png",
    specs: ["70mm Diameter", "Consistent Quality", "Easy Storage"]
  },
  {
    title: "Pellet Briquette",
    description: "Premium wood pellets available in multiple sizes for automated heating systems and specialized biomass burners.",
    image: "/images/pellets.png",
    specs: ["6mm, 8mm, 10mm Sizes", "Low Moisture", "Uniform Shape"]
  }
];

const rawMaterials = [
  "Groundnut shell", "Sawdust", "Woodchips", "Coffee husk",
  "Palm shell", "Cashew shell cake", "Wood bark", "Rice husk",
  "Wheat husk", "Juliflora wood chips", "Coal"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <TreePine className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-outfit uppercase tracking-tighter text-secondary">
            Dheepham <span className="text-primary">Agro Fuels</span>
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#materials" className="hover:text-primary transition-colors">Materials</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-secondary transition-all">Contact Us</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#materials" onClick={() => setIsOpen(false)}>Materials</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="text-primary font-bold" onClick={() => setIsOpen(false)}>Contact Us</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-6">
          <Flame className="w-4 h-4" /> Eco-Friendly Energy Solutions
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-outfit font-extrabold leading-tight mb-6">
          Sustainable Fuel for a <span className="text-gradient">Greener Future</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-lg">
          Leading manufacturer of high-quality biomass briquettes and pellets.
          Efficient, carbon-neutral, and cost-effective energy for modern industries.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#products" className="bg-primary text-black px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all scale-hover shadow-lg shadow-emerald-200">
            View Our Range
          </a>
          <a href="#contact" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all">
            Get a Quote
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero.png"
            alt="Biomass Briquettes"
            width={800}
            height={600}
            className="w-full h-auto object-cover transform hover:scale-105 transition-duration-500"
          />
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30 -z-0"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-30 -z-0"></div>
      </motion.div>
    </div>
  </section>
);

interface Product {
  title: string;
  description: string;
  image: string;
  specs: string[];
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full group"
  >
    <div className="relative h-64 overflow-hidden">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
        <Leaf className="w-3 h-3" /> Premium Quality
      </div>
    </div>
    <div className="p-8 flex-grow">
      <h3 className="text-2xl font-outfit font-bold mb-4 group-hover:text-primary transition-colors">{product.title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        {product.description}
      </p>
      <ul className="space-y-3">
        {product.specs.map((spec: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-primary" /> {spec}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 pt-0 mt-auto">
      <button className="w-full border border-slate-200 py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
        Inquiry Now <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* --- Features Strip --- */}
      <section className="bg-emerald-50 py-12 relative overflow-hidden border-y border-emerald-100">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center relative z-10 text-primary">
          <div className="flex items-center gap-4">
            <Leaf className="w-10 h-10 shrink-0" />
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Efficiency</p>
              <p className="text-lg font-bold">100% Eco-Friendly</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:border-l sm:border-emerald-200 sm:pl-8">
            <Flame className="w-10 h-10 shrink-0" />
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Energy</p>
              <p className="text-lg font-bold">High Calorific Value</p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:border-l lg:border-emerald-200 lg:pl-8">
            <Settings className="w-10 h-10 shrink-0" />
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Process</p>
              <p className="text-lg font-bold">State-of-art Facility</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:border-l sm:border-emerald-200 sm:pl-8 lg:border-l lg:border-emerald-200 lg:pl-8">
            <CheckCircle2 className="w-10 h-10 shrink-0" />
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Trust</p>
              <p className="text-lg font-bold">GST Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Products --- */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Our Bio-Fuel Range</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Precisely engineered biomass products optimized for thermal efficiency and environmental sustainability.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} index={idx} />
          ))}
        </div>
      </section>

      {/* --- Raw Materials --- */}
      <section id="materials" className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/materials.png"
                alt="Raw Materials"
                width={700}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <div>
              <h2 className="text-4xl font-outfit font-bold mb-6">Premium Raw Materials</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We source the finest agricultural by-products and biomass waste from across the region.
                Our strict quality control ensures every batch meets international standards for moisture and purity.
              </p>
              <div className="flex flex-wrap gap-2">
                {rawMaterials.map((material, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-emerald-50 text-secondary px-4 py-2 rounded-lg text-sm font-bold border border-emerald-100 hover:bg-primary hover:text-secondary transition-colors cursor-default"
                  >
                    {material}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 bg-secondary text-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
              <Factory className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-8">Pioneering Sustainable Industry</h2>
            <div className="space-y-6 text-black text-lg leading-relaxed text-center">
              <p>
                Based in <span className="text-primary font-bold underline decoration-primary underline-offset-4">Tiruvannamalai, Tamil Nadu</span>,
                Dheepham Agro Fuels is committed to bridging the gap between agricultural abundance and industrial energy needs.
              </p>
              <p>
                As a GST-registered enterprise, we pride ourselves on transparency, quality, and environmental stewardship.
                Our mission is to help industries transition from coal to carbon-neutral alternatives without compromising on thermal power.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-emerald-500 to-primary opacity-30"></div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-slate-100 grid md:grid-cols-2 gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-0 hidden md:block"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-outfit font-bold mb-8">Get In Touch</h2>
              <p className="text-slate-600 mb-10">
                Ready to optimize your fuel consumption? Contact our experts for bulk pricing and technical specifications.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-emerald-100 p-4 rounded-2xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Facility</h4>
                    <p className="text-slate-600">No.46, Sidco Industrial Estate,<br />Periyakolapadi, Tiruvannamalai, TN</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-slate-600 font-medium text-xl">+91 90873 83421</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-slate-600">dheephamagrro@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">GST Identification</span>
                <span className="text-xl font-mono font-bold text-secondary">33ATTPT2333F1ZJ</span>
              </div>
            </div>

            <div className="relative z-10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Industry Type</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors appearance-none">
                    <option>Select Industry</option>
                    <option>Manufacturing</option>
                    <option>Power Generation</option>
                    <option>Textiles</option>
                    <option>Food Processing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:bg-secondary transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <TreePine className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-outfit uppercase tracking-tighter text-white">
                Dheepham <span className="text-primary">Agro Fuels</span>
              </span>
            </div>
            <p className="max-w-sm mb-6">
              Powering the next generation of industry with sustainable, renewable, and clean bio-energy solutions.
              Join the movement towards a net-zero future.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#materials" className="hover:text-primary transition-colors">Raw Materials</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Compliance</h4>
            <ul className="space-y-4 text-sm">
              <li>GST Registerd</li>
              <li>ISO Standards</li>
              <li>Pollution Board Approved</li>
              <li>Sustainable Sourcing</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© 2026 Dheepham Agro Fuels. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
