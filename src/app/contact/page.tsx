import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact Us | Bulk Orders & Inquiries | Dheepham Agro",
    description: "Get in touch with Dheepham Agro Fuels for bulk pricing, technical specifications, and fuel transition consultation. Located in Tiruvannamalai, Tamil Nadu.",
    keywords: "Contact Biofuel Supplier, Bulk Briquettes, Pellet Inquiry, Dheepham Agro Phone, Buy Biomass Tamil Nadu"
};

export default function ContactPage() {
    return <ContactClient />;
}
