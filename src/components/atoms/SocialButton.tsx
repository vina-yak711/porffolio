import React, { useState } from "react";
import { TSocialLink } from "../../types";
import { SocialIcon } from "./SocialIcon";
import { InstagramModal } from "./InstagramModal";

interface SocialButtonProps {
  social: TSocialLink;
  className?: string;
  iconClassName?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  social,
  className = "p-2.5 rounded-xl bg-tertiary border border-gray-700/40 hover:border-accent text-secondary hover:text-accent transition-all duration-200",
  iconClassName = "w-5 h-5",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (social.isInstagram) {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label="View Instagram Profiles"
          className={`${className} cursor-pointer group relative inline-flex items-center justify-center`}
          title="Instagram (@vina_yak711 & @viinayak.in)"
        >
          <SocialIcon name={social.iconName || social.name} className={iconClassName} />
        </button>
        <InstagramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      title={social.name}
      className={`${className} inline-flex items-center justify-center`}
    >
      <SocialIcon name={social.iconName || social.name} className={iconClassName} />
    </a>
  );
};
