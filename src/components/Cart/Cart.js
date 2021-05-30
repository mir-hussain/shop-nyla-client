import React from "react";
import { connect } from "react-redux";
import './Cart.scss';

const Cart = ({cart}) => {
  return (
    <div className="cart-container">
      <h1>This is Cart {cart.length}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  }
}

export default connect(mapStateToProps)(Cart);
