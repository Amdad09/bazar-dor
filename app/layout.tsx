import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

const hindSiliguri = Hind_Siliguri({
    subsets: ['latin', 'bengali'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-hind-siliguri',
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "অনলাইন শপ",
};

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
  return (
      <html
          lang="bn"
          data-theme="light"
          className={`${hindSiliguri.className} h-full antialiased`}
      >
          <body className="min-h-full flex flex-col font-sans">
              <Navbar />
              {children}
              <Toaster position="top-right" richColors />
              <Footer />
          </body>
      </html>
  );
}
