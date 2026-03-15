import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, Calendar, Gauge, Fuel, Cog, Zap, Palette } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getTruckById, trucks } from "../../data/trucks";

/* ── Static params so Next can pre-render all truck pages ── */
export function generateStaticParams() {
  return trucks.map((t) => ({ id: t.id }));
}

/* ── Metadata ── */
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const truck = getTruckById(id);
  if (!truck) return { title: "Truck Not Found" };
  return {
    title: `${truck.name} — Euro Truck Sales`,
    description: truck.description,
  };
}

/* ── Page component ── */
export default async function TruckDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const truck = getTruckById(id);
  if (!truck) notFound();

  const specs = [
    { icon: <Calendar size={18} />, label: "Year", value: String(truck.year) },
    { icon: <Gauge size={18} />, label: "Mileage", value: `${truck.mileage.toLocaleString()} km` },
    { icon: <Zap size={18} />, label: "Horsepower", value: `${truck.horsepower} HP` },
    { icon: <Cog size={18} />, label: "Transmission", value: truck.transmission },
    { icon: <Fuel size={18} />, label: "Fuel", value: truck.fuelType },
    { icon: <Palette size={18} />, label: "Color", value: truck.color },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-accent">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <Link
            href="/trucks"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Listings
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* ── Image ── */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border shadow-sm"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <Image
                src={truck.image}
                alt={truck.name}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute top-4 left-4 rounded-md bg-foreground/80 px-3 py-1.5 text-xs font-medium text-white capitalize">
                {truck.category}
              </span>
            </div>

            {/* ── Details ── */}
            <div className="flex flex-col" data-aos="fade-left" data-aos-once="true">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {truck.brand}
              </p>
              <h1 className="mt-1 text-3xl font-extrabold text-foreground sm:text-4xl">
                {truck.name}
              </h1>
              <p className="mt-1 text-sm text-muted">{truck.engine}</p>

              {/* Price */}
              <div className="mt-6 rounded-xl bg-white border border-border p-5">
                <span className="text-3xl font-extrabold text-foreground">
                  &euro;{truck.price.toLocaleString()}
                </span>
                <p className="mt-1 text-xs text-muted">VAT included · Price negotiable</p>
              </div>

              {/* Specs grid */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {specs.map((s, idx) => (
                  <div
                    key={s.label}
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay={idx * 100}
                    className="flex items-start gap-3 rounded-lg bg-white border border-border p-4"
                  >
                    <span className="text-primary">{s.icon}</span>
                    <div>
                      <p className="text-xs text-muted">{s.label}</p>
                      <p className="text-sm font-semibold text-foreground">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
                >
                  <Phone size={16} />
                  Contact Us About This Truck
                </Link>
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className="mt-12 rounded-xl bg-white border border-border p-8 shadow-sm"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2 className="text-xl font-bold text-foreground">Description</h2>
            <p className="mt-4 leading-relaxed text-muted">{truck.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
