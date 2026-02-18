import { createContext, useContext, useEffect, useState } from "react";
import { roomData } from "../db/data";

const RoomInfo = createContext();

export const RoomContext = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [loading, setLoading] = useState(false);

  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(0);

  // ✅ dodaj checkIn i checkOut
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);

  useEffect(() => { setTotal(+adults[0] + +kids[0]); });

  const resetRoomFilterData = () => {
    setAdults('1 Adult');
    setKids('0 Kid');
    setRooms(roomData);
    setCheckIn(today);
    setCheckOut(tomorrow);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setLoading(true);

    const filterRooms = roomData.filter(room => total <= room.maxPerson);

    setTimeout(() => {
      setLoading(false);
      setRooms(filterRooms);
    }, 3000);
  };

  const shareWithChildren = {
    rooms, loading,
    adults, setAdults,
    kids, setKids,
    checkIn, setCheckIn,
    checkOut, setCheckOut,
    handleCheck,
    resetRoomFilterData,
  };

  return (
    <RoomInfo.Provider value={shareWithChildren}>
      {children}
    </RoomInfo.Provider>
  );
};

export const useRoomContext = () => useContext(RoomInfo);
