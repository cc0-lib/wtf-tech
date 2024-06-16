import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-primary">{children}</body>
    </html>
  );
}
