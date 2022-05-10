import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];

  return (
    <section className="mx-6 my-32">
      <h3 className="text-center font-bold text-secondary text-xl uppercase">
        Our Services
      </h3>
      <h3 className="text-center text-2xl">Services We Provide</h3>
      <div className="grid justify-items-center lg:grid-cols-3 gap-8 my-16">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      
      <div className="lg:w-4/5 mx-auto">
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              class="max-w-sm rounded-lg shadow-2xl lg:w"
              alt="Exceptional Dental Care"
            />
            <div>
              <h1 class="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
