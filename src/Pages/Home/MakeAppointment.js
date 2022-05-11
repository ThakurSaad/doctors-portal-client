import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center px-8 py-8 lg:py-0"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-secondary font-bold">Appointment</h3>
        <h3 className="text-3xl font-semibold text-white my-4">
          Make An Appointment Today
        </h3>
        <p className="text-white mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
          dolor impedit quibusdam mollitia cum molestias sunt, adipisci nam quod
          repellat! Sint laboriosam saepe sunt unde fugiat ducimus similique
          quam quo quae perferendis tenetur esse reprehenderit, veniam nisi
          maxime itaque.
        </p>
        <Button>get started</Button>
      </div>
    </section>
  );
};

export default MakeAppointment;
