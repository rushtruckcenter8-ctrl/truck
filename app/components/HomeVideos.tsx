import Link from "next/link";

type VideoItem = {
  id: string;
  title: string;
  description: string;
  videoSrc?: string;
};

const videos: VideoItem[] = [
  {
    id: "video-1",
    title: "New Polished Alcoa Wheels",
    description:
      "New polished Alcoa wheels in stock: $250 for 22.5, $270 for 24.5, with Dura-Brights available. Buy 24 wheels and shipping is free nationwide.",
    videoSrc: "/images/WhatsApp%20Video%202026-03-26%20at%2010.11.03%20PM.mp4",
  },
  {
    id: "video-2",
    title: "M920 + M177 on New Alcoas",
    description:
      "8 295/75R22.5 M920's and 2 M177 mounted on brand-new Alcoas with balance beads all the way around. Ready to go on the truck. $3,500 takes the set.",
    videoSrc: "/images/WhatsApp%20Video%202026-03-26%20at%2010.16.20%20PM.mp4",
  },
  {
    id: "video-3",
    title: "Alcoa 22.5x8.25 and 24.5x8.25",
    description:
      "Alcoa 22.5x8.25 and 24.5x8.25 wheels in stock, brand new and polished on both sides. $250 for 22.5 and $270 for 24.5.",
    videoSrc: "/images/WhatsApp%20Video%202026-03-26%20at%2010.32.00%20PM.mp4",
  },
];

export default function HomeVideos() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center" data-aos="fade-up" data-aos-once="true">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Featured Videos
          </h2>
          <p className="mt-3 text-muted">
            Watch current inventory highlights and place your order directly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {videos.map((item, idx) => (
            <article
              key={item.id}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={idx * 100}
              className="flex h-full flex-col rounded-xl border border-border bg-accent p-4"
            >
              <div className="overflow-hidden rounded-lg bg-foreground">
                {item.videoSrc ? (
                  <video
                    controls
                    preload="metadata"
                    className="h-64 w-full object-cover"
                    src={item.videoSrc}
                  />
                ) : (
                  <div className="flex h-64 items-center justify-center text-sm text-slate-300">
                    Awaiting video upload
                  </div>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Order Now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
