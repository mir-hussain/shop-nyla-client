import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({loggedInUser, cart}) => {
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
      <div className='navbar-desktop'>
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
          <li id="shopping-count">
            <Link to='/cart'>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span id="counter">{cart.length}</span>
            </Link>
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

const mapStateToProps = state => {
  const {userReducer, cartReducer} = state;
  return {
    loggedInUser: userReducer.user,
    cart: cartReducer.cart
  }
}

export default connect(mapStateToProps)(Navbar);
