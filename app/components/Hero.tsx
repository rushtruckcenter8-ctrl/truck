import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <h1
          data-aos="fade-down"
          data-aos-once="true"
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Quality Trucks.
          <br />
          <span className="text-white/70">Honest Deals.</span>
        </h1>

        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            Hega Truck Sales — inspected pre-owned trucks at transparent prices.
            Serving El Paso and the Southwest.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/trucks"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
            >
              Browse Trucks
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
