export const HEADER_CONTENT = {
  logo: "Xpertiverse",
  tagline: "Technology & IT Solutions",
  mainMenu: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ],
  buttonText: "Get Started",
};



import AiFinance from "../../assets/images/hero6.png";

export const HERO_CONTENT = {
  badge: "Launch Your Professional Tech Website.",
  heading1: "Transform Your",
  heading2: "Digital Future",
  description: "Combining expertise with the latest technology trends to create impactful results.",
  buttons: {
    primary: "Get Started",
    secondary: "Learn More",
  },
  image: AiFinance,
};


import Aboutimg from "../../assets/images/Aboutimg.jpeg";

export const ABOUT_PAGE = {
  title: "Xpertiverse",
  subtitle: "About Us",
  description:
    "A passionate team of digital innovators dedicated to transforming businesses through cutting-edge technology and creative excellence.",
  overview: {
    title: "Xpertiverse Overview",
    text: `Xpertiverse Pvt Ltd is a leading digital innovation and technology solutions
company, empowering businesses with modern software development,
digital transformation, and result-driven IT services. We specialize
in creating scalable, intelligent, and user-centric solutions that help
brands accelerate growth in today’s competitive digital world.`,
    image: Aboutimg,
  },
};

export const DIFFERENCE_ITEMS = [
  {
    icon: "rocket",
    title: "Accelerated Growth",
    desc: "We enable brands to scale faster with data-driven strategies, modern frameworks, and performance-focused execution.",
  },
  {
    icon: "briefcase",
    title: "Business-Focused Solutions",
    desc: "Our solutions are tailored to revenue, performance, and ROI—not just design and development for the sake of delivery.",
  },
  {
    icon: "barchart",
    title: "Measured Performance",
    desc: "Every campaign, website, and application is monitored with analytics and KPIs to ensure measurable business impact.",
  },
];

export const MISSION_VISION_VALUES = {
  mission: {
    title: "Our Mission",
    desc: `To engineer digital superiority by delivering high-impact, scalable technology solutions that maximize our clients'
efficiency, market reach, and profitable growth.`,
  },
  vision: {
    title: "Our Vision",
    desc: `To be recognized as the trusted global partner for digital innovation, setting the industry standard for quality, technological expertise, and client transformation.`,
  },
  values: [
    "Integrity & Trust: Non-negotiable honesty.",
    "Mastery: Relentless pursuit of expertise.",
    "Client Focus: Building long-term, invested partnerships.",
    "Agility: Adaptive, future-proof problem-solving.",
  ],
};

export const CORE_VALUES = [
  {
    icon: "❤️",
    title: "Integrity & Transparency",
    desc: "Honesty and ethical practices in all relationships",
  },
  {
    icon: "⚡",
    title: "Innovation & Excellence",
    desc: "Embracing new technologies and creative solutions",
  },
  {
    icon: "👥",
    title: "Customer-Centric",
    desc: "Your success is our success and priority",
  },
  {
    icon: "🛡️",
    title: "Continuous Improvement",
    desc: "Always learning and evolving our methods",
  },
  {
    icon: "🌍",
    title: "Global Collaboration",
    desc: "Diverse perspectives creating better solutions",
  },
  {
    icon: "✔️",
    title: "Quality Assurance",
    desc: "Excellence in every project we deliver",
  },
];

export const GLOBAL_LOCATIONS = [
  { name: "Pakistan" },
  { name: "UAE" },
  { name: "Qatar" },
  { name: "UK" },
  { name: "International Clients" },
];


// IMAGES
import Aiimg from "../../assets/images/about1.png";
import Aboutus from "../../assets/images/about2.png";
import HappyClient from "../../assets/images/team1.jpg";
import HappyClient2 from "../../assets/images/team2.jpg";
import HappyClient3 from "../../assets/images/team3.webp";
import HappyClient4 from "../../assets/images/team4.webp";

