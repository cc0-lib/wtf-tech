import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WTF-TECH - S01",
  description: "WTF-TECH by Karbon Kore",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://tech.karbonko.re",
    title: "Karbon Kore - WTF-TECH - S01",
    description: "WTF-TECH Hackathon by Karbon Kore",
    images: [
      {
        url: "http://localhost:3000/og.png",
        width: 800,
        height: 400,
        alt: "CC0-LIB Community Voting",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
    </html>
  );
}
