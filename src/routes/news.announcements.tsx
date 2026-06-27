import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";
import { AlbumGrid, type AlbumItem } from "@/components/album-grid";

export const Route = createFileRoute("/news/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — iDreamBig" },
      { name: "description", content: "Official announcements, milestones and updates from iDreamBig Educational Trust." },
      { property: "og:title", content: "Announcements — iDreamBig" },
      { property: "og:description", content: "Official announcements and updates." },
    ],
  }),
  component: AnnouncementsPage,
});

const albums: AlbumItem[] = [
  { title: "New State Partnership", date: "Jun 2026", caption: "Maharashtra rollout", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=70" },
  { title: "Annual Report '25", date: "Apr 2026", caption: "Now published", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=70" },
  { title: "Scholarships Open", date: "Mar 2026", caption: "Class 9–12", img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=70" },
  { title: "New Trustees Welcomed", date: "Feb 2026", caption: "Board update", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=70" },
  { title: "Open Curriculum v3", date: "Jan 2026", caption: "Released", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=70" },
  { title: "Volunteer Drive '26", date: "Dec 2025", caption: "Sign-ups live", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&q=70" },
];

function AnnouncementsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="donate" />
      <SiteHeader />
      <BgSlider eyebrow="News & Events" title="Announcements" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Announcements</div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
          Latest from the trust.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Milestones, releases and official updates from iDreamBig.
        </p>
        <div className="mt-12">
          <AlbumGrid items={albums} />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
