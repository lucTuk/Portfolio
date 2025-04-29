import socialFacebook from "../assets/social-facebook.svg";
import socialLinkedin from "../assets/social-linkedin.svg";
import socialGoogle from "../assets/social-google.svg";
import { useState } from "react";

export default function Navigation() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item navigation__socials">
          <a href="#" className="navigation__link">
            <img src={socialFacebook} alt="facebook" />
          </a>
          <a href="#" className="navigation__link">
            <img src={socialLinkedin} alt="linkedin" />
          </a>
          <a href="#" className="navigation__link">
            <img src={socialGoogle} alt="google" />
          </a>
        </li>
        <li className="navigation-item navigation__burger-button">
          <button
            onClick={() => setBurgerOpen(!isBurgerOpen)}
            class={isBurgerOpen ? "burger-button burger-open" : "burger-button"}
          >
            <span className="burger-button__bar burger-button__bar--top"></span>
            <span className="burger-button__bar burger-button__bar--middle"></span>
            <span className="burger-button__bar burger-button__bar--bottom"></span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
