import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import LocationMap from "../components/LocationMap";

export const metadata: Metadata = {
  title: "Contact Us — Hega Truck Sales",
  description:
    "Get in touch with Hega Truck Sales. Call us or send us a message — we're here to help with all your truck needs.",
};

const contactDetails = [
  {
    icon: <Phone size={20} />,
    label: "Phone",
    lines: ["(915) 253-3976"],
    hrefs: ["tel:+19152533976"],
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    lines: ["contact@hegatrucksales.com"],
    hrefs: ["mailto:contact@hegatrucksales.com"],
  },
  {
    icon: <MapPin size={20} />,
    label: "Address",
    lines: ["5200 Suwannee St", "El Paso, TX 79938"],
    hrefs: [],
  },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    lines: ["Mon – Fri: 8:00 – 18:00", "Saturday: 9:00 – 15:00", "Sunday: Closed"],
    hrefs: [],
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ── Hero banner ── */}
        <section className="bg-accent border-b border-border py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Have a question or ready to buy? Reach out — we&apos;d love to hear
            from you.
          </p>
        </section>

        {/* ── Two-column: Form + Info ── */}
        <section className="bg-background section-padding">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left — Form */}
              <div data-aos="fade-right" data-aos-once="true">
                <h2 className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 mb-8 text-muted">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm expanded />
              </div>

              {/* Right — Contact details */}
              <div data-aos="fade-left" data-aos-once="true">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="mt-2 mb-8 text-muted">
                  You can also reach us directly using the details below.
                </p>

                <div className="space-y-6">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center rounded-lg bg-accent border border-border p-3 text-muted shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        {item.lines.map((line, idx) =>
                          item.hrefs[idx] ? (
                            <a
                              key={line}
                              href={item.hrefs[idx]}
                              className="block text-sm text-muted hover:text-foreground transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm text-muted">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Full-width map ── */}
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
