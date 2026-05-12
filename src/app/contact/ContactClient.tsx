'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-6 italic">Partner With Us</h1>
                        <p className="text-xl text-emerald-50 leading-relaxed font-light">
                            Ready to optimize your industrial fuel consumption? Our team is standing by to provide technical consultation and bulk pricing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 -mt-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-slate-100 grid lg:grid-cols-2 gap-16 relative overflow-hidden">

                        <div>
                            <h2 className="text-3xl font-outfit font-bold mb-10 text-secondary">Contact Information</h2>

                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="bg-emerald-50 p-5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Our Facility</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            No.46, Sidco Industrial Estate,<br />
                                            Periyakolapadi, Tiruvannamalai,<br />
                                            Tamil Nadu - 606601
                                        </p>
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

            <Footer />
        </main>
    );
}
