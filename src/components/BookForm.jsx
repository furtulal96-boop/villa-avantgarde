import { CheckIn, CheckOut } from ".";
import { useRoomContext } from "../context/RoomContext";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const BookForm = ({ transparent }) => {
  const { checkIn, checkOut } = useRoomContext();
  const formRef = useRef(null);
  const { t } = useTranslation();

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return "";
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 0 ? diffDays : "";
  };

  const handleCheckNow = (e) => {
    e.preventDefault();
    formRef.current.submit();
  };

  return (
    <form
      ref={formRef}
      action="https://secure.phobs.net/book.php"
      method="get"
      target="_blank"
      className={`w-full shadow-md rounded-lg p-4 lg:p-6 flex flex-col lg:flex-row lg:items-end gap-4 ${
        transparent ? "bg-accent/20 backdrop-blur-md" : "bg-white"
      }`}
    >
      {/* Required PHOBS params */}
      <input
        type="hidden"
        name="company_id"
        value="94291702c977f0bc1777c729e6d67c35"
      />
      <input
        type="hidden"
        name="hotel"
        value="e33dd182ca352dbc9e65d35059af7853"
      />

      {/* Booking params */}
      <input type="hidden" name="date" value={formatDate(checkIn)} />
      <input type="hidden" name="nights" value={calculateNights()} />
      <input type="hidden" name="lang" value="en" />

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
          type="submit"
          onClick={handleCheckNow}
          className="
            w-full lg:w-auto
            bg-accent text-white font-semibold px-6 py-3 rounded-md
            transition duration-300 ease-in-out
            transform hover:scale-105 hover:shadow-xl hover:bg-accent-dark
          "
        >
          {t("bookForm.submitButton")}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
