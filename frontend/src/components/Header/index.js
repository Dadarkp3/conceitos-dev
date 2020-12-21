import React from "react";

// Images
import logo from "../../assets/logo.jpg";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img src={logo} />
    </header>
  );
};

export default Header;
