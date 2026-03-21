import Image from "next/image";
import Link from "next/link";
import { Calendar, Gauge } from "lucide-react";
import type { Truck } from "../data/trucks";
import { formatPrice, formatMileage } from "../data/trucks";

interface TruckCardProps {
  truck: Truck;
}

export default function TruckCard({ truck }: TruckCardProps) {
  // Use first gallery image if available, otherwise fall back to the single image
  const thumbnail = truck.images?.[0] ?? truck.image;

  return (
    <Link
      href={`/trucks/${truck.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-accent">
        <Image
          src={thumbnail}
          alt={truck.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 rounded-md bg-foreground/80 px-2.5 py-1 text-xs font-medium text-white capitalize">
          {truck.category}
        </span>
        {/* Condition badge (shown only when available) */}
        {truck.condition && (
          <span className="absolute top-3 right-3 rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-white">
            {truck.condition}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        {/* Brand + name */}
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {truck.brand}
        </p>
        <h3 className="mt-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {truck.name}
        </h3>

        {/* Specs row */}
        <div className="mt-3 flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {truck.year}
          </span>
          <span className="flex items-center gap-1">
            <Gauge size={14} />
            {formatMileage(truck)}
          </span>
        </div>

        {/* Price + optional down payment */}
        <div className="mt-auto pt-4">
          <span className="text-xl font-extrabold text-foreground">
            {formatPrice(truck)}
          </span>
          {truck.downPayment && (
            <p className="mt-0.5 text-xs text-muted">
              Down payment: ${truck.downPayment.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
