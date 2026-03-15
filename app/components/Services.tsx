import Image from "next/image";

const services = [
  {
    title: "Used Truck Parts from Europe",
    description:
      "High-quality spare parts sourced directly from European suppliers. Affordable, reliable, and ready to ship.",
    image: "/images/service-parts.svg",
  },
  {
    title: "Truck & Vehicle Wash",
    description:
      "Professional cleaning for heavy-duty trucks and light commercial vehicles. Interior and exterior packages available.",
    image: "/images/service-wash.svg",
  },
  {
    title: "Accessories Store",
    description:
      "Everything you need to outfit your truck — from lighting and mirrors to cab comfort accessories.",
    image: "/images/service-accessories.svg",
  },
  {
    title: "Oil Change & Fluid Service",
    description:
      "Quick and thorough oil changes and fluid top-ups for trucks and commercial vehicles of all sizes.",
    image: "/images/service-oil.svg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-accent section-padding">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-once="true">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            From parts and accessories to maintenance — we offer everything your
            truck needs under one roof.
          </p>
        </div>

        {/* 2 × 2 card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={idx * 100}
              className="group flex flex-col overflow-hidden rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
