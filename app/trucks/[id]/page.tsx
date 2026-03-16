import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Phone,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Zap,
  Hash,
  Tag,
  Truck,
  Settings2,
  Layers,
  MoveHorizontal,
  Navigation2,
  Circle,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TruckImageGallery from "../../components/TruckImageGallery";
import TruckInquiryModalWrapper from "../../components/TruckInquiryModalWrapper";
import { getTruckById, trucks, formatPrice, formatMileage } from "../../data/trucks";

/* ── Static params so Next can pre-render all truck pages ── */
export function generateStaticParams() {
  return trucks.map((t) => ({ id: t.id }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const truck = getTruckById(id);
  if (!truck) return { title: "Truck Not Found" };
  return {
    title: `${truck.name} — Rush Truck Center`,
    description: truck.description,
  };
}

/* ── Spec item helper ── */
interface SpecItem {
  icon: React.ReactNode;
  label: string;
  value: string;
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

  // Gallery images: use images[] array if present, otherwise fall back to single image
  const galleryImages =
    truck.images && truck.images.length > 0 ? truck.images : [truck.image];

  // ── Core specs (always shown) ──────────────────────────────────
  const coreSpecs: SpecItem[] = [
    { icon: <Calendar size={18} />, label: "Year", value: String(truck.year) },
    { icon: <Gauge size={18} />, label: "Mileage", value: formatMileage(truck) },
    { icon: <Zap size={18} />, label: "Horsepower", value: `${truck.horsepower} HP` },
    { icon: <Fuel size={18} />, label: "Fuel", value: truck.fuelType },
    { icon: <Cog size={18} />, label: "Transmission", value: truck.transmission },
    ...(truck.color
      ? [{ icon: <Circle size={18} />, label: "Color", value: truck.color }]
      : []),
  ];

  // ── Extended specs (shown only when data is available) ─────────
  const extendedSpecs: SpecItem[] = [
    ...(truck.engineManufacturer
      ? [{ icon: <Zap size={18} />, label: "Engine Brand", value: truck.engineManufacturer }]
      : []),
    ...(truck.engineModel
      ? [{ icon: <Zap size={18} />, label: "Engine Model", value: truck.engineModel }]
      : []),
    ...(truck.engineDisplacement
      ? [{ icon: <Layers size={18} />, label: "Displacement", value: `${truck.engineDisplacement}L` }]
      : []),
    ...(truck.transmissionSpeeds
      ? [{ icon: <Settings2 size={18} />, label: "Speeds", value: `${truck.transmissionSpeeds}-Speed` }]
      : []),
    ...(truck.drive
      ? [{ icon: <Truck size={18} />, label: "Drive", value: truck.drive }]
      : []),
    ...(truck.suspension
      ? [{ icon: <Layers size={18} />, label: "Suspension", value: truck.suspension }]
      : []),
    ...(truck.rearAxles
      ? [{ icon: <Settings2 size={18} />, label: "Rear Axles", value: truck.rearAxles }]
      : []),
    ...(truck.gvwr
      ? [{ icon: <Gauge size={18} />, label: "GVWR", value: truck.gvwr }]
      : []),
    ...(truck.wheelType
      ? [{ icon: <Circle size={18} />, label: "Wheels", value: truck.wheelType }]
      : []),
    ...(truck.wheelbase
      ? [{ icon: <MoveHorizontal size={18} />, label: "Wheelbase", value: truck.wheelbase }]
      : []),
    ...(truck.driveSide
      ? [{ icon: <Navigation2 size={18} />, label: "Drive Side", value: truck.driveSide }]
      : []),
  ];

  const currencySymbol = truck.currency === "USD" ? "$" : "€";

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
            {/* ── Image Gallery ── */}
            <div data-aos="fade-right" data-aos-once="true">
              <TruckImageGallery
                images={galleryImages}
                alt={truck.name}
                category={truck.category}
              />
            </div>

            {/* ── Details ── */}
            <div className="flex flex-col" data-aos="fade-left" data-aos-once="true">
              {/* Brand / condition / stock row */}
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {truck.brand}
                </p>
                {truck.condition && (
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {truck.condition}
                  </span>
                )}
              </div>

              <h1 className="mt-1 text-3xl font-extrabold text-foreground sm:text-4xl">
                {truck.name}
              </h1>
              <p className="mt-1 text-sm text-muted">{truck.engine}</p>

              {/* Stock / VIN */}
              {(truck.stockNumber || truck.vin) && (
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
                  {truck.stockNumber && (
                    <span className="flex items-center gap-1">
                      <Hash size={12} />
                      Stock: {truck.stockNumber}
                    </span>
                  )}
                  {truck.vin && (
                    <span className="flex items-center gap-1">
                      <Tag size={12} />
                      VIN: {truck.vin}
                    </span>
                  )}
                </div>
              )}

              {/* Price block */}
              <div className="mt-6 rounded-xl bg-white border border-border p-5">
                <div className="flex items-end gap-4 flex-wrap">
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      Asking Price
                    </p>
                    <span className="text-3xl font-extrabold text-foreground">
                      {formatPrice(truck)}
                    </span>
                  </div>
                  {truck.downPayment && (
                    <div className="border-l border-border pl-4">
                      <p className="text-xs text-muted uppercase tracking-wider">
                        Down Payment
                      </p>
                      <span className="text-xl font-bold text-primary">
                        {currencySymbol}{truck.downPayment.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-xs text-muted">
                  Price negotiable · Contact us for financing options
                </p>
              </div>

              {/* Core specs grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {coreSpecs.map((s, idx) => (
                  <div
                    key={s.label}
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay={idx * 80}
                    className="flex items-start gap-3 rounded-lg bg-white border border-border p-3"
                  >
                    <span className="mt-0.5 text-primary flex-shrink-0">{s.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{s.label}</p>
                      <p className="text-sm font-semibold text-foreground truncate">
                        {s.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TruckInquiryModalWrapper truck={truck} />
              </div>
            </div>
          </div>

          {/* ── Description ── */}
          <div
            className="mt-12 rounded-xl bg-white border border-border p-8 shadow-sm"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2 className="text-xl font-bold text-foreground">Description</h2>
            <p className="mt-4 leading-relaxed text-muted">{truck.description}</p>
          </div>

          {/* ── Extended Specs Table (shown when extra data exists) ── */}
          {extendedSpecs.length > 0 && (
            <div
              className="mt-8 rounded-xl bg-white border border-border p-8 shadow-sm"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">
                Full Specifications
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {extendedSpecs.map((s, idx) => (
                  <div
                    key={s.label}
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay={idx * 60}
                    className="flex items-start gap-3 rounded-lg border border-border p-4"
                  >
                    <span className="mt-0.5 text-primary flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="text-xs text-muted">{s.label}</p>
                      <p className="text-sm font-semibold text-foreground">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
