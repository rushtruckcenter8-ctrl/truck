import Image from "next/image";

const brands = [
  { name: "Scania", logo: "/images/logo-scania.svg" },
  { name: "Volvo", logo: "/images/logo-volvo.svg" },
  { name: "MAN", logo: "/images/logo-man.svg" },
  { name: "DAF", logo: "/images/logo-daf.svg" },
  { name: "Renault", logo: "/images/logo-renault.svg" },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-background border-t border-border section-padding">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading + description */}
        <div className="mb-12 flex flex-col items-center gap-8 md:justify-center md:gap-16">
          <div
            className="flex-1 text-center "
            data-aos="fade-right"
            data-aos-once="true"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-2xl">
              At Hega Truck Sales, we source quality pre-owned trucks from trusted
              fleet operators across the country. Freightliner, Volvo, Kenworth —
              top brands at prices that make sense for your business.
            </p>
            <p className="mt-3 text-muted leading-relaxed max-w-2xl">
              Every truck in our inventory is inspected and backed by our commitment
              to transparency. No surprises — just reliable trucks and honest deals.
            </p>
          </div>

          {/* Brand logos grid */}
          {/* <div className="flex-1 grid grid-cols-3 gap-6 place-items-center sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand, idx) => (
              <div
                key={brand.name}
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-delay={idx * 50}
                className="flex h-20 w-28 items-center justify-center rounded-lg border border-border bg-accent p-3 hover:shadow-md transition-shadow"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
