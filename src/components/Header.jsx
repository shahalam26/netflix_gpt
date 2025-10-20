import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-8 py-4 z-10">
      <img
        src={logo}
        alt="Netflix Logo"
        className="w-32 md:w-40" // responsive logo size
      />
    </header>
  );
};

export default Header;
