import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "Churza | Church Management for the Diaspora",
    template: "%s | Churza"
  },
  description: "The all-in-one platform for African Pentecostal churches in the diaspora. Giving, attendance, cell groups, and more.",
  metadataBase: new URL('https://churza.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-body selection:bg-gold/30">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}