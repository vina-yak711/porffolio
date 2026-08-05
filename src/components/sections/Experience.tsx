import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--bg-tertiary, #151030)",
        color: "var(--text-primary, #fff)",
        boxShadow: "var(--card-shadow)",
        border: "1px solid var(--border-color)",
        borderRadius: "1rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--bg-tertiary, #151030)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg || "#915EFF" }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[22px] font-bold text-primary">{experience.title}</h3>
        <p
          className="text-accent text-[15px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-4 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary pl-1 text-[14px] leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="var(--accent-color, #915EFF)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
