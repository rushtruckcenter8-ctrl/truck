import ContactForm from "./ContactForm";

/**
 * Landing-page wrapper around ContactForm with heading and
 * the dark background matching the design.
 */
export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-foreground section-padding">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center md:flex-row md:items-start md:gap-16">
        {/* Left text */}
        <div
          className="flex-1 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Have Questions?
          </h2>
          <p className="mt-4 max-w-md text-slate-400 leading-relaxed">
            Leave your details and your general location — we&apos;ll call you
            back. We are happy to discuss pricing, delivery, or any custom
            requirements.
          </p>
        </div>

        {/* Form card */}
        <div
          className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
