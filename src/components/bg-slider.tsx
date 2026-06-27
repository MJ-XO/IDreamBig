import { useEffect, useState } from "react";
import s1 from "@/assets/hero-children.jpg";
import s2 from "@/assets/slider-2.jpg";
import s3 from "@/assets/slider-3.jpg";

const slides = [
  { src: s1, caption: "Creating opportunities through knowledge, innovation, and action" },
  { src: s2, caption: "Empowering people. Strengthening communities. Building futures." },
  { src: s3, caption: "Every number represents a life touched, a skill gained, and a dream set in motion." },
];

export function BgSlider({ eyebrow, title }: { eyebrow?: string; title?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative h-[42vh] min-h-[650px] w-full overflow-hidden border-b border-border bg-primary">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== idx}
        >
          <img
            src={s.src}
            alt=""
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
        </div>
      ))}
      <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-end pl-30 px-5 pr-30 pb-10 text-primary-foreground">
        {eyebrow && (
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sun">{eyebrow}</div>
        )}
        {title && (
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>
        )}
        <p className="mt-3 max-w-md text-sm text-primary-foreground/85 md:text-base">
          {slides[i].caption}
        </p>
        <div className="mt-5 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "w-8 bg-sun" : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
