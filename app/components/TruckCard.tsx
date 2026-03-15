import Image from "next/image";
import Link from "next/link";
import { Calendar, Gauge } from "lucide-react";
import type { Truck } from "../data/trucks";

interface TruckCardProps {
  truck: Truck;
}

export default function TruckCard({ truck }: TruckCardProps) {
  return (
    <Link
      href={`/trucks/${truck.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-accent">
        <Image
          src={truck.image}
          alt={truck.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 rounded-md bg-foreground/80 px-2.5 py-1 text-xs font-medium text-white capitalize">
          {truck.category}
        </span>
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
            {truck.mileage.toLocaleString()} km
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-4">
          <span className="text-xl font-extrabold text-foreground">
            &euro;{truck.price.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
