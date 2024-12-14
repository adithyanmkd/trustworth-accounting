import About from "../../assets/images/aboutUs.png";

const AboutSection = () => {
  return (
    <div className="mx-auto mt-10 max-w-screen-lg px-5">
      <div className="mx-auto max-w-[800px] lg:max-w-screen-lg">
        <h2 className="text-4xl font-semibold">About Us</h2>
        <div className="lg: items-center space-x-6 lg:flex">
          <div className="space-y-1 text-justify text-sm leading-[160%] text-[#1F1F1F] md:text-base lg:text-left">
            <p className="mt-4">
              Welcome to
              <span className="ml-1 font-semibold text-black">
                JOSE JACOB SIMINOV & ASSOCIATES
              </span>
              , a Chartered Accountancy firm based in India, dedicated to
              delivering excellence in accounting and tax consultancy services.
              Our team of seasoned professionals brings extensive knowledge and
              experience to serve a diverse client base, both domestically and
              internationally.
            </p>
            <p>
              Our approach combines deep expertise with systemized processes and
              innovative accounting technology to offer reliable, efficient, and
              customized services.
            </p>
            <p>
              At JOSE JACOB SIMINOV & ASSOCIATES, our goal is to empower our
              clients with the insights, accuracy, and compliance they need to
              drive growth and achieve financial success. We're here to be your
              trusted partner to handle the numbers so you can focus on what you
              do best.
            </p>
          </div>
          <img src={About} alt="about us image" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutSection;
