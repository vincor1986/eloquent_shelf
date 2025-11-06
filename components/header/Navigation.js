"use client";

import Link from "next/link";

import navigationLinks from "@/data/navigationLinks";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentUrl = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigationLinks.map((link) => {
        const active = currentUrl.startsWith(link.href);

        return (
          <Link key={link.title} href={link.href}>
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded transition-colors duration-300 cursor-pointer ${active ? "bg-primary text-white pointer-events-none cursor-pointer" : "hover:bg-secondary hover:text-white text-primary"}`}
            >
              <link.icon />
              {link.title}
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
