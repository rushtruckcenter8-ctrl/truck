"use client";

import { useState } from "react";

/**
 * ContactForm can be used in two modes:
 * - compact (default): Name + Phone only (landing page)
 * - expanded: Name + Email + Phone + Message (contact page)
 */
interface ContactFormProps {
  expanded?: boolean;
}

export default function ContactForm({ expanded = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app this would POST to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
      />

      {/* Email — only in expanded mode */}
      {expanded && (
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
      )}

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
      />

      {/* Message — only in expanded mode */}
      {expanded && (
        <textarea
          name="message"
          placeholder="Your message..."
          rows={4}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
        />
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitted}
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60 transition-colors"
      >
        {submitted ? "Sent!" : "Submit"}
      </button>

      {submitted && (
        <p className="text-sm text-green-600 text-center">
          Thank you! We&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
}
