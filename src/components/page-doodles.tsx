// Subtle hand-drawn doodle background layer.
// Drop <PageDoodles variant="home" /> as a direct child of the page root.
// It paints behind all sections; opaque section backgrounds naturally
// break the pattern so it never feels uniform.

type Variant = "home" | "about" | "goals" | "achievements" | "contact" | "donate";

// A pool of doodle "tiles". Each is an SVG fragment drawn in a 400x400 box.
const TILES = {
  squiggle: (
    <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
      <path d="M10 120 C 60 20, 120 240, 180 100 S 300 20, 390 160" />
      <path d="M10 240 C 70 160, 130 340, 200 220 S 320 150, 390 290" />
      <path d="M10 350 C 60 280, 140 380, 220 320 S 320 270, 390 360" />
    </g>
  ),
  blob: (
    <g fill="none" stroke="currentColor" strokeWidth="5">
      <path d="M80 200 C 60 110, 180 60, 260 90 S 360 200, 320 280 S 180 360, 110 310 S 100 250, 80 200 Z" />
      <path d="M130 210 C 120 160, 200 130, 240 160 S 290 230, 260 270 S 180 290, 145 260 Z" />
    </g>
  ),
  crosses: (
    <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none">
      <path d="M30 50 L70 90 M70 50 L30 90" />
      <path d="M100 130 L140 170 M140 130 L100 170" />
      <path d="M180 60 L220 100 M220 60 L180 100" />
      <path d="M260 140 L300 180 M300 140 L260 180" />
      <path d="M340 70 L380 110 M380 70 L340 110" />
      <path d="M50 220 L90 260 M90 220 L50 260" />
      <path d="M150 250 L195 295 M195 250 L150 295" />
      <path d="M240 230 L285 275 M285 230 L240 275" />
      <path d="M320 260 L365 305 M365 260 L320 305" />
      <path d="M80 330 L125 375 M125 330 L80 375" />
      <path d="M200 340 L245 385 M245 340 L200 385" />
      <path d="M300 340 L345 385 M345 340 L300 385" />
    </g>
  ),
  arcs: (
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
      <path d="M20 280 Q 90 160 190 220" />
      <path d="M170 60 Q 250 140 350 80" />
      <path d="M50 110 Q 120 40 190 90" />
      <path d="M210 300 Q 290 240 370 300" />
      <path d="M30 200 Q 130 130 230 200" />
      <path d="M200 180 Q 280 110 380 180" />
      <path d="M60 360 Q 160 290 260 360" />
    </g>
  ),
  dots: (
    <g fill="currentColor">
      {Array.from({ length: 60 }).map((_, i) => {
        const x = ((i * 47) % 380) + 10;
        const y = ((i * 91) % 360) + 20;
        const r = (i % 4) + 3;
        return <circle key={i} cx={x} cy={y} r={r} />;
      })}
    </g>
  ),
  zigzag: (
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M0 100 L40 60 L80 100 L120 60 L160 100 L200 60 L240 100 L280 60 L320 100 L360 60 L400 100" />
      <path d="M0 200 L40 160 L80 200 L120 160 L160 200 L200 160 L240 200 L280 160 L320 200 L360 160 L400 200" />
      <path d="M0 300 L40 260 L80 300 L120 260 L160 300 L200 260 L240 300 L280 260 L320 300 L360 260 L400 300" />
    </g>
  ),
  spiral: (
    <g fill="none" stroke="currentColor" strokeWidth="5">
      <path d="M200 200 m -10 0 a 10 10 0 1 1 20 0 a 20 20 0 1 1 -40 0 a 30 30 0 1 1 60 0 a 40 40 0 1 1 -80 0 a 50 50 0 1 1 100 0 a 60 60 0 1 1 -120 0 a 70 70 0 1 1 140 0 a 80 80 0 1 1 -160 0 a 90 90 0 1 1 180 0" />
    </g>
  ),
  starburst: (
    <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none">
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 18;
        const x1 = 200 + Math.cos(a) * 30;
        const y1 = 200 + Math.sin(a) * 30;
        const x2 = 200 + Math.cos(a) * 140;
        const y2 = 200 + Math.sin(a) * 140;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <circle cx="200" cy="200" r="22" />
    </g>
  ),
  scribble: (
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
      <path d="M20 70 q 30 -40 60 -10 t 50 20 t 60 -30 t 50 10 t 60 -20 t 50 30 t 60 -10" />
      <path d="M20 150 q 40 30 80 0 t 80 10 t 80 -30 t 80 20 t 60 -10" />
      <path d="M20 230 q 30 -30 60 0 t 60 10 t 60 -20 t 60 0 t 60 20 t 60 -10 t 60 5" />
      <path d="M20 310 q 40 20 80 -10 t 80 0 t 80 20 t 80 -20 t 60 10" />
      <path d="M20 370 q 30 -25 60 5 t 60 0 t 60 -15 t 60 5 t 60 10 t 60 -5" />
    </g>
  ),
  grid: (
    <g stroke="currentColor" strokeWidth="3" fill="none">
      <path d="M40 40 L40 360 M100 40 L100 360 M160 40 L160 360 M220 40 L220 360 M280 40 L280 360 M340 40 L340 360" />
      <path d="M40 40 L360 40 M40 100 L360 100 M40 160 L360 160 M40 220 L360 220 M40 280 L360 280 M40 340 L360 340" />
    </g>
  ),
  triangles: (
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round">
      <path d="M40 80 L90 20 L140 80 Z" />
      <path d="M180 60 L240 30 L260 110 Z" />
      <path d="M290 90 L360 70 L330 160 Z" />
      <path d="M60 180 L130 160 L100 250 Z" />
      <path d="M180 200 L260 180 L230 270 Z" />
      <path d="M290 220 L360 230 L320 310 Z" />
      <path d="M40 290 L120 280 L80 370 Z" />
      <path d="M170 310 L250 320 L210 380 Z" />
      <path d="M280 340 L360 350 L320 390 Z" />
    </g>
  ),
  waves: (
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
      <path d="M0 80 Q 50 40 100 80 T 200 80 T 300 80 T 400 80" />
      <path d="M0 140 Q 50 100 100 140 T 200 140 T 300 140 T 400 140" />
      <path d="M0 200 Q 50 160 100 200 T 200 200 T 300 200 T 400 200" />
      <path d="M0 260 Q 50 220 100 260 T 200 260 T 300 260 T 400 260" />
      <path d="M0 320 Q 50 280 100 320 T 200 320 T 300 320 T 400 320" />
    </g>
  ),
  hatch: (
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={i} x1={i * 18} y1={400} x2={i * 18 + 200} y2={0} />
      ))}
    </g>
  ),
} as const;

