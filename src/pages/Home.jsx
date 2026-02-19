import {
  BookForm,
  HeroSlider,
  ScrollToTop,
  Informations,
  Gallery,
} from "../components";
import { Helmet } from "react-helmet";
import introImg from "../assets/img/villaMain.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://villaavantgarde.com/" />

        {/* Open Graph */}
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://villaavantgarde.com/" />
        <meta
          property="og:image"
          content="https://villaavantgarde.com/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Villa Avantgarde",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${t("address.city")}",
              "addressCountry": "${t("address.country")}"
            },
            "url": "https://villaavantgarde.com"
          }
        `}
        </script>
      </Helmet>

      <div>
        <ScrollToTop />

        {/* Slider */}
        <div className="relative">
          <HeroSlider className="h-[500px] sm:h-[600px] lg:h-[750px]" />

          {/* BookForm overlay */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] bg-accent/20 p-4 rounded-xl shadow-xl backdrop-blur-md z-30">
            <BookForm transparent />
          </div>
        </div>

        {/* Intro Section */}
        <section className="container mx-auto px-6 lg:px-12 mt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
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
                className="w-full h-[350px] sm:h-[400px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </section>

        <Gallery />
        <Informations />
      </div>
    </>
  );
};

export default Home;
