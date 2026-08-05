export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
  liveDemoLink?: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = {
  category?: "Frontend" | "Backend" | "Database" | "Tools";
} & Required<Omit<TCommonProps, "title">>;

export type TEducation = {
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  gpaOrGrade?: string;
  description: string;
  achievements?: string[];
  iconBg?: string;
};

export type TCertification = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  description: string;
  skillsBadge?: string[];
};

export type TSocialLink = {
  name: string;
  url: string;
  iconName: string;
};

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};

