//images importing
import Logo from "../../assets/icons/logo.svg";
import PhoneIcon from "../../assets/icons/footer-phone.svg";
import EmailIcon from "../../assets/icons/footer-email.svg";

import HeadingLinksBlock from "../molecules/HeadingLinksBlock";

//email and phone number details
const contactDetails = [
  {
    icon: {
      src: EmailIcon,
      alt: "email icon",
    },
    p: "audit@jjscas.com",
  },
  {
    icon: {
      src: PhoneIcon,
      alt: "phone icon",
    },
    p: "+91 8714769014",
  },
];

//heading and links
const links = [
  {
    heading: "Services",
    links: [
      {
        name: "Audit and Assurance",
        href: "/audit-and-assurance",
      },
      {
        name: "Tax Advisory and Compliance",
        href: "/tax-advisory",
      },
      {
        name: "Accounting and Bookkeeping",
        href: "/accounting-and-bookkeeping",
      },
      {
        name: "Outsources CFO Services",
        href: "/outsources-cfo-services",
      },
      {
        name: "Financial Consulting and Advisory",
        href: "/financial-consulting",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Our Partners",
        href: "#",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        name: "Privacy Policy",
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
      <div className="mx-auto max-w-screen-lg px-5 py-4 text-white lg:flex">
        <div className="mb-8 lg:max-w-[300px]">
          <img className="w-16" src={Logo} alt="logo" />
          {/* <p className="mt-2 max-w-lg text-sm leading-[160%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            voluptatum!
          </p> */}
          <div className="mt-8 space-y-2 pr-12">
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
