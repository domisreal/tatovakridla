"use client";

import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function NavLink({ href, children, className, onClick }: Props) {
  const pathname = usePathname();

  const cleanPath = pathname.replace(/^\/(cs|en)/, "") || "/";
  const isActive = cleanPath === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "text-xl tracking-wide transition-colors duration-300 hover:text-[#2EC4B6]",
        isActive ? "text-[#2EC4B6]" : "text-slate-700",
        className,
      )}
    >
      {children}
    </Link>
  );
}
