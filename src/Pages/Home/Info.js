import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6 mx-4">
      <InfoCard color={`bg-gradient-to-r from-secondary to-primary`} img={clock}></InfoCard>
      <InfoCard color={`bg-accent`} img={marker}></InfoCard>
      <InfoCard color={`bg-gradient-to-r from-secondary to-primary`} img={phone}></InfoCard>
    </div>
  );
};

export default Info;
