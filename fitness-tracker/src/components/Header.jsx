import logo from "../../public/images/logo.png";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="#" className="header__logo">
            <img src={logo} alt="logo" />
          </a>

          <Navigation />
        </div>
      </div>
    </header>
  );
}
