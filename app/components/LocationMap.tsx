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
              Visit our showroom and service center in Zurich. We&apos;re conveniently
              located in the industrial district with easy highway access for
              truck deliveries.
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
            title="Euro Truck Sales Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43400.0!2d8.5!3d47.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08cc0e6e41%3A0xf5c698b65f8c52a7!2sZurich%2C+Switzerland!5e0!3m2!1sen!2sch!4v1700000000000"
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
