import React from "react";
import HeaderButtons from "./HeaderButtons";
import "./Header.css";
import myPhoto from "../../assets/Sid.png";
import HeaderSocial from "./HeaderSocial";
import imageBackground from "../../assets/blob.svg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <HeaderSocial />
        <div className="my__photo">
          <img
            src={imageBackground}
            alt="myPhotoBackground"
            className="my__background"
          />
          <img src={myPhoto} alt="myPhoto" className="my__photo-background" />
          <div className="my-name">
            <h4>
              <span className="first-name">Sidhant</span>
              <span className="last-name">Sahoo</span>
            </h4>
          </div>
        </div>
        <h4 className="text-light position">Fullstack Developer</h4>
        <HeaderButtons />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
