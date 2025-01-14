type propsType = {
  heading: string;
  description: string;
  flexDirection?: string;
  img: {
    src: string;
    alt: string;
    bgSrc: string;
  };
};

const TextImgBlock = ({
  heading,
  description,
  flexDirection = "",
  img,
}: propsType) => {
  return (
    <div
      className={`mx-auto flex max-w-screen-lg flex-col px-5 pb-8 md:flex md:flex-row md:items-center md:justify-between ${flexDirection}`}
    >
      <div className="max-w-[420px] sm:max-w-[580px] md:max-w-[360px] lg:max-w-[480px]">
        <h2 className="text-[28px] leading-[120%] md:text-[34px] lg:text-[36px]">
          {heading}
        </h2>
        <p className="pt-4 text-sm leading-[140%] text-[#5d5d5d] md:text-[15px] lg:text-[16px]">
          {description}
        </p>
      </div>
      <div className="relative flex items-center pt-8">
        <img className="absolute -z-20" src={img.bgSrc} alt="purple bg" />
        <img
          className="z-10 mx-auto w-[50%] md:ml-auto md:w-[75%]"
          src={img.src}
          alt={img.alt}
        />
      </div>
    </div>
  );
};

export default TextImgBlock;
