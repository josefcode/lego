import GiftTravelSection from "./components/gift/GiftTravelSection";
import { Navbar } from "./components/navbar/Navbar";
import imageOne from "../public/giftimages/Rectangle451.png";
import imageTwo from "../public/giftimages/Rectangle450.png";
import imageThree from "../public/giftimages/Rectangle452.png";
import imageFour from "../public/giftimages/Rectangle453.png";
import imageFive from "../public/giftimages/Rectangle448.png";
import imageSix from "../public/giftimages/Rectangle449.png";
import imageSeven from "../public/giftimages/Rectangle463.png";
import imageEight from "../public/giftimages/Rectangle464.png";
import imageNine from "../public/giftimages/Rectangle465.png";
import imageTen from "../public/giftimages/Rectangle467.png";
import imageEleven from "../public/giftimages/Rectangle468.png";
import imageTwelve from "../public/giftimages/Rectangle466.png";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <GiftTravelSection
        showEndCard
        showStartCard
        giftTitle="Gifting"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        borderBottomColor="red"
        borderTopColor="red"
        endcardTitle="Toys perfect for birthday gift-giving season in Spring"
        endcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        endImage={imageTwo}
        endImageAl="example"
        startcardTitle="Gifts for Mom"
        startcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        startImage={imageSix}
        startImageAlt="example"
      />
      <GiftTravelSection
        showEndCard
        showStartCard
        giftTitle="Travel"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        borderBottomColor="green"
        borderTopColor="green"
        endcardTitle="Travel the world no matter where you are. No Passport needed."
        endcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        endImage={imageOne}
        endImageAl="example"
        startcardTitle="Fun accessories to take with you on your travels or keep kids entertained"
        startcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        startImage={imageThree}
        startImageAlt="example"
      />
      <GiftTravelSection
        showStartCard
        giftTitle="Adults welcome"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        borderBottomColor="blue"
        borderTopColor="blue"
        startcardTitle="Travel the world no matter where you are. No Passport needed."
        startcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        startImage={imageFive}
        startImageAl="example"
      />
      <GiftTravelSection
        showEndCard
        giftTitle="Art & Home Décor"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        borderBottomColor="gray"
        borderTopColor="gray"
        endcardTitle="Playful ideas for refreshing your space while tapping into your more creative side"
        endcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        endImage={imageFour}
        endImageAlt="example"
      />

      <GiftTravelSection
        showStartCard
        giftTitle="Space"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        borderBottomColor="dark"
        borderTopColor="dark"
        startcardTitle="Capture the wonders of space and exploration"
        startcardDesc="In the last 30 years, nothing has taken us deeper into space – or better shaped the way we see the universe – than the Hubble Space Telescope."
        startImage={imageSeven}
        startImageAl="example"
      />
      <GiftTravelSection
        showEndCard
        giftTitle="Pop Culture"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        borderBottomColor="pink"
        borderTopColor="pink"
        endcardTitle="Recreate scenes from your favorite movies and TV series"
        endcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        endImage={imageEight}
        endImageAlt="example"
      />

      <GiftTravelSection
        showEndCard
        showStartCard
        giftTitle="Toddlers"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        startcardTitle="Waterproof toys for toddlers and beyond"
        startcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        startImage={imageTen}
        startImageAlt="example"
        borderBottomColor="yellow"
        borderTopColor="yellow"
        endcardTitle="xx TBD"
        endcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        endImage={imageNine}
        endImageAl="example"
      />
      <GiftTravelSection
        showEndCard
        showStartCard
        giftTitle="Toddlers"
        giftDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        startcardTitle="Waterproof toys for toddlers and beyond"
        startcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        startImage={imageEleven}
        startImageAlt="example"
        borderBottomColor="darkRed"
        borderTopColor="darkRed"
        endcardTitle="xx TBD"
        endcardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat."
        endImage={imageTwelve}
        endImageAl="example"
      />
      <Footer />
    </>
  );
}

export default App;
