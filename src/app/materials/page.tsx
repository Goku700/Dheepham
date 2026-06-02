import { Metadata } from 'next';
import MaterialsClient from './MaterialsClient';

export const metadata: Metadata = {
    title: "Raw Materials | Sustainable Sourcing | Dheepham Agro Fuels",
    description: "We use 100% organic agricultural waste including groundnut shells, sawdust, and coffee husks to produce high-density biomass fuel.",
    keywords: "Agro Waste, Groundnut Shells, Sawdust, Coffee Husk, Sustainable Sourcing, Biomass Ingredients"
};

export default function MaterialsPage() {
    return <MaterialsClient />;
}
