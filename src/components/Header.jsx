import { useRoomContext } from "../context/RoomContext";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { LogoWhite, LogoDark } from "../assets";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import FlagUS from "../assets/flags/en.png";
import FlagIT from "../assets/flags/it.png";
import FlagPL from "../assets/flags/pl.png";
import FlagDE from "../assets/flags/de.png";
import FlagFR from "../assets/flags/fr.png";
import FlagES from "../assets/flags/es.png";

const Header = () => {
  const { resetRoomFilterData } = useRoomContext();
  const [header, setHeader] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  const languages = [
    { code: "en", label: "EN", flag: FlagUS },
    { code: "it", label: "IT", flag: FlagIT },
    { code: "pl", label: "PL", flag: FlagPL },
    { code: "de", label: "DE", flag: FlagDE },
    { code: "fr", label: "FR", flag: FlagFR },
    { code: "es", label: "ES", flag: FlagES },
  ];

  useEffect(() => {
    const handleScroll = () => setHeader(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (newLang) => {
    if (newLang !== lang) {
      i18n.changeLanguage(newLang);
      const currentPath = window.location.pathname
        .split("/")
        .slice(2)
        .join("/");
      navigate(`/${newLang}/${currentPath}`);
    }
    setLangDropdownOpen(false);
    setMobileOpen(false);
  };

  const navLinks = [
    { to: `/${lang}`, label: t("nav.home") },
    { to: `/${lang}/rooms-apartments`, label: t("nav.rooms-apartments") },
    { to: `/${lang}/experience`, label: t("nav.experience") },
    { to: `/${lang}/location`, label: t("nav.location") },
    { to: `/${lang}/contact`, label: t("nav.contact") },
  ];

  const currentLanguage = languages.find((l) => l.code === lang);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        header
          ? "bg-white/70 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={`/${lang}`}
          onClick={() => {
            resetRoomFilterData();
            setMobileOpen(false);
          }}
          className="h-[50px] flex items-center"
        >
          {header ? (
            <LogoDark className="h-full w-auto object-contain" />
          ) : (
            <LogoWhite className="h-full w-auto object-contain" />
          )}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-x-8">
          <nav
            className={`flex gap-x-8 font-tertiary tracking-[2px] text-[14px] uppercase ${
              header ? "text-primary" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 ${
                header
                  ? "bg-white/60 text-primary hover:bg-accent hover:text-white"
                  : "bg-white/20 text-white hover:bg-white/40"
              }`}
            >
              {currentLanguage && (
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.label}
                  className="w-8 h-8 rounded-sm"
                />
              )}
              <span>{lang.toUpperCase()}</span>
              <ChevronDown
                size={18}
                className="transition-transform duration-300"
              />
            </button>

            {langDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-36 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 overflow-hidden z-50 animate-fadeIn">
                {languages.map((l) => (
                  <li
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer font-medium transition-all duration-200 rounded hover:bg-accent hover:text-white ${
                      l.code === lang ? "bg-accent text-white" : "text-white"
                    }`}
                  >
                    <img
                      src={l.flag}
                      alt={l.label}
                      className="w-5 h-5 rounded-sm"
                    />
                    <span>{l.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${header ? "text-primary" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/20 backdrop-blur-md shadow-md">
          <div className="flex flex-col items-center gap-6 py-6 uppercase tracking-[2px] text-primary">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="hover:text-accent transition"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex gap-4 mt-4">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => changeLanguage(l.code)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg font-medium transition-all duration-200 ${
                    l.code === lang
                      ? "bg-accent text-white"
                      : "bg-white/20 text-primary hover:bg-accent hover:text-white"
                  }`}
                >
                  <img
                    src={l.flag}
                    alt={l.label}
                    className="w-5 h-5 rounded-sm"
                  />
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
