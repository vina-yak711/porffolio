import { useState } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;
type Category = (typeof categories)[number];

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredTechnologies = technologies.filter((tech) => {
    if (activeCategory === "All") return true;
    return tech.category === activeCategory;
  });

  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />

      {/* Category Tabs */}
      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-accent text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-tertiary border border-gray-700/40 text-secondary hover:text-accent hover:border-accent"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills & Technologies Grid */}
      <div className="mt-12 flex flex-row flex-wrap justify-center sm:justify-start gap-8">
        {filteredTechnologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-tertiary border border-gray-700/40 hover:border-accent hover:shadow-lg transition-all duration-300 w-32"
          >
            <div className="h-20 w-20 flex items-center justify-center">
              <BallCanvas icon={technology.icon} />
            </div>
            <span className="text-sm font-medium text-primary text-center">
              {technology.name}
            </span>
            {technology.category && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-accent font-semibold">
                {technology.category}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
