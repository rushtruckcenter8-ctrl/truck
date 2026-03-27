import { Package, Sparkles, CircleDot, Droplets } from "lucide-react";

const services = [
  {
    title: "Used Truck Parts",
    description:
      "High-quality spare parts sourced directly from top suppliers. Affordable, reliable, and ready to ship.",
    icon: Package,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Truck & Vehicle Wash",
    description:
      "Professional cleaning for heavy-duty trucks and light commercial vehicles. Interior and exterior packages available.",
    icon: Sparkles,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Rims & Tires",
    description:
      "Durable truck rims and high-performance tires for long-haul, regional, and off-road operations.",
    icon: CircleDot,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Oil Change & Fluid Service",
    description:
      "Quick and thorough oil changes and fluid top-ups for trucks and commercial vehicles of all sizes.",
    icon: Droplets,
    color: "bg-green-100 text-green-600",
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
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay={idx * 100}
                className="group flex flex-col gap-5 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow p-8"
              >
                {/* Icon badge */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
