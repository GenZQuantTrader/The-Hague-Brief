"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/magazines", label: "Magazines" },
  { href: "/interviews", label: "Interviews" },
  { href: "/articles", label: "Articles" },
  { href: "/opinions", label: "Opinions" },
  { href: "/about", label: "Who We Are" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/90 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="inline-block h-3 w-3 rounded-full bg-emerald-700" />
          <span className="font-serif text-2xl font-extrabold tracking-tight text-black">
            The Hague Brief
          </span>
        </Link>

        {/* Right Side: Latest Issue + Options Menu */}
        <div className="relative flex items-center gap-3">
          <Link
            href="/magazines"
            className="hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:border-emerald-700 hover:text-emerald-700 sm:inline-block"
          >
            Latest Issue
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-emerald-700"
          >
            <span>Menu</span>
            <span className="text-sm leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>

          {/* Dropdown Options Menu */}
          {menuOpen && (
            <nav
              aria-label="Primary navigation"
              className="absolute right-0 top-13 w-60 rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl"
            >
              <p className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                Sections
              </p>
              <ul className="space-y-0.5">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                          isActive
                            ? "bg-emerald-50 font-semibold text-emerald-800"
                            : "text-neutral-700 hover:bg-neutral-100 hover:text-black"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-emerald-700" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}