import HeaderLaptop from "./Responsive/HeaderLaptop";
import HederMobile from "./Responsive/HederMobile";

const Header = () => {
  return (
    <header className="header">
      <HeaderLaptop />
      <HederMobile />
    </header>
  );
};

export default Header;
