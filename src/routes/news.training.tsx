import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";
import { AlbumGrid, type AlbumItem } from "@/components/album-grid";

export const Route = createFileRoute("/news/training")({
  head: () => ({
    meta: [
      { title: "Training Programs — iDreamBig" },
      { name: "description", content: "Teacher training, mentor onboarding and capacity-building programs." },
      { property: "og:title", content: "Training Programs — iDreamBig" },
      { property: "og:description", content: "Teacher training and capacity building." },
    ],
  }),
  component: TrainingPage,
});

const albums: AlbumItem[] = [
  { title: "Teacher Fellowship Cohort 7", date: "2026", caption: "120 educators", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=70" },
  { title: "Mentor Onboarding", date: "Spring 2026", caption: "Volunteer track", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=70" },
  { title: "Headmasters Residency", date: "Winter 2025", caption: "Government schools", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=70" },
  { title: "Library Leaders Program", date: "Autumn 2025", caption: "Rural Karnataka", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=70" },
  { title: "Digital Classrooms Bootcamp", date: "Summer 2025", caption: "Hybrid", img: "https://images.unsplash.com/photo-1610484826917-0f101a7a0a4d?w=900&q=70" },
  { title: "Counsellor Certification", date: "2025", caption: "Cohort 3", img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=70" },
];

function TrainingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="about" />
      <SiteHeader />
      <BgSlider eyebrow="News & Events" title="Training Programs" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Training</div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
          Building the people who build classrooms.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Capacity-building programs for teachers, mentors and school leaders.
        </p>
        <div className="mt-12">
          <AlbumGrid items={albums} />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
