import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li id='logo'>Shop Nyla</li>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Sing in</li>
      </ul>
    </nav>
  );
};

export default Navbar;
