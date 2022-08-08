import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sidhant-kumar-sahoo-08a8291b8/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/sidhant2709" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/sidhant.sahoo.270992"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
