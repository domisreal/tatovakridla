import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import NavLink from "@/src/components/NavLink";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#d8c2aa] bg-[#f8f1e8]">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-bold mb-3">Nancy a tvorba</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Kreativní koutek s přehledem kreseb, knih a příběhů.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigace</h3>

          <div className="flex flex-col gap-2">
            <NavLink href="/about">O mně</NavLink>
            <NavLink href="/books">Knihy</NavLink>
            <NavLink href="/drawings">Kresby</NavLink>
            <NavLink href="/stories">Příběhy</NavLink>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kontakt</h3>

          <p className="text-sm text-gray-600 mb-4">nancy.kralova@gmail.cz</p>

          <div className="flex gap-4 text-gray-600">
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
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#d8c2aa] py-4 text-center text-sm text-gray-500">
        Copyright © 2026 Nancy a tvorba | Vytvořil s ❤️ Dominik Král
      </div>
    </footer>
  );
}
