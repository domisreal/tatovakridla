"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b relative z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="font-bold tracking-wide">
          Nancy a tvorba
        </Link>

        {/* SOCIALS (always visible) */}
        <div className="flex items-center gap-4 text-gray-600">
          <FaInstagram size={18} className="cursor-pointer" />
          <FaYoutube size={18} className="cursor-pointer" />
          <FaFacebook size={18} className="cursor-pointer" />
        </div>

        {/* LINKS desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/about">O mně</Link>
          <Link href="/books">Knihy</Link>
          <Link href="/drawings">Kresby</Link>
        </div>

        {/* HAMBURGER */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* PARTIAL OVERLAY (ONLY HERO AREA FEEL) */}
      {open && (
        <div className="absolute right-6 top-full z-40 mt-2">
          <div className="shadow-lg rounded-lg p-4">
            <div className="flex flex-col gap-4 text-sm text-center">
              <Link href="/about" onClick={() => setOpen(false)}>
                O mně
              </Link>

              <Link href="/books" onClick={() => setOpen(false)}>
                Knihy
              </Link>

              <Link href="/drawings" onClick={() => setOpen(false)}>
                Kresby
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
