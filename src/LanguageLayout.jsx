import { useEffect } from "react";
import {
  useParams,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import i18n from "./i18n";

const allowedLanguages = ["en", "it", "pl", "de", "fr", "es"];

const LanguageLayout = ({ children }) => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && allowedLanguages.includes(lang)) {
      // Korisnik već ima jezik u URL-u
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    } else if (!lang) {
      // Automatsko preusmjeravanje po lokaciji (IP)
      fetch("https://ipapi.co/json/") // besplatan Geo-IP API
        .then((res) => res.json())
        .then((data) => {
          const country = data.country_code.toLowerCase(); // "it", "pl", ...
          const langMap = {
            it: "it",
            pl: "pl",
            de: "de",
            fr: "fr",
            es: "es",
          };
          const detectedLang = langMap[country] || "en";
          navigate(`/${detectedLang}${location.pathname}`, { replace: true });
        })
        .catch(() => {
          // fallback na engleski
          navigate(`/en${location.pathname}`, { replace: true });
        });
    } else {
      // URL s nedozvoljenim jezikom -> fallback
      navigate("/en", { replace: true });
    }
  }, [lang, location.pathname, navigate]);

  if (!lang || !allowedLanguages.includes(lang)) {
    // dok čekamo fetch/preusmjeravanje
    return null;
  }

  return children;
};

export default LanguageLayout;
