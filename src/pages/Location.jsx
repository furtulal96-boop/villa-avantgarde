import { Informations, ScrollToTop } from "../components";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("location.meta.title")}</title>
        <meta name="description" content={t("location.meta.description")} />
        <link rel="canonical" href="https://www.villaavantgarde.com/location" />

        {/* Open Graph */}
        <meta property="og:title" content={t("location.meta.ogTitle")} />
        <meta
          property="og:description"
          content={t("location.meta.ogDescription")}
        />
        <meta
          property="og:url"
          content="https://www.villaavantgarde.com/location"
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Villa Avantgarde",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Put Bruna Bušića 33",
        "addressLocality": "Mlini",
        "addressRegion": "Dubrovnik-Neretva",
        "postalCode": "20207",
        "addressCountry": "HR"
      },
      "telephone": ["+385995263114", "+385992435616"],
      "email": "info@villaavantgarde.com",
      "url": "https://www.villaavantgarde.com"
    }
  `}
        </script>
      </Helmet>

      <section>
        <ScrollToTop />

        {/* Hero */}
        <div className="bg-locationBeach h-[220px] sm:h-[260px] lg:h-[320px] relative flex items-center justify-center bg-cover bg-center">
          <div className="absolute w-full h-full bg-black/60" />
          <h1 className="hidden lg:block text-5xl text-white font-primary z-20 text-center">
            {t("location.heroTitle")}
          </h1>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-0 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Google Map */}
            <div className="w-full h-[380px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="Villa Avantgarde Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.508419383372!2d18.11663511560971!3d42.618821879161874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c9467bfa12345%3A0xabcdef1234567890!2sPut%20Bruna%20Bu%C5%A1i%C4%87a%2033%2C%2020207%20Mlini%2C%20Croatia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {t("location.areaTitle")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t("location.areaDescription")}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    {t("location.cards.oldTown.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("location.cards.oldTown.text")}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    {t("location.cards.beach.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("location.cards.beach.text")}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    {t("location.cards.bus.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("location.cards.bus.text")}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    {t("location.cards.airport.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("location.cards.airport.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Informations />
      </section>
    </>
  );
};

export default Location;
