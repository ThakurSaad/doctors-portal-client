import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  const date = new Date();
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="footer justify-center md:justify-around lg:justify-items-center">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <div className="text-center font-semibold mt-28">
        <p>
          Copyright © All right reserved<br />
          {`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`}
          &nbsp;&nbsp;&nbsp;
          {`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
