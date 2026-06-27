import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";
import { AlbumGrid, type AlbumItem } from "@/components/album-grid";

export const Route = createFileRoute("/news/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — iDreamBig" },
      { name: "description", content: "Stories of children, teachers and communities transformed through iDreamBig programs." },
      { property: "og:title", content: "Success Stories — iDreamBig" },
      { property: "og:description", content: "Stories of children, teachers and communities." },
    ],
  }),
  component: StoriesPage,
});

const albums: AlbumItem[] = [
  { title: "Aarti's First Engineering Seat", date: "2026", caption: "Bengaluru", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=70" },
  { title: "A Village Library, Now a Lab", date: "2025", caption: "Mandya", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=70" },
  { title: "Imran Codes His First App", date: "2025", caption: "Hyderabad", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70" },
  { title: "Mothers Run the Reading Hour", date: "2024", caption: "Tumkur", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=70" },
  { title: "From Dropout to Mentor", date: "2024", caption: "Coimbatore", img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=900&q=70" },
  { title: "Sahana's Stage Debut", date: "2024", caption: "Mysuru", img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=900&q=70" },
];

function StoriesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="contact" />
      <SiteHeader />
      <BgSlider eyebrow="News & Events" title="Success Stories" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Success stories</div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
          Quiet wins, told in their own words.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A growing collection of moments that remind us why we do this work.
        </p>
        <div className="mt-12">
          <AlbumGrid items={albums} />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
