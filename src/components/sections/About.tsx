import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cpu,
  GraduationCap,
  Briefcase,
  Trophy,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Smartphone,
  Quote,
  Target,
  Sparkles,
  Calendar,
  Building2,
  CheckCircle2,
  Network,
  Terminal,
} from "lucide-react";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string | React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon, description }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    glareColor="#915EFF"
    className="w-full sm:w-[280px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card hover:shadow-purple-500/25 transition-all duration-300 h-full"
    >
      <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-between rounded-[20px] px-6 py-6 text-center h-full border border-gray-700/30">
        <div className="p-4 rounded-2xl bg-purple-500/10 text-accent border border-purple-500/20 my-2">
          {typeof icon === "string" ? (
            <img src={icon} alt={title} className="h-12 w-12 object-contain" />
          ) : (
            icon
          )}
        </div>

        <div>
          <h3 className="text-center text-[18px] font-bold text-primary mb-2">
            {title}
          </h3>
          <p className="text-secondary text-[13px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="w-12 h-1 rounded-full bg-accent/30 mt-4" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [activeTab, setActiveTab] = useState<"journey" | "trainings" | "hackathons" | "projects">("journey");

  const highlightBadges = [
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      title: "AI & Data Science",
      desc: "ML Models & Data Engineering",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-accent" />,
      title: "Computer Engineering",
      desc: "Strong Academic Foundation",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      title: "Android & Full Stack",
      desc: "Mobile & Web Applications",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "Network & Security",
      desc: "Infrastructure & Cybersecurity",
    },
  ];

  const industrialTrainings = [
    {
      title: "Android Development Industrial Training",
      company: "UEF EdTech Pvt. Ltd.",
      duration: "1st June – 15th July",
      type: "6-Week Industrial Training",
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description:
        "Comprehensive hands-on training in mobile application development using modern industry standards.",
      highlights: [
        "Android App Architecture & Activity Lifecycle",
        "Modern UI/UX Design & Layout Systems",
        "REST API Integration & JSON Parsing",
        "Database Connectivity & Local Storage",
        "Debugging, Testing & Application Deployment",
      ],
    },
    {
      title: "Networking & Infrastructure Training",
      company: "Ajay Cables & Broadband Service OPC Pvt. Ltd.",
      duration: "07/06/2023 – 18/07/2023",
      type: "6-Week Industrial Training",
      icon: <Network className="w-6 h-6 text-cyan-400" />,
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description:
        "Practical industry exposure to networking architecture, hardware, and customer technical systems.",
      highlights: [
        "Networking Concepts & Topology Configuration",
        "Broadband Infrastructure & Fiber Networking",
        "Technical Troubleshooting & Diagnostics",
        "Customer Support Systems & Workflow Integration",
        "Real Business Environment Operations",
      ],
    },
  ];

  const hackathons = [
    {
      title: "ArtPark CodeForge Hackathon",
      organizer: "Indian Institute of Science (IISc), Bangalore (via Unstop)",
      role: "Team Prototype Developer",
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      description:
        "Participated with team in high-intensity prototype development round to create innovative tech solutions.",
      skills: ["Problem Solving", "Rapid Prototyping", "Teamwork", "System Design"],
    },
    {
      title: "Technical Festivals - Smart Healthcare Presentation",
      organizer: "State/Regional Technical Competitions",
      role: "Innovator & Presenter",
      icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
      description:
        "Presented an AI-Based IoT Health Monitoring System combining Artificial Intelligence with IoT technologies for smart healthcare.",
      skills: ["AI + IoT Integration", "Smart Healthcare", "Technical Presentation", "Innovation"],
    },
  ];

  const majorProjectsList = [
    "AI-Based Health Monitoring System",
    "Advanced IP Address Finder",
    "Web-Based Resume Builder for Students",
    "Government Scheme Portal for Startups",
    "Hotel Management System",
    "Student Entry & Exit Record Management",
    "Typing Speed Test Engine",
    "Custom Native Android Applications",
  ];

  const techSkillSet = [
    { category: "Languages", skills: ["Python", "Java", "Advanced Java", "C", "C++", "Kotlin", "C#", "VB.NET", "SQL", "PL/SQL"] },
    { category: "Web & Mobile", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Node.js", "PHP", "Android Dev"] },
    { category: "Core & Emerging", skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Generative AI", "Computer Graphics", "Ethical Hacking", "Network Security"] },
  ];

  const servicesList: IServiceCard[] = [
    {
      index: 0,
      title: "AI & Data Science",
      icon: <Brain className="w-10 h-10 text-purple-400" />,
      description:
        "Developing intelligent Machine Learning models, data analysis pipelines, and smart AI solutions.",
    },
    {
      index: 1,
      title: "Android App Development",
      icon: <Smartphone className="w-10 h-10 text-emerald-400" />,
      description:
        "Building native, high-performance Android applications with clean activity architecture and API integration.",
    },
    {
      index: 2,
      title: "Full Stack Development",
      icon: <Code2 className="w-10 h-10 text-accent" />,
      description:
        "Architecting responsive web apps using modern frameworks (React, Node.js, TypeScript, SQL databases).",
    },
    {
      index: 3,
      title: "Software & Network Engg.",
      icon: <Terminal className="w-10 h-10 text-cyan-400" />,
      description:
        "Engineering desktop systems, network security solutions, and robust software architectures.",
    },
  ];

  return (
    <>
      {/* Header & Motto */}
      <div className="flex flex-col items-start gap-3">
        <Header useMotion={true} {...config.sections.about} />
        
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.6)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-accent font-semibold text-xs sm:text-sm shadow-md"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Motto: Learn • Build • Innovate • Inspire • Repeat</span>
        </motion.div>
      </div>

      {/* Main Intro Bio */}
      <motion.div
        variants={fadeIn("", "", 0.15, 1)}
        className="text-secondary mt-6 max-w-4xl text-[16px] sm:text-[17px] leading-[30px] space-y-4"
      >
        <p className="bg-tertiary/60 p-5 rounded-2xl border border-gray-700/40 backdrop-blur-sm">
          <strong className="text-primary text-lg block mb-1">Hello, I'm Vinayak Subhash Deshmane.</strong>
          I am a passionate and technology-driven <span className="text-accent font-medium">Artificial Intelligence & Data Science</span> student with a strong academic foundation in <span className="text-purple-300 font-medium">Computer Engineering</span> and a deep interest in building innovative software solutions. For me, technology is not just about writing code—it's about solving real-world problems, creating meaningful digital experiences, and continuously learning to stay ahead in an ever-evolving industry.
        </p>

        <p>
          My journey into technology began at <strong>Manik Memorial Aryan School, Hingoli</strong> (10th - 75%), followed by my <strong>Diploma in Computer Engineering at Government Polytechnic, Hingoli</strong> (75.80% Aggregate), where I developed a strong foundation in programming, networking, databases, and software engineering. Driven by curiosity, I am currently pursuing my 3rd year in <strong>Artificial Intelligence & Data Science at Siddhivinayak Technical Campus, Shegaon</strong>, expanding my expertise across AI, Machine Learning, Cloud Computing, Full Stack Web Engineering, and Android Development.
        </p>
      </motion.div>

      {/* Feature Highlight Badges */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {highlightBadges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 rounded-2xl bg-tertiary border border-gray-700/40 hover:border-accent hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-purple-500/10">
              {badge.icon}
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-primary">
                {badge.title}
              </h4>
              <p className="text-[12px] text-secondary">{badge.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Philosophy & Vision Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Philosophy */}
        <motion.div
          variants={fadeIn("right", "spring", 0.25, 0.75)}
          className="p-6 rounded-2xl bg-gradient-to-br from-tertiary via-tertiary to-purple-950/20 border border-purple-500/25 relative overflow-hidden shadow-xl"
        >
          <div className="absolute -right-4 -bottom-4 opacity-10 text-accent">
            <Quote className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-accent/20 text-accent border border-purple-500/30">
              <Quote className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-primary">Personal Philosophy</h3>
          </div>
          <p className="text-secondary text-[14px] sm:text-[15px] italic leading-relaxed relative z-10">
            "Technology is not just about writing code; it is about solving real-world problems, creating meaningful experiences, and continuously pushing the boundaries of innovation. I believe that learning never stops, and every challenge is an opportunity to become a better engineer."
          </p>
        </motion.div>

        {/* My Vision */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="p-6 rounded-2xl bg-gradient-to-br from-tertiary via-tertiary to-blue-950/20 border border-cyan-500/25 relative overflow-hidden shadow-xl"
        >
          <div className="absolute -right-4 -bottom-4 opacity-10 text-cyan-400">
            <Target className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-primary">My Vision</h3>
          </div>
          <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed relative z-10">
            To become a highly skilled AI Engineer, Software Engineer, and Technology Innovator, capable of developing intelligent systems that create a positive impact on society. I aspire to contribute to advanced AI research, build scalable software products, and solve meaningful real-world problems.
          </p>
        </motion.div>
      </div>

      {/* Interactive Tabs Section */}
      <div className="mt-14">
        <div className="flex items-center justify-start gap-2 border-b border-gray-700/50 pb-3 overflow-x-auto no-scrollbar">
          {[
            { id: "journey", label: "Industrial Training", icon: <Briefcase className="w-4 h-4" /> },
            { id: "trainings", label: "Hackathons & Events", icon: <Trophy className="w-4 h-4" /> },
            { id: "hackathons", label: "Major Projects", icon: <Code2 className="w-4 h-4" /> },
            { id: "projects", label: "Technical Skillset", icon: <Cpu className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-accent text-white shadow-lg shadow-purple-500/25"
                  : "bg-tertiary text-secondary hover:text-primary hover:bg-gray-800/60"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Industrial Training */}
        {activeTab === "journey" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {industrialTrainings.map((training, index) => (
              <div
                key={index}
                className="bg-tertiary rounded-2xl p-6 border border-gray-700/40 hover:border-accent transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-tertiary border border-gray-700/40">
                      {training.icon}
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${training.badgeColor}`}>
                      {training.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mt-4">{training.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-secondary mt-2">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent font-medium">{training.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{training.duration}</span>
                    </div>
                  </div>

                  <p className="text-secondary text-xs sm:text-sm mt-3 leading-relaxed">
                    {training.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block">Key Focus Areas:</span>
                    {training.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Hackathons & Events */}
        {activeTab === "trainings" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {hackathons.map((item, index) => (
              <div
                key={index}
                className="bg-tertiary rounded-2xl p-6 border border-gray-700/40 hover:border-amber-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{item.role}</span>
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-accent mt-2 font-medium">📍 {item.organizer}</p>

                <p className="text-secondary text-xs sm:text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-tertiary border border-gray-700/50 text-purple-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Major Projects */}
        {activeTab === "hackathons" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-tertiary rounded-2xl p-6 border border-gray-700/40"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" />
                Featured Academic & Personal Projects
              </h3>
              <span className="text-xs text-secondary bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                8+ Major Projects Built
              </span>
            </div>

            <p className="text-secondary text-sm mb-6 leading-relaxed">
              Over the years, I have engineered diverse software solutions spanning AI systems, web portals, desktop utilities, and native Android applications. Each project refined my full-stack workflow and problem-solving confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorProjectsList.map((projectName, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 hover:border-accent hover:bg-purple-900/30 transition-all duration-200 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-xs font-semibold text-primary leading-snug">
                    {projectName}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 4: Technical Skillset */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 space-y-6"
          >
            {techSkillSet.map((cat, cIdx) => (
              <div key={cIdx} className="bg-tertiary rounded-2xl p-5 border border-gray-700/40">
                <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 text-primary border border-purple-500/20 text-xs font-medium hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Services Grid (Core Pillars) */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-primary mb-2">What I Bring To The Table</h3>
        <p className="text-secondary text-sm mb-8">Specialized expertise built across my diploma, degree, and industrial internships.</p>

        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {servicesList.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
