import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
  return (
    <section className="mx-6 my-32">
      <h3 className="text-center font-bold text-secondary text-xl uppercase">
        Our Services
      </h3>
      <h3 className="text-center text-2xl">Services We Provide</h3>
      <div className="grid lg:grid-cols-3 gap-8 my-16">
        <Service cardTitle="Fluoride Treatment" img={fluoride}></Service>
        <Service cardTitle="Cavity Filling" img={cavity}></Service>
        <Service cardTitle="Teeth Whitening" img={whitening}></Service>
      </div>
    </section>
  );
};

export default Services;