// TEXT + IMAGES for About Innovation Section
export const ABOUT_INNOVATION = {
  badge: "About Us",
  headingWhite: "Innovating the Future",
  headingGradient: "with Trust & Excellence",
  description:
    "From advanced software development to robust cybersecurity, we help clients transform challenges into opportunities with innovation and integrity.",

  mainImages: {
    ai: Aiimg,
    overlay: Aboutus,
  },

  happyClientsBox: {
    ratingStars: "★★★",
    title: "10,000+ Client Happy",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    clientImages: [HappyClient, HappyClient2, HappyClient3, HappyClient4],
  },

  features: [
    {
      icon: "FaLightbulb",
      title: "Innovation First",
      desc: "Constantly exploring new technologies.",
    },
    {
      icon: "FaHandshake",
      title: "Integrity & Trust",
      desc: "We build lasting partnerships.",
    },
  ],

  miniFeatures: [
    { icon: "FaHandshake", text: "Innovation First" },
    { icon: "BsFillPersonCheckFill", text: "Client-Centric" },
    { icon: "VscWorkspaceTrusted", text: "Integrity & Trust" },
    { icon: "IoMdTrophy", text: "Excellence" },
  ],

  counters: [
    { label: "Projects Completed", value: 350 },
    { label: "Satisfied Clients", value: 250 },
    { label: "Client Satisfaction", value: 95, isPercent: true },
  ],
};



export const PERFORMANCE_TEXT = {
  heading: "Our Performance",
   heading1: "at a Glance",
  description:
    "Combining expertise with the latest technology trends to create impactful results.",
  stats: [
    { number: "350+", label: "Projects Completed" },
    { number: "250+", label: "Satisfied Clients" },
    { number: "95%", label: "Client Satisfaction" },
  ],
};

// src/data/projectsData.js

import techno1 from "../../assets/images/techno1.jpeg";
import techno2 from "../../assets/images/techno2.jpg";
import tech3 from "../../assets/images/tech3.jpeg";
import tech4 from "../../assets/images/Launching.jfif";

export const projectsData = [
  {
    tag: "AI",
    title: "AI Blog Generator",
    desc: "Generates blog posts automatically using AI.",
    img: techno1,
    category: "AI",
    rating: 5,
  },
  {
    tag: "Mobile App",
    title: "FixIt App",
    desc: "An app that manages maintenance requests efficiently.",
    img: techno2,
    category: "Mobile Apps",
    rating: 4,
  },
  {
    tag: "Finance",
    title: "Crypto Tracker",
    desc: "Track cryptocurrency prices and trends in real-time.",
    img: tech3,
    category: "Websites",
    rating: 5,
  },
   {
    tag: "Finance",
    title: "Crypto Tracker",
    desc: "Track cryptocurrency prices and trends in real-time.",
    img: tech4,
    category: "Automation",
    rating: 5,
  },
  // Add more projects here
];




import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaChartLine, 
  FaPaintBrush, 
  FaCloud, 
  FaLock 
} from "react-icons/fa";

