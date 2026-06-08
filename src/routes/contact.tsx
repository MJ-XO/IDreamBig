import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { BgSlider } from "@/components/bg-slider2";
import { PageDoodles } from "@/components/page-doodles";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — iDreamBig Educational Trust" },
      { name: "description", content: "Get in touch with iDreamBig — donate, volunteer, partner, or simply say hello." },
      { property: "og:title", content: "Contact iDreamBig" },
      { property: "og:description", content: "Donate, volunteer, partner, or say hello." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="contact" />
      <SiteHeader />
      <BgSlider eyebrow="Contact" title="Let's build something good, together." />


      {/* Hero */}
      

      {/* Contact details + form */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-8xl gap-12 pl-30 px-5 pr-30 py-20 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sun">Get in touch</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Donate, volunteer, or just say hello.</h2>
            <p className="mt-4 text-primary-foreground/80">
              For donations, our team will share an 80G receipt and a quarterly impact update.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-md bg-sun/20 text-sun">✉</span> hello@idreambig.org</li>
              <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-md bg-sun/20 text-sun">☎</span> +91 98000 12345</li>
              <li className="flex items-start gap-3"><span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-sun/20 text-sun">⌂</span> 14, Cooke Town, Bengaluru — 560005</li>
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-md border border-primary-foreground/15 bg-primary-foreground/[0.04] p-4">
                <div className="text-xs uppercase tracking-wider text-sun">Office hours</div>
                <div className="mt-1 font-semibold">Mon – Sat</div>
                <div className="text-primary-foreground/75">9:30 AM – 6:30 PM IST</div>
              </div>
              <div className="rounded-md border border-primary-foreground/15 bg-primary-foreground/[0.04] p-4">
                <div className="text-xs uppercase tracking-wider text-sun">Press & media</div>
                <div className="mt-1 font-semibold">press@idreambig.org</div>
                <div className="text-primary-foreground/75">Replies within 48 hrs</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6"
    >
      <div className="grid gap-4">
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-primary-foreground/70">Your name</span>
          <input required className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-sun" />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-primary-foreground/70">Email</span>
          <input required type="email" className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-sun" />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-primary-foreground/70">How would you like to help?</span>
          <select className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-primary px-3 py-2 text-sm outline-none focus:border-sun">
            <option>Donate</option>
            <option>Volunteer</option>
            <option>Partner with us</option>
            <option>Just saying hello</option>
          </select>
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-primary-foreground/70">Message</span>
          <textarea rows={4} className="mt-1 w-full rounded-md border border-primary-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-sun" />
        </label>
        <button type="submit" className="btn-flat btn-flat-hover btn-sun mt-2 self-start">
          {sent ? "Thank you — we'll be in touch ✓" : "Send message"}
        </button>
      </div>
    </form>
  );
}
