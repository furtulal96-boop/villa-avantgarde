import { Informations, ScrollToTop } from "../components";
import { Helmet } from "react-helmet";
import {
  FaSwimmingPool,
  FaUtensils,
  FaGlassCheers,
  FaChild,
  FaPlaneDeparture,
  FaCar,
  FaShip,
  FaBaby,
} from "react-icons/fa";

import heroImg from "../assets/img/villa-beach.jpg";
import poolImg from "../assets/img/pool.jpg";
import breakfastImg from "../assets/img/breakfast.jpg";
import cuisineServings from "../assets/img/cuisine-servings.jpg";
import breakfastSpace from "../assets/img/breakfast-bb-cuisine.jpg";

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Pool & Cuisine | Villa Avantgarde</title>
        <meta
          name="description"
          content="Private pool with grill area, event services and breakfast experience at Villa Avantgarde Mlini near Dubrovnik."
        />
      </Helmet>

      <section>
        <ScrollToTop />

        {/* HERO WITH SMALLER HEIGHT */}
        <div
          className="relative h-[220px] lg:h-[280px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-3xl lg:text-5xl font-primary tracking-wide">
              Pool & Cuisine Experience
            </h1>
            <div className="w-20 h-1 bg-white/80 mx-auto my-4 rounded-full" />
            <p className="text-sm lg:text-base opacity-90 max-w-xl mx-auto">
              Relax, celebrate and indulge in comfort at Villa Avantgarde.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-0 py-20 space-y-28">
          {/* PRIVATE POOL */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={poolImg}
                alt="Private Pool Villa Avantgarde"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 text-primary">
                <FaSwimmingPool size={26} />
                <h2 className="text-3xl font-semibold">
                  Private Pool with Grill Area
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                The private pool and grill area create the perfect setting for
                birthdays, bachelor evenings or relaxed family gatherings —
                completely private and exclusively yours.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <Feature
                  icon={<FaGlassCheers />}
                  text="Birthday parties & bachelor nights"
                />
                <Feature
                  icon={<FaSwimmingPool />}
                  text="Private BBQ experience"
                />
              </div>

              <p className="text-gray-600 leading-relaxed">
                From playful themed pool parties for children to elegant evening
                BBQ gatherings with cold drinks and ambient lighting — your
                moments here are entirely your own.
              </p>
            </div>
          </div>

          {/* EVENT SERVICES */}
          <div className="bg-gray-50 rounded-3xl p-12 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Event Services & Exclusive Experiences
            </h3>

            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              We are delighted to arrange private tours, yacht rentals,
              transfers, excursions and tailor-made sightseeing experiences —
              all starting directly from Villa Avantgarde.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Feature icon={<FaPlaneDeparture />} text="Private Transfers" />
              <Feature icon={<FaShip />} text="Yacht & Boat Excursions" />
              <Feature icon={<FaCar />} text="Rent-a-Car Services" />
            </div>
          </div>

          {/* CHILD FRIENDLY */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 text-primary">
                <FaChild size={26} />
                <h2 className="text-3xl font-semibold">
                  Child Friendly Environment
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Villa Avantgarde warmly welcomes children. For larger pool
                gatherings, babysitting services are available, and child
                amenities ensure comfort for the whole family.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <Feature icon={<FaBaby />} text="Baby cot & high chairs" />
                <Feature icon={<FaSwimmingPool />} text="Child-friendly pool" />
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={breakfastSpace}
                alt="Family Friendly Villa"
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* CUISINE */}
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center items-center gap-3 mb-4 text-primary">
                <FaUtensils size={26} />
                <h2 className="text-3xl font-semibold">Breakfast Experience</h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Freshly baked breads, croissants, eggs prepared to your taste,
                cheeses, fresh juices and premium coffee — your morning begins
                with flavor and comfort. Breakfast starts at 7:30am.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ImageCard img={breakfastImg} />
              <ImageCard img={cuisineServings} />
              <ImageCard img={breakfastSpace} />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-10">
            <a
              href="https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543"
              className="inline-block px-14 py-4 rounded-full bg-primary text-white font-medium tracking-wide hover:scale-105 transition duration-300 shadow-2xl"
            >
              Check Availability
            </a>
          </div>
        </div>

        <Informations />
      </section>
    </>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
    <div className="text-primary text-xl">{icon}</div>
    <p className="text-gray-600">{text}</p>
  </div>
);

const ImageCard = ({ img }) => (
  <div className="relative group overflow-hidden rounded-3xl shadow-xl">
    <img
      src={img}
      alt="Villa Avantgarde Cuisine"
      className="w-full h-[350px] object-cover transform group-hover:scale-105 transition duration-700"
    />
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
  </div>
);

export default Experience;
