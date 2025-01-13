//icon or image imported
import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/icons/logo.svg";

//components imported
import PrimaryBtn from "../atoms/PrimaryBtn";

//modules imported
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Careers",
    href: "#",
  },
  {
    name: "Our partners",
    href: "#",
  },
];

const Navbar = () => {
  const [hoverdIndex, setHoverdIndex] = useState(-1);
  const [sidebarIsActive, setSidebarIsActive] = useState(false);

  const toggleMenu = () => setSidebarIsActive(!sidebarIsActive);
  return (
    <div className="fixed z-50 mb-[166px] w-full bg-[#374569]">
      <div className="flex h-[40px] items-center justify-center bg-[#FFE8D6] text-sm font-medium">
        <p>
          Welcome to
          <span className="ml-1.5 font-bold">
            JOSE JACOB SIMINOV & ASSOCIATES
          </span>
        </p>
      </div>
      <div className="mx-auto max-w-screen-lg">
        {sidebarIsActive ? (
          <MobileSidebar toggleMenu={toggleMenu} />
        ) : (
          <div className="flex w-full items-center justify-between px-5 py-2 md:hidden">
            <div>
              <img className="w-16" src={Logo} alt="logo" />
            </div>
            <div>
              <img onClick={toggleMenu} src={Menu} alt="menu icon" />
            </div>
          </div>
        )}
        <div className="hidden items-center justify-between px-5 py-4 md:flex lg:px-0">
          <img className="w-16" src={Logo} alt="logo" />
          <div className="space-x-8">
            {navLinks.map((link, index) => (
              <a
                className="relative text-white hover:text-[#A3DE2F]"
                key={index}
                href={link.href}
                onMouseEnter={() => setHoverdIndex(index)}
                onMouseLeave={() => setHoverdIndex(-1)}
              >
                <span>{link.name}</span>
                {hoverdIndex === index && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-[#A3DE2F]"></span>
                )}
              </a>
            ))}
          </div>
          <a href="#contact">
            <PrimaryBtn label="Contact Us" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
