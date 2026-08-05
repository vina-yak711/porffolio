import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo } from "../../assets";
import { config } from "../../constants/config";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 flex w-full items-center py-4 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 object-contain rounded-full border border-purple-500/30"
          />
          <p className="flex cursor-pointer text-[18px] font-bold text-primary tracking-wide">
            {config.html.fullName}
            <span className="hidden sm:inline-block ml-2 text-accent font-normal text-[14px] self-center">
              | Portfolio
            </span>
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex list-none flex-row gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id
                    ? "text-accent font-bold border-b-2 border-accent"
                    : "text-secondary hover:text-accent font-medium"
                } cursor-pointer text-[15px] transition-colors py-1`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Resume Download CTA */}
          <a
            href={config.html.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-purple-500/10 border border-purple-500/30 text-accent hover:bg-accent hover:text-white transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-tertiary border border-gray-700/40 hover:border-accent text-secondary hover:text-accent transition-all duration-200"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-tertiary border border-gray-700/40 text-secondary hover:text-accent"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-secondary hover:text-accent focus:outline-none"
          >
            {toggle ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu Dropdown Overlay */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } glass-card absolute right-4 top-16 z-50 mx-2 my-2 min-w-[200px] flex-col rounded-2xl p-6 border border-gray-700/50 shadow-2xl animate-in fade-in slide-in-from-top-4`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium transition-colors w-full ${
                    active === nav.id ? "text-accent font-bold" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`} className="block w-full py-1">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
