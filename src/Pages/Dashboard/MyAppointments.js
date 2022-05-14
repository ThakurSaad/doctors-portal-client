import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState();

  console.log(user);
  useEffect(() => {
    // fetch(`http://localhost:4000/booking?patient=${}`)
  },[])

  return (
    <div>
      <h3 className="text-accent text-4xl uppercase">
        My Appointments
      </h3>
    </div>
  );
};

export default MyAppointments;
