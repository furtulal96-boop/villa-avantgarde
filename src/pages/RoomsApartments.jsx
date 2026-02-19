import { ScrollToTop, Informations } from "../components";
import { Helmet } from "react-helmet";
import doubleSuiteImg from "../assets/img/rooms/6.jpg";
import tripleSuiteImg from "../assets/img/rooms/16.jpg";
import oneBedroomImg from "../assets/img/rooms/19.jpg";
import familySuiteImg from "../assets/img/rooms/7.jpg";
import { useTranslation } from "react-i18next";

const RoomsApartments = () => {
  const { t } = useTranslation();

  const suites = [
    {
      title: t("accomodation.suites.0.title"),
      img: doubleSuiteImg,
      link: "https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543",
    },
    {
      title: t("accomodation.suites.1.title"),
      img: tripleSuiteImg,
      link: "https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543",
    },
    {
      title: t("accomodation.suites.2.title"),
      img: oneBedroomImg,
      link: "https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543",
    },
    {
      title: t("accomodation.suites.3.title"),
      img: familySuiteImg,
      link: "https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("accomodation.pageTitle")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://eluize-inn.com/accomodation" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${t("accomodation.pageTitle")} | Villa Avantgarde`}
        />
        <meta property="og:description" content={t("accomodation.intro1")} />
        <meta property="og:url" content="https://eluize-inn.com/accomodation" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Villa Avantgarde",
            address: {
              "@type": "PostalAddress",
              addressLocality: t("address.city"),
              addressCountry: t("address.country"),
            },
            url: "https://eluize-inn.com/accomodation",
            makesOffer: suites.map((s) => ({
              "@type": "Offer",
              name: s.title,
            })),
          })}
        </script>
      </Helmet>

      <section>
        <ScrollToTop />

        <div className="bg-room h-[420px] sm:h-[500px] lg:h-[560px] relative flex justify-center items-center bg-cover bg-center">
          <div className="absolute w-full h-full bg-black/70" />
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white z-20 font-primary text-center px-4">
            {t("accomodation.pageTitle")}
          </h1>
        </div>

        <div className="container mx-auto px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:gap-x-12 py-16 lg:py-24 items-center">
            <div className="w-full lg:w-[60%] space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                {t("accomodation.h2")}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {t("accomodation.intro1")}
              </p>

              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/rS_sF1Xmvao"
                  title="Villa Avantgarde"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {t("accomodation.intro2")}
              </p>
            </div>

            <div className="w-full lg:w-[40%] space-y-8 mt-12 lg:mt-0">
              <div className="py-6 px-6 bg-accent/20 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  {t("accomodation.highlightsTitle")}
                </h3>
                <ul className="flex flex-col gap-y-3 text-gray-700">
                  {Object.values(
                    t("accomodation.highlights", { returnObjects: true }),
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-x-3">
                      <span className="text-accent text-lg">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-0 py-16 space-y-8">
          {suites.map((suite, index) => (
            <a
              key={index}
              href={suite.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={suite.img}
                alt={`${suite.title} at Villa Avantgarde Dubrovnik`}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                  {suite.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <Informations />
      </section>
    </>
  );
};

export default RoomsApartments;
