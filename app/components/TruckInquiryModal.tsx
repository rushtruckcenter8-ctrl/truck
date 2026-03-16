"use client";

import { useState, FormEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Phone, Mail, User, MessageSquare, Loader2 } from "lucide-react";
import type { Truck } from "../data/trucks";
import { formatPrice, formatMileage } from "../data/trucks";

interface TruckInquiryModalProps {
  truck: Truck;
  isOpen: boolean;
  onClose: () => void;
}

export default function TruckInquiryModal({
  truck,
  isOpen,
  onClose,
}: TruckInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  // Ensure we're on the client side before rendering portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/truck-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          truckId: truck.id,
          truckName: truck.name,
          truckBrand: truck.brand,
          truckYear: truck.year,
          truckPrice: truck.price,
          truckCurrency: truck.currency || "EUR",
          truckStockNumber: truck.stockNumber,
          truckVIN: truck.vin,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-6 py-5 rounded-t-xl">
          <h2 className="text-2xl font-bold text-foreground">
            Inquire About This Truck
          </h2>
          <p className="mt-1 text-sm text-muted">
            {truck.brand} {truck.name} ({truck.year})
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted">
            <span>Stock: {truck.stockNumber || "N/A"}</span>
            <span>•</span>
            <span>{formatMileage(truck)}</span>
            <span>•</span>
            <span className="font-semibold text-primary">{formatPrice(truck)}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Message <span className="text-muted text-xs">(Optional)</span>
              </label>
              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-3 top-3 text-muted"
                />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                  placeholder="Tell us about your interest, financing needs, or any questions..."
                />
              </div>
            </div>
          </div>

          {/* Status messages */}
          {submitStatus === "success" && (
            <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-200">
              <p className="text-sm font-medium text-green-800">
                ✓ Thank you! We&apos;ve received your inquiry and will contact you shortly.
                A confirmation email has been sent to your inbox.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm font-medium text-red-800">
                {errorMessage || "Failed to send inquiry. Please try again."}
              </p>
            </div>
          )}

          {/* Submit button */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-accent transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 rounded-lg bg-primary text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Render modal to document.body using portal
  return createPortal(modalContent, document.body);
}