type TileKey = keyof typeof TILES;

const COLOR = "#0b1c3a";

// Build a dense recipe of ~22 tiles for a page using a seeded ordering
// so each page gets a different, non-uniform pattern that stretches
// well past the 6xl max-width container (left/right values go from -10% to ~95%).
function buildRecipe(
  order: TileKey[],
): Array<{ t: TileKey; top: string; left: string; size: number; rot: number; op: number }> {
  // 22 anchor positions spread across a long page in two columns plus a few stragglers.
  const anchors: Array<{ top: string; left: string }> = [
    { top: "1%",  left: "-10%" }, { top: "3%",  left: "62%" },
    { top: "8%",  left: "30%" },  { top: "11%", left: "78%" },
    { top: "15%", left: "-8%" },  { top: "19%", left: "55%" },
    { top: "24%", left: "25%" },  { top: "28%", left: "80%" },
    { top: "32%", left: "-6%" },  { top: "36%", left: "60%" },
    { top: "41%", left: "20%" },  { top: "45%", left: "78%" },
    { top: "50%", left: "-10%" }, { top: "54%", left: "55%" },
    { top: "59%", left: "28%" },  { top: "63%", left: "80%" },
    { top: "68%", left: "-8%" },  { top: "72%", left: "58%" },
    { top: "77%", left: "22%" },  { top: "81%", left: "78%" },
    { top: "86%", left: "-6%" },  { top: "90%", left: "55%" },
    { top: "95%", left: "30%" },
  ];
  // Sizes and rotations vary by index to avoid a uniform grid feel.
  const sizes = [360, 420, 320, 460, 380, 340, 440, 360, 400, 320, 480];
  const rots = [-12, 8, 0, -6, 14, 4, -10, 6, 0, 12, -4, 10, -8, 2, 6, -14, 4, 8, -6, 0, 10, -8, 4];
  const opByKind: Record<TileKey, number> = {
    squiggle: 0.16, blob: 0.14, crosses: 0.18, arcs: 0.16, dots: 0.20,
    zigzag: 0.15, spiral: 0.13, starburst: 0.16, scribble: 0.15,
    grid: 0.10, triangles: 0.16, waves: 0.14, hatch: 0.10,
  };

  return anchors
  .filter((_, i) => i % 3 === 0)
  .map((a, i) => {
    const t = order[i % order.length];
    return {
      t,
      top: a.top,
      left: a.left,
      size: sizes[i % sizes.length],
      rot: rots[i % rots.length],
      op: opByKind[t],
    };
  });
}

const RECIPES: Record<Variant, ReturnType<typeof buildRecipe>> = {
  home: buildRecipe([
    "squiggle", "crosses", "blob", "hatch", "starburst", "scribble", "waves",
    "dots", "arcs", "triangles", "zigzag", "spiral", "grid",
  ]),
  about: buildRecipe([
    "arcs", "zigzag", "spiral", "triangles", "hatch", "dots", "blob",
    "scribble", "crosses", "waves", "starburst", "squiggle", "grid",
  ]),
  goals: buildRecipe([
    "starburst", "scribble", "crosses", "grid", "triangles", "blob",
    "waves", "zigzag", "arcs", "dots", "hatch", "squiggle", "spiral",
  ]),
  achievements: buildRecipe([
    "triangles", "spiral", "dots", "arcs", "hatch", "scribble", "crosses",
    "blob", "waves", "starburst", "zigzag", "squiggle", "grid",
  ]),
  contact: buildRecipe([
    "blob", "dots", "scribble", "starburst", "zigzag", "triangles", "waves",
    "crosses", "hatch", "arcs", "spiral", "squiggle", "grid",
  ]),
  donate: buildRecipe([
    "crosses", "arcs", "spiral", "dots", "blob", "scribble", "waves",
    "triangles", "hatch", "zigzag", "starburst", "squiggle", "grid",
  ]),
};

export function PageDoodles({ variant }: { variant: Variant }) {
  const recipe = RECIPES[variant];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {recipe.map((d, i) => (
        <svg
          key={i}
          viewBox="0 0 400 400"
          width={d.size}
          height={d.size}
          style={{
            position: "absolute",
            top: d.top,
            left: d.left,
            transform: `rotate(${d.rot}deg)`,
            color: COLOR,
            opacity: d.op * 0.5,
          }}
        >
          {TILES[d.t]}
        </svg>
      ))}
    </div>
  );
}
