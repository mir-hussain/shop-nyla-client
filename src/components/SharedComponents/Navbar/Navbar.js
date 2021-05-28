import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li id='logo'>
          Shop <span>Nyla</span>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='/login'>Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
