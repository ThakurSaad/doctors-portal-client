import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { appointmentId } = useParams();

  return (
    <div>
      <h3 className="text-accent text-4xl uppercase ml-8">
        Please Pay for &nbsp;
        <span className="font-semibold text-purple-500">{appointmentId}</span>
      </h3>
    </div>
  );
};

export default Payment;
