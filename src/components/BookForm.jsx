import { CheckIn, CheckOut } from ".";
import { useRoomContext } from "../context/RoomContext";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const BookForm = () => {
  const { checkIn, checkOut } = useRoomContext();
  const formRef = useRef(null);

  // Formatiranje datuma u YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Broj noćenja
  const calculateNights = () => {
    if (!checkIn || !checkOut) return "";
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 0 ? diffDays : "";
  };

  // Handler za "Check Now" klik
  const handleCheckNow = (e) => {
    e.preventDefault();
    const { t } = useTranslation();

    setTimeout(() => {
      formRef.current.submit();
    }, 300);
  };

  const { t } = useTranslation();
  return (
    <form
      ref={formRef}
      action="https://secure.phobs.net/book.php"
      method="get"
      target="_blank"
      className="w-full bg-white shadow-md rounded-lg p-4 lg:p-6 flex flex-col lg:flex-row lg:items-end gap-4"
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
          className="w-full lg:w-auto bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-dark transition"
        >
          {t("bookForm.submitButton")}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
