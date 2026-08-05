import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, Eye, X } from "lucide-react";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { certificationsData } from "../../constants";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";
import { TCertification } from "../../types";

const CertificationCard: React.FC<
  { index: number; onPreview: (img: string, title: string, pdfUrl?: string) => void } & TCertification
> = ({
  index,
  title,
  issuer,
  date,
  credentialUrl,
  image,
  description,
  skillsBadge,
  onPreview,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <div className="bg-tertiary rounded-2xl p-6 border border-gray-700/40 hover:border-accent transition-all duration-300 shadow-xl flex flex-col justify-between h-full group overflow-hidden">
        <div>
          {image && (
            <div className="relative mb-4 overflow-hidden rounded-xl bg-black/30 border border-gray-700/50 group-hover:border-accent/50 transition-colors">
              <img
                src={image}
                alt={title}
                className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => onPreview(image, title, credentialUrl)}
                  className="p-2.5 rounded-full bg-accent text-white hover:bg-accent-light transition-colors shadow-lg flex items-center gap-1 text-xs font-semibold px-3"
                  title="View Certificate Image"
                >
                  <Eye className="w-4 h-4" /> View Certificate
                </button>
              </div>
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-accent border border-purple-500/20">
              <Award className="w-6 h-6" />
            </div>

            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-tertiary border border-gray-700/40 text-secondary hover:text-accent hover:border-accent transition-colors text-xs font-medium"
                aria-label="Open Certificate File"
              >
                <span>View File</span>
                <ExternalLink className="w-3.5 h-3.5" />
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
  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    title: string;
    pdfUrl?: string;
  } | null>(null);

  return (
    <>
      <Header useMotion={true} {...config.sections.certifications} />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {certificationsData.map((cert, index) => (
          <CertificationCard
            key={`cert-${index}`}
            index={index}
            {...cert}
            onPreview={(image, title, pdfUrl) => setSelectedCert({ image, title, pdfUrl })}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-tertiary rounded-2xl border border-gray-700 p-4 max-h-[90vh] flex flex-col items-center overflow-hidden shadow-2xl"
            >
              <div className="w-full flex items-center justify-between pb-3 border-b border-gray-700 mb-3">
                <h4 className="text-primary font-bold text-lg">{selectedCert.title}</h4>
                <div className="flex items-center gap-2">
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 rounded-lg bg-accent text-white flex items-center gap-1 hover:bg-accent-light"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Open File
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-gray-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-auto max-h-[75vh] w-full flex justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full h-auto rounded-lg object-contain shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
