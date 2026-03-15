import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TruckCard from "./TruckCard";
import { trucks } from "../data/trucks";

/** Show the first 6 trucks on the homepage with a "View All" CTA. */
export default function FeaturedTrucks() {
  const featured = trucks.slice(0, 6);

  return (
    <section id="featured" className="bg-white section-padding">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-once="true">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Featured Trucks
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            Hand-picked selections from our latest inventory. Each truck is
            inspected, certified, and ready for the road.
          </p>
        </div>

        {/* 3-column responsive grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((truck, idx) => (
            <div
              key={truck.id}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={idx * 100}
            >
              <TruckCard truck={truck} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-10 text-center" data-aos="fade-up" data-aos-once="true">
          <Link
            href="/trucks"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
          >
            View All Trucks
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
