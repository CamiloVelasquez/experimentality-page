import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        Home
      </Link>
      <Link className="header__link" to="/aboutus">
        About Us
      </Link>
    </header>
  );
};

export default Header;
