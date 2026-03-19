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
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Logo & tagline */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight">
                RUSH<span className="text-blue-400">TRUCK</span>
              </span>
              <span className="ml-2 text-xs leading-tight text-slate-400">
                CENTER
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Your trusted partner for quality used trucks. Freightliner, Volvo,
              and more — all in one place.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contacts
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>
                  <a href="tel:+41791234567" className="hover:text-white transition-colors">
                    +41 79 123 45 67
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:contact@rushtruckcentersales.com" className="hover:text-white transition-colors">
                  contact@rushtruckcentersales.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                12253 Gateway Blvd W, El Paso, TX 79936
              </li>
            </ul>
          </div>

          {/* Column 4 — Socials */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 p-2.5 text-slate-400 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 p-2.5 text-slate-400 hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Rush Truck Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
