import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi, I'm Kush Chaudhary.",
  description: "Full-stack engineer from India",
  icons: {
    icon: "/logo.png",
  },
};

const satoshi = localFont({
  src: "../../public/fonts/SatoshiVariable.woff2",
  variable: "--font-satoshi",
  weight: "300 600",
}); 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-stone-950 font-satoshi h-full text-stone-50 py-10 px-4 selection:bg-stone-500 selection:text-stone-950 selection:rounded-md">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
