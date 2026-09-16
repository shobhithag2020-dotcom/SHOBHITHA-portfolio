import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { hackathons } from "@/data/hackathons";
import { Badge, Page } from "@/components/ui-kit";

export const Route = createFileRoute("/hackathons/")({
  head: () => ({
    meta: [
      { title: "Hackathons — G.Shobhitha" },
      {
        name: "description",
        content:
          "Hackathon participation by G.Shobhitha, including Adobe Hackathon, BHARAT BUILDS and THREX.",
      },
      { property: "og:title", content: "Hackathons — G.Shobhitha" },
      {
        property: "og:description",
        content: "Hackathon events and technology ideas explored by G.Shobhitha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hackathons,
});

function Hackathons() {
  return (
    <Page
      eyebrow="Hackathons"
      title="Hackathon participation"
      intro="Hackathons where I've explored ideas, collaborated on problems, and developed technology-driven solutions."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {hackathons.map((h) => (
          <article key={h.id} className="surface-panel hover-lift flex flex-col p-5">
            <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <CalendarDays size={14} className="text-accent" /> {h.date}
            </p>
            <h2 className="mt-3 text-lg">{h.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{h.event}</p>
            <p className="mt-2 text-xs text-accent">{h.type}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {h.problem}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {h.technologies.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <Link
              to="/hackathons/$id"
              params={{ id: h.id }}
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-accent"
            >
              View details <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </Page>
  );
}
