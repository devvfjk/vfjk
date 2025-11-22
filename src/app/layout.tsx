import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Voices for Justice in Kashmir",
    template: "%s | Voices for Justice in Kashmir",
  },
  description:
    "Voices for Justice in Kashmir (VJK) is a U.S.-based non-profit organization advocating for the fundamental human and political rights of the Kashmiri people, including their right to self-determination.",
  keywords: [
    "Kashmir",
    "human rights",
    "self-determination",
    "Voices for Justice in Kashmir",
    "VJK",
    "advocacy",
    "Kashmir conflict",
    "international law",
  ],
  authors: [{ name: "Voices for Justice in Kashmir" }],
  creator: "Voices for Justice in Kashmir",
  publisher: "Voices for Justice in Kashmir",
  metadataBase: new URL("https://voicesforjusticeinkashmir.org"),
  alternates: {
    canonical: "https://voicesforjusticeinkashmir.org",
  },
  openGraph: {
    title: "Voices for Justice in Kashmir",
    description:
      "Promoting justice, peace, and self-determination for the people of Jammu & Kashmir.",
    url: "https://voicesforjusticeinkashmir.org",
    siteName: "Voices for Justice in Kashmir",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://voicesforjusticeinkashmir.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Voices for Justice in Kashmir - Logo and tagline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voices for Justice in Kashmir",
    description: "Right to Self-Determination — A Global Call for Justice.",
    creator: "@vjkinternational",
    images: ["https://voicesforjusticeinkashmir.org/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-yellow-500 font-sans text-white scroll-smooth">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
