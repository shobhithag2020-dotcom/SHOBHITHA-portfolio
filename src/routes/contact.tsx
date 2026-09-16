import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { Page, Panel } from "@/components/ui-kit";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — G.Shobhitha" },
      {
        name: "description",
        content: "Get in touch with G.Shobhitha by email, GitHub, LinkedIn, LeetCode or the contact form.",
      },
      { property: "og:title", content: "Contact — G.Shobhitha" },
      { property: "og:description", content: "Reach out to G.Shobhitha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass =
    "w-full rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none";

  return (
    <Page
      eyebrow="Contact"
      title="Get in touch"
      intro="Happy to talk about projects, collaborations or opportunities."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <Panel>
          <h2 className="text-lg">Elsewhere</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={16} className="text-primary" /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github size={16} className="text-primary" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin size={16} className="text-primary" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Code2 size={16} className="text-primary" /> LeetCode
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Email and profile links are available above.
          </p>
        </Panel>

        <Panel>
          <h2 className="text-lg">Send a message</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">
                Name
              </label>
              <input id="name" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={inputClass}
                placeholder="How can I help?"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send message
            </button>
            {sent && (
              <p role="status" className="text-sm text-accent">
                Thanks — your message has been captured in the form. Connect an email service later
                to actually deliver it.
              </p>
            )}
          </form>
        </Panel>
      </div>
    </Page>
  );
}
