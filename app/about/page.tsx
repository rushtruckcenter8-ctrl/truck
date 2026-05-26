import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, TruckIcon, Users, Wrench, DollarSign, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Brands from "../components/Brands";

export const metadata: Metadata = {
  title: "About Us — Hega Truck Sales",
  description:
    "Learn about Hega Truck Sales — quality pre-owned trucks at honest prices in El Paso, TX. Our story, mission, and commitment to every customer.",
};

const stats = [
  { value: "300+", label: "Trucks Sold" },
  { value: "8+", label: "Years in Business" },
  { value: "4", label: "Truck Categories" },
  { value: "95%", label: "Happy Clients" },
];

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Inspected Inventory",
    description:
      "Every truck on our lot goes through a detailed multi-point inspection before it's ever listed. What you see is what you get.",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no last-minute surprises. Our prices are clear upfront so you can make confident decisions.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Local & Trusted",
    description:
      "Proudly based in El Paso, Texas. We know this market and we're committed to serving our community with integrity.",
  },
  {
    icon: <TruckIcon size={28} />,
    title: "Wide Selection",
    description:
      "Tractors, dump trucks, flatbeds, box trucks — we stock the categories owner-operators and fleet managers need most.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Experienced Team",
    description:
      "With 8+ years in the business, our team has the knowledge to match you with the right truck at the right price.",
  },
  {
    icon: <Users size={28} />,
    title: "Fast Financing",
    description:
      "Get on the road faster. We work with financing partners to help you find flexible payment options that fit your budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ── Hero banner ── */}
        <section className="bg-accent border-b border-border py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Hega Truck Sales
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Quality trucks. Honest deals. El Paso, Texas.
          </p>
        </section>

        {/* ── Our Story ── */}
        <section className="bg-background section-padding">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
            {/* Image */}
            <div className="flex-1" data-aos="fade-right" data-aos-once="true">
              <Image
                src="/about.jpg"
                alt="Hega Truck Sales lot"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="flex-1" data-aos="fade-left" data-aos-once="true">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Hega Truck Sales was founded on a simple belief: buying a commercial
                truck should be straightforward, transparent, and fair. Based in El Paso,
                Texas, we specialize in quality pre-owned semi trucks, dump trucks,
                flatbeds, and trailers sourced from trusted fleet operators across the
                country.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Every vehicle on our lot goes through a rigorous multi-point inspection
                before it&apos;s ever listed — because we know your business depends on
                reliability. We don&apos;t sell trucks we wouldn&apos;t put our own name behind.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Whether you&apos;re an owner-operator looking for your first rig or a fleet
                manager adding capacity, our team is here to make the process smooth
                and stress-free — from first inquiry to the moment you drive off the lot.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-accent border-y border-border py-14">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay={idx * 100}
              >
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-background section-padding">
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
                  className="rounded-xl bg-accent border border-border p-6 hover:border-foreground/20 transition-colors"
                >
                  <span className="inline-flex items-center justify-center rounded-lg bg-foreground/10 p-3 text-foreground">
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

        {/* ── Brand partners ── */}
        <Brands />
      </main>
      <Footer />
    </>
  );
}
