import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import arrowRight from "../../../public/button-primary/arrowRight.svg";

export const GiftCards = ({
  showStartCard,
  showEndCard,
  borderBottomColor,
  borderTopColor,
  startcardTitle,
  startcardDesc,
  startImage,
  startImageAlt,
  endcardTitle,
  endcardDesc,
  endImage,
  endImageAlt,
}) => {
  return (
    <div>
      {showStartCard ? (
        <div className={`gift-container__card ${borderTopColor}`}>
          <div className="cardInfo">
            <h2 className="cardTitle">{startcardTitle}</h2>
            <p className="cardDesc">{startcardDesc}</p>
            <PrimaryButton text="View details" endIcon={arrowRight} />
          </div>
          <div className="cardImage">
            <img src={startImage} alt={startImageAlt} />
          </div>
        </div>
      ) : null}
      {showEndCard ? (
        <div className={`gift-container__secondCard ${borderBottomColor}`}>
          <div className="cardImage">
            <img src={endImage} alt={endImageAlt} />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle">{endcardTitle}</h2>
            <p className="cardDesc">{endcardDesc}</p>
            <PrimaryButton text="View details" endIcon={arrowRight} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
