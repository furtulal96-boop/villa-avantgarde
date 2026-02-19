import { useRoomContext } from "../context/RoomContext";
import { SpinnerDotted } from "spinners-react";
import { useTranslation } from "react-i18next";

const bookingBaseLink =
  "https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543";

const Gallery = () => {
  const { rooms, loading } = useRoomContext();
  const { t } = useTranslation();

  return (
    <section className="py-24 relative">
      {/* Loading Overlay */}
      {loading && (
        <div className="h-screen w-full fixed inset-0 bg-black/80 z-50 grid place-items-center">
          <SpinnerDotted
            size={90}
            thickness={150}
            speed={100}
            color="#fbbf24"
          />
        </div>
      )}

      <div className="container mx-auto lg:px-0">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-primary text-[45px] sm:text-4xl md:text-5xl font-bold text-gray-800">
            {t("galleryPage.gallery")}
          </h2>
          <p className="mt-4 text-gray-600 text-lg sm:text-base md:text-lg">
            {t("galleryPage.gallerySubtitle")}
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
            >
              {/* Room Image */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[380px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition duration-500 flex flex-col justify-end p-6 rounded-3xl">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {room.name}
                </h3>
                {/* Availability Link */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition duration-500">
                  <a
                    href={room.bookingLink || bookingBaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold text-lg transition-all duration-300 group hover:text-accent"
                  >
                    {t("galleryPage.checkAvailability")}{" "}
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
