import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TEducation,
  TCertification,
  TSocialLink,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certifications",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI & Data Science Specialist",
    icon: web,
  },
  {
    title: "Android App Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Engineer",
    icon: backend,
  },
  {
    title: "Software & Network Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: javascript,
    category: "Frontend",
  },
  {
    name: "Java & Adv. Java",
    icon: typescript,
    category: "Backend",
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
  },
  {
    name: "Kotlin & Android",
    icon: mobile,
    category: "Frontend",
  },
  {
    name: "SQL & PL/SQL",
    icon: mongodb,
    category: "Database",
  },
  {
    name: "HTML 5 & CSS 3",
    icon: html,
    category: "Frontend",
  },
  {
    name: "Machine Learning",
    icon: threejs,
    category: "Tools",
  },
  {
    name: "C & C++",
    icon: git,
    category: "Backend",
  },
  {
    name: "PHP & Full Stack",
    icon: nodejs,
    category: "Backend",
  },
  {
    name: "Networking & Security",
    icon: docker,
    category: "Tools",
  },
];

const experiences: TExperience[] = [
  {
    title: "Android Development Industrial Intern",
    companyName: "UEF EdTech Pvt. Ltd.",
    icon: mobile,
    iconBg: "#10B981",
    date: "1st June – 15th July",
    points: [
      "Successfully completed an intensive 6-week industrial training in native Android application development.",
      "Engineered mobile user interfaces using modern layout paradigms, activity lifecycle management, and intent flows.",
      "Integrated RESTful APIs and handled backend database connectivity for real-time mobile data synchronization.",
      "Mastered application debugging, memory profiling, and Google Play packaging & deployment methodologies.",
    ],
  },
  {
    title: "Networking & Technical Support Intern",
    companyName: "Ajay Cables & Broadband Service OPC Pvt. Ltd.",
    icon: backend,
    iconBg: "#06B6D4",
    date: "07/06/2023 – 18/07/2023",
    points: [
      "Completed 6-week industrial training gaining deep exposure to enterprise network architecture and broadband infrastructure.",
      "Performed hands-on technical troubleshooting, line testing, router configurations, and hardware diagnostics.",
      "Collaborated with customer support teams to resolve live network connectivity issues and optimize service uptime.",
      "Acquired practical experience in applying technical engineering principles within corporate business workflows.",
    ],
  },
];

const educationData: TEducation[] = [
  {
    degree: "B.Tech / B.E. in Artificial Intelligence & Data Science (3rd Year)",
    institution: "Siddhivinayak Technical Campus, Shegaon",
    location: "Shegaon, Maharashtra",
    duration: "Pursuing (2025 – 2028)",
    description:
      "Expanding advanced technical expertise in Artificial Intelligence, Machine Learning, Data Analytics, Cloud Engineering, Full Stack Development, and Android Applications.",
    achievements: [
      "ArtPark CodeForge Hackathon Participant (IISc Bangalore / Unstop)",
      "Presented AI-Based IoT Health Monitoring System at Technical Festivals",
    ],
    iconBg: "#915EFF",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Hingoli",
    location: "Hingoli, Maharashtra",
    duration: "Completed (2025)",
    gpaOrGrade: "Aggregate: 75.80%",
    description:
      "Built strong foundation in software engineering, object-oriented programming (C, C++, Java, C#), relational databases (SQL/PL-SQL), networking, and operating systems.",
    achievements: [
      "Secured 75.80% Aggregate marks in Computer Engineering Diploma",
      "Engineered desktop software projects including IP Finder and Management Systems",
    ],
    iconBg: "#11998e",
  },
  {
    degree: "10th Standard (SSC)",
    institution: "Manik Memorial Aryan School, Hingoli",
    location: "Hingoli, Maharashtra",
    duration: "Passed (2021)",
    gpaOrGrade: "Score: 75.00%",
    description:
      "Completed secondary education with strong fundamentals in Mathematics, Science, and Information Technology.",
    achievements: ["Scored 75% in Secondary School Certificate (SSC) Examinations"],
    iconBg: "#F59E0B",
  },
];

