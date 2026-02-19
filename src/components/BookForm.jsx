import { CheckIn, CheckOut } from ".";
import { useRoomContext } from "../context/RoomContext";
import { useTranslation } from "react-i18next";

const BookForm = ({ transparent }) => {
  const { checkIn, checkOut } = useRoomContext();
  const { t } = useTranslation();

  // Formatiranje datuma u YYYY-MM-DD za RoomCloud
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleCheckNow = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      alert(t("bookForm.selectDates"));
      return;
    }

    const arrival = formatDate(checkIn);
    const departure = formatDate(checkOut);

    const roomCloudUrl = `https://booking.roomcloud.net/be/se2/hotel.jsp?hotel=21543&arrival=${arrival}&departure=${departure}&lang=en`;

    window.open(roomCloudUrl, "_blank");
  };

  return (
    <div
      className={`w-full shadow-md rounded-lg p-4 lg:p-6 flex flex-col lg:flex-row lg:items-end gap-4 ${
        transparent ? "bg-accent/20 backdrop-blur-md" : "bg-white"
      }`}
    >
      {/* Check In UI */}
      <div className="flex-1 min-w-[120px]">
        <CheckIn />
      </div>

      {/* Check Out UI */}
      <div className="flex-1 min-w-[120px]">
        <CheckOut />
      </div>

      {/* Submit button */}
      <div className="w-full lg:w-auto">
        <button
          onClick={handleCheckNow}
          className="
            relative overflow-hidden w-full lg:w-auto
            bg-accent text-white font-semibold px-6 py-3 rounded-md
            transition-all duration-500 ease-in-out
            hover:bg-gradient-to-r hover:from-accent/90 hover:to-accent-dark/90
            hover:scale-105 hover:shadow-xl
          "
        >
          <span className="relative z-10">{t("bookForm.submitButton")}</span>
          {/* Optional shine effect */}
          <span className="absolute inset-0 bg-white/10 -translate-x-full rotate-12 pointer-events-none transition-transform duration-700 ease-in-out hover:translate-x-full"></span>
        </button>
      </div>
    </div>
  );
};

export default BookForm;
