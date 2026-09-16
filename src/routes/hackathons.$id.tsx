import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getHackathon } from "@/data/hackathons";
import { Badge, ImagePlaceholder, Page, Panel, Section } from "@/components/ui-kit";

export const Route = createFileRoute("/hackathons/$id")({
  loader: ({ params }) => {
    const hackathon = getHackathon(params.id);
    if (!hackathon) throw notFound();
    return { hackathon };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Hackathon not found — G.Shobhitha" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.hackathon.name} — G.Shobhitha`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.hackathon.problem },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.hackathon.problem },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: HackathonDetail,
});

function HackathonDetail() {
  const { hackathon } = Route.useLoaderData();

  return (
    <Page eyebrow="Hackathon" title={hackathon.name} intro={hackathon.type}>
      <Link
        to="/hackathons"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} /> All hackathons
      </Link>

      <div className="mt-6 space-y-2 text-sm text-muted-foreground">
        <p>Date: {hackathon.date}</p>
        <p>Organised by: {hackathon.event}</p>
        <p>Title / Idea title: {hackathon.title}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {hackathon.technologies.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Panel>
          <h2 className="text-lg">Problem statement</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{hackathon.problem}</p>
        </Panel>
        <Panel>
          <h2 className="text-lg">Description</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {hackathon.description}
          </p>
        </Panel>
      </div>

      {hackathon.projectFocus && (
        <Section title="Project focus">
          <Panel>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {hackathon.projectFocus}
            </p>
          </Panel>
        </Section>
      )}

      {hackathon.projectConnection && (
        <Section title="Project connection">
          <Panel>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {hackathon.projectConnection}
            </p>
          </Panel>
        </Section>
      )}

      <Section title="Images">
        <div className="grid gap-4 sm:grid-cols-2">
          {hackathon.screenshots.map((s, i) => (
            <ImagePlaceholder key={i} label={`${s.caption} — add your image`} />
          ))}
        </div>
      </Section>

    </Page>
  );
}
