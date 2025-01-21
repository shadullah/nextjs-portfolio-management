import type { Metadata } from "next";
import { Rubik, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar/Navbar";
import Footer from "@/component/shared/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio management",
  description: "A next-nestjs project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${syne.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
