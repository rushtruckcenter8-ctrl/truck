import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import LocationMap from "../components/LocationMap";

export const metadata: Metadata = {
  title: "Contact Us — Rush Truck Center",
  description:
    "Get in touch with Rush Truck Center. Call us or send us a message. We're here to help with all your truck needs.",
};

const contactDetails = [
  {
    icon: <Phone size={20} />,
    label: "Phone",
    lines: [ ""],
    hrefs: [ "tel:"],
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    lines: ["contact@rushtruckcentersales.com"],
    hrefs: ["mailto:contact@rushtruckcentersales.com"],
  },
  {
    icon: <MapPin size={20} />,
    label: "Address",
    lines: ["12253 Gateway Blvd W", "El Paso, TX 79936"],
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
        <section className="bg-foreground py-20 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Have a question or ready to buy? Reach out — we&apos;d love to hear
            from you.
          </p>
        </section>

        {/* ── Two-column: Form + Info ── */}
        <section className="bg-white section-padding">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left — Form */}
              <div data-aos="fade-right" data-aos-once="true">
                <h2 className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 mb-8 text-muted">
                  Fill out the form below — include your location so we can route
                  your request — and we&apos;ll get back to you within 24 hours.
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
                      <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary shrink-0">
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
                              className="block text-sm text-muted hover:text-primary transition-colors"
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
