import React from "react";

const PrimaryButton = ({ text, endIcon, startIcon, onClick, ...props }) => {
  return (
    <button className="button" onClick={onClick} {...props}>
      {startIcon && (
        <img className="button__icon" src={startIcon} alt="right arrow icon" />
      )}
      <span className="button__text">{text}</span>
      {endIcon && (
        <img className="button__icon" src={endIcon} alt="left arrow icon" />
      )}
    </button>
  );
};

export default PrimaryButton;
