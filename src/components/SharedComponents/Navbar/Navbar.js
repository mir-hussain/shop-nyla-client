import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({loggedInUser}) => {
  const [navbar, setNavbar] = useState(false);
  
  const {name, photo, email} = loggedInUser;

  const changeBackground = () => {
    if (window.scrollY >= 72) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "active" : "disable"}>
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
          { email?
            photo?
            <img src={photo} className='user-logo' alt="" />
            :<h4>{name||email}</h4>
            :<Link to='/login'>Sign In</Link>
          }
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.userReducer.user
  }
}

export default connect(mapStateToProps)(Navbar);
