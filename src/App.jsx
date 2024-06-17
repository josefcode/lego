import GiftTravelSection from "./components/gift/GiftTravelSection";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { sectionsData } from "./data/data";

function App() {
  return (
    <>
      <Navbar />
      {sectionsData.map((section) => {
        return (
          <GiftTravelSection
            key={section.id}
            id={section.id}
            showEndCard={section.showEndCard}
            showStartCard={section.showStartCard}
            giftTitle={section.giftTitle}
            giftDesc={section.giftDesc}
            borderBottomColor={section.borderBottomColor}
            borderTopColor={section.borderTopColor}
            endcardTitle={section.endcardTitle}
            endcardDesc={section.endcardDesc}
            endImage={section.endImage}
            endImageAl={section.endImageAl}
            startcardTitle={section.startcardTitle}
            startcardDesc={section.startcardDesc}
            startImage={section.startImage}
            startImageAlt={section.startImageAlt}
            singleCardBottom={section.singleCardBottom}
            setSingleCard={section.setSingleCard}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
