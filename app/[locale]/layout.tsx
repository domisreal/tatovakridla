// app/layout.tsx
import "@/style/globals.css";
import Navbar from "@/src/components/Navbar";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Footer from "@/src/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://www.nancytvorba.cz"),

  title: {
    default: "Nancy a tvorba",
    template: "%s | Nancy a tvorba",
  },

  description: "Nancy kreativní koutek s přehledem kreseb, knih a příběhů.",

  keywords: [
    "ilustrace",
    "kresby",
    "knihy",
    "příběhy",
    "portfolio",
    "umění",
    "Nancy",
    "NancyKralova",
    "Nancy Králová",
  ],

  openGraph: {
    title: "Nancy a tvorba",
    description: "Kreativní portfolio ilustrací, knih a příběhů Nancy.",
    url: "http://www.nancytvorba.cz",
    siteName: "Nancy a tvorba",
    images: [
      {
        url: "images/nancy_creation.jpg",
        width: 1200,
        height: 630,
        alt: "Nancy a tvorba - portfolio",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();

  return (
    <html lang="cs">
      <body className={`${inter.className} ${cormorant.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="container m-auto">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
