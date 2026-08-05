type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    secondaryEmail?: string;
    github?: string;
    whatsapp?: string;
    location: string;
    resumeUrl: string;
  };
  hero: {
    name: string;
    role: string;
    p: string[];
    downloadResumeText: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    tech: TSection;
    experience: TSection;
    education: TSection;
    certifications: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Vinayak Subhash Deshmane | AI & Data Science Engineer Portfolio",
    fullName: "Vinayak Subhash Deshmane",
    email: "vinuu02052005@gmail.com",
    secondaryEmail: "subhashdeshmane0@gmail.com",
    github: "https://github.com/vina-yak711",
    whatsapp: "vina_yak711",
    location: "Maharashtra, India",
    resumeUrl: "/resume.html",
  },
  hero: {
    name: "Vinayak Deshmane",
    role: "AI & Data Science Specialist",
    p: [
      "Artificial Intelligence & Data Science Student | Software Engineer",
      "Building intelligent AI systems, scalable full-stack apps, and Android solutions.",
    ],
    downloadResumeText: "Download Resume",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact Me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email address?" },
      message: {
        span: "Your Message",
        placeholder: "Tell me about your project or inquiry...",
      },
    },
  },
  sections: {
    about: {
      p: "Get to know me",
      h2: "About Me.",
      content: `Hello, I'm Vinayak Subhash Deshmane. I am a passionate and technology-driven Artificial Intelligence & Data Science student with a strong academic foundation in Computer Engineering and a deep interest in building innovative software solutions. For me, technology is not just about writing code—it's about solving real-world problems, creating meaningful digital experiences, and continuously learning to stay ahead in an ever-evolving industry.`,
    },
    tech: {
      p: "Technologies & Tools",
      h2: "Skills & Expertise.",
    },
    experience: {
      p: "Professional Training & Internships",
      h2: "Industrial Training.",
    },
    education: {
      p: "Academic Background",
      h2: "Education.",
    },
    certifications: {
      p: "Professional Growth & Recognition",
      h2: "Hackathons & Achievements.",
    },
    feedbacks: {
      p: "Endorsements & Recommendations",
      h2: "Testimonials.",
    },
    works: {
      p: "Selected Portfolio",
      h2: "Projects.",
      content: `The following projects demonstrate my technical capabilities across Artificial Intelligence, Web Platforms, Mobile Apps, and Desktop Systems.`,
    },
  },
};
