import "./Header.scss";
import headerLogo from "../../assets/images/header-logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<Link to="/">
						{" "}
						<img src={headerLogo} alt="safe meta logo" />
					</Link>
				</div>
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
