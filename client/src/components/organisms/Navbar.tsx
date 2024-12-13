import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-[#374569]">
      <div className="flex px-5 pt-5 w-full justify-between items-center">
        <div>
          <img src={Menu} alt="menu icon" />
        </div>
        <div>
          <img className="w-16" src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
