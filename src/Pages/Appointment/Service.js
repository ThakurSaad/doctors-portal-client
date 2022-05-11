import React from "react";
import Button from "../Shared/Button";

const Service = ({ service }) => {
  const { name, slots } = service;

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
        <div className="card-actions justify-center">
          <Button disabled={slots.length === 0}>Book Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
