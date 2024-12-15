type ContenctTypes = {
  img: {
    src: string;
    alt: string;
  };
  h1: string;
  p: JSX.Element;
  imgClassname?: string;
};

const TextHeadingBlock = ({ img, h1, p, imgClassname = "" }: ContenctTypes) => {
  return (
    <div className="lg:max-w-[520px]">
      <img
        className={`-left-.5 relative w-[34px] ${imgClassname}`}
        src={img.src}
        alt={img.alt}
      />
      <h1 className="font-poppins text-4xl font-semibold">{h1}</h1>
      <p className="text-sms mt-[18px] text-justify leading-[160%] text-[#494949]">
        {p}
      </p>
    </div>
  );
};

export default TextHeadingBlock;
