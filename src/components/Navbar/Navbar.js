import React from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
  const [activeNav, setActiveNav] = useState("#");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineConnectWithoutContact />
      </a>
      {theme === "dark-theme" ? (
        <button onClick={toggleTheme}>
          <BsSun />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <MdDarkMode />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
