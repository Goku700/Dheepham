import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
  title: "Dheepham Agro Fuels | Sustainable Bio-Energy Solutions",
  description: "High-quality biomass briquettes and pellets for a greener future. Professional industrial fuel supplier in Tamil Nadu.",
  keywords: "Biomass Briquettes, Bio Pellets, Sustainable Fuel, Dheepham Agro Fuels, Tamil Nadu Biofuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
