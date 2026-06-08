import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/idreambig-logo.png";
import logo1 from "@/assets/idreambig-logo.jpg";
import s3 from "@/assets/slider-3.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/goals", label: "Our Goal" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur">
      <div className="flex items-center justify-between pl-30 pr-30 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative inline-flex h-20 w-42 items-center justify-center">
            
            <img
              src={logo}
              alt="iDreamBig"
              className="max-h-36 w-auto object-contain"
            />
          </span>
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
            {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}
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
            An educational trust dedicated to nurturing curiosity, dignity, and opportunity in every child.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sun">Explore</h4>
          <ul className="mt-1 grid grid-cols-2 gap-x-46 gap-y-2 text-sm">
            <li><Link to="/" className="hover:text-sun">Home</Link></li>
            <li><Link to="/about" className="hover:text-sun">About Us</Link></li>
            <li><Link to="/goals" className="hover:text-sun">Our Goal</Link></li>
            <li><Link to="/achievements" className="hover:text-sun">Achievements</Link></li>
            <li><Link to="/contact" className="hover:text-sun">Contact</Link></li>
            <li><Link to="/donate" className="hover:text-sun">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase pl-42 tracking-wider text-sun">Reach Us</h4>
          <ul className="mt-3 space-y-2 text-sm pl-42 text-primary-foreground/85">
            <li>hello@idreambig.org</li>
            <li>+91 98000 12345</li>
            <li>Bengaluru, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} iDreamBig Educational Trust. Registered non-profit.
      </div>
    </footer>
  );
} 
