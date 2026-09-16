import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProject } from "@/data/projects";

const project = getProject("hand-gesture-control");

export const Route = createFileRoute("/projects/hand-gesture-control")({
  head: () => ({
    meta: [
      { title: "AI Hand Gesture Control System — G.Shobhitha" },
      {
        name: "description",
        content:
          "An AI-powered hand gesture control system currently being built for hands-free interaction and accessible, gamified practice.",
      },
      { property: "og:title", content: "AI Hand Gesture Control System — G.Shobhitha" },
      {
        property: "og:description",
        content: "An accessible hand gesture interaction system currently being built with Python, OpenCV, MediaPipe and AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (project ? <ProjectDetail project={project} /> : null),
});
