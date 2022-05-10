import React from "react";

const InfoCard = ({ img, bgClass, cardTitle }) => {
  return (
    <div
      className={`card lg:card-side text-white shadow-xl p-5 ${bgClass}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
