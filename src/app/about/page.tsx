import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "About Us | Dheepham Agro Fuels - Our Mission",
    description: "Learn about Dheepham Agro Fuels, based in Tiruvannamalai. We are committed to pioneering sustainable industry through carbon-neutral biomass fuels.",
    keywords: "About Dheepham Agro, Tiruvannamalai Industry, Biofuel Manufacturer, Sustainable Energy India"
};

export default function AboutPage() {
    return <AboutClient />;
}
