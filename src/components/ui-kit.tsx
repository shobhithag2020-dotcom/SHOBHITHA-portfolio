import type { ReactNode } from "react";

export function Page({
  title,
  eyebrow,
  intro,
  children,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="ambient-glow mx-auto w-full max-w-6xl animate-fade-up px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-3xl sm:text-4xl">{title}</h1>
        {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
      </header>
      <div className="mt-10">{children}</div>
    </main>
  );
}

export function Section({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-12 first:mt-0 ${className}`}>
      {title && <h2 className="mb-5 text-xl sm:text-2xl">{title}</h2>}
      {children}
    </section>
  );
}

export function Panel({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`surface-panel p-6 ${hover ? "hover-lift" : ""} ${className}`}>{children}</div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-foreground">
      {children}
    </span>
  );
}

export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-center text-xs text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
