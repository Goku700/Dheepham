'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const backgroundImages = [
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
];

export default function ContactPage() {
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

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
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold mb-6 italic">Partner With Us</h1>
                        <p className="text-xl text-emerald-50/90 leading-relaxed font-light">
                            Ready to optimize your industrial fuel consumption? Our team is standing by to provide technical consultation and bulk pricing.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 md:py-24 -mt-8 md:-mt-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 md:p-16 border border-slate-100 grid lg:grid-cols-2 gap-10 md:gap-16 relative overflow-hidden">

                        <div>
                            <h2 className="text-3xl font-outfit font-bold mb-10 text-secondary">Contact Information</h2>

                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="bg-emerald-50 p-5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Our Facility</h4>
                                        <a
                                            href="https://www.google.com/maps?q=Dheepham+Agro+Fuels+SIDCO+Industrial+Estate+Periyakolapadi+Tiruvannamalai"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 leading-relaxed hover:text-primary transition-colors block"
                                        >
                                            No.46, Sidco Industrial Estate,<br />
                                            Periyakolapadi, Tiruvannamalai,<br />
                                            Tamil Nadu - 606601
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-amber-50 p-5 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 italic">Direct Call</h4>
                                        <p className="text-slate-900 font-black text-2xl tracking-tighter shrink-0">+91 90873 83421</p>
                                        <p className="text-sm text-slate-400 mt-1">Mon-Sat, 9am to 7pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-blue-50 p-5 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Email Inquiry</h4>
                                        <p className="text-slate-600 text-lg">dheephamagrro@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-8 bg-slate-900 rounded-[2rem] text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <Clock className="text-primary w-6 h-6" />
                                    <h4 className="font-bold text-lg italic">Response Time</h4>
                                </div>
                                <p className="text-slate-400">We typically respond to all formal business inquiries within 24 hours.</p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
                            <h3 className="text-2xl font-outfit font-bold mb-8 text-secondary">Send a Quick Message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                        <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all shadow-sm" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                                        <input type="tel" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all shadow-sm" placeholder="+91 00000 00000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Email</label>
                                    <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all shadow-sm" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Industry Type</label>
                                    <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all shadow-sm appearance-none cursor-pointer">
                                        <option>Select Industry</option>
                                        <option>Manufacturing</option>
                                        <option>Power Generation</option>
                                        <option>Textile / Dyeing</option>
                                        <option>Food / Pharma</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all shadow-sm resize-none" placeholder="Tell us about your requirements..."></textarea>
                                </div>
                                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-secondary transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-2 group">
                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 h-[350px] md:h-[500px] bg-white p-2 md:p-4">
                        <iframe
                            src="https://www.google.com/maps?q=Dheepham+Agro+Fuels+SIDCO+Industrial+Estate+Periyakolapadi+Tiruvannamalai&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '2rem' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
