import { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
    title: "Products | Dheepham Agro Fuels - Briquettes & Pellets",
    description: "Explore our range of high-density biomass briquettes (90mm, 70mm) and premium bio pellets. Technical specifications and custom sizes available.",
    keywords: "90mm Briquettes, 70mm Briquettes, Wood Pellets, Bio Pellets, Calorific Value, Industrial Fuel Tamil Nadu"
};

export default function ProductsPage() {
    return <ProductsClient />;
}
