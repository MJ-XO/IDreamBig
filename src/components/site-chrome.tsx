import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/idreambig-logo.png";
import logo1 from "@/assets/idreambig-logo.jpg";
import s3 from "@/assets/slider-3.jpg";


/**
 * ───────────────────────────────────────────────────────────────────────────
 * NAVIGATION CONFIG
 * ───────────────────────────────────────────────────────────────────────────
 * Want to add a new link to the navbar?              → push to `nav`
 * Want to add a new dropdown menu to the navbar?    → push to `dropdowns`
 *
 * Each dropdown is:
 *   { label: "Visible Label", items: [{ to: "/route", label: "Item" }, ...] }
 *
 * The component renders every dropdown automatically — desktop AND mobile.
 * ───────────────────────────────────────────────────────────────────────────
 */
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/goals", label: "Our Programs" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

type DropdownItem = { to: string; label: string };
type Dropdown = { label: string; items: DropdownItem[] };

const dropdowns: Dropdown[] = [
  {
    label: "News & Events",
    items: [
      { to: "/news/workshops", label: "Upcoming Workshops" },
      { to: "/news/conferences", label: "Conferences" },
      { to: "/news/training", label: "Training Programs" },
      { to: "/news/stories", label: "Success Stories" },
      { to: "/news/announcements", label: "Announcements" },
    ],
  },
  // 👉  Add another dropdown here, e.g.:
  // {
  //   label: "Programs",
  //   items: [
  //     { to: "/programs/literacy", label: "Literacy" },
  //     { to: "/programs/stem", label: "STEM" },
  //   ],
  // },
];

function NavDropdown({ menu }: { menu: Dropdown }) {
  return <DesktopDropdown menu={menu} />;
}

function DesktopDropdown({ menu }: { menu: Dropdown }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="group relative inline-flex items-center gap-1 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        {menu.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-leaf transition-all duration-300 group-hover:w-full" />
      </button>

      {/*
        Panel sits flush against the button (top-full, no margin) so the
        mouse never crosses an empty gap. Visual breathing room comes from
        the panel's own top padding.
      */}
      <div
        role="menu"
        className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="rounded-lg border border-border bg-paper/95 p-2 shadow-[0_8px_0_-2px_color-mix(in_oklab,var(--color-primary)_20%,transparent)] backdrop-blur">
          {menu.items.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({ menu, onNavigate }: { menu: Dropdown; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
      >
        {menu.label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open &&
        menu.items.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={onNavigate}
            className="block rounded-md px-5 py-2 text-sm font-medium hover:bg-secondary"
          >
            {l.label}
          </Link>
        ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          
          <img
              src={logo}
              alt="iDreamBig"
              className="max-h-24 w-auto object-contain "
            />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-leaf transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {dropdowns.map((d) => (
            <NavDropdown key={d.label} menu={d} />
          ))}

          <Link to="/donate" className="btn-flat btn-flat-hover btn-sun">
            Donate
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md border border-border p-2 text-primary"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}

            {dropdowns.map((d) => (
              <MobileDropdown key={d.label} menu={d} onNavigate={() => setOpen(false)} />
            ))}

            <Link to="/donate" onClick={() => setOpen(false)} className="btn-flat btn-flat-hover btn-sun mt-2 self-start">
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border text-primary-foreground">
      <div className="absolute inset-0 -z-10 select-none pointer-events-none">
        <img 
          src={s3} 
          alt="" 
          className="h-full w-full object-cover blur-md scale-105 opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/65 to-primary/35" />
        </div>
      <div className=" relative z-10 mx-auto grid max-w-8xl gap-10 pl-30 px-5 pr-0 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo1} alt="" className="h-24 w-24 object-contain" />
          </div>
          <p className="mt-0 text-sm text-primary-foreground/75">
            Empowering women, youth, entrepreneurs, and communities through digital innovation, entrepreneurship, sustainability, and inclusive development.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sun">Explore</h4>
          <ul className="mt-1 grid grid-cols-2 gap-x-46 gap-y-2 text-sm">
            <li><Link to="/" className="hover:text-sun">Home</Link></li>
            <li><Link to="/about" className="hover:text-sun">About Us</Link></li>
            <li><Link to="/goals" className="hover:text-sun">Our Goal</Link></li>
            <li><Link to="/achievements" className="hover:text-sun">Achievements</Link></li>
            <li><Link to="/news/workshops" className="hover:text-sun">News & Achievements</Link></li>
            <li><Link to="/contact" className="hover:text-sun">Contact</Link></li>
            <li><Link to="/donate" className="hover:text-sun">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase pl-42 tracking-wider text-sun">Reach Us</h4>
          <ul className="mt-3 space-y-2 text-sm pl-42 text-primary-foreground/85">
            <li>deepali@webdreams.in</li>
            <li>+91 97411 97999</li>
            <li>#51 - B, Behind Mahaveer School, Bailappanavar Nagar,Hubli - 580 029</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} iDreamBig Educational Trust. Registered non-profit.
      </div>
    </footer>
  );
}
