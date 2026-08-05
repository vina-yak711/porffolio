import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { certificationsData } from "../../constants";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";
import { TCertification } from "../../types";

const CertificationCard: React.FC<{ index: number } & TCertification> = ({
  index,
  title,
  issuer,
  date,
  credentialUrl,
  description,
  skillsBadge,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <div className="bg-tertiary rounded-2xl p-6 border border-gray-700/40 hover:border-accent transition-all duration-300 shadow-xl flex flex-col justify-between h-full">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-accent border border-purple-500/20">
              <Award className="w-6 h-6" />
            </div>

            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-tertiary border border-gray-700/40 text-secondary hover:text-accent hover:border-accent transition-colors"
                aria-label="Verify Credential"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-bold text-primary">{title}</h3>
            <p className="text-accent text-[14px] font-medium mt-1">
              {issuer}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-secondary mt-2">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>Issued {date}</span>
            </div>

            <p className="text-secondary mt-3 text-[13px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {skillsBadge && skillsBadge.length > 0 && (
          <div className="mt-5 pt-4 border-t border-gray-700/40 flex flex-wrap gap-1.5">
            {skillsBadge.map((skill) => (
              <span
                key={skill}
                className="text-[11px] px-2 py-0.5 rounded-md bg-purple-500/10 text-accent font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certifications} />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {certificationsData.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
