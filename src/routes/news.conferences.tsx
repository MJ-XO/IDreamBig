import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";
import { AlbumGrid, type AlbumItem } from "@/components/album-grid";

export const Route = createFileRoute("/news/conferences")({
  head: () => ({
    meta: [
      { title: "Conferences — iDreamBig" },
      { name: "description", content: "Education conferences, summits and panels hosted or attended by iDreamBig." },
      { property: "og:title", content: "Conferences — iDreamBig" },
      { property: "og:description", content: "Education conferences and summits." },
    ],
  }),
  component: ConferencesPage,
});

const albums: AlbumItem[] = [
  { title: "EdLeaders Summit '25", date: "Nov 2025", caption: "Bengaluru · 600+ delegates", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=70" },
  { title: "Foundational Literacy Forum", date: "Sep 2025", caption: "New Delhi", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=70" },
  { title: "Teach the Teacher", date: "Jun 2025", caption: "Mysuru", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=70" },
  { title: "Future of Public Schools", date: "Mar 2025", caption: "Pune", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=70" },
  { title: "South India Edu Meet", date: "Jan 2025", caption: "Chennai", img: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=900&q=70" },
  { title: "Girls in STEM Panel", date: "Nov 2024", caption: "Hyderabad", img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=70" },
];

function ConferencesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="achievements" />
      <SiteHeader />
      <BgSlider eyebrow="News & Events" title="Conferences" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Conferences</div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
          Where ideas in education meet.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A look back at the gatherings we have hosted, spoken at, and learned from.
        </p>
        <div className="mt-12">
          <AlbumGrid items={albums} />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
