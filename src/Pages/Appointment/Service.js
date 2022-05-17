import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="font-semibold text-secondary text-xl uppercase">
          {name}
        </h2>
        <p>
          {slots.length ? (
            // after booking slot will decrease so the as long as there is the first item, it will be displayed
            <span className="text-sm">{slots[0]}</span>
          ) : (
            <span className="text-red-500 text-sm">Try Another Date</span>
          )}
        </p>
        <p className="uppercase text-xs mb-1">
          {slots.length} {slots.length <= 1 ? "space" : "spaces"} Available
        </p>
        <p className="mt-[-5px]">
          <small>Price : ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-secondary font-bold text-white bg-gradient-to-r from-secondary to-primary"
            htmlFor="booking-modal"
          >
            book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
