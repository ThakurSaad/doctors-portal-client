import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section
      style={{
        background: `url(${bgChair})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-28">
        <img
          className="rounded-lg shadow-2xl max-w-[320px] lg:max-w-[600px]"
          src={chair}
          alt=""
        />
        <div className="bg-white rounded-xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p className="text-center py-5">
            You Have Selected :{" "}
            <span className="text-secondary font-semibold">{format(date, "PP")}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
