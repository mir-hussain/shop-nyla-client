import React from "react";
import "./ProductCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ data }) => {
  const { name, price, img } = data;
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={img} alt='' />
      </div>
      <div className='product-info'>
        <div>
          <p id='product-name'>{name}</p>
          <p id='product-price'>{price} $</p>
        </div>
        <button className='add-to-cart-btn'>
          <FontAwesomeIcon
            className='add-icon'
            icon={faCartPlus}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
