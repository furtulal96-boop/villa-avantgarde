import {
  BookForm,
  HeroSlider,
  Rooms,
  ScrollToTop,
  Informations,
} from "../components";
import { Helmet } from "react-helmet";
import introImg from "../assets/img/room.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>

        <meta name="description" content={t("meta.description")} />

        <link rel="canonical" href="https://eluize-inn.com/" />

        {/* Open Graph */}
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eluize-inn.com/" />
        <meta
          property="og:image"
          content="https://eluize-inn.com/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Eluize Inn",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${t("address.city")}",
              "addressCountry": "${t("address.country")}"
            },
            "url": "https://eluize-inn.com"
          }
        `}
        </script>
      </Helmet>

      <div>
        <ScrollToTop />

        <HeroSlider />

        <div className="container mx-auto relative">
          <div className="bg-accent/20 mt-4 p-4 lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:-top-12 lg:z-30 lg:shadow-xl">
            <BookForm />
          </div>
        </div>

        {/* Intro Section */}
        <section className="container mx-auto px-6 lg:px-12 mt-24 lg:mt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              {/* SEO: Glavni H1 */}
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                {t("home.h1")}
              </h1>

              <p className="text-gray-600 leading-relaxed mb-6">
                {t("home.intro")}
              </p>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={introImg}
                alt={t("home.h1")}
                className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </section>

        <Rooms />
        <Informations />
      </div>
    </>
  );
};

export default Home;