export const SERVICES_CONTENT = {
  sectionTag: "Our Services",
  heading: "Smart solutions",
  heading1: "for modern businesses.",
  description:
    "From advanced software development to innovative digital solutions, our team delivers results that help businesses grow.",
  cards: [
    {
      title: "Custom Software Development",
      heading1: "Custom Software",
      heading2: " Development",
      desc: "Tailor-made software solutions designed to meet your unique business goals.",
      icon: FaLaptopCode,
      details: {
        longDesc:
          "We provide end-to-end custom software development services, ensuring that every application is aligned with your business objectives. Our solutions are scalable, secure, and user-friendly.",
        features: [
          "Requirement analysis & project planning",
          "Custom web and desktop software",
          "Integration with existing systems",
          "Maintenance & support"
        ],
        benefits: [
          "Streamline operations",
          "Increase productivity",
          "Improve business efficiency"
        ],
        tools: ["React.js, Node.js, Express", "PostgreSQL, MongoDB", "Docker, AWS, Azure"]
      }
    },
    {
      title: "Web & Mobile App Development",
       heading1: "Web & Mobile",
      heading2: " App Development",
      desc: "High-performance, user-friendly websites and mobile apps.",
      icon: FaMobileAlt,
      details: {
        longDesc:
          "We build responsive websites and mobile applications optimized for performance and user experience. Our apps are scalable and designed to drive engagement and conversions.",
        features: [
          "Cross-platform mobile apps",
          "Responsive web design",
          "API integration",
          "Performance optimization"
        ],
        benefits: [
          "Enhanced user experience",
          "Faster time-to-market",
          "Increased customer engagement"
        ],
        tools: ["React Native, Flutter", "Next.js, Tailwind CSS", "Firebase, AWS"]
      }
    },
    {
      title: "IT Consulting & Strategy",
       heading1: "IT Consulting &",
      heading2: " Strategy",
      desc: "Expert guidance to optimize your IT infrastructure and workflows.",
      icon: FaChartLine,
      details: {
        longDesc:
          "Our IT consulting services help businesses optimize their technology strategies, improve workflows, and implement best practices for efficient IT operations.",
        features: [
          "IT strategy planning",
          "Infrastructure assessment",
          "Cloud adoption guidance",
          "Security audits"
        ],
        benefits: [
          "Reduced operational costs",
          "Optimized IT workflows",
          "Improved decision-making"
        ],
        tools: ["Jira, Confluence", "AWS, Azure", "Microsoft 365"]
      }
    },
    {
      title: "Web Design & UX",
       heading1: "Web Design &",
      heading2: " UX",
      desc: "Modern, responsive, and SEO-friendly web design solutions.",
      icon: FaPaintBrush,
      details: {
        longDesc:
          "We create visually appealing, intuitive, and SEO-friendly designs that enhance user experience and drive conversions. Every design is crafted to reflect your brand identity.",
        features: [
          "UI/UX design",
          "Prototyping & wireframing",
          "Responsive design",
          "SEO-friendly layouts"
        ],
        benefits: [
          "Improved user engagement",
          "Higher conversion rates",
          "Consistent brand image"
        ],
        tools: ["Figma, Adobe XD", "Photoshop, Illustrator", "HTML5, CSS3"]
      }
    },
    {
      title: "Cloud Solutions & DevOps",
       heading1: "Cloud Computing &",
      heading2: " DevOps",
      desc: "Secure, scalable cloud infrastructures with automated deployment pipelines.",
      icon: FaCloud,
      details: {
        longDesc:
          "We offer cloud architecture and DevOps services to build scalable, secure, and reliable cloud infrastructures, enabling faster deployment and monitoring of applications.",
        features: [
          "Cloud migration & architecture",
          "CI/CD pipelines",
          "Infrastructure as code",
          "Monitoring & optimization"
        ],
        benefits: [
          "Scalable infrastructure",
          "Faster deployment",
          "Reliable performance"
        ],
        tools: ["AWS, Azure, GCP", "Docker, Kubernetes", "Terraform, Jenkins"]
      }
    },
    {
      title: "Cybersecurity & Risk Management",
       heading1: "Cybersecurity &",
      heading2: " Risk Management",
      desc: "Advanced protection solutions to keep your digital assets secure.",
      icon: FaLock,
      details: {
        longDesc:
          "Our cybersecurity services protect businesses from potential threats, ensuring data integrity, confidentiality, and compliance with industry standards.",
        features: [
          "Vulnerability assessments",
          "Penetration testing",
          "Security monitoring",
          "Risk management planning"
        ],
        benefits: [
          "Protection from cyber threats",
          "Data privacy compliance",
          "Business continuity"
        ],
        tools: ["Splunk, Wireshark", "Nmap, Nessus", "ISO 27001 standards"]
      }
    }
  ]
};



export const TESTIMONIALS_CONTENT = {
  sectionTag: "Testimonials",
  heading: "Hear from our",
  heading1: "valued clients",

  testimonials: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "Rachel Purnama",
      role: "COO of InnovateHub",
         image: "/images/team1.jpg",
      rating: 5,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "David Kevin",
      role: "CEO TechWave Solutions",
         image: "/images/team2.jpg",
      rating: 5,
    },
      {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "Rachel Purnama",
      role: "COO of InnovateHub",
         image: "/images/team3.webp",
      rating: 5,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "David Kevin",
      role: "CEO TechWave Solutions",
         image: "/images/team4.webp",
      rating: 5,
    },
     {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "David Kevin",
      role: "CEO TechWave Solutions",
         image: "/images/team2.jpg",
      rating: 5,
    },
  ],
};

