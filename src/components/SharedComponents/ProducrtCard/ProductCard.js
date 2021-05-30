import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import "./ProductCard.scss";

const ProductCard = ({ data, setCart }) => {
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
        <button onClick={() => setCart(data)} className='add-to-cart-btn'>
          <FontAwesomeIcon
            className='add-icon'
            icon={faCartPlus}
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setCart: product => dispatch(addToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(ProductCard);
