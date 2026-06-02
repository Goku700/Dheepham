'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <div className="relative w-10 h-10">
                                <Image src="/favicon.png" alt="Logo" fill className="object-contain" />
                            </div>
                            <span className="text-2xl font-bold font-outfit uppercase tracking-tighter text-white">
                                Dheepham <span className="text-primary italic">Agro Fuels</span>
                            </span>
                        </Link>
                        <p className="mb-8 leading-relaxed text-slate-400">
                            Transforming agricultural waste into high-efficiency energy. We provide sustainable biomass solutions for a cleaner industrial tomorrow.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Products', href: '/products' },
                                { name: 'Raw Materials', href: '/materials' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Contact', href: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="bg-slate-800 p-3 rounded-xl text-primary shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <a
                                    href="https://www.google.com/maps?q=Dheepham+Agro+Fuels+SIDCO+Industrial+Estate+Periyakolapadi+Tiruvannamalai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:text-primary transition-colors"
                                >
                                    No.46, Sidco Industrial Estate, Periyakolapadi, Tiruvannamalai, TN
                                </a>
                            </li>
                            <li className="flex gap-4 italic font-bold text-white tracking-widest ">
                                <div className="bg-slate-800 p-3 rounded-xl text-primary shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span>+91 90873 83421</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-slate-800 p-3 rounded-xl text-primary shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="break-all">dheephamagrro@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Compliance */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Certification
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">GST Number</p>
                            <p className="text-white font-mono font-bold text-lg">33ATTPT2333F1ZJ</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {['ISO Certified', 'MSME', 'Green Energy'].map((tag) => (
                                    <span key={tag} className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-md font-bold uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">© 2026 Dheepham Agro Fuels. All Rights Reserved.</p>
                    <div className="flex gap-8 text-sm">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
