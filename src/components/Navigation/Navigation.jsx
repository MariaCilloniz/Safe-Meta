import { Link } from "react-router-dom";
import "./Navigation.scss";
import parentImage from "../../assets/images/parent.svg";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__info">
        <p className="nav__logo">Meta Safe</p>
        <p className="nav__date">{new Date(Date.now()).toDateString()}</p>
      </div>
      <div className="nav__links">
        <Link to="#" className="nav__resources">
          Parental resources
        </Link>
        <Link to="#" className="nav__parent">
          <p className="nav__parent-text">Hello Parent</p>
          <span className="nav__parent-image">
            <img src={parentImage} alt="" />
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
