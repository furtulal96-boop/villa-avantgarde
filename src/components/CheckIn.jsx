import { BsCalendar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRoomContext } from "../context/RoomContext";

const CheckIn = () => {
  const { checkIn, setCheckIn } = useRoomContext();

  return (
    <div className="relative w-full">
      <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        placeholderText="Check in"
        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
      />
      <BsCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent text-lg pointer-events-none" />
    </div>
  );
};

export default CheckIn;
