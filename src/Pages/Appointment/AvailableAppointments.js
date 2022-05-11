import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ date }) => {
  return (
    <section className="my-24">
      <h3 className="text-center font-bold text-secondary text-xl uppercase mb-24">
        Available Appointments on {format(date, "PP")}
      </h3>
    </section>
  );
};

export default AvailableAppointments;
