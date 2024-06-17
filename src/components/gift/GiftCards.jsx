import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const GiftCards = ({
  showStartCard,
  showEndCard,
  borderBottomColor,
  borderTopColor,
  setSingleCard,
  startcardTitle,
  startcardDesc,
  startImage,
  startImageAlt,
  endcardTitle,
  endcardDesc,
  endImage,
  endImageAlt,
  props,
}) => {
  return (
    <div className="gift-container__cards" {...props}>
      {showStartCard ? (
        <div
          className={`gift-container__card ${borderTopColor} single-${setSingleCard}`}
        >
          <div className="cardInfo">
            <h2 className="cardTitle">{startcardTitle}</h2>
            <p className="cardDesc">{startcardDesc}</p>
            <div>
              <PrimaryButton text="View details" endIcon={ArrowForwardIcon} />
            </div>
          </div>
          <div className="cardImage">
            <img className="cardImage" src={startImage} alt={startImageAlt} />
          </div>
        </div>
      ) : null}
      {showEndCard ? (
        <div
          className={`gift-container__secondCard ${borderBottomColor} single-${setSingleCard}`}
        >
          <div className="cardImage">
            <img className="cardImage" src={endImage} alt={endImageAlt} />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle">{endcardTitle}</h2>
            <p className="cardDesc">{endcardDesc}</p>
            <div>
              <PrimaryButton text="View details" endIcon={ArrowForwardIcon} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
