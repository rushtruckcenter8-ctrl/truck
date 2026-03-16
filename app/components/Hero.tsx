import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — centered over the background */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <h1
          data-aos="fade-down"
          data-aos-once="true"
          className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Affordable Truck
          <br />
          <span className="text-primary">Sales &amp; Service</span>
        </h1>

        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Quality used trucks from Europe&apos;s top manufacturers. Reliable
            vehicles, transparent pricing, and full service support — all in one
            place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/trucks"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
            >
              Browse Trucks
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
