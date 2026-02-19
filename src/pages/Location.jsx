import { Informations, ScrollToTop } from "../components";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import locationBeach from "../assets/img/location-beach.jpg";
import { FiMapPin } from "react-icons/fi";
import { GiBeachBag } from "react-icons/gi";
import { FaBus } from "react-icons/fa";
import { MdOutlineAirportShuttle } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const Location = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      icon: <FiMapPin className="text-accent w-8 h-8 mb-2" />,
      titleKey: "locationPage.cards.oldTown.title",
      textKey: "locationPage.cards.oldTown.text",
    },
    {
      icon: <GiBeachBag className="text-accent w-8 h-8 mb-2" />,
      titleKey: "locationPage.cards.beach.title",
      textKey: "locationPage.cards.beach.text",
    },
    {
      icon: <FaBus className="text-accent w-8 h-8 mb-2" />,
      titleKey: "locationPage.cards.bus.title",
      textKey: "locationPage.cards.bus.text",
    },
    {
      icon: <MdOutlineAirportShuttle className="text-accent w-8 h-8 mb-2" />,
      titleKey: "locationPage.cards.airport.title",
      textKey: "locationPage.cards.airport.text",
    },
  ];

  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [
              ...prev,
              Number(entry.target.dataset.index),
            ]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("locationPage.meta.title")}</title>
        <meta name="description" content={t("locationPage.meta.description")} />
        <link
          rel="canonical"
          href="https://www.villaavantgarde.com/locationPage"
        />
        <meta property="og:title" content={t("locationPage.meta.ogTitle")} />
        <meta
          property="og:description"
          content={t("locationPage.meta.ogDescription")}
        />
        <meta
          property="og:url"
          content="https://www.villaavantgarde.com/location"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section>
        <ScrollToTop />

        {/* HERO SMALL */}
        <div
          className="relative h-[220px] lg:h-[280px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${locationBeach})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-3xl lg:text-5xl font-primary tracking-wide">
              {t("locationPage.heroTitle")}
            </h1>
            <div className="w-20 h-1 bg-white/80 mx-auto my-4 rounded-full" />
            <p className="text-sm lg:text-base opacity-90 max-w-xl mx-auto">
              {t("locationPage.heroSubtitle")}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-0 py-20 space-y-20">
          {/* Intro Text */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {t("locationPage.introText1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("locationPage.introText2")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("locationPage.introText3")}
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardsData.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                className={`bg-white rounded-2xl p-6 shadow-xl border-t-4 border-accent flex flex-col items-start transform transition duration-500 ease-out
                  ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } hover:-translate-y-2 hover:shadow-2xl`}
              >
                {card.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t(card.titleKey)}
                </h3>
                <p className="text-gray-600">{t(card.textKey)}</p>
              </div>
            ))}
          </div>

          {/* MAP SECTION */}
          <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              title="Villa Avantgarde Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.508419383372!2d18.11663511560971!3d42.618821879161874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c9467bfa12345%3A0xabcdef1234567890!2sPut%20Bruna%20Bu%C5%A1i%C4%87a%2033%2C%2020207%20Mlini%2C%20Croatia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <Informations />
      </section>
    </>
  );
};

export default Location;
