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
    <section id="brands" className="bg-white section-padding">
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
              We are an authorized dealer and service partner for Europe&apos;s
              leading truck manufacturers. With over 10 years of experience, we
              connect buyers with premium commercial vehicles they can trust.
            </p>
            <p className="mt-3 text-muted leading-relaxed max-w-2xl">
              Every truck in our inventory is inspected, certified, and backed by
              our commitment to quality. We work directly with manufacturers to
              ensure authentic parts and professional servicing.
            </p>
          </div>

         
        
        </div>
      </div>
    </section>
  );
}
