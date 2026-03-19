export default function LocationMap() {
  return (
    <section id="location" className="bg-accent section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-16">
          <div className="flex-1 text-center flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Where Are We?
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-2xl">
              Visit our showroom and service center in El Paso, TX. We&apos;re conveniently
              located off Gateway Blvd with easy highway access for truck
              deliveries.
            </p>
            <p className="mt-3 text-muted leading-relaxed max-w-2xl">
              Our doors are open Monday through Saturday, 8:00 to 18:00. Drop by
              for a test drive or schedule a service appointment.
            </p>
          </div>
        </div>

        {/* Google Maps embed */}
        <div
          className="overflow-hidden rounded-xl border border-border shadow-sm"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <iframe
            title="Rush Truck Center Location"
            src="https://maps.google.com/maps?q=12253+Gateway+Blvd+W,+El+Paso,+TX+79936&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
