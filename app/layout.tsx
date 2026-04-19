// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}