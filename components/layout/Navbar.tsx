"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Button from "../ui/Button";
import { primaryNav, isDropdown } from "@/lib/nav-data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif-heading text-[22px] sm:text-[24px] tracking-tight text-ink">
            Maya Reynolds<span className="font-light">, PsyD</span>
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-ink-soft mt-1">
            Licensed Clinical Psychologist • Santa Monica
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {primaryNav.map((item) =>
            isDropdown(item) ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link text-sm font-medium text-ink-soft hover:text-ink transition-colors py-2 flex items-center gap-1"
                >
                  {item.label}
                  <span className="text-[10px] opacity-60">▼</span>
                </Link>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1 w-60">
                    <ul className="bg-cream shadow-xl rounded-md border border-line py-2">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-xs font-medium text-ink-soft hover:bg-sand hover:text-ink transition-colors"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Button href="#contact" className="!px-5 !py-2 text-xs">
            Get in Touch
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-cream">
          <Container className="py-4 flex flex-col gap-1">
            {primaryNav.map((item) =>
              isDropdown(item) ? (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between py-2.5 text-sm font-medium text-ink cursor-pointer list-none">
                    {item.label}
                    <span className="text-ink-soft group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <ul className="pl-4 pb-2">
                    {item.items.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block py-2 text-sm text-ink-soft"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-2.5 text-sm font-medium text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Button href="#contact" className="mt-3 w-full">
              Get in Touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
