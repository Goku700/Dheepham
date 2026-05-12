'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Leaf } from 'lucide-react';
import Link from 'next/link';

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
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full group hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500"
    >
        <div className="relative h-64 md:h-72 overflow-hidden">
            <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm border border-emerald-50">
                <Leaf className="w-3.5 h-3.5" /> Eco-Energy
            </div>
        </div>

        <div className="p-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-outfit font-extrabold mb-4 group-hover:text-primary transition-colors duration-300">
                {product.title}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
                {product.description}
            </p>

            <div className="space-y-4 mb-8">
                {product.specs.map((spec: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {spec}
                    </div>
                ))}
            </div>

            <div className="mt-auto">
                <Link
                    href="/contact"
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-emerald-800 transition-all duration-300 shadow-lg shadow-slate-200"
                >
                    Check Price <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    </motion.div>
);

export default ProductCard;
