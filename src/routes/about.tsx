import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";
import deepaliImg from '@/assets/deepali.jpg';
import tanishaImg from '@/assets/tanisha.jpg';



export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — iDreamBig Educational Trust" },
      { name: "description", content: "Our story, values, team, and how to support iDreamBig — an educational trust for children from underserved communities." },
      { property: "og:title", content: "About iDreamBig" },
      { property: "og:description", content: "Our story, values, team, and how to support iDreamBig." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Dignity first", body: "Every child, parent, and teacher we meet is treated as a partner — not a beneficiary." },
  { title: "Long arcs", body: "We commit to children for years, not semesters. Real learning takes time." },
  { title: "Open by default", body: "Our budgets, curriculum, and outcomes are published openly each quarter." },
  { title: "Local hands", body: "Programs are designed and delivered by educators from the communities we serve." },
];

const milestones = [
  { y: "2014", t: "Founded in a one-room library", d: "A weekend reading club for 18 children in a Bengaluru slum." },
  { y: "2017", t: "First partner school", d: "Co-built an after-school program inside a government school." },
  { y: "2020", t: "STEM kits go statewide", d: "Distributed 200+ tinkering kits during the pandemic year." },
  { y: "2023", t: "Mentorship program launched", d: "Pairing high-schoolers with volunteer mentors." },
  { y: "2025", t: "4,000+ children, 9 districts", d: "Scaled across Karnataka, Tamil Nadu, and Maharashtra." },
];

const team = [
  { n: "Deepali Gotadke", r: "Founder & Trustee", i: "DG" , img: deepaliImg },
  { n: "Tanisha Gotadke", r: "Programs Director", i: "TG", img: tanishaImg },
  
];

const faqs = [
  { q: "Is my donation tax-deductible?", a: "Yes — iDreamBig is registered under Section 12A and donations are eligible for 80G benefits in India." },
  { q: "Can I volunteer remotely?", a: "Absolutely. We run online mentorship, curriculum writing, and design volunteering across timezones." },
  { q: "How do you measure impact?", a: "We track attendance, reading and numeracy gains, and stay-in-school rates each quarter, published openly." },
];

function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="about" />
      <SiteHeader />
      <BgSlider eyebrow="About iDreamBig" title="Built by teachers, parents, and former students." />


      {/* Hero */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20 md:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">About iDreamBig</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
            We are teachers, parents, and former students — building the school we wish we had.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            iDreamBig is a registered educational trust working with children from low-income communities across South India. We believe a child's circumstances should never decide the ceiling of their imagination.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto grid max-w-8xl gap-6 pl-30 px-5 pr-30 py-20 md:grid-cols-2">
        {[
          { k: "Mission", v: "To make excellent, joyful learning the right of every child — regardless of geography, gender, or income." },
          { k: "Vision", v: "A generation of children who can read the world, question it, and shape it on their own terms." },
        ].map((b) => (
          <div key={b.k} className="card-textured p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">{b.k}</div>
            <p className="mt-3 font-display text-2xl leading-snug text-primary md:text-3xl">{b.v}</p>
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 pb-20">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">What we hold to</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className="card-textured group p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="font-display text-3xl font-bold text-leaf">0{i+1}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Our journey</h2>
          <ol className="mt-10 space-y-6">
            {milestones.map((m) => (
              <li key={m.y} className="grid grid-cols-[80px_1fr] gap-6 md:grid-cols-[120px_1fr]">
                <div className="border-r-2 border-leaf pr-4 text-right font-display text-2xl font-bold text-primary md:text-3xl">{m.y}</div>
                <div className="pb-2">
                  <div className="font-semibold text-primary">{m.t}</div>
                  <div className="text-sm text-muted-foreground">{m.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">The people behind it</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">A small core team and over a hundred volunteers across India.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => {
            const palette = ["bg-leaf/20 text-leaf","bg-primary/15 text-primary","bg-sun/20 text-sun","bg-leaf/20 text-leaf"][i];
            return (
              <div key={t.n} className="card-textured p-14 text-center transition-transform duration-300 hover:-translate-y-1">
                <div className={`mx-auto flex h-36 w-36 items-center justify-center rounded-full ${palette} font-display text-2xl font-bold overflow-hidden`}>
                  {t.img ? (
                    <img src={t.img} alt={t.n} className="h-full w-full object-cover" />
                       ) : (
                          t.i
                       )}
                </div>
                <div className="mt-4 text-xl font-semibold text-primary">{t.n}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{t.r}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 pb-20">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Questions, answered</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => <Faq key={i} q={f.q} a={f.a} />)}
        </div>
      </section>




      <SiteFooter />
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-textured overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-primary">{q}</span>
        <span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-leaf/15 text-leaf transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

