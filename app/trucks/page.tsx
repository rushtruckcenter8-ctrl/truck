"use client";

import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TruckCard from "../components/TruckCard";
import { trucks, allBrands, allCategories } from "../data/trucks";
import { SlidersHorizontal } from "lucide-react";

export default function TrucksPage() {
  const [brandFilter, setBrandFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "year-desc" | "mileage-asc">("price-asc");

  const filtered = useMemo(() => {
    let result = [...trucks];

    if (brandFilter !== "all") {
      result = result.filter((t) => t.brand === brandFilter);
    }
    if (categoryFilter !== "all") {
      result = result.filter((t) => t.category === categoryFilter);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [brandFilter, categoryFilter, sortBy]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-accent">
        {/* Page header */}
        <div className="bg-foreground py-14 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Our Trucks</h1>
          <p className="mt-3 text-slate-400">
            Browse our selection of quality used trucks from Europe&apos;s top brands
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-10">
          {/* Filter bar */}
          <div className="mb-8 flex flex-col gap-4 rounded-xl bg-white border border-border p-5 shadow-sm sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <SlidersHorizontal size={18} />
              Filters
            </div>

            {/* Brand */}
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="all">All Brands</option>
              {allBrands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            {/* Category */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground capitalize focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="all">All Categories</option>
              {allCategories.map((c) => (
                <option key={c} value={c} className="capitalize">
                  {c}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="year-desc">Newest First</option>
              <option value="mileage-asc">Lowest Mileage</option>
            </select>

            {/* Result count */}
            <span className="ml-auto text-sm text-muted">
              {filtered.length} truck{filtered.length !== 1 && "s"} found
            </span>
          </div>

          {/* Truck grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((truck, idx) => (
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
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted">
                No trucks match your filters. Try broadening your search.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
