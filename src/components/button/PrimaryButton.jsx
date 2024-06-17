import React from "react";

const PrimaryButton = ({
  text,
  endIcon: EndIcon,
  startIcon: StartIcon,
  onClick,
  ...props
}) => {
  return (
    <button className="button" onClick={onClick} {...props}>
      {StartIcon && (
        <div className="button__icon">
          <StartIcon />
        </div>
      )}
      <span className="button__text">{text}</span>
      {EndIcon && (
        <div className="button__icon">
          <EndIcon />
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
