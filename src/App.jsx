import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { Footer, Header, PageNotFound } from "./components";
import { Home } from "./pages";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import RoomsApartments from "./pages/RoomsApartments";
import Experience from "./pages/Experience";
import i18n from "./i18n";
import { useGA4PageView } from "./hooks/useGA4PageView"; // <-- tvoj hook
import { useEffect } from "react";

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

// ---------------- GA4 Tracker Komponenta ----------------
const GA4Tracker = () => {
  useGA4PageView();
  return null;
};

// ---------------- App ----------------
const App = () => (
  <main>
    <BrowserRouter>
      {/* GA4 SPA Tracking */}
      <GA4Tracker />

      <Routes>
        {/* Redirect root to English */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Home */}
        <Route path="/:lang" element={<PageLayout Component={Home} />} />

        {/* Rooms and Apartments */}
        <Route
          path="/:lang/rooms-apartments"
          element={<PageLayout Component={RoomsApartments} />}
        />

        {/* Experience */}
        <Route
          path="/:lang/experience"
          element={<PageLayout Component={Experience} />}
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
