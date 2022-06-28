import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  const showNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
    console.log(
      "file: Nav.js ~ line 8 ~ window.addEventListener ~ window.scrollY",
      window.scrollY
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavBar);
    return () => {
      window.removeEventListener("scroll", showNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
      />
    </div>
  );
};

export default Nav;
