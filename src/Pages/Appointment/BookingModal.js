import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const formattedDate = format(date, "PP");

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:4000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const success = data.success;
        setTreatment(null);
        if (success) {
          toast(
            `Your appointment has been booked on ${formattedDate} at ${slot}`
          );
        } else {
          toast.error(
            `You have already booked this appointment on ${data.booking?.date} ${data.booking?.slot}`
          );
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBooking} className="text-center">
            <h3 className="font-bold text-lg">{name}</h3>
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-lg mt-4 font-semibold"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-lg mt-4"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full max-w-lg mt-4"
              value={user?.displayName || ""}
              disabled
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-lg mt-4"
              value={user?.email || ""}
              disabled
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg mt-4"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="bg-accent text-white font-semibold input w-full max-w-lg mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
