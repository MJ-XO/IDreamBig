import { Link } from "@tanstack/react-router";

export type AlbumItem = {
  title: string;
  date?: string;
  img: string;
  caption?: string;
};

export function albumSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function AlbumGrid({ items }: { items: AlbumItem[] }) {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Link
          key={i}
          to="/album/$albumId"
          params={{ albumId: albumSlug(it.title) }}
          className="group relative block"
        >
          {/* Transparent hover card behind the picture */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-3 rounded-2xl border border-primary/25 bg-paper/40 backdrop-blur-sm opacity-0 scale-95 -rotate-1 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:shadow-[0_10px_0_0_color-mix(in_oklab,var(--color-primary)_20%,transparent)]"
          />
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-3 text-center">
              <div className="font-display text-lg font-semibold text-primary">{it.title}</div>
              {it.date && <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{it.date}</div>}
              {it.caption && <div className="mt-1 text-sm text-muted-foreground">{it.caption}</div>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
