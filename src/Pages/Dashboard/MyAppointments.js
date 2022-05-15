import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://dry-hollows-93742.herokuapp.com/booking?patient=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <section className="mx-8 mb-8">
      <h3 className="text-accent text-4xl uppercase">
        My Appointments : {appointments.length}{" "}
      </h3>
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyAppointments;
