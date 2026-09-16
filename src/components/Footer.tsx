import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={site.github}
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <a
            href={site.linkedin}
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Send an email"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
