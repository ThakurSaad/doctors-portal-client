import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:4000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-24">
      <h3 className="text-center font-bold text-secondary text-2xl uppercase mb-24">
        Available Appointments on {format(date, "PP")}
      </h3>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 mx-10">
        {services?.map((service) => (
          <Service
            setTreatment={setTreatment}
            service={service}
            key={service._id}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
