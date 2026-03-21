import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Positorial - Money, Health & Personal Growth",
    template: "%s | Positorial",
  },
  description:
    "Your guide to financial freedom, optimal health, and personal development for the new age. Practical insights and actionable advice to transform your life.",
  keywords: [
    "personal finance",
    "health",
    "personal development",
    "financial freedom",
    "wellness",
    "self improvement",
    "money management",
  ],
  openGraph: {
    title: "Positorial - Money, Health & Personal Growth",
    description:
      "Your guide to financial freedom, optimal health, and personal development for the new age.",
    type: "website",
    locale: "en_US",
    siteName: "Positorial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Positorial",
    description:
      "Your guide to financial freedom, optimal health, and personal development for the new age.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
