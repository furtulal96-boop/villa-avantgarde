import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { Footer, Header, PageNotFound } from "./components";
import { Home } from "./pages";
import Accomodation from "./pages/Accommodation";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import SEOJsonLD from "./SeoJsonLD";
import i18n from "./i18n";

// ---------------- Language Wrapper ----------------
const allowedLanguages = ["en", "it", "pl", "de", "fr", "es"];

const LanguageLayout = ({ children }) => {
  const { lang } = useParams();

  useEffect(() => {
    if (allowedLanguages.includes(lang)) {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  if (!allowedLanguages.includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  return children;
};

// ---------------- Layout Wrapper for Pages ----------------
const PageLayout = ({ Component }) => (
  <LanguageLayout>
    <Header />
    <Component />
    <Footer />
  </LanguageLayout>
);

// ---------------- App ----------------
const App = () => (
  <main>
    <SEOJsonLD />

    <BrowserRouter>
      <Routes>
        {/* Redirect root to English */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Home */}
        <Route path="/:lang" element={<PageLayout Component={Home} />} />

        {/* Accommodation */}
        <Route
          path="/:lang/accommodation"
          element={<PageLayout Component={Accomodation} />}
        />

        {/* Location */}
        <Route
          path="/:lang/location"
          element={<PageLayout Component={Location} />}
        />

        {/* Contact */}
        <Route
          path="/:lang/contact"
          element={<PageLayout Component={Contact} />}
        />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </main>
);

export default App;
