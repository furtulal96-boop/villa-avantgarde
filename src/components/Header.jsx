import { useRoomContext } from "../context/RoomContext";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { LogoWhite, LogoDark } from "../assets";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { resetRoomFilterData } = useRoomContext();
  const [header, setHeader] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = useParams(); // trenutni jezik iz rute
  const navigate = useNavigate();

  const languages = [
    { code: "en", label: "EN" },
    { code: "it", label: "IT" },
    { code: "pl", label: "PL" },
    { code: "de", label: "DE" },
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" },
  ];

  useEffect(() => {
    const handleScroll = () => setHeader(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funkcija za promjenu jezika
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

  // Nav links sa apsolutnim putanjama
  const navLinks = [
    { to: `/${lang}`, label: t("nav.home") },
    { to: `/${lang}/accommodation`, label: t("nav.accommodation") },
    { to: `/${lang}/location`, label: t("nav.location") },
    { to: `/${lang}/contact`, label: t("nav.contact") },
  ];

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
              className={`flex items-center gap-1 px-3 py-1 rounded hover:bg-white/20 transition ${
                header ? "text-primary" : "text-white"
              }`}
            >
              {lang.toUpperCase()} <ChevronDown size={16} />
            </button>
            {langDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded border overflow-hidden z-50">
                {languages.map((l) => (
                  <li
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className="px-4 py-2 hover:bg-accent hover:text-white cursor-pointer text-center"
                  >
                    {l.label}
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
        <div className="lg:hidden bg-white/70 backdrop-blur-md shadow-md">
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
                  className={`px-3 py-1 rounded hover:bg-accent hover:text-white transition ${
                    l.code === lang
                      ? "bg-accent text-white"
                      : "bg-white text-primary"
                  }`}
                >
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
