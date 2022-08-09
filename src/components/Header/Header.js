import React from "react";
import HeaderButtons from "./HeaderButtons";
import "./Header.css";
import myPhoto from "../../assets/Sid.png";
import HeaderSocial from "./HeaderSocial";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Sidhant Kumar Sahoo</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <HeaderButtons />
        <HeaderSocial />

        <div className="my__photo">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4DB5FF"
              d="M35.8,-45.2C49,-31.6,64.1,-22.8,69.9,-9.5C75.6,3.9,72,21.7,62.6,34.5C53.3,47.3,38.1,55.1,21.7,62.1C5.3,69.2,-12.2,75.5,-21,67.9C-29.9,60.3,-29.9,38.8,-40.3,22.5C-50.6,6.2,-71.2,-5,-74.7,-18C-78.2,-31,-64.5,-45.8,-49.2,-59.1C-33.9,-72.3,-17,-84,-2.8,-80.6C11.3,-77.3,22.6,-58.9,35.8,-45.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <img src={myPhoto} alt="myPhoto" />
        </div>

        <Link
          href="#contact"
          className="scroll__down"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          activeClass="active"
        >
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
