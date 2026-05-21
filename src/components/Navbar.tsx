"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "./Link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav className="w-full top-0 z-50 backdrop-blur-xl bg-[#f8f1e8]/85 border-[#e7d8c8] shadow-sm border-b">
      <div className="px-6 py-4 flex justify-between items-center relative">
        {/* LOGO */}
        <Link href="/" className="font-bold text-xl tracking-wide hover:text-[#2EC4B6]">
          Nancy a tvorba
        </Link>

        {/* SOCIALS (always visible) */}
        <div className="flex items-center gap-4 text-gray-600 md:absolute md:left-1/2 md:-translate-x-1/2">
          <a
            href="https://www.instagram.com/nancy_a_tvorba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.youtube.com/@nancykralova6492"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube size={20} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61560069083239"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook size={20} />
          </a>
        </div>

        {/* LINKS desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/about">O mně</Link>
          <Link href="/books">Knihy</Link>
          <Link href="/drawings">Kresby</Link>
          <Link href="/stories">Příběhy</Link>
        </div>

        {/* HAMBURGER */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* PARTIAL OVERLAY WHILE HAMBURGER MENU IS OPEN */}
      {open && (
        <div className="absolute top-full right-0 z-50">
          <div
            className="flex flex-col items-end gap-4 text-sm text-gray-800
                    bg-white/60 backdrop-blur-md
                    border border-white/40
                     px-6 py-4 shadow-lg"
          >
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-black transition"
            >
              O mně
            </Link>

            <Link
              href="/books"
              onClick={() => setOpen(false)}
              className="hover:text-black transition"
            >
              Knihy
            </Link>

            <Link
              href="/drawings"
              onClick={() => setOpen(false)}
              className="hover:text-black transition"
            >
              Kresby
            </Link>

            <Link
              href="/stories"
              onClick={() => setOpen(false)}
              className="hover:text-black transition"
            >
              Příběhy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
