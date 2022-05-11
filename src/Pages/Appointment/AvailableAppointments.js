import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal-client-module-72/main/public/services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="my-24">
      <h3 className="text-center font-bold text-secondary text-xl uppercase mb-24">
        Available Appointments on {format(date, "PP")}
      </h3>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 mx-10">
        {services.map((service) => (
          <Service
            setTreatment={setTreatment}
            service={service}
            key={service._id}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal date={date} treatment={treatment}></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
