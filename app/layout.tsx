// app/layout.tsx
import "@/style/globals.css";
import Navbar from "@/src/components/Navbar";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

/**
 * Na odkzu najdes info o metadatech jak s nimi pracovat a co nastavit
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL("http://localhost:3000"),
    title: "Nancy a tvorba",
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <Navbar />
        <div className={"container m-auto"}>{children}</div>
      </body>
    </html>
  );
}
