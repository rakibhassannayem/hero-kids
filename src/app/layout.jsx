import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: "../fonts/mayaboti-normal.ttf",
  // weight: ["100", "200", "400", "500", "600", "800"],
});

export const metadata = {
  metadataBase: new URL("https://hero-kids-rho.vercel.app"),

  title: {
    default: "hero kids & Costumes",
    template: "%s | hero kids",
  },

  description:
    "Educational toys, learning boards, flash cards, STEM toys & kids costumes. Safe, fun and creative learning for children.",

  keywords: [
    "hero kids",
    "educational toys",
    "STEM toys",
    "kids costumes",
    "preschool toys",
    "learning toys Bangladesh",
  ],

  authors: [{ name: "hero kids Team" }],
  creator: "hero kids",
  publisher: "hero kids",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "https://ibb.co.com/zTBDgMwc",
    apple: "https://ibb.co.com/zTBDgMwc",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "hero kids",
    title: "hero kids & Costumes",
    description:
      "Safe, educational & fun toys for kids. Learning boards, flash cards, STEM toys & costumes.",
    images: [
      {
        url: "https://ibb.co.com/gL1zwcSc",
        width: 1200,
        height: 630,
        alt: "hero kids Home Page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "hero kids & Costumes",
    description:
      "Educational toys, STEM learning & kids costumes for joyful learning.",
    images: ["https://ibb.co.com/gL1zwcSc"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>

        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100svh-303px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
