import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider";
import { PageDoodles } from "@/components/page-doodles";
import hero from "@/assets/hero-children.jpg";
import logo from "@/assets/idreambig-logo.png";
import deepaliImg from '@/assets/deepali.jpg';
import tanishaImg from '@/assets/tanisha.jpg';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iDreamBig — Education for Every Child" },
      { name: "description", content: "iDreamBig is an educational trust empowering underserved children through learning, mentorship, and dignity." },
      { property: "og:title", content: "iDreamBig — Education for Every Child" },
      { property: "og:description", content: "Empowering underserved children through learning, mentorship, and dignity." },
    ],
  }),
  component: Home,
});

function useCount(target: number, run: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}

function StatsRow() {
  const [run, setRun] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const a = useCount(3200, run);
  const b = useCount(970, run);
  const c = useCount(8, run);
  const d = useCount(20, run);
  const items = [
    { v: a.toLocaleString() + "+", l: "Women Entrepreneurs Trained" },
    { v: b + "", l: "Women-led SMEs Supported" },
    { v: c + "", l: "South Asian Countries Reached" },
    { v: d + "%", l: "Years of Digital Transformation Experience" },
  ];
  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((s) => (
        <div key={s.l} className="card-textured p-6 text-center">
          <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.v}</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

const programs = [
  { tag: "Foundations", title: "Digital Skills & AI Academy", desc: "Training programs in Digital Marketing, E-Commerce, Artificial Intelligence, Business Automation, etc...", accent: "leaf" },
  { tag: "Bridge", title: "Women Entrepreneurship Program", desc: "Supporting women-led enterprises through Business mentoring, E-commerce enablement, Digital marketing, Market access, etc...", accent: "primary" },
  { tag: "Wings", title: "SME Digital Transformations", desc: "Helping MSMEs adopt E-Commerce, AI Tools, Digital Payments, CRM Systems, etc...", accent: "sun" },
] as const;

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="home" />
      <SiteHeader />
      <BgSlider eyebrow="Welcome to iDreamBig" title="Transform Lives. Create Impact." />


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sun/15 blur-3xl" />
        <div className="mx-auto grid max-w-8xl items-center gap-12 pl-30 px-5 pr-30 py-14 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-leaf/40 bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> Educational Trust · Est. 2014
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-primary md:text-6xl">
              Every woman deserves
              <br />
              the room to <span className="text-leaf">Dream</span>
              <span className="text-sun">.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Empowering women, youth, entrepreneurs, and communities through digital innovation, entrepreneurship, sustainability, and inclusive development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate" className="btn-flat btn-flat-hover btn-sun">Donate now →</Link>
              <Link to="/about" className="btn-flat btn-flat-hover btn-outline-flat">Our story</Link>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-leaf/10" style={{transform:"rotate(-2deg)"}} />
            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_8px_0_0_oklch(0.32_0.09_252_/_0.18)]">
              <img src={hero} alt="Children learning in a classroom" width={1600} height={1100} className="h-[420px] w-full object-cover md:h-[500px]" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-md bg-paper/95 p-3">
                <img src={logo} alt="" className="h-9 w-9 object-contain animate-float" />
                <div className="text-xs">
                  <div className="font-semibold text-primary">A classroom in Hosur</div>
                  <div className="text-muted-foreground">Saturday science club, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-1xl pl-10 px-5 py-14 text-center align-middle">
          <div className="grid items-end">
            <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              We build learning where the road runs out — through teachers, tinkering, and trust.
            </h2>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">What we do</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">Three programs, one promise</h2>
          </div>
          <Link to="/about" className="hidden text-sm font-medium text-primary underline-offset-4 hover:underline md:block">
            Read full approach →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className="card-textured group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_0_oklch(0.32_0.09_252_/_0.15)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-${p.accent}/15 text-${p.accent}`}>
                <span className="font-display text-xl font-bold">0{i+1}</span>
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{p.tag}</div>
              <h3 className="mt-1 font-display text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-${p.accent} transition-transform duration-500 group-hover:scale-x-100`} />
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 pb-20">
        <StatsRow />
      </section>

      {/* PEOPLE BEHIND IT */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">The people behind it</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">A small core team. A wide circle of hands.</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Two full-time entrepreneurs and over a hundred volunteers across India — teachers, designers, parents, alumni.
              </p>
            </div>
            <Link to="/about" className="btn-flat btn-flat-hover btn-outline-flat">Full team →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "Deepali Gotadke", r: "Founder & Trustee", i: "DG", c: "bg-leaf/20 text-leaf", img: deepaliImg },
              { n: "Tanisha Gotadke", r: "Programs Director", i: "TG", c: "bg-primary/15 text-primary",img: tanishaImg },
              
            ].map((t) => (
              <div key={t.n} className="card-textured p-14 text-center transition-transform duration-300 hover:-translate-y-1">
                <div className={`mx-auto flex h-36 w-36 items-center justify-center rounded-full ${t.c} font-display text-2xl font-bold overflow-hidden`}>
                  {t.img ? (
                    <img src={t.img} alt={t.n} className="h-full w-full object-cover" />
                  ) : (
                     t.i
                 )}
                </div>
                <div className="mt-4 text-xl font-semibold text-primary">{t.n}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{t.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* STORY */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className=" pt-10 text-xs font-semibold uppercase tracking-[0.2em] text-sun">A note from the founder</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">Message from the Founder</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our journey is inspired by a simple belief: every individual deserves an opportunity to learn, grow, innovate, and succeed. Through our initiatives, we strive to empower women, youth, entrepreneurs, and communities to transform their dreams into meaningful impact.
            </p>
            <p className="mt-3 mb-3 leading-relaxed text-muted-foreground">
              Together, we can create a more inclusive, innovative, and sustainable future.
            </p>
            <div className="flex max-w-sm items-center space-x-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
              <div className="space-y-1">
                  <h4 className="pl-2 text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                      Deepali Shital Gotadke
                  </h4>
                  <p className="pl-2 text-sm font-medium text-muted-foreground">
                      Founder Trustee
                  </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="card-textured grid grid-cols-2 gap-3 p-4">
              {[
                { k: "Books distributed", v: "12,400" },
                { k: "STEM kits in classrooms", v: "640" },
                { k: "Mentor hours / month", v: "1,800" },
                { k: "Districts reached", v: "9" },
              ].map((s) => (
                <div key={s.k} className="rounded-md border border-border bg-paper p-4">
                  <div className="font-display text-2xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 pb-24">
        <div className="card-textured relative overflow-hidden bg-primary p-10 text-primary-foreground md:p-14">
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-sun/25 blur-2xl" />
          <div className="relative grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">A dream is a small thing to share.</h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Your contribution helps us Train women entrepreneurs, Empower youth, Promote sustainability, Enable digital inclusion, Support SMEs and much more
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/donate" className="btn-flat btn-flat-hover btn-sun">Donate</Link>
              <Link to="/contact" className="btn-flat btn-flat-hover" style={{backgroundColor:"transparent", color:"var(--color-primary-foreground)", border:"1.5px solid var(--color-primary-foreground)", backgroundImage:"none"}}>Volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
