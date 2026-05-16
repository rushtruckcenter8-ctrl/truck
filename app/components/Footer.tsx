import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Trucks", href: "/trucks" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-accent border-t border-border text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Logo & tagline */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-foreground">
                HEGA<span className="text-muted font-normal"> TRUCK SALES</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Quality pre-owned trucks at honest prices. Serving El Paso and the Southwest since day one.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact info */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:+19152533976" className="hover:text-foreground transition-colors">
                  (915) 253-3976
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:contact@hegatrucksales.com" className="hover:text-foreground transition-colors">
                  contact@hegatrucksales.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                5200 Suwannee St, El Paso, TX 79938
              </li>
            </ul>
          </div>

          {/* Column 4 — Socials */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Hega Truck Sales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
