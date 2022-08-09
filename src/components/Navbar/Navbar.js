import React from "react";
import { Link } from "react-scroll";
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
      <Link
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        activeClass="active"
      >
        <AiOutlineHome />
      </Link>
      <Link
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        activeClass="active"
      >
        <AiOutlineUser />
      </Link>
      <Link
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        to="experience"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        activeClass="active"
      >
        <BiBook />
      </Link>
      <Link
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        to="services"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        activeClass="active"
      >
        <RiServiceLine />
      </Link>
      <Link
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        activeClass="active"
      >
        <MdOutlineConnectWithoutContact />
      </Link>
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
