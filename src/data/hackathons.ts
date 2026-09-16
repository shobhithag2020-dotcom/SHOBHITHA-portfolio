// Placeholder hackathon entries — edit these with your real details later.
export type Hackathon = {
  id: string;
  name: string;
  event: string;
  type: string;
  date: string;
  title: string;
  problem: string;
  description: string;
  projectFocus?: string;
  projectConnection?: string;
  technologies: string[];
  screenshots: { caption: string }[];
};

export const hackathons: Hackathon[] = [
  {
    id: "adobe-hackathon",
    name: "Adobe Hackathon",
    event: "Adobe",
    type: "Hackathon Participation",
    date: "9 August 2026",
    title: "Adobe Hackathon",
    problem:
      "Participating in a technology-focused hackathon environment to explore ideas, solve problems collaboratively, and develop innovative solutions.",
    description:
      "Participated in the Adobe Hackathon, gaining hands-on experience in collaborative problem solving, idea development, and working within a time-bound hackathon environment. The experience helped strengthen my ability to think creatively, work with others, and explore technology-driven solutions.",
    technologies: [],
    screenshots: [{ caption: "Adobe Hackathon" }],
  },
  {
    id: "bharat-builds",
    name: "BHARAT BUILDS",
    event: "SRM",
    type: "Hackathon Participation",
    date: "8 September 2026",
    title: "Adaptive Multimodal Human-Computer Interaction",
    problem: "Open Innovation",
    projectFocus: "Adaptive Multimodal Human-Computer Interaction",
    description:
      "Participated in Bharat Builds with an Open Innovation problem statement focused on Adaptive Multimodal Human-Computer Interaction. The project explored how computer vision and AI-based interaction can be used to create more natural and accessible ways for users to interact with technology. Python, MediaPipe, and OpenCV were used as the core technologies for developing and exploring the solution.",
    projectConnection:
      "This hackathon project is related to my AI Hand Gesture Control System, which explores gesture-based interaction and accessibility for people with upper-limb motor difficulties. The project is currently under development.",
    technologies: ["Python", "MediaPipe", "OpenCV"],
    screenshots: [{ caption: "BHARAT BUILDS" }],
  },
  {
    id: "threx",
    name: "THREX",
    event: "To be updated",
    type: "Hackathon Participation",
    date: "1 February 2026",
    title: "Local Demand Supply Business Insight Platform",
    problem:
      "To explore how local demand and supply information can be used to generate useful business insights and support better understanding of local market needs.",
    description:
      "Participated in THREX with the idea 'Local Demand Supply Business Insight Platform'. The concept focused on exploring local demand and supply patterns and transforming relevant information into meaningful business insights. The hackathon provided an opportunity to develop the idea, think through a real-world problem, and explore how technology could support data-driven decision making.",
    technologies: ["To be updated based on the technologies used for the idea."],
    screenshots: [{ caption: "THREX" }],
  },
];

export const getHackathon = (id: string) => hackathons.find((h) => h.id === id);
