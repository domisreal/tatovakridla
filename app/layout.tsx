// app/layout.tsx
import "@/style/globals.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { Metadata } from "next";

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
      <body className="bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
