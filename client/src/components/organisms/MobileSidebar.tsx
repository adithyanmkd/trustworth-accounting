import Logo from "../../assets/icons/logo.svg";
import CloseIcon from "../../assets/icons/menu-close.svg";
import PrimaryBtn from "../atoms/PrimaryBtn";

type NavbarProps = {
  toggleMenu: () => void;
};

const navLinks = [
  {
    name: "home",
    url: "#",
  },
  {
    name: "about us",
    url: "#about",
  },
  {
    name: "services",
    url: "#services",
  },
];

const MobileSidebar = ({ toggleMenu }: NavbarProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white md:hidden">
      <div className="absolute w-full px-5 pt-3">
        <div className="flex items-center justify-between">
          <div>
            <img className="w-16 sm:w-24 md:w-36" src={Logo} alt="logo" />
          </div>
          <div className="">
            <img
              className="w-12 cursor-pointer"
              src={CloseIcon}
              alt="menu icon"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="space-y-6 pt-8 text-right text-lg">
          {navLinks.map((value, index) => (
            <a
              className="block font-medium capitalize"
              key={index}
              href={value.url}
            >
              {value.name}
            </a>
          ))}
        </div>
        <div className="flex justify-end pt-8">
          <PrimaryBtn label="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
