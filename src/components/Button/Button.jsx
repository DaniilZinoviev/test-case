import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button class="button" onClick={onClick} title={children} >
      {children}
    </button>
  );
};

export default Button;
