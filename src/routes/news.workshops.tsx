import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";
import { AlbumGrid, type AlbumItem } from "@/components/album-grid";

export const Route = createFileRoute("/news/workshops")({
  head: () => ({
    meta: [
      { title: "Upcoming Workshops — iDreamBig" },
      { name: "description", content: "Hands-on learning workshops for children, parents and educators in the iDreamBig network." },
      { property: "og:title", content: "Upcoming Workshops — iDreamBig" },
      { property: "og:description", content: "Hands-on learning workshops in the iDreamBig network." },
    ],
  }),
  component: WorkshopsPage,
});

const albums: AlbumItem[] = [
  { title: "Robotics Bootcamp", date: "Jul 12, 2026", caption: "Bengaluru · Grade 6–8", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=900&q=70" },
  { title: "Storytellers Circle", date: "Jul 19, 2026", caption: "Mysuru · Grade 3–5", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=70" },
  { title: "Young Scientists Lab", date: "Aug 02, 2026", caption: "Hubli · Grade 7–9", img: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=900&q=70" },
  { title: "Art & Expression", date: "Aug 16, 2026", caption: "Chennai · All ages", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=70" },
  { title: "Code Your First Game", date: "Aug 23, 2026", caption: "Bengaluru · Grade 8–10", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=70" },
  { title: "Parent–Child Reading", date: "Sep 06, 2026", caption: "Pune · Grade 1–3", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=70" },
];

function WorkshopsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="goals" />
      <SiteHeader />
      <BgSlider eyebrow="News & Events" title="Upcoming Workshops" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Workshops</div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
          Hands-on learning, every weekend.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Browse upcoming workshop albums — tap any card to learn more from past sessions.
        </p>
        <div className="mt-12">
          <AlbumGrid items={albums} />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
