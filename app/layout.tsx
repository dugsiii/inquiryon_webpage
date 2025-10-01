import type { Metadata } from "next";
import { Mulish, Chivo, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Inquiryon",
    template: "%s | Inquiryon",
  },
  description:
    "AI that earns your trust.",
  keywords: [
    "AI intent refinement",
    "LLM",
    "smart prompt",
    "customer support AI",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Inquiryon",
    description: "AI that earns your trust.",
    images: "/opengraph-image.png",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const chivo = Chivo({
  variable: "--font-header",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
});

// just for the logo
const rajdhani = Rajdhani({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "600",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${rajdhani.variable} ${chivo.variable} antialiased`}
      >
        {/* slap Google Analytics here */}
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
