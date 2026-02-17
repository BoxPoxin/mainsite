import type { Metadata } from "next";
import { Poppins, Space_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import LayoutWrapper from "@/components/LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-main",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "BoxPox — Pro · Labs · Maker",
  description: "BoxPox: Three studios, one vision. Pro for B2B engineering & PCB design. Labs for consumer robotics & AI tech. Maker for custom 3D printing & gifts.",
  keywords: ["robotics", "PCB design", "3D printing", "consumer electronics", "robotic arm", "smart glasses", "AI", "BoxBot", "Wocals", "BoxPox", "custom gifts", "bulk orders"],
  icons: {
    icon: "/logo.png?v=2026",
    shortcut: "/logo.png?v=2026",
    apple: "/logo.png?v=2026",
  },
  appleWebApp: {
    title: "BoxPox",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "BoxPox — Pro · Labs · Maker",
    description: "Three studios under one roof. Engineering, consumer tech, and custom 3D printing. Built in India.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${spaceMono.variable} ${orbitron.variable} font-sans cursor-default`}>
        <CartProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
