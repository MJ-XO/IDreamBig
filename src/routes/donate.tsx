import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — iDreamBig Educational Trust" },
      { name: "description", content: "Your contribution funds learning kits, mentors, and scholarships for children across India. 80G tax-eligible." },
      { property: "og:title", content: "Donate to iDreamBig" },
      { property: "og:description", content: "Fund a child's year of learning. Every rupee is receipted and openly reported." },
    ],
  }),
  component: Donate,
});

const tiers = [
  { amt: 500, label: "Digital Learning Support", desc: "Helps provide educational resources, training materials, and digital learning access." },
  { amt: 2500, label: "Entrepreneur Starter Kit", desc: "Supports a woman or youth entrepreneur with essential training and mentorship." },
  { amt: 6000, label: "Skill Development Program", desc: "Funds capacity-building workshops and practical skill training sessions." },
  { amt: 25000, label: "Community Empowerment Initiative", desc: "Helps organize outreach programs that benefit underserved communities." },
];

function Donate() {
  const [picked, setPicked] = useState<number>(2500);
  const [custom, setCustom] = useState("");
  const value = custom ? Number(custom) : picked;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="donate" />
      <SiteHeader />
      <BgSlider eyebrow="Support our work" title="A dream is a small thing to share." />

      <section className="mx-auto max-w-8xl pl-30 px-5 pr-30 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Why give</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Every contribution creates opportunities, builds confidence, and transforms futures.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Your support helps us empower women entrepreneurs, train youth, promote digital inclusion, strengthen small businesses, and create sustainable community development programs.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {tiers.map((t) => (
                <button
                  key={t.amt}
                  onClick={() => { setPicked(t.amt); setCustom(""); }}
                  className={`card-textured p-5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                    value === t.amt ? "ring-2 ring-leaf" : ""
                  }`}
                >
                  <div className="font-display text-2xl font-bold text-primary">₹{t.amt.toLocaleString()}</div>
                  <div className="mt-1 text-sm font-semibold text-leaf">{t.label}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <aside className="card-textured h-fit p-7">
            <h3 className="font-display text-xl font-semibold text-primary">Make a contribution</h3>
            <p className="mt-1 text-sm text-muted-foreground">All donations are receipted via email.</p>

            <label className="mt-6 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Amount (INR)
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-border bg-paper px-3 py-2 focus-within:ring-2 focus-within:ring-leaf/40">
              <span className="text-muted-foreground">₹</span>
              <input
                type="number"
                inputMode="numeric"
                value={custom || picked}
                onChange={(e) => setCustom(e.target.value)}
                className="w-full bg-transparent text-lg font-semibold text-primary outline-none"
              />
            </div>

            <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full name</label>
            <input className="mt-2 w-full rounded-md border border-border bg-paper px-3 py-2 outline-none focus:ring-2 focus:ring-leaf/40" placeholder="Your name" />

            <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
            <input type="email" className="mt-2 w-full rounded-md border border-border bg-paper px-3 py-2 outline-none focus:ring-2 focus:ring-leaf/40" placeholder="you@example.com" />

            <label className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="h-4 w-4 accent-leaf" defaultChecked /> Send me an 80G receipt
            </label>

            <button
              onClick={() => alert(`Thank you! Donation of ₹${value.toLocaleString()} initialized. (Payments coming soon.)`)}
              className="btn-flat btn-flat-hover btn-sun mt-6 w-full justify-center"
            >
              Donate ₹{value.toLocaleString()} →
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Secure payments via Razorpay · UPI, cards, netbanking
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-8xl gap-6 pl-30 px-5 pr-30 py-14 md:grid-cols-3">
          {[
            { t: "Bank transfer", d: "iDreamBig Educational Trust · HDFC Bank · A/C 50100123456789 · IFSC HDFC0001234" },
            { t: "UPI", d: "donate@idreambig — scan our QR at any branch event." },
            { t: "Corporate / CSR", d: "Write to csr@idreambig.org for partnership decks and impact MoUs." },
          ].map((b) => (
            <div key={b.t} className="card-textured p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-sun">{b.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
