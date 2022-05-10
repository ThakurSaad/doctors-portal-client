import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Henry",
      review: "",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Henry",
      review: "",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Henry",
      review: "",
      location: "California",
      img: people3,
    },
  ];

  return (
    <section className="my-8 lg:my-24 mx-14">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-secondary font-bold">Testimonial</h3>
          <h3 className="text-3xl font-semibold lg:my-3">
            What Our Patient Says
          </h3>
        </div>
        <div>
          <img className="w-[98px] lg:w-[192px]" src={quote} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
