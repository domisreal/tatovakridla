// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 border-b">
      
      {/* LOGO / BRAND */}
      <Link href="/" className="font-bold tracking-wide">
        Nancy a tvorba
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-4 text-sm">
        <Link href="/about">O mně</Link>
        <Link href="/books">Knihy</Link>
        <Link href="/drawings">Kresby</Link>
      </div>
    </nav>
  );
}