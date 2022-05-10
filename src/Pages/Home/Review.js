import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card md:max-w-md lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="mb-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga at
          delectus nostrum, ea accusantium.
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-[75px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="avatar" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-semibold">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
