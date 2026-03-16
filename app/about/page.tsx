import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, TruckIcon, Users, Wrench, Award, Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Brands from "../components/Brands";

export const metadata: Metadata = {
  title: "About Us — Rush Truck Center",
  description:
    "Learn about Rush Truck Center — connecting buyers with quality used trucks. Our story, mission, and the brands we work with.",
};

const stats = [
  { value: "500+", label: "Trucks Sold" },
  { value: "10+", label: "Years in Business" },
  { value: "5", label: "Brand Partners" },
  { value: "98%", label: "Happy Clients" },
];

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Certified Quality",
    description:
      "Every truck passes a 120-point inspection before listing. We guarantee mechanical reliability and transparent vehicle history.",
  },
  {
    icon: <Globe size={28} />,
    title: "European Imports",
    description:
      "We source trucks directly from European fleets — well-maintained vehicles with complete service records and low-wear engines.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Full-Service Workshop",
    description:
      "Our on-site workshop handles everything from oil changes to engine overhauls. Factory-trained mechanics with OEM parts.",
  },
  {
    icon: <TruckIcon size={28} />,
    title: "Wide Selection",
    description:
      "Tractors, dump trucks, flatbeds, box trucks — we stock all categories from Scania, Volvo, MAN, DAF, and Renault.",
  },
  {
    icon: <Award size={28} />,
    title: "10+ Years Experience",
    description:
      "A decade of connecting owner-operators and fleet managers with the right trucks at competitive prices.",
  },
  {
    icon: <Users size={28} />,
    title: "Dedicated Support",
    description:
      "Our sales and service team guides you from first inquiry through delivery and beyond with ongoing maintenance support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ── Hero banner ── */}
        <section className="bg-foreground py-20 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Your trusted partner for quality European trucks since 2015
          </p>
        </section>

        {/* ── Our Story ── */}
        <section className="bg-white section-padding">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
            {/* Image */}
            <div className="flex-1" data-aos="fade-right" data-aos-once="true">
              <Image
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
                alt="Our team at the truck yard"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="flex-1" data-aos="fade-left" data-aos-once="true">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Rush Truck Center was founded with a simple
                mission: make buying a quality used truck easy, transparent, and
                affordable. We started with a small yard and a handful of trucks — today we
                move hundreds of vehicles a year across the country.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                We work directly with fleet operators and manufacturers to source
                the best vehicles at competitive prices. Every truck in our
                inventory is thoroughly inspected by our in-house mechanics before
                it reaches the showroom floor.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Our commitment goes beyond the sale. With a full-service workshop,
                parts store, and a dedicated support team, we&apos;re here for
                every kilometre of the journey.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-primary py-14">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay={idx * 100}
              >
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-accent section-padding">
          <div className="mx-auto max-w-7xl px-6">
            <h2
              className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl"
              data-aos="fade-up"
              data-aos-once="true"
            >
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feat, idx) => (
                <div
                  key={feat.title}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay={idx * 100}
                  className="rounded-xl bg-white border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
                    {feat.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand partners (reused component) ── */}
        <Brands />
      </main>
      <Footer />
    </>
  );
}
