import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  FileText,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Trophy,
  User,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G.Shobhitha — Computer Science Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of G.Shobhitha, a Computer Science student interested in AI/ML and Software Development.",
      },
      { property: "og:title", content: "G.Shobhitha — Computer Science Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, skills, certifications and hackathons of G.Shobhitha, a Computer Science student.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const cards = [
  { to: "/about", label: "About", desc: "Background, education and goals", icon: User },
  { to: "/skills", label: "Skills", desc: "Languages, web, AI and tools", icon: Wrench },
  { to: "/projects", label: "Projects", desc: "AI, IoT and web builds", icon: FolderGit2 },
  {
    to: "/certifications",
    label: "Certifications",
    desc: "Courses and credentials",
    icon: Award,
  },
  { to: "/hackathons", label: "Hackathons", desc: "Events and team builds", icon: Trophy },
  { to: "/resume", label: "Resume", desc: "Download my resume", icon: FileText },
  { to: "/contact", label: "Contact", desc: "Get in touch", icon: Mail },
] as const;

function Home() {
  return (
    <main className="ambient-glow mx-auto w-full max-w-6xl animate-fade-up px-4 py-14 sm:px-6 sm:py-20">
      <section className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <img
          src={site.profilePhoto}
          alt="G.Shobhitha"
          className="h-40 w-40 rounded-2xl border border-border object-cover sm:h-48 sm:w-48"
        />

        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <Sparkles size={13} className="text-accent" /> {site.role}
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl">{site.name}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Computer Science student interested in AI/ML and Software Development.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50"
            >
              About
            </Link>
            <Link
              to="/resume"
              className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50"
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={16} /> GitHub
            </a>
            <span aria-hidden className="text-border">
              |
            </span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="explore">
        <h2 id="explore" className="text-xl sm:text-2xl">
          Explore
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ to, label, desc, icon: Icon }) => (
            <Link key={to} to={to} className="surface-panel hover-lift block p-5">
              <Icon size={18} className="text-primary" />
              <h3 className="mt-3 text-lg">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
