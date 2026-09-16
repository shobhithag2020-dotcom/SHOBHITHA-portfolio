import { createFileRoute } from "@tanstack/react-router";
import { Bullets, Page, Panel, Section } from "@/components/ui-kit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — G.Shobhitha" },
      {
        name: "description",
        content:
          "About G.Shobhitha, a Computer Science student pursuing degrees at SRM Institute of Science and Technology and IIT Madras.",
      },
      { property: "og:title", content: "About — G.Shobhitha" },
      {
        property: "og:description",
        content: "Education, interests, learning focus and career goals of G.Shobhitha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Page
      eyebrow="About"
      title="A little about me"
      intro="I'm G. Shobhitha, a Computer Science student pursuing a B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology, along with a BS in Data Science and Applications from IIT Madras. I enjoy building software, solving problems, and exploring how technology can be used to create useful and practical solutions. I'm particularly interested in software development, web development, machine learning, and data science, and I'm continuously learning by working on projects and improving my technical skills."
    >
      <Section title="Introduction">
        <Panel>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I'm passionate about learning how software works and turning ideas into working
            solutions. I enjoy exploring different areas of computer science, from building web
            applications and solving programming problems to experimenting with machine learning
            and data-driven applications. Through projects, coding practice, and continuous
            learning, I'm working towards becoming a strong and well-rounded software developer.
          </p>
        </Panel>
      </Section>

      <Section title="Education">
        <Panel>
          <h3 className="text-lg">Modern Senior Secondary School</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            School Education · Passed out in 2024 · Class 10: 96% · Class 12: 90.2%
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Completed my school education with a strong foundation in academics and computer
            science.
          </p>
          <div className="my-5 border-t border-border" />
          <h3 className="text-lg">SRM Institute of Science and Technology</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            B.Tech — Computer Science and Engineering (Core) · 2025 – 2029 · CGPA: 10.0
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Currently pursuing my undergraduate degree, building a strong foundation in computer
            science, programming, software development, and problem solving.
          </p>
          <div className="my-5 border-t border-border" />
          <h3 className="text-lg">IIT Madras</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            BS in Data Science and Applications · 2025 – 2029 · CGPA: 7.8
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Pursuing a dual degree alongside my B.Tech, with a focus on data science, analytics,
            programming, and computational problem solving.
          </p>
        </Panel>
      </Section>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Panel>
          <h2 className="text-lg">Interests</h2>
          <div className="mt-4">
            <Bullets
              items={[
                "Web Development",
                "Full-Stack Development",
                "Competitive Programming",
                "Machine Learning",
                "Data Science",
              ]}
            />
          </div>
        </Panel>
        <Panel>
          <h2 className="text-lg">Learning focus</h2>
          <div className="mt-4">
            <Bullets
              items={[
                "Data Structures and Algorithms (DSA)",
                "Improving problem-solving and logical thinking skills",
                "Backend Development",
                "Strengthening Python and programming fundamentals",
                "Practical AI / Machine Learning integration",
                "Data handling and analytics",
                "Building clean and user-friendly web interfaces",
              ]}
            />
          </div>
        </Panel>
      </div>

      <Section title="Career goals">
        <Panel>
          <p className="text-sm leading-relaxed text-muted-foreground">
            My goal is to grow into a skilled software developer who can design, build, and
            maintain reliable and meaningful software solutions. I want to work on challenging
            real-world problems, strengthen my skills across full-stack development and backend
            technologies, and continue exploring areas such as machine learning and data science.
            I'm looking forward to learning from experienced teams, contributing to impactful
            projects, and continuously improving as a developer.
          </p>
        </Panel>
      </Section>
    </Page>
  );
}
