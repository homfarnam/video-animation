import { Header } from "@/components/layout/Layout";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const SourceSansFont = Source_Sans_3({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bronkhorst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SourceSansFont.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
