import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Dheepham Agro Fuels | Leading Biomass Briquettes & Pellets Manufacturer TN",
    template: "%s | Dheepham Agro Fuels"
  },
  description: "Dheepham Agro Fuels is a premier manufacturer of high-calorific biomass briquettes and pellets in Tamil Nadu. Providing carbon-neutral, eco-friendly industrial energy solutions.",
  keywords: "Biomass Briquettes Manufacturer Tamil Nadu, Bio Pellets Suppliers India, White Coal Manufacturers, High Calorific Value Biofuel, Agro Waste Briquettes, Industrial Boiler Fuel, Renewable Energy Tiruvannamalai, Dheepham Agro Fuels",
  authors: [{ name: "Dheepham Agro Fuels" }],
  creator: "Dheepham Agro Fuels",
  publisher: "Dheepham Agro Fuels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Dheepham Agro Fuels | Sustainable Bio-Energy Solutions",
    description: "Premium manufacturer of biomass briquettes and pellets. Scaling industrial sustainability through high-efficiency green fuel.",
    url: 'https://dheephamagrofuels.com',
    siteName: 'Dheepham Agro Fuels',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <WhatsAppWidget />
        {children}
      </body>
    </html>
  );
}
