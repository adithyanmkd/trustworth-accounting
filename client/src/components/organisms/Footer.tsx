//images importing
import Logo from "../../assets/icons/logo.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";

import HeadingLinksBlock from "../molecules/HeadingLinksBlock";

//email and phone number details
const contactDetails = [
  {
    icon: {
      src: EmailIcon,
      alt: "email icon",
    },
    p: "sample@gmail.com",
  },
  {
    icon: {
      src: PhoneIcon,
      alt: "phone icon",
    },
    p: "8848911255",
  },
];

//heading and links
const links = [
  {
    heading: "Services",
    links: [
      {
        name: "Audit and Assurance",
        href: "#",
      },
      {
        name: "Tax Advisory and Compliance",
        href: "#",
      },
      {
        name: "Accounting and Bookkeeping",
        href: "#",
      },
      {
        name: "Outsources CFO Services",
        href: "#",
      },
      {
        name: "Financial Consulting and Advisory",
        href: "#",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        name: "About",
        href: "#",
      },
      {
        name: "Partners",
        href: "#",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        name: "Privacy",
        href: "#",
      },
      {
        name: "Terms and Condition",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#011020]">
      <div className="mx-auto mt-10 max-w-screen-lg px-5 py-4 text-white lg:flex">
        <div className="mb-8 lg:max-w-[300px]">
          <img className="w-16" src={Logo} alt="logo" />
          <p className="mt-2 max-w-lg text-sm leading-[160%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            voluptatum!
          </p>
          <div className="mt-8 space-y-2">
            {contactDetails.map((data, index) => (
              <div key={index} className="flex space-x-3 text-sm">
                <img src={data.icon.src} alt={data.icon.alt} />
                <p>{data.p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid justify-items-stretch space-y-8 sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3">
          {links.map((value, index) => (
            <HeadingLinksBlock key={index} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
