import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — iDreamBig Educational Trust" },
      { name: "description", content: "Milestones, awards, and impact numbers from over a decade of iDreamBig's work." },
      { property: "og:title", content: "Achievements — iDreamBig" },
      { property: "og:description", content: "Milestones, recognitions, and impact numbers." },
    ],
  }),
  component: AchievementsPage,
});

const stats = [
  { v: "4,200+", l: "Children in active programs" },
  { v: "62", l: "Partner government schools" },
  { v: "9", l: "Districts across three states" },
  { v: "11", l: "Years of continuous service" },
];

const awards = [
  { y: "2024", t: "Karnataka State Education Award", d: "Recognised for outstanding contribution to foundational literacy in government schools." },
  { y: "2023", t: "Rohini Nilekani Philanthropies Fellowship", d: "Selected as a fellow organisation for community-led education initiatives." },
  { y: "2022", t: "GuideStar India Platinum Certification", d: "Highest level of transparency and accountability rating for non-profits in India." },
  { y: "2021", t: "UNESCO MGIEP Mention", d: "Featured in the global report on social-emotional learning for under-resourced contexts." },
  { y: "2019", t: "Ashoka Changemaker Schools Network", d: "Two partner schools inducted into the global Changemaker network." },
];

const highlights = [
  { t: "1.2M+ books read", d: "Tracked across our community libraries since the reading challenge launched in 2018." },
  { t: "92% retention", d: "Of children enrolled in our after-school program continued through the full academic year." },
  { t: "340 mentors", d: "Volunteer mentors active across India and the diaspora, contributing weekly." },
  { t: "78 alumni in college", d: "First-generation college students from our programs — and counting." },
];

function AchievementsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="achievements" />
      <SiteHeader />
      <BgSlider eyebrow="Achievements" title="Eleven years. Thousands of dreams." />


      {/* Hero */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20 md:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Achievements</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
            Eleven years. Thousands of children. Counted, one classroom at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every number on this page is a child, a teacher, a volunteer, or a partner who said yes. Here is what that has added up to.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="card-textured p-6 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards timeline */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Awards & recognitions</h2>
          <ol className="mt-10 space-y-6">
            {awards.map((a) => (
              <li key={a.y + a.t} className="grid grid-cols-[80px_1fr] gap-6 md:grid-cols-[120px_1fr]">
                <div className="border-r-2 border-sun pr-4 text-right font-display text-2xl font-bold text-primary md:text-3xl">{a.y}</div>
                <div className="pb-2">
                  <div className="font-semibold text-primary">{a.t}</div>
                  <div className="text-sm text-muted-foreground">{a.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Impact highlights */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Impact highlights</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {highlights.map((h, i) => (
            <div key={h.t} className="card-textured flex items-start gap-5 p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md font-display text-lg font-bold ${i % 2 === 0 ? "bg-leaf/20 text-leaf" : "bg-sun/20 text-sun"}`}>
                ★
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">{h.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
