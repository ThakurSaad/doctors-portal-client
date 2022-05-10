import React from "react";

const Button = ({ children, align }) => {
  return (
    <div>
      <button className={`btn btn-primary bg-gradient-to-r from-secondary to-primary font-bold text-white ${align}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
