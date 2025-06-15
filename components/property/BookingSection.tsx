// components/property/BookingSection.tsx
import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    return Math.max(0, (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24));
  };

  const total = price * calculateNights();

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block text-sm">Check-in</label>
        <input type="date" className="border p-2 w-full mt-1" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
      </div>

      <div className="mt-4">
        <label className="block text-sm">Check-out</label>
        <input type="date" className="border p-2 w-full mt-1" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${total}</strong></p>
      </div>

      <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 w-full rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
