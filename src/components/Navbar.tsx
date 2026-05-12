'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Materials', href: '/materials' },
        { name: 'About', href: '/about' },
    ];

    const isSticky = scrolled || pathname !== '/';

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isSticky
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform duration-300">
                        <Image
                            src="/favicon.png"
                            alt="Dheepham Agro Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-outfit font-extrabold uppercase tracking-tighter text-slate-900">
                        Dheepham <span className="text-primary italic">Agro</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-semibold hover:text-primary transition-colors relative group ${pathname === link.href ? 'text-primary' : 'text-slate-700'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''
                                }`}></span>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-emerald-800 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-100 flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" /> Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-secondary hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl p-8 md:hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex items-center gap-2">
                                    <div className="relative w-8 h-8">
                                        <Image src="/favicon.png" alt="Logo" fill className="object-contain" />
                                    </div>
                                    <span className="font-outfit font-bold text-slate-900">Dheepham Agro</span>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
                                    <X className="w-6 h-6 text-slate-500" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-2xl font-bold font-outfit ${pathname === link.href ? 'text-primary' : 'text-slate-800'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-xl shadow-emerald-100"
                                >
                                    Get in Touch
                                </Link>
                            </div>

                            <div className="mt-auto pt-10 border-t border-slate-100">
                                <p className="text-sm text-slate-400 mb-4 font-medium uppercase tracking-widest">Connect with us</p>
                                <div className="text-secondary font-bold">+91 90873 83421</div>
                                <div className="text-slate-500 text-sm">dheephamagrro@gmail.com</div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
