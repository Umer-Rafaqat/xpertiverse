import techno1 from "../../assets/images/techno1.jpeg";
import techno2 from "../../assets/images/techno2.jpg";
import tech3 from "../../assets/images/tech3.jpeg";
import tech4 from "../../assets/images/Launching.jfif";
import techno1_alt from "../../assets/images/DigitalTransformation.jpg"; // example for gallery
import techno2_alt from "../../assets/images/Cybersecurity.jpg";

export const projectsData = [
  {
    id: "ai-blog-generator",
    tag: "AI",
    title: "AI Blog Generator",
    heading: "AI Blog",
    heading1: " Generator",
    desc: "Generates blog posts automatically using AI.",
    img: techno1,
    category: "AI",
    rating: 5,
    technologies: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    gallery: [techno1, techno1_alt],
  },
  {
    id: "fixit-app",
    tag: "Mobile App",
    title: "FixIt App",
    heading: "FixIt",
    heading1: " App",
    desc: "An app that manages maintenance requests efficiently.",
    img: techno2,
    category: "Mobile Apps",
    rating: 4,
    technologies: ["React Native", "Firebase", "Redux"],
    gallery: [techno2, techno2_alt],
  },
  {
    id: "crypto-tracker",
    tag: "Finance",
    title: "Crypto Tracker",
    heading: "Crypto",
    heading1: " Tracker",
    desc: "Track cryptocurrency prices and trends in real-time.",
    img: tech3,
    category: "Websites",
    rating: 5,
    technologies: ["React", "CoinGecko API", "Chart.js", "Tailwind CSS"],
    gallery: [tech3],
  },
  {
    id: "launching-project",
    tag: "Automation",
    title: "Launching Project",
    heading: "Launching",
    heading1: " Project",
    desc: "Automation tool for workflow management.",
    img: tech4,
    category: "Automation",
    rating: 5,
    technologies: ["Python", "Selenium", "FastAPI"],
    gallery: [tech4],
  },
];
