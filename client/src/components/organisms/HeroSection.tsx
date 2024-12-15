//images importing
import HeroImage from "../../assets/images/hero-img.png";

//components importing
import ContactUsBar from "../molecules/ContactUsBar";

const HeroSection = () => {
  return (
    <>
      <div className="relative bg-[#374569]">
        <div className="mx-auto max-w-screen-lg">
          <div className="px-5 pt-7">
            <h1 className="font-poppins text-center text-4xl font-bold leading-[120%] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your Auditing Partner
            </h1>
            <p className="mx-auto mt-2.5 max-w-[698px] text-xs leading-[160%] text-[#DEDEDE] sm:text-center sm:text-sm md:text-base">
              Empower your finance team. The onestop plateform for all financial
              management of small and medium-sized business.
            </p>
            <ContactUsBar />
          </div>
          <img
            className="relative z-20 mx-auto mt-6 px-5"
            src={HeroImage}
            alt="hero image"
          />
        </div>
        <div className="absolute bottom-0 z-10 h-1/5 w-full bg-white sm:h-1/3"></div>
      </div>
    </>
  );
};

export default HeroSection;
