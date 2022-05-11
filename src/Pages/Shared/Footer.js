import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <Link to="" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <Link to="" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="text-center font-semibold mt-28">
        <p>
          Copyright © All right reserved
          <br />
          {`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`}
          &nbsp;&nbsp;&nbsp;
          {`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
