export type Project = {
  slug: string;
  path: string;
  title: string;
  tagline: string;
  status?: string;
  tech: string[];
  description: string;
  features: string[];
  problem: string;
  solution: string;
  architecture: string[];
  future: string[];
  images: { caption: string }[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    slug: "hand-gesture-control",
    path: "/projects/hand-gesture-control",
    title: "AI Hand Gesture Control System",
    tagline:
      "An AI-powered hand gesture control system designed to enable hands-free interaction using real-time hand gesture recognition. A unique aspect of the project is its focus on people with upper-limb motor difficulties, including tremors. The system is being developed as an interactive and gamified platform where gesture-based activities can also support exercise and practice, making the experience more engaging and motivating.",
    status: "Currently Building",
    tech: ["Python", "OpenCV", "MediaPipe", "AI / LLM"],
    description:
      "An AI-powered hand gesture control system designed to enable hands-free interaction using real-time hand gesture recognition. A unique aspect of the project is its focus on people with upper-limb motor difficulties, including tremors. The system is being developed as an interactive and gamified platform where gesture-based activities can also support exercise and practice, making the experience more engaging and motivating.",
    features: [
      "Hand gesture recognition",
      "Pointer control",
      "Drawing / pen mode",
      "Scrolling",
      "Voice assistant",
      "AI chatbot",
      "Webcam interaction",
    ],
    problem:
      "Conventional input devices assume steady, precise hand movement. People with limited hand mobility, and users in hands-busy situations, are left without a comfortable way to interact with a computer.",
    solution:
      "A camera-based layer that reads hand landmarks in real time and maps them to familiar actions — moving a pointer, drawing, scrolling — combined with voice and chat assistance so the system can be driven with minimal physical effort.",
    architecture: [
      "Webcam frame capture with OpenCV",
      "Hand landmark detection using MediaPipe",
      "Gesture classification from hand landmark geometry",
      "Action mapping layer: pointer, pen, scroll modes",
      "Voice assistant and AI chatbot module for spoken commands and answers",
    ],
    future: [
      "Personalised gesture training per user",
      "Improved accuracy in low light",
      "Configurable gesture-to-action profiles",
      "Accessibility testing with real users",
    ],
    images: [{ caption: "Gesture pointer mode" }, { caption: "Pen / drawing mode" }],
    github: "#", // placeholder — add repository link
    demo: "#", // placeholder — add demo link
  },
  {
    slug: "safety-helmet",
    path: "/projects/safety-helmet",
    title: "IoT Smart Safety Helmet",
    tagline:
      "An IoT-based smart safety helmet that uses sensors to monitor heart rate, SpO₂, and fall impacts for construction worker safety.",
    tech: ["ESP32", "IoT", "Sensors", "Real-time monitoring"],
    description:
      "An IoT-based smart safety helmet for construction workers. Integrated sensors monitor heart rate, SpO₂, and fall impacts, while a buzzer and LED provide local alerts and a supervisor dashboard supports real-time monitoring.",
    features: [
      "Heat and environmental condition monitoring",
      "Heart-related safety indicators",
      "Fall and head impact detection",
      "Dangerous condition alerts",
      "On-helmet buzzer and LED warning",
      "Supervisor monitoring dashboard",
    ],
    problem:
      "On busy construction sites, unsafe conditions and worker distress often go unnoticed until after an incident. Supervisors have no live view of who may be at risk.",
    solution:
      "A sensor-equipped helmet that reacts locally with a buzzer and LED the moment a risky condition is detected, while streaming readings to a supervisor dashboard for site-wide awareness.",
    architecture: [
      "ESP32 microcontroller inside the helmet shell",
      "Sensor layer for environmental and safety readings",
      "Local alert unit: buzzer + LED",
      "Wireless transmission of readings to the server",
      "Supervisor dashboard showing live worker status",
    ],
    future: [
      "Longer battery life and power optimisation",
      "Alert history and reporting",
      "SMS / app notifications for supervisors",
      "Field testing on an active site",
    ],
    images: [{ caption: "Helmet hardware" }, { caption: "Supervisor dashboard" }],
    github: "#", // placeholder — add repository link
    demo: "#", // placeholder — add demo link
  },
  {
    slug: "kerala-tourism",
    path: "/projects/kerala-tourism",
    title: "Kerala Tourism Travel Guide",
    tagline:
      "A guided, voice-assisted travel platform designed to help users explore Kerala, discover destinations, and navigate places through an interactive travel experience.",
    status: "Built",
    tech: ["React", "TypeScript", "Figma", "AI"],
    description:
      "A guided, voice-assisted travel platform designed to help users explore Kerala, discover destinations, and navigate places through an interactive travel experience.",
    features: [
      "Destination discovery",
      "Interactive destination navigation",
      "Voice-guided tourism",
      "Smart route optimization",
      "Community travel features",
    ],
    problem:
      "Travellers juggle several apps — maps, reviews, blogs — and still miss lesser-known places or waste time on inefficient routes.",
    solution:
      "One guide that surfaces destinations, plans an optimised route, narrates places out loud while travelling, and lets travellers share tips with each other.",
    architecture: [
      "React and TypeScript front-end with routed destination pages",
      "Interactive navigation experience",
      "Route optimisation for multi-stop trips",
      "AI voice guidance for narrated tours",
      "Community layer for shared tips and reviews",
    ],
    future: [
      "Offline maps for low-network areas",
      "Regional language voice guidance",
      "Personalised itinerary suggestions",
      "Trip saving and sharing",
    ],
    images: [{ caption: "Destination discovery" }, { caption: "Route planning" }],
    github: "#", // placeholder — add repository link
    demo: "#", // placeholder — add demo link
  },
  {
    slug: "spotify-clone",
    path: "/projects/spotify-clone",
    title: "Spotify Clone",
    tagline:
      "A Spotify-inspired music streaming interface built using HTML and CSS to practice frontend web development and recreate the visual experience of a music streaming platform.",
    status: "Built",
    tech: ["HTML", "CSS"],
    description:
      "A Spotify-inspired music streaming interface built using HTML and CSS to practice frontend web development and recreate the visual experience of a music streaming platform.",
    features: ["To be updated"],
    problem: "To be updated",
    solution: "To be updated",
    architecture: ["To be updated"],
    future: ["To be updated"],
    images: [{ caption: "Spotify Clone interface" }],
    github: "#",
    demo: "#",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
