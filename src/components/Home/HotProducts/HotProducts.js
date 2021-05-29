import React from "react";
import { Link } from "react-router-dom";
import "./HotProducts.scss";

const HotProducts = () => {
  return (
    <div className='hot-products-container'>
      <Link className='hot-link' to='/shop'>
        <div className='hot-product-card women'>
          <h1>Women</h1>
          <p>Spring 2021</p>
        </div>
      </Link>
      <Link className='hot-link' to='/shop'>
        <div className='hot-product-card men'>
          <h1>Men</h1>
          <p>Spring 2021</p>
        </div>
      </Link>
      <Link className='hot-link' to='/shop'>
        <div className='hot-product-card cap'>
          <h1>Accessories</h1>
          <p>Spring 2021</p>
        </div>
      </Link>
    </div>
  );
};

export default HotProducts;
