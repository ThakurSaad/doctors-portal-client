import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal-client-module-72/main/public/services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <section className="my-24">
      <h3 className="text-center font-bold text-secondary text-xl uppercase mb-24">
        Available Appointments on {format(date, "PP")}
      </h3>
      {}
    </section>
  );
};

export default AvailableAppointments;
