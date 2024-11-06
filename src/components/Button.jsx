import React, { useEffect } from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`text-sm font-bold rounded-full button-add  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
