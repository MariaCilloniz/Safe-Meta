import "./Header.scss";
import headerLogo from "../../assets/images/header-logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={headerLogo} alt="safe meta logo" />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
