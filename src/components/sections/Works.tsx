import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { SocialIcon } from "../atoms/SocialIcon";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareColor="#915EFF"
        className="w-full sm:w-[350px]"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 border border-gray-700/40 hover:border-accent transition-all duration-300 shadow-xl flex flex-col justify-between h-full">
          <div>
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-600/80 backdrop-blur-sm">
                  Featured Project
                </span>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-[22px] font-bold text-primary">{name}</h3>
              <p className="text-secondary mt-2 text-[14px] leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>
          </div>

          <div>
            {/* Tech Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[12px] px-2.5 py-1 rounded-md bg-purple-500/10 font-medium ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Links Bar: GitHub & Live Demo */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-700/40">
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-accent font-medium transition-colors"
              >
                <SocialIcon name="github" className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              {liveDemoLink && (
                <a
                  href={liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-purple-600 transition-colors shadow-md shadow-purple-500/20"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-14 flex flex-wrap gap-8 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
