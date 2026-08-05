import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { socialLinks } from "../../constants";
import { SocialIcon } from "../atoms/SocialIcon";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full flex flex-col justify-between overflow-hidden">
      {/* Background Hero Accent overlay */}
      <div className="absolute inset-0 top-[120px] mx-auto max-w-7xl px-6 flex flex-row items-start gap-5 pointer-events-none z-10">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF] shadow-lg shadow-purple-500/50 animate-pulse" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="pointer-events-auto max-w-3xl">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-accent bg-purple-500/10 border border-purple-500/20 rounded-full">
            {config.hero.role}
          </span>
          <h1 className={`${styles.heroHeadText} text-primary font-extrabold tracking-tight`}>
            Hi, I'm <span className="text-accent">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-secondary mt-3 max-w-2xl text-[16px] sm:text-[20px] leading-relaxed`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Download Resume CTA */}
            <a
              href={config.html.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-5 h-5" />
              <span>{config.hero.downloadResumeText}</span>
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary hover:bg-purple-500/10 border border-gray-700/50 hover:border-accent text-primary font-medium rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 text-secondary ml-1" />
            </a>

            {/* Social Links Quick Bar */}
            <div className="flex items-center gap-3 ml-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-gray-700/40 pt-4 sm:pt-0 sm:pl-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl bg-tertiary border border-gray-700/40 hover:border-accent text-secondary hover:text-accent transition-all duration-200"
                >
                  <SocialIcon name={social.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3D Model Canvas */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Down Indicator */}
      <div className="xs:bottom-10 absolute bottom-12 z-10 flex w-full items-center justify-center">
        <a href="#about" aria-label="Scroll to About Section">
          <div className="border-secondary/50 hover:border-accent flex h-[60px] w-[32px] items-start justify-center rounded-3xl border-2 p-2 transition-colors">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-accent mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
