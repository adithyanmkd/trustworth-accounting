type PropsType = {
  heading: string;
  description: string;
};

const ServiceHeading = ({ heading, description }: PropsType) => {
  return (
    <div className="flex flex-col items-center px-5 pb-6 pt-[140px] md:pb-12 md:pt-[160px]">
      <h1 className="text-center text-[38px] leading-[120%] md:text-[44px] lg:text-[58px]">
        {heading}
      </h1>
      <p className="max-w-[580px] pt-4 text-center text-sm text-[#3F3F3F]">
        {description}
      </p>
    </div>
  );
};

export default ServiceHeading;
