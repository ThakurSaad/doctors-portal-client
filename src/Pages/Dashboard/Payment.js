import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { appointmentId } = useParams();
  const url = `http://localhost:4000/booking/${appointmentId}`;

  const { data: appointment, isLoading } = useQuery(
    ["booking", appointmentId],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );
  const { patientName, treatment, date, slot, price } = appointment || "";

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mx-8 my-8">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title">Pay For {treatment}</h2>
          <p>
            We will see you on &nbsp;
            <span className="text-orange-700 font-semibold">{date}</span>&nbsp;
            at&nbsp;
            {slot}
          </p>
          <p>Please pay ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body"></div>
      </div>
    </section>
  );
};

export default Payment;
