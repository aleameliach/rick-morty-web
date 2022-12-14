import { NavLink } from "react-router-dom";
import "../styles/components/Header.scss";
import logo from "../images/Rick_and_Morty.png";
const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__image" src={logo} alt="Rick & Morty Logo" />
      </NavLink>
    </header>
  );
};
export default Header;