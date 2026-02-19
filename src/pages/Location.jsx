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
      title: t("location.cards.oldTown.title"),
      text: t("location.cards.oldTown.text"),
    },
    {
      icon: <GiBeachBag className="text-accent w-8 h-8 mb-2" />,
      title: t("location.cards.beach.title"),
      text: t("location.cards.beach.text"),
    },
    {
      icon: <FaBus className="text-accent w-8 h-8 mb-2" />,
      title: t("location.cards.bus.title"),
      text: t("location.cards.bus.text"),
    },
    {
      icon: <MdOutlineAirportShuttle className="text-accent w-8 h-8 mb-2" />,
      title: t("location.cards.airport.title"),
      text: t("location.cards.airport.text"),
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
        <div className="relative h-[280px] sm:h-[320px] lg:h-[400px] overflow-hidden rounded-b-3xl">
          <img
            src={locationBeach}
            alt="Villa Avantgarde Location Beach"
            className="absolute w-full h-full object-cover scale-105 transition-transform duration-700 ease-in-out hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-0 py-16 lg:py-24 space-y-16">
          {/* Intro Text */}
          <div className="max-w-4xl mx-auto text-gray-700 space-y-6 text-lg sm:text-xl leading-relaxed">
            <p>{t("location.firstDescription")}</p>
            <p>{t("location.secondDescription")}</p>
            <p>{t("location.thirdDescription")}</p>
            <p>{t("location.4thDescription")}</p>
          </div>

          {/* Cards Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {cardsData.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border-t-4 border-accent flex flex-col items-start transform transition duration-500 ease-out
                ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
                hover:-translate-y-2 hover:shadow-2xl`}
              >
                {card.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Villa Avantgarde Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.508419383372!2d18.11663511560971!3d42.618821879161874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c9467bfa12345%3A0xabcdef1234567890!2sPut%20Bruna%20Bu%C5%A1i%C4%87a%2033%2C%2020207%20Mlini%2C%20Croatia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <Informations />
      </section>
    </>
  );
};

export default Location;
