import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen px-1">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          style={{ maxWidth: "594px" }}
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl "
          alt="banner"
        />
        <div>
          <h1 className="text-5xl font-bold pr-8">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary font-bold text-white">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;