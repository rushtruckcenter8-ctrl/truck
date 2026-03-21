"use client";

import { useState, FormEvent } from "react";
import { Loader2 } from "lucide-react";

/**
 * ContactForm can be used in two modes:
 * - compact (default): Name + Phone + Location (landing page)
 * - expanded: Name + Email + Phone + Location + Message (contact page)
 */
interface ContactFormProps {
  expanded?: boolean;
}

export default function ContactForm({ expanded = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          location: formData.location.trim(),
          ...(expanded && formData.email.trim()
            ? { email: formData.email.trim() }
            : {}),
          ...(expanded && formData.message.trim()
            ? { message: formData.message.trim() }
            : {}),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "Failed to send message. Please try again."
        );
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
      />

      {/* Email — only in expanded mode */}
      {expanded && (
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
      )}

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
        required
        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
      />

      {/* Location */}
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="City, state / region, or ZIP"
        required
        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
      />

      {/* Message — only in expanded mode */}
      {expanded && (
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={4}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
        />
      )}

      {errorMessage && (
        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : submitted ? (
          "Sent!"
        ) : (
          "Submit"
        )}
      </button>

      {submitted && !errorMessage && (
        <p className="text-sm text-green-600 text-center">
          Thank you! We&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
}
