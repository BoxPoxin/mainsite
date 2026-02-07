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
  title: "BoxPox — Robotics & Consumer Electronics",
  description: "Consumer robotics and AI-powered electronics. BoxBot - 6DOF robotic arm. Wocals - AI smart glasses. Building the future of human-machine interaction.",
  keywords: ["robotics", "consumer electronics", "robotic arm", "smart glasses", "AI", "BoxBot", "Wocals", "BoxPox"],
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
    title: "BoxPox — Robotics & Consumer Electronics",
    description: "Consumer robotics and AI-powered electronics designed to seamlessly integrate into your world.",
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
