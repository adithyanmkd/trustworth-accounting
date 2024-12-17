import PrimaryBtn from "../atoms/PrimaryBtn";

type CardTypes = {
  label: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  mainClassname?: string;
};

const ServiceCard = ({ label, description, img, mainClassname }: CardTypes) => {
  return (
    <div
      className={`mx-auto mt-6 max-w-[800px] items-center justify-around md:flex md:max-w-screen-lg ${mainClassname}`}
    >
      <div className="max-w-[480px] md:max-w-[400px] lg:max-w-[500px]">
        <h3 className="text-[28px] font-semibold leading-[120%]">{label}</h3>
        <p className="mt-2 text-sm leading-[160%] text-[#5b5b5b] md:mt-4 md:text-base">
          {description}
        </p>
        <PrimaryBtn label="know more" classname="mt-2 md:mt-3" />
      </div>
      <div>
        <img
          className="mt-2 w-[400px] md:w-[250px]"
          src={img.src}
          alt={img.alt}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
