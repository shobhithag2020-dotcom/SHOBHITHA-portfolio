import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProject } from "@/data/projects";

const project = getProject("safety-helmet");

export const Route = createFileRoute("/projects/safety-helmet")({
  head: () => ({
    meta: [
      { title: "IoT Smart Safety Helmet — G.Shobhitha" },
      {
        name: "description",
        content:
          "An ESP32-based smart safety helmet for construction workers with local buzzer and LED alerts and a supervisor monitoring dashboard.",
      },
      { property: "og:title", content: "IoT Smart Safety Helmet — G.Shobhitha" },
      {
        property: "og:description",
        content: "Real-time worker safety monitoring built with ESP32 and IoT sensors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (project ? <ProjectDetail project={project} /> : null),
});
