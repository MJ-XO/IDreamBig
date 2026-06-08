import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";

export const Route = createFileRoute("/goals")({
  head: () => ({
    meta: [
      { title: "Our Goal — iDreamBig Educational Trust" },
      { name: "description", content: "Our mission, our vision, and the goals that drive iDreamBig's work with children across India." },
      { property: "og:title", content: "Our Goal — iDreamBig" },
      { property: "og:description", content: "Mission, vision, and the goals driving iDreamBig." },
    ],
  }),
  component: GoalsPage,
});

const goals = [
  { n: "01", t: "Reach 25,000 children by 2030", d: "Scale our after-school and library programs to fifteen districts across South India." },
  { n: "02", t: "Universal foundational literacy", d: "Ensure every child in our programs can read fluently in their mother tongue by Grade 3." },
  { n: "03", t: "STEM for every classroom", d: "Place tinkering kits, science libraries, and trained facilitators in 500 partner schools." },
  { n: "04", t: "Mentor a thousand teenagers", d: "Connect high-schoolers from our communities with career mentors and college guidance." },
  { n: "05", t: "Open-source curriculum", d: "Publish every lesson plan, assessment, and impact report for any educator to use freely." },
  { n: "06", t: "Zero-dropout neighbourhoods", d: "Work hand-in-hand with parents and panchayats so no child drops out before Grade 10." },
];

function GoalsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="goals" />
      <SiteHeader />
      <BgSlider eyebrow="Our Goal" title="A clear north star for every child." />


      {/* Hero */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20 md:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Our Goal</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
            A clear north star — every child, ready to dream big.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Our work is anchored in a simple promise: equal access to joyful, rigorous learning. Here is what we are building toward.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-8xl gap-6 pl-30 px-5 pr-30 py-20 md:grid-cols-2">
        <div className="card-textured relative overflow-hidden p-8">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-leaf/15 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              <span className="inline-block h-1.5 w-6 bg-leaf" /> Our Mission
            </div>
            <p className="mt-4 font-display text-2xl leading-snug text-primary md:text-3xl">
              To make excellent, joyful learning the right of every child — regardless of geography, gender, or income.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We design and run long-term education programs alongside government schools, community libraries, and parents — meeting children where they are and walking with them for years.
            </p>
          </div>
        </div>

        <div className="card-textured relative overflow-hidden p-8">
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-sun/20 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
              <span className="inline-block h-1.5 w-6 bg-sun" /> Our Vision
            </div>
            <p className="mt-4 font-display text-2xl leading-snug text-primary md:text-3xl">
              A generation of children who can read the world, question it, and shape it on their own terms.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We picture neighbourhoods where every child finishes school confident, curious, and connected — and where learning is celebrated as a community endeavour.
            </p>
          </div>
        </div>
      </section>

      {/* Goals grid */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Six goals for the next five years</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            These are the commitments we measure ourselves against — published openly each quarter.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((g) => (
              <div key={g.n} className="card-textured group p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="font-display text-3xl font-bold text-leaf">{g.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary">{g.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
