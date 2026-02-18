import { useState } from "react";

const Room = ({ room }) => {
  const { image } = room ?? {};
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="w-full overflow-hidden rounded-xl cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={image}
          alt="Room"
          className="w-full h-[220px] sm:h-[250px] lg:h-[260px] object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <img
            src={image}
            alt="Room Full"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default Room;
