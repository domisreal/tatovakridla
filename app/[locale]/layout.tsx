import "@/style/globals.css";
import Navbar from "@/src/components/Navbar";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Footer from "@/src/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const siteName = t("siteName");

  return {
    metadataBase: new URL("http://www.nancytvorba.cz"),

    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },

    description: t("siteDescription"),

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
      "Nancy a tvorba",
      "Nancy's creations",
      "Nancy tvorba",
    ],

    openGraph: {
      title: siteName,
      description: t("siteDescription"),
      url: "http://www.nancytvorba.cz",
      siteName,
      images: [
        {
          url: "images/nancy_creation.jpg",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
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
}

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
