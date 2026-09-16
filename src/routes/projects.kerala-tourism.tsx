import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProject } from "@/data/projects";

const project = getProject("kerala-tourism");

export const Route = createFileRoute("/projects/kerala-tourism")({
  head: () => ({
    meta: [
      { title: "Kerala Tourism Travel Guide — G.Shobhitha" },
      {
        name: "description",
        content:
          "A guided, voice-assisted travel platform for discovering destinations and exploring Kerala through an interactive experience.",
      },
      { property: "og:title", content: "Kerala Tourism Travel Guide — G.Shobhitha" },
      {
        property: "og:description",
        content: "An interactive Kerala travel experience built with React, TypeScript, Figma and AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (project ? <ProjectDetail project={project} /> : null),
});
