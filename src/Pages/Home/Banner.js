import React from "react";
import "./Banner.css";
import chair from "../../assets/images/chair.png";
import Button from "../Shared/Button";
import bgChair from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bgChair})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat-y'
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="banner-img max-w-sm rounded-lg shadow-2xl "
          alt="banner"
        />
        <div>
          <h1 className="text-5xl font-bold mt-8 md:mt-0 pr-8">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>get started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