export const SOLUTIONS_CONTENT = {
  leftFeatures: [
    {
      image: "/images/services3.png",
      title: "Innovation First",
      desc: "Constantly exploring new technologies",
    },
    {
      image: "/images/solution-logo.png",
      title: "Integrity & Trust",
      desc: "Building lasting partnerships with transparency.",
    },
  ],
  centerImage: "/images/solution.png",
  rightText: {
    heading: "Innovating the Future, One Solution at a Time",
    desc: "From advanced software development to robust cybersecurity",
  },
  sectionTitle: "Innovative Solutions for a Smarter Future",
};


export const TEAM_CONTENT = {
  sectionTag: "Our Team Work",
  heading: "Meet the Mind",
  heading1: "Behind the Scenes",
  description:
    "Our team is a group of passionate professionals dedicated to delivering cutting-edge technology solutions that empower your business growth.",

  teamMembers: [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      img: "/images/team1.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      img: "/images/team2.jpg",
    },
    {
      name: "David Carter",
      role: "Project Manager",
      img: "/images/team3.webp",
    },
    {
      name: "Olivia Martinez",
      role: "Data Scientist",
      img: "/images/team4.webp",
    },
      {
      name: "John Anderson",
      role: "CEO & Founder",
      img: "/images/team5.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      img: "/images/team9.avif",
    },
    {
      name: "David Carter",
      role: "Project Manager",
      img: "/images/team10.avif",
    },
  ],
};

// utils/constants/text.js

export const HERO_TECH_CONTENT = {
  sectionTag: "Technology Solutions",
  heading: "Your Trusted Partner in Technology \n and Innovation",
  description:
    "Innovative IT solutions to help your business grow, stay secure, and succeed in the digital era.",
  buttons: {
    primary: "Get Started",
    secondary: "Learn More",
  },
  stats: [
    { value: "350+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "10+", label: "Years of Experience" },
    { value: "39+", label: "Awards Won" },
  ],
};



export const projectSectionText = {
  topButton: "Portfolio",
  titleLine1: "Project's",
  titleLine2: "We've Delivered",
  description:
    "Delivering innovative solutions using modern technologies across multiple industries.",
  viewAllBtn: "View All Projects",
  viewDetailsBtn: "View Details",
  filters: ["All", "Websites", "Mobile Apps", "AI", "Automation", "Web Apps"],
};



export const companyContactData = {
  email: {
    heading: "Email",
    lines: ["example@mail.com", "hello.example2@mail.com"],
    icon: "MdOutlineMail",
   
  },
  phone: {
    heading: "Phone",
    lines: ["+123 456 7890", "+ (123) 3322 4455 632"],
    icon: "FiPhoneCall",
   
  },
  location: {
    heading: "Location",
    lines: ["Address line 01 lorem ipsum", "Las Vegas, USA"],
    icon: "SlLocationPin",
   
  },
};



// utils/constants/newsletter.js

export const NEWSLETTER_CONTENT = {
  heading: "Get in Touch",
  heading1: "with Xpertiverse",
  description:
    "Have questions, feedback, or want to discuss a project? Reach out to our team and we’ll get back to you promptly.",
  buttonText: "Contact Us",
};


// utils/constants/footer.js

export const FOOTER_CONTENT = {
  logo: "Xpertiverse",
  tagline: "Xpertiverse - Technology and IT Solutions",
  description:
    "Xpertiverse is a trusted Technology & IT Solutions provider, helping businesses grow with innovative, secure, and scalable digital solutions.",
  copyright: "CopyRight 2025 By Enative",
  navigation: ["Home", "About", "Services", "Portfolio"],
  quickLinks: ["Pages", "FAQs", "Contact", "Blog"],
  policies: ["Terms and Services", "Privacy Policy", "Cookie Policy"],
};

