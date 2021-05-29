import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Landing = () => {
  return (
    <div className='landing'>
      <div data-aos='fade-down' data-aos-delay='500'>
        <h3>women collection 2021</h3>
      </div>
      <div data-aos='fade-left' data-aos-delay='1000'>
        <h2>new season</h2>
      </div>
      <div data-aos='zoom-in' data-aos-delay='1500'>
        <Link className='btn-primary' to='/shop'>
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Landing;
