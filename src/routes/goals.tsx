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
  { n: "01", t: "Digital Skills & AI Academy", d: "We have training programs that include Digital Marketing, E-Commerce, Artificial Intelligence, Business Automation, Social Media Marketing, Website Development." },
  { n: "02", t: "Supporting women-led enterprises through:", d: "We support women led enterprises through Business mentoring, E-commerce enablement, Digital marketing, Market access, Leadership development." },
  { n: "03", t: "Youth Innovation Hub", d: "We also programs focused on Entrepreneurship, Innovation, Leadership, Career readiness, Future skills for teens." },
  { n: "04", t: "SME Digital Transformation", d: "We help MSME's adopt E-Commerce, AI Tools, Digital Payments, CRM Systems, Export Readiness. " },
  { n: "05", t: "Sustainability & Climate Action", d: "Programs on Environmental Awareness, Sustainable Business Practices, Climate Resilience, Green Entrepreneurship are also availible." },
  { n: "06", t: "Research & Policy Initiatives", d: "We have reaserch projects based on Digital Economy, Creative Economy, Women Entrepreneurship, SME Development, Sustainable Development Goals. " },
];

function GoalsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="goals" />
      <SiteHeader />
      <BgSlider eyebrow="Our Programs" title="Thousands empowered. Countless possibilities created." />


      {/* Hero */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20 md:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Our Programs</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
           Creating pathways from learning to leadership, from ideas to enterprises, and from potential to impact.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Through training, mentoring, digital transformation, entrepreneurship, sustainability initiatives, and community engagement, we help individuals and organizations unlock their full potential.
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
              To empower women, youth, entrepreneurs, and communities with the knowledge, skills, opportunities, and support needed to create sustainable livelihoods and meaningful social impact.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We design and deliver programs in entrepreneurship, digital transformation, AI, sustainability, capacity building, and leadership development—enabling individuals and organizations to thrive in a rapidly changing world.
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
              A world where every individual has the opportunity to dream big, innovate boldly, and build a better future for themselves and their communities.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We envision inclusive, resilient, and sustainable societies where knowledge, technology, and opportunity are accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Goals grid */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Six programs that we provide</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            These are the courses we provide ourselves — published openly for every entrepreneur.
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
