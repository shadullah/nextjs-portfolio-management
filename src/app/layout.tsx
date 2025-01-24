import type { Metadata } from "next";
import { Inter, Open_Sans, Rubik, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar/Navbar";
import Footer from "@/component/shared/Footer/Footer";
import { AuthProvider } from "@/context/Authcontext";
import { Toaster } from "react-hot-toast";

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
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const opensans = Open_Sans({
  variable: "--font-open",
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
      <body
        className={`${rubik.variable} ${opensans.variable} ${inter.variable} ${syne.variable} antialiased`}
      >
        <AuthProvider>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
