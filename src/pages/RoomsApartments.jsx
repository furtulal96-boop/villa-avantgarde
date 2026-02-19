import { Informations, ScrollToTop } from "../components";
import { Helmet } from "react-helmet";
import {
  FaUserFriends,
  FaRulerCombined,
  FaWifi,
  FaSnowflake,
  FaTv,
  FaCoffee,
  FaCar,
} from "react-icons/fa";

import heroImg from "../assets/img/location-beach.jpg";

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
  return (
    <>
      <Helmet>
        <title>Rooms & Apartments | Villa Avantgarde</title>
        <meta
          name="description"
          content="Luxury rooms and apartments in Mlini near Dubrovnik. Modern comfort, privacy and elegant design at Villa Avantgarde."
        />
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
              Rooms & Apartments
            </h1>
            <div className="w-20 h-1 bg-white/80 mx-auto my-4 rounded-full" />
            <p className="text-sm lg:text-base opacity-90 max-w-xl mx-auto">
              Comfort, privacy and elegant design in Mlini.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-0 py-20 space-y-20">
          {/* INTRO */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">
              Equipped to the Highest Standard
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our aim is that our guests do not feel like staying in a regular
              hotel, but more like staying in a home away from home — with
              premium amenities and complete privacy.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Daily breakfast, air-conditioning, HD TV, WiFi Internet access,
              private parking and modern furniture are just some of the features
              that make your stay perfect.
            </p>

            {/* AMENITIES */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6">
              <Amenity icon={<FaCoffee />} text="Breakfast" />
              <Amenity icon={<FaSnowflake />} text="Air Conditioning" />
              <Amenity icon={<FaTv />} text="HD TV" />
              <Amenity icon={<FaWifi />} text="Free WiFi" />
              <Amenity icon={<FaCar />} text="Parking" />
            </div>
          </div>

          {/* ROOMS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <RoomCard
              img={doubleImg}
              title="Double Room"
              size="28 m²"
              guests="2 Guests"
            />
            <RoomCard
              img={tripleImg}
              title="Triple Room"
              size="30 m²"
              guests="3 Guests"
            />
            <RoomCard
              img={familyImg}
              title="Family Suite"
              size="35 m²"
              guests="4 Guests"
            />
            <RoomCard
              img={studioImg}
              title="Studio Apartment"
              size="35 m²"
              guests="2 Guests"
            />
            <RoomCard
              img={oneBedroomImg}
              title="One Bedroom Apartment"
              size="40 m²"
              guests="4 Guests"
            />
            <RoomCard
              img={twoBedroomImg}
              title="Two Bedroom Apartment"
              size="55 m²"
              guests="4 Guests"
            />
            <RoomCard
              img={superiorImg}
              title="Superior Two Bedroom Apartment"
              size="65 m²"
              guests="4 Guests"
            />
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

const RoomCard = ({ img, title, size, guests }) => (
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
          Check Availability →
        </div>
      </div>
    </div>
  </a>
);

export default RommsApartments;
