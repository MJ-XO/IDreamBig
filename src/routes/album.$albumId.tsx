import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PageDoodles } from "@/components/page-doodles";
import { getAlbumPhotos } from "@/data/album-photos";

export const Route = createFileRoute("/album/$albumId")({
  head: () => ({
    meta: [
      { title: "Album — iDreamBig" },
      { name: "description", content: "Browse and upload photos from this iDreamBig album." },
    ],
  }),
  component: AlbumPage,
});

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function AlbumPage() {
  const { albumId } = Route.useParams();
  const photos = getAlbumPhotos(albumId);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageDoodles variant="goals" />
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Link to="/news/workshops" className="text-sm font-medium text-leaf hover:text-primary">
          ← Back to albums
        </Link>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Album</div>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
              {titleFromSlug(albumId)}
            </h1>
            <p className="mt-3 text-muted-foreground">{photos.length} photos in this album.</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((src, i) => (
            <div key={i} className="group relative">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}