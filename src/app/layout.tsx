import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WTF-TECH - S01",
  description: "WTF-TECH by Karbon Kore",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://tech.karbon.wtf/s01",
    title: "WTF-TECH S01",
    description: "WTF TECH S01 by Karbon Kore",
    images: [
      {
        url: "https://tech.karbon.wtf/s01/wtf-tech-og.png",
        width: 800,
        height: 400,
        alt: "WTF TECH S01 by Karbon Kore",
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
