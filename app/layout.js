import "./globals.css";

import { Copse } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const copse = Copse({
  variable: "--font-copse",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Eloquent Shelf",
  description: "Curated Non-Fiction for Curious Minds.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${copse.variable} antialiased w-full`}>
        <Header />
        <main className="relative px-4 py-8 max-w-[1200px] min-h-[calc(100vh-72px)] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
