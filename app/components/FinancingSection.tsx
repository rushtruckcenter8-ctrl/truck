export default function FinancingSection() {
  return (
    <section
      style={{ background: "var(--accent)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      className="py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          style={{ background: "var(--border)", color: "var(--muted)" }}
        >
          Financing
        </div>
        <h2
          className="text-4xl font-bold mb-5 leading-tight"
          style={{ color: "var(--primary)" }}
        >
          Ready to Finance Your Next Truck?
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          We work with buyers at all credit levels. Fill out our quick application and a member of our team will reach out to discuss your options.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-Ol2lA1RIO-h28kjvkVy1B0yBGDCyPpaRP_syn9uctTt0Zw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-sm text-base transition-opacity hover:opacity-90"
          style={{ background: "var(--primary)", color: "var(--background)" }}
        >
          Apply for Financing
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <p className="mt-5 text-sm" style={{ color: "var(--border)" }}>
          Quick 2-minute form · No commitment required
        </p>
      </div>
    </section>
  );
}
