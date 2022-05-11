import React from "react";

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
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg mt-4"
            />
            <input
              type="text"
              value={slots[0]}
              disabled
              className="input input-bordered w-full max-w-lg mt-4"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-lg mt-4"
            />
            <input
              type="Number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg mt-4"
            />
            <input
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
