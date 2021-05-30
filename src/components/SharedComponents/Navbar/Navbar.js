import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ loggedInUser }) => {
  const [navbar, setNavbar] = useState(false);

  const history = useHistory();

  const { name, photo, email } = loggedInUser;

  const changeBackground = () => {
    if (window.scrollY >= 72) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () =>
      window.removeEventListener(
        "scroll",
        changeBackground
      );
  });

  return (
    <nav className={navbar ? "active" : "disable"}>
      <div id='logo'>
        Shop <span>Nyla</span>
      </div>
      <div className='navbar-desktop'>
        <ul>
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
            {email ? (
              photo ? (
                <img
                  src={photo}
                  onClick={() => history.push("/login")}
                  className='user-logo'
                  alt=''
                />
              ) : (
                <h4 onClick={() => history.push("/login")}>
                  {name || email}
                </h4>
              )
            ) : (
              <Link to='/login'>Sign In</Link>
            )}
          </li>
        </ul>
      </div>
      <div className='navbar-phone'>
        <ul>
          <li id='logo'>
            Shop <span>Nyla</span>
          </li>
          <li> Button</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Navbar);
