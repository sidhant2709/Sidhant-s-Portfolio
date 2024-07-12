import React from "react";
import HeaderButtons from "./HeaderButtons";
import "./Header.css";
import myPhoto from "../../assets/Sid(1).png";
import HeaderSocial from "./HeaderSocial";
import imageBackgroundDark from "../../assets/blob.svg";
import imageBackgroundLight from "../../assets/blob_light.svg";
import Wave from "../Wave/Wave";
import { ReactTyped } from "react-typed";

const Header = ({ theme }) => {
  return (
    <>
      <Wave theme={theme} />
      <header id="home">
        {/* <div>
          <Wave theme={theme} />
        </div> */}
        <div className="container header__container">
          <h4 className="header__title text-light">Hello I'm</h4>
          <HeaderSocial />
          <div className="my__photo">
            <img
              src={
                theme === "dark-theme"
                  ? imageBackgroundDark
                  : imageBackgroundLight
              }
              alt="myPhotoBackground"
              className="my__background"
            />
            <img src={myPhoto} alt="myPhoto" className="my__photo-background" />
            <div className="my-name my-name__title">
              <h4>Sidhant Kumar Sahoo</h4>
            </div>
          </div>
          <h4 className="text-light position header__title">
            Fullstack Developer
          </h4>
          <ReactTyped
            className="text-light my-name__title"
            strings={[
              "Below you can download my Resume",
              "Visit my GitHub and LinkedIn",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <HeaderButtons />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
