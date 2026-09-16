import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/hackathons", label: "Hackathons" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-serif text-xl tracking-tight text-foreground"
        >
          {site.name}
          <span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "block rounded-md px-2 py-3 text-sm text-primary" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
