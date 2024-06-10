import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const supplyMono = localFont({
  variable: "--font-supply",
  display: "swap",
  fallback: ["Inter", "sans-serif"],
  src: [
    {
      path: "../../public/fonts/PPSupplyMono-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPSupplyMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPSupplyMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPSupplyMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

export const metadata: Metadata = {
  title: "WTF-TECH - S01",
  description: "WTF-TECH by Karbon Kore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.variable} ${supplyMono.variable}`}>{children}</body>
    </html>
  );
}
