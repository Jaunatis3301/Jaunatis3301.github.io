"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const items = [
  ["Journal", "/journal"],
  ["Fragments", "/fragments"],
  ["About", "/about"],
];
export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <div className="md:hidden">
      <button
        className="focus-ring pressable relative z-10 flex h-11 w-11 items-center justify-center"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-0 origin-top-right bg-[var(--bg)] px-5 pb-10 pt-24 transition-[opacity,transform,visibility] duration-300 ${open ? "visible scale-100 opacity-100" : "pointer-events-none invisible scale-[.98] opacity-0"}`}
      >
        <nav className="border-y rule" aria-label="Mobile navigation">
          {items.map(([label, href]) => (
            <Link
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              key={label}
              href={href}
              className="focus-ring display block border-b rule py-5 text-4xl last:border-0"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
