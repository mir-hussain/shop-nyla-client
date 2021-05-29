import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  return (
    <div class='landing'>
      <h3>women collection 2021</h3>
      <h2>new season</h2>
      <Link className='btn-primary' to='/shop'>
        Shop now
      </Link>
    </div>
  );
};

export default Landing;
