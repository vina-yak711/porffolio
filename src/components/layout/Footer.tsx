import { ArrowUp, Heart } from "lucide-react";
import { config } from "../../constants/config";
import { navLinks, socialLinks } from "../../constants";
import { SocialIcon } from "../atoms/SocialIcon";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-tertiary border-t border-gray-700/40 py-10 px-6 sm:px-16 transition-colors">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-lg font-bold text-primary">
            {config.html.fullName}
          </p>
          <p className="text-xs text-secondary flex items-center gap-1">
            © {new Date().getFullYear()} All rights reserved. Crafted with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & React
          </p>
        </div>

        {/* Quick Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-secondary">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-accent font-medium transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links & Back To Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-lg bg-black-100 border border-gray-700/40 hover:border-accent text-secondary hover:text-accent transition-all"
              >
                <SocialIcon name={social.name} className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 rounded-xl bg-accent text-white shadow-lg shadow-purple-500/25 hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
