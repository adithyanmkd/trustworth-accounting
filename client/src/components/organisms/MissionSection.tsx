import GreenDiamond from "../../assets/images/shapes/greenDiamond.svg";
import PurpleDiamond from "../../assets/images/shapes/purpleDiamond.svg";
import TextHeadingBlock from "../molecules/TextHeadingBlock";

const content = [
  {
    img: {
      src: GreenDiamond,
      alt: "Green diamond shape",
    },
    h1: "Mission",
    p: (
      <>
        Our mission is to provide exceptional, reliable, and innovative
        accounting and financial services that help businesses and individuals
        navigate the complexities of the global economy. We strive to deliver
        personalized solutions with the highest standards of professionalism,
        integrity, and expertise, fostering long-term relationships with our
        clients. By embracing technology and a deep understanding of both
        domestic and international markets, we aim to empower our clients to
        achieve sustainable growth and success.
      </>
    ),
  },
  {
    img: {
      src: PurpleDiamond,
      alt: "Purple diamond shape",
    },
    h1: "Vision",
    p: (
      <>
        To be a globally recognized firm of chartered accountants, known for our
        commitment to excellence, ethical standards, and client-centred
        approach. We envision becoming the trusted partner of businesses and
        individuals, offering unparalleled accounting, auditing, taxation, and
        advisory services across borders, and shaping the future of financial
        practices through innovation and dedication.
      </>
    ),
    imgClassname: "-left-1",
  },
];

const MissionSection = () => {
  return (
    <div className="mt-10 bg-[#F5F3F2] py-6">
      <div className="mx-auto max-w-[800px] space-y-10 px-5 lg:flex lg:max-w-screen-lg lg:space-x-6 lg:space-y-0">
        {content.map((value, index) => (
          <TextHeadingBlock key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

export default MissionSection;
