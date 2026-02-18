import { useRoomContext } from "../context/RoomContext";
import { SpinnerDotted } from "spinners-react";
import { Room } from ".";
import { useTranslation } from "react-i18next";

const Rooms = () => {
  const { rooms, loading } = useRoomContext();
  const { t } = useTranslation();

  return (
    <section className="py-24">
      {
        // overlay & spinner effect
        loading && (
          <div className="h-screen w-full fixed bottom-0 top-0 bg-black/80 z-50 grid place-items-center">
            <SpinnerDotted />
          </div>
        )
      }

      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <h2 className="font-primary text-[45px] mb-6">
            {t("rooms.gallery")}
          </h2>
        </div>

        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