const certificationsData: TCertification[] = [
  {
    title: "ArtPark CodeForge Hackathon - Prototype Round",
    issuer: "Indian Institute of Science (IISc), Bangalore (via Unstop)",
    date: "Recent",
    credentialUrl: "https://unstop.com",
    description:
      "Collaborated in a high-intensity hackathon prototype development round to create innovative real-world software solutions.",
    skillsBadge: ["IISc Bangalore", "Unstop", "Prototype Dev", "Teamwork", "AI"],
  },
  {
    title: "6-Week Industrial Training in Android Development",
    issuer: "UEF EdTech Pvt. Ltd.",
    date: "1st June – 15th July",
    description:
      "Completed certified industrial training covering Android App Architecture, API Integration, Activity Lifecycle, and App Deployment.",
    skillsBadge: ["Android", "Mobile Dev", "Java/Kotlin", "API Integration"],
  },
  {
    title: "6-Week Industrial Training in Networking & Infrastructure",
    issuer: "Ajay Cables & Broadband Service OPC Pvt. Ltd.",
    date: "07/06/2023 – 18/07/2023",
    description:
      "Completed professional industry training in networking infrastructure, troubleshooting, broadband systems, and IT workflows.",
    skillsBadge: ["Networking", "Infrastructure", "Troubleshooting", "Support"],
  },
];

const socialLinks: TSocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/vina-yak711",
    iconName: "github",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/?text=Hi%20Vinayak",
    iconName: "whatsapp",
  },
  {
    name: "Email (Primary)",
    url: "mailto:vinuu02052005@gmail.com",
    iconName: "mail",
  },
  {
    name: "Email (Secondary)",
    url: "mailto:subhashdeshmane0@gmail.com",
    iconName: "mail",
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Vinayak demonstrated exceptional technical curiosity and dedication during his 6-week Android training. His ability to grasp complex API integrations and mobile UI design is impressive.",
    name: "Training Mentor",
    designation: "Senior Android Engineer",
    company: "UEF EdTech Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Vinayak showed great analytical thinking and problem-solving skills during his industrial networking training. Highly motivated engineer!",
    name: "Technical Supervisor",
    designation: "Infrastructure Lead",
    company: "Ajay Cables & Broadband Service",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "AI-Based Health Monitoring System",
    description:
      "Smart healthcare solution presented at technical festivals, combining Artificial Intelligence algorithms with IoT sensory data to monitor patient health metrics in real-time.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ai-machine-learning", color: "green-text-gradient" },
      { name: "iot", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/vina-yak711/ai-health-monitoring",
    liveDemoLink: "https://github.com/vina-yak711/ai-health-monitoring",
  },
  {
    name: "Web Resume Builder System",
    description:
      "Web-based application designed for university students to quickly build, format, and generate professional, ATS-compliant resumes with responsive previews.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "html-css", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/vina-yak711/resume-builder",
    liveDemoLink: "https://github.com/vina-yak711/resume-builder",
  },
  {
    name: "Startup Government Scheme Portal",
    description:
      "Digital web portal designed for startup businesses to discover, compare, and apply for government initiatives, grants, and support programs.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
      { name: "full-stack", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/vina-yak711/startup-scheme-portal",
    liveDemoLink: "https://github.com/vina-yak711/startup-scheme-portal",
  },
  {
    name: "Advanced IP Address Finder",
    description:
      "Comprehensive network utility providing detailed IP address analysis, geolocation tracking, network diagnostic logs, and security verification.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "networking", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/vina-yak711/ip-address-finder",
    liveDemoLink: "https://github.com/vina-yak711/ip-address-finder",
  },
  {
    name: "Hotel Management System",
    description:
      "Full-fledged management software system handling room allocations, guest check-in/out records, billing calculation, and database administration.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "pl-sql", color: "green-text-gradient" },
      { name: "desktop-app", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/vina-yak711/hotel-management-system",
    liveDemoLink: "https://github.com/vina-yak711/hotel-management-system",
  },
  {
    name: "Student Entry & Exit Record System",
    description:
      "Automated record management application for educational campuses to log and audit daily student movements, timing, and security authorization.",
    tags: [
      { name: "csharp", color: "blue-text-gradient" },
      { name: "vbnet", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/vina-yak711/student-record-system",
    liveDemoLink: "https://github.com/vina-yak711/student-record-system",
  },
];

export {
  services,
  technologies,
  experiences,
  educationData,
  certificationsData,
  socialLinks,
  testimonials,
  projects,
};
