import React from "react";
import { GiftCards } from "./GiftCards";

const GiftTravelSection = ({
  id,
  showStartCard,
  showEndCard,
  giftTitle,
  giftDesc,
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
  setSingleCard,
  props,
}) => {
  return (
    <div className="gift-container" {...props}>
      <section id={id}>
        <header>
          <h1>{giftTitle}</h1>
          <div className={`underline ${borderTopColor}`}></div>
          <p>{giftDesc}</p>
        </header>
        <GiftCards
          showStartCard={showStartCard}
          showEndCard={showEndCard}
          borderBottomColor={borderBottomColor}
          borderTopColor={borderTopColor}
          startcardTitle={startcardTitle}
          startcardDesc={startcardDesc}
          startImage={startImage}
          startImageAlt={startImageAlt}
          endcardTitle={endcardTitle}
          endcardDesc={endcardDesc}
          endImage={endImage}
          endImageAlt={endImageAlt}
          setSingleCard={setSingleCard}
        />
      </section>
    </div>
  );
};

export default GiftTravelSection;
