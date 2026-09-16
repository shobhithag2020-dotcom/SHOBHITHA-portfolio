import { Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge, Bullets, ImagePlaceholder, Page, Panel, Section } from "@/components/ui-kit";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <Page eyebrow="Project" title={project.title} intro={project.tagline}>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} /> All projects
      </Link>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.status && <Badge>{project.status}</Badge>}
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <Section>
        <Panel>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </Panel>
      </Section>

      <Section title="Key features">
        <Panel>
          <Bullets items={project.features} />
        </Panel>
      </Section>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Panel>
          <h2 className="text-lg">Problem statement</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
        </Panel>
        <Panel>
          <h2 className="text-lg">Solution</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
        </Panel>
      </div>

      <Section title="Screenshots">
        <div className="grid gap-4 sm:grid-cols-2">
          {project.images.map((img) => (
            <ImagePlaceholder key={img.caption} label={`${img.caption} — add your image`} />
          ))}
        </div>
      </Section>

      <Section title="Architecture & workflow">
        <Panel>
          <ol className="space-y-3">
            {project.architecture.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 text-xs text-primary">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Panel>
      </Section>

      <Section title="Future improvements">
        <Panel>
          <Bullets items={project.future} />
        </Panel>
      </Section>

      <Section title="Links">
        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
          >
            <Github size={16} /> GitHub (link placeholder)
          </a>
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
          >
            <ExternalLink size={16} /> Demo (link placeholder)
          </a>
        </div>
      </Section>
    </Page>
  );
}
