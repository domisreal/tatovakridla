// app/layout.tsx
import "@/style/globals.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

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
