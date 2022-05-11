import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;

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
          <form className="text-center">
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
              <option disabled selected>
                Appointment Schedule
              </option>
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-lg mt-4"
            />
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg mt-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
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
