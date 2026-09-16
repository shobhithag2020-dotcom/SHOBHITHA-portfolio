import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Page, Panel, Section } from "@/components/ui-kit";
import { site } from "@/data/site";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — G.Shobhitha" },
      {
        name: "description",
        content: "Download the resume of G.Shobhitha, a Computer Science student interested in AI/ML and software development.",
      },
      { property: "og:title", content: "Resume — G.Shobhitha" },
      { property: "og:description", content: "Resume download for G.Shobhitha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <Page
      eyebrow="Resume"
      title="My resume"
      intro="Download a copy of my resume below."
    >
      <Panel>
        <a
          href={site.resumeFile}
          download
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download size={16} /> Download Resume
        </a>
      </Panel>

      <Section title="Summary">
        <Panel>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Computer Science student pursuing a B.Tech in Computer Science and Engineering at SRM
            Institute of Science and Technology alongside a BS in Data Science and Applications
            from IIT Madras. Interested in software development, web development, machine learning,
            and data science, with practical experience building projects across AI, computer
            vision, IoT, and frontend development. Continuously strengthening problem-solving,
            programming, and full-stack development skills through hands-on learning.
          </p>
        </Panel>
      </Section>
    </Page>
  );
}
