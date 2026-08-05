import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { educationData } from "../../constants";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";
import { TEducation } from "../../types";

const EducationCard: React.FC<{ index: number } & TEducation> = ({
  index,
  degree,
  institution,
  location,
  duration,
  gpaOrGrade,
  description,
  achievements,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full"
    >
      <div className="bg-tertiary rounded-2xl p-6 border border-gray-700/40 hover:border-accent transition-all duration-300 shadow-xl flex flex-col md:flex-row gap-6 items-start justify-between">
        <div className="flex gap-4 items-start flex-1">
          <div className="p-3.5 rounded-2xl bg-purple-500/10 text-accent border border-purple-500/20 shrink-0 mt-1">
            <GraduationCap className="w-7 h-7" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-[20px] font-bold text-primary">{degree}</h3>
              {gpaOrGrade && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {gpaOrGrade}
                </span>
              )}
            </div>

            <p className="text-accent text-[15px] font-medium mt-1">
              {institution}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-secondary mt-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>{duration}</span>
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{location}</span>
                </div>
              )}
            </div>

            <p className="text-secondary mt-4 text-[14px] leading-relaxed">
              {description}
            </p>

            {achievements && achievements.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-700/40">
                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Key Highlights & Honors
                </h4>
                <ul className="list-disc ml-5 space-y-1 text-xs text-secondary">
                  {achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-12 flex flex-col gap-6 max-w-4xl">
        {educationData.map((edu, index) => (
          <EducationCard key={`edu-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
