"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Trucks", href: "/trucks" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Top info bar ── */}
      <div className="hidden md:block bg-accent border-b border-border text-foreground text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-muted">
              <MapPin size={14} />
              5200 Suwannee St, El Paso, TX 79938
            </span>
            <span className="flex items-center gap-1.5 text-muted">
              <Clock size={14} />
              Mon–Sat 8:00–18:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+19152533976" className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors">
              <Phone size={14} />
              (915) 253-3976
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navigation bar ── */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              HEGA<span className="text-muted font-normal"> TRUCK SALES</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-foreground border-b border-foreground pb-1"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-black hover:bg-primary-dark transition-colors"
            >
              Request a Call
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-accent px-6 pb-4">
            <ul className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm font-medium transition-colors py-1 ${
                      isActive(link.href)
                        ? "text-foreground font-bold"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-primary-dark transition-colors"
                >
                  Request a Call
                </Link>
              </li>
            </ul>

            {/* Mobile contact info */}
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted border-t border-border pt-4">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                5200 Suwannee St, El Paso, TX 79938
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                Mon–Sat 8:00–18:00
              </span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
