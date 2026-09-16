import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/ui-kit";
import nptelCertificate from "@/assets/certificates/nptel-python-certificate.png.asset.json";
import bharatBuildsCertificate from "@/assets/certificates/bharat-builds-certificate.png.asset.json";
import adobeCertificate from "@/assets/certificates/adobe-hackathon-certificate.png.asset.json";
import threxCertificate from "@/assets/certificates/threx-certificate.png.asset.json";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — G.Shobhitha" },
      {
        name: "description",
        content:
          "Certifications earned by G.Shobhitha, including NPTEL Joy of Computing using Python and hackathon participation credentials.",
      },
      { property: "og:title", content: "Certifications — G.Shobhitha" },
      {
        property: "og:description",
        content: "Courses and credentials completed by G.Shobhitha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Certifications,
});

const certifications = [
  {
    course: "Joy of Computing using Python",
    org: "NPTEL",
    duration: "12-week course",
    score: "82%",
    credential: "Elite + Silver",
    period: "Jan–Apr 2026",
    image: nptelCertificate.url,
    imageAlt: "NPTEL Elite certificate for The Joy of Computing using Python awarded to G Shobhitha",
    description:
      "Completed a 12-week NPTEL course focused on Python programming, computational thinking, and problem solving.",
  },
  {
    course: "BHARAT BUILDS",
    org: "Hackathon Participation",
    image: bharatBuildsCertificate.url,
    imageAlt: "BHARAT BUILD certificate of participation awarded to G Shobhitha",
    description:
      "Participated in Bharat Builds and explored innovative technology solutions through a hackathon-based problem-solving experience.",
  },
  {
    course: "Adobe Hackathon",
    org: "Hackathon Participation",
    image: adobeCertificate.url,
    imageAlt: "Adobe University Hackathon certificate of participation awarded to G Shobhitha",
    description:
      "Participated in the Adobe Hackathon, gaining experience in collaborative problem solving and developing technology-driven ideas.",
  },
  {
    course: "THREX",
    org: "Hackathon Participation",
    image: threxCertificate.url,
    imageAlt: "THREX Hackathon certificate of participation awarded to G Shobhitha",
    description:
      "Participated in THREX, gaining experience in idea development, problem solving, and exploring technology-based solutions.",
  },
];

function Certifications() {
  return (
    <Page
      eyebrow="Certifications"
      title="Courses & credentials"
      intro="Certifications and courses I've completed as part of my continuous learning journey."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c) => (
          <article key={c.course} className="surface-panel hover-lift p-5">
            <img
              src={c.image}
              alt={c.imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-video w-full rounded-lg border border-border bg-muted object-contain"
            />
            <h2 className="mt-5 text-lg">{c.course}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {c.org}{"duration" in c && c.duration ? ` · ${c.duration}` : ""}
            </p>
            {"score" in c && c.score && "credential" in c && c.credential && (
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md border border-border bg-muted/40 p-3">
                  <dt className="text-xs text-muted-foreground">Score</dt>
                  <dd className="mt-1 text-foreground">{c.score}</dd>
                </div>
                <div className="rounded-md border border-border bg-muted/40 p-3">
                  <dt className="text-xs text-muted-foreground">Credential</dt>
                  <dd className="mt-1 text-foreground">{c.credential}</dd>
                </div>
              </dl>
            )}
            {"period" in c && c.period && (
              <p className="mt-4 text-sm text-muted-foreground">Course period: {c.period}</p>
            )}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
          </article>
        ))}
      </div>
    </Page>
  );
}
