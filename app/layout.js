import "./globals.css";

import { Copse } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import RegionProvider from "@/store/RegionContext";
import CookieBanner from "@/components/general/CookiesModal";
import GoogleAnalytics from "@/components/general/GoogleAnalytics";
import { getCookieConsent } from "@/actions/cookies";

const copse = Copse({
  variable: "--font-copse",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Eloquent Shelf",
  description:
    "Curated non-fiction for curious minds - a place to discover books and ideas that matter.",
  openGraph: {
    images: [
      {
        url: `/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Eloquent Shelf OG Image",
      },
    ],
  },
  metadataBase: new URL("https://www.eloquentshelf.com"),
  alternates: {
    canonical: "/",
  },
};

const RootLayout = async ({ children }) => {
  const consent = await getCookieConsent();

  return (
    <html lang="en">
      <body
        className={`${copse.variable} antialiased w-full text-black bg-white`}
      >
        <RegionProvider>
          <Header />
          <main className="relative px-4 py-8 max-w-[1200px] min-h-[calc(100vh-56px-147px)] mx-auto bg-white text-black">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </RegionProvider>
        <GoogleAnalytics consent={consent?.analytics} />
      </body>
    </html>
  );
};

export default RootLayout;
