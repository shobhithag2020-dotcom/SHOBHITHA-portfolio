import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProject } from "@/data/projects";

const project = getProject("spotify-clone");

export const Route = createFileRoute("/projects/spotify-clone")({
  head: () => ({
    meta: [
      { title: "Spotify Clone — G.Shobhitha" },
      {
        name: "description",
        content: "A Spotify-inspired music streaming interface built using HTML and CSS.",
      },
      { property: "og:title", content: "Spotify Clone — G.Shobhitha" },
      {
        property: "og:description",
        content: "A frontend practice project recreating a music streaming platform interface.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (project ? <ProjectDetail project={project} /> : null),
});