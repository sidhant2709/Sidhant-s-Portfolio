import React from "react";
import HeaderButtons from "./HeaderButtons";
import "./Header.css";
import myPhoto from "../../assets/Sid.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Sidhant Kumar Sahoo</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <HeaderButtons />
        <HeaderSocial />

        <div className="my__photo">
          <img src={myPhoto} alt="myPhoto" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
