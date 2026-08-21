import type { Metadata } from "next";
import { Mulish, Chivo, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "AMP by Inquiryon | Control for AI Agent Autonomy",
    template: "%s | Inquiryon",
  },
  description:
    "AMP is the control layer for AI agent autonomy: policy enforcement, human oversight, auditability, escalation, and progressive autonomy after deployment.",
  keywords: [
    "AI agent governance platform",
    "AI agent control layer",
    "post-launch governance",
    "AI agent oversight",
    "progressive autonomy",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "AMP by Inquiryon | Control for AI Agent Autonomy",
    description: "Policy enforcement, human oversight, and progressive autonomy for AI agents in production.",
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
