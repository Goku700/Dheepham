'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
    const phoneNumber = "919087383421"; // Including country code for India
    const message = "Hello! I am interested in your biomass products. Could you please provide more information?";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center gap-3 overflow-hidden"
            aria-label="Contact on WhatsApp"
        >
            <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <MessageCircle className="w-8 h-8 relative z-10" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold relative z-10">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppWidget;
