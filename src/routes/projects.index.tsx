import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge, ImagePlaceholder, Page } from "@/components/ui-kit";
import handGestureCover from "@/assets/hand-gesture-cover.jpg";
import safetyHelmetCover from "@/assets/safety-helmet-cover.jpg";
import keralaTourismCover from "@/assets/kerala-tourism-cover.jpg";
import spotifyCloneCover from "@/assets/spotify-clone-cover.jpg";

const projectCovers: Record<string, { src: string; alt: string }> = {
  "hand-gesture-control": {
    src: handGestureCover,
    alt: "AI hand gesture tracking using computer vision",
  },
  "safety-helmet": {
    src: safetyHelmetCover,
    alt: "Construction safety helmet equipped with IoT monitoring sensors",
  },
  "kerala-tourism": {
    src: keralaTourismCover,
    alt: "Kerala houseboat and mobile travel navigation through the backwaters",
  },
  "spotify-clone": {
    src: spotifyCloneCover,
    alt: "Music streaming interface displayed on a laptop beside headphones",
  },
};

function ProjectCover({ slug, title }: { slug: string; title: string }) {
  const cover = projectCovers[slug];

  if (!cover) {
    return <ImagePlaceholder label={`${title} — add cover image`} />;
  }

  return (
    <img
      src={cover.src}
      alt={cover.alt}
      width={1400}
      height={788}
      loading="lazy"
      className="aspect-video w-full rounded-lg border border-border object-cover"
    />
  );
}

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — G.Shobhitha" },
      {
        name: "description",
        content:
          "Projects by G.Shobhitha across software development, AI, computer vision, IoT, web development and data-driven applications.",
      },
      { property: "og:title", content: "Projects — G.Shobhitha" },
      {
        property: "og:description",
        content: "AI, IoT, web and software projects built and explored by G.Shobhitha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Page
      eyebrow="Projects"
      title="Things I've built"
      intro="Projects I've built and explored across software development, AI, computer vision, IoT, web development, and data-driven applications."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article key={p.slug} className="surface-panel hover-lift flex flex-col p-5">
            <ProjectCover slug={p.slug} title={p.title} />
            <h2 className="mt-5 text-lg">{p.title}</h2>
            {p.status && (
              <div className="mt-3">
                <Badge>{p.status}</Badge>
              </div>
            )}
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <Link
              to={p.path}
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-accent"
            >
              View project <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </Page>
  );
}
