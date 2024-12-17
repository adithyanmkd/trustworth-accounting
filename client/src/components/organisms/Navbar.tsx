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
    name: "Service",
    href: "#",
  },
  {
    name: "About Us",
    href: "#",
  },
];

const Navbar = () => {
  const [hoverdIndex, setHoverdIndex] = useState(-1);
  const [sidebarIsActive, setSidebarIsActive] = useState(false);

  const toggleMenu = () => setSidebarIsActive(!sidebarIsActive);

  return (
    <div className="bg-[#374569]">
      <div className="mx-auto max-w-screen-lg">
        {sidebarIsActive ? (
          <MobileSidebar toggleMenu={toggleMenu} />
        ) : (
          <div className="flex w-full items-center justify-between px-5 pt-5 md:hidden">
            <div>
              <img className="w-16" src={Logo} alt="logo" />
            </div>
            <div>
              <img onClick={toggleMenu} src={Menu} alt="menu icon" />
            </div>
          </div>
        )}
        <div className="hidden items-center justify-between px-5 py-4 md:flex lg:px-0">
          <img src={Logo} alt="logo" />
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
          <PrimaryBtn label="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
