import Map from "../molecules/Map";

import LocationIcon from "../../assets/icons/location-icon.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";

const address = [
  {
    icon: {
      path: LocationIcon,
      width: 24,
      height: 24,
      alt: "location icon",
    },
    p: [
      "Jose Jacob Siminov and associates, First Floor, Gov Contractors Building, Thrikkakara, Kakkanad, Ernakulam, Kerala",
    ],
  },
  {
    icon: {
      path: PhoneIcon,
      width: 24,
      height: 24,
      alt: "phone icon",
    },
    p: ["+91 8714769014"],
  },
  {
    icon: {
      path: EmailIcon,
      width: 24,
      height: 24,
      alt: "email icon",
    },
    p: ["audit@jjscas.com"],
  },
];

const Contact = () => {
  return (
    <div className="mt-8 bg-[#F6F6F6] py-10">
      <div className="mx-auto max-w-[323px] px-2 md:max-w-[950px] md:px-12">
        <div className="mx-auto max-w-[323px] items-center space-y-4 pb-6 md:max-w-[500px] lg:flex lg:max-w-[950px] lg:space-y-0">
          <ul className="mx-auto inline-block w-full space-y-2">
            <h1 className="pb-8 text-[34px] font-bold leading-[120%] sm:text-[34px] md:text-[36px]">
              Address and General Queries
            </h1>
            {address.map((value, index) => (
              <li key={index} className="">
                <div className="flex space-x-1">
                  <div className="">
                    <img
                      src={value.icon.path}
                      width={value.icon.width}
                      height={value.icon.height}
                      alt={value.icon.alt}
                    ></img>
                  </div>
                  <div className="max-w-[280px] text-[#65737E]">
                    {value.p.map((p, index) => (
                      <p key={index}>{p}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <Map
              link={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.484558160103!2d76.46808677510849!3d11.002224654988094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba87fba9a64d651%3A0x869b11d41389074a!2sMobiz%20Technologies!5e0!3m2!1sen!2sin!4v1728023979770!5m2!1sen!2sin"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
