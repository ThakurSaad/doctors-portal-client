import React from "react";

const InfoCard = ({ img, color }) => {
  return (
    <div
      className={`card lg:card-side text-white ${color} bg-accent shadow-xl p-4`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
