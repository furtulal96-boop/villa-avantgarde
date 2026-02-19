import { Informations, ScrollToTop } from "../components";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  FaUserFriends,
  FaRulerCombined,
  FaWifi,
  FaSnowflake,
  FaTv,
  FaCoffee,
  FaCar,
} from "react-icons/fa";

import heroImg from "../assets/img/triple-room.jpg";

import doubleImg from "../assets/img/double-room.jpg";
import tripleImg from "../assets/img/triple-room.jpg";
import familyImg from "../assets/img/family-suite.jpg";
import studioImg from "../assets/img/studio-apartment.jpg";
import oneBedroomImg from "../assets/img/one-bedroom.jpg";
import twoBedroomImg from "../assets/img/two-bedroom.jpg";
import superiorImg from "../assets/img/superior-two-bedroom.jpg";

const bookingLink =
  "https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543";

const RommsApartments = () => {
  const { t } = useTranslation();

  const rooms = [
    {
      img: doubleImg,
      titleKey: "roomsPage.double",
      sizeKey: "roomsPage.doubleSize",
      guestsKey: "roomsPage.doubleGuests",
    },
    {
      img: tripleImg,
      titleKey: "roomsPage.triple",
      sizeKey: "roomsPage.tripleSize",
      guestsKey: "roomsPage.tripleGuests",
    },
    {
      img: familyImg,
      titleKey: "roomsPage.family",
      sizeKey: "roomsPage.familySize",
      guestsKey: "roomsPage.familyGuests",
    },
    {
      img: studioImg,
      titleKey: "roomsPage.studio",
      sizeKey: "roomsPage.studioSize",
      guestsKey: "roomsPage.studioGuests",
    },
    {
      img: oneBedroomImg,
      titleKey: "roomsPage.oneBedroom",
      sizeKey: "roomsPage.oneBedroomSize",
      guestsKey: "roomsPage.oneBedroomGuests",
    },
    {
      img: twoBedroomImg,
      titleKey: "roomsPage.twoBedroom",
      sizeKey: "roomsPage.twoBedroomSize",
      guestsKey: "roomsPage.twoBedroomGuests",
    },
    {
      img: superiorImg,
      titleKey: "roomsPage.superior",
      sizeKey: "roomsPage.superiorSize",
      guestsKey: "roomsPage.superiorGuests",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("roomsPage.pageTitle")}</title>
        <meta name="description" content={t("roomsPage.pageDescription")} />
      </Helmet>

      <section>
        <ScrollToTop />

        {/* HERO SMALL */}
        <div
          className="relative h-[220px] lg:h-[280px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-3xl lg:text-5xl font-primary tracking-wide">
              {t("roomsPage.heroTitle")}
            </h1>
            <div className="w-20 h-1 bg-white/80 mx-auto my-4 rounded-full" />
            <p className="text-sm lg:text-base opacity-90 max-w-xl mx-auto">
              {t("roomsPage.heroSubtitle")}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-0 py-20 space-y-20">
          {/* INTRO */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">
              {t("roomsPage.introTitle")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("roomsPage.introText1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("roomsPage.introText2")}
            </p>

            {/* AMENITIES */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6">
              <Amenity
                icon={<FaCoffee />}
                text={t("roomsPage.amenities.breakfast")}
              />
              <Amenity
                icon={<FaSnowflake />}
                text={t("roomsPage.amenities.airConditioning")}
              />
              <Amenity icon={<FaTv />} text={t("roomsPage.amenities.hdTv")} />
              <Amenity icon={<FaWifi />} text={t("roomsPage.amenities.wifi")} />
              <Amenity
                icon={<FaCar />}
                text={t("roomsPage.amenities.parking")}
              />
            </div>
          </div>

          {/* ROOMS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map((room, idx) => (
              <RoomCard
                key={idx}
                img={room.img}
                title={t(room.titleKey)}
                size={t(room.sizeKey)}
                guests={t(room.guestsKey)}
                t={t}
              />
            ))}
          </div>
        </div>

        <Informations />
      </section>
    </>
  );
};

const Amenity = ({ icon, text }) => (
  <div className="flex flex-col items-center gap-2 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
    <div className="text-primary text-xl">{icon}</div>
    <p className="text-sm text-gray-600 text-center">{text}</p>
  </div>
);

const RoomCard = ({ img, title, size, guests, t }) => (
  <a
    href={bookingLink}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group overflow-hidden rounded-3xl shadow-2xl"
  >
    <img
      src={img}
      alt={title}
      className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition duration-500 flex flex-col justify-end p-8">
      <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>

      <div className="opacity-0 group-hover:opacity-100 transition duration-500 space-y-2 text-white">
        <div className="flex items-center gap-2">
          <FaRulerCombined />
          <span>{size}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends />
          <span>{guests}</span>
        </div>

        <div className="mt-4 text-sm tracking-wide uppercase">
          {t("roomsPage.checkAvailability")}
        </div>
      </div>
    </div>
  </a>
);

export default RommsApartments;
