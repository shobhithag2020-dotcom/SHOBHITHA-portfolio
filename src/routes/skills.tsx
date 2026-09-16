import { createFileRoute } from "@tanstack/react-router";
import { Braces, Cpu, Globe, Wrench } from "lucide-react";
import { Page, Panel } from "@/components/ui-kit";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — G.Shobhitha" },
      {
        name: "description",
        content:
          "Programming languages, web technologies, AI, data science, and developer tools G.Shobhitha works with.",
      },
      { property: "og:title", content: "Skills — G.Shobhitha" },
      {
        property: "og:description",
        content: "Technologies and tools G.Shobhitha works with and is currently learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

const groups = [
  { title: "Programming", icon: Braces, items: ["Python", "C", "C++"] },
  {
    title: "Web",
    icon: Globe,
    items: ["HTML", "CSS", "JavaScript", "SQL", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "AI / Computer Vision",
    icon: Cpu,
    items: ["Machine Learning", "Data Science", "AI / LLM Integration", "OpenCV", "MediaPipe"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Antigravity",
      "Figma",
      "AI Studio",
      "AutoCAD",
      "Competitive Programming",
      "Website Development",
      "Software Development with AI",
      "Backend",
      "Data Structures and Algorithms",
      "Debugging",
    ],
  },
];

function Skills() {
  return (
    <Page
      eyebrow="Skills"
      title="Technologies I work with"
      intro="These are the programming languages, technologies, tools, and areas I work with or am actively learning."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map(({ title, icon: Icon, items }) => (
          <Panel key={title} hover>
            <div className="flex items-center gap-3">
              <Icon size={18} className="text-primary" />
              <h2 className="text-lg">{title}</h2>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
