//images importing
import HeroImage from "../../assets/images/hero-img.png";

//components importing
import ContactUsBar from "../molecules/ContactUsBar";

const HeroSection = () => {
  return (
    <>
      <div className="h-[400px] bg-[#374569] px-5 pt-7 md:h-[550px]">
        <div>
          <h1 className="text-center text-4xl font-bold leading-[120%] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Auditing Partner
          </h1>
          <p className="mx-auto mt-2.5 max-w-[698px] text-xs leading-[160%] text-[#DEDEDE] sm:text-center sm:text-sm md:text-base">
            Empower your finance team. The onestop plateform for all financial
            management of small and medium-sized business.
          </p>
          <ContactUsBar />
        </div>
      </div>
      <img
        className="smCustom:-top-[10.5rem] relative -top-[8.5rem] mx-auto px-5 sm:-top-[9.5rem] md:-top-[18rem] lg:max-w-[1080px]"
        src={HeroImage}
        alt="hero image"
      />
    </>
  );
};

export default HeroSection;
