import React from "react";
import appointment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const ContactForm = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="py-16 text-center"
    >
      <h3 className="text-xl text-secondary font-bold">Contact Us</h3>
      <h3 className="text-3xl text-white lg:my-4">Stay Connected With Us</h3>
      <input
        type="email"
        placeholder="Email address"
        className="input w-full max-w-xs my-4"
      />
      <br />
      <input
        type="text"
        placeholder="Subject"
        className="input w-full max-w-xs my-4"
      />
      <br />
      <textarea
        rows="10"
        cols="300"
        type="text"
        placeholder="Your message"
        className="input w-full max-w-xs my-4 h-32"
      />
      <Button align="px-8">Submit</Button>
    </section>
  );
};

export default ContactForm;
