import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { addCount, removeCount } from "../../redux/actions/cartActions";
import './Cart.scss';

const Cart = ({cart, increaseQuantity, decreaseQuantity}) => {

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const tax = Math.round((totalPrice+15) * .1);

  return (
    <div className="cart-container">
      <h2>Added Products {cart.length}</h2>
      <div id="cart" className="cart">
        <div className="cart-detail">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
            {
              cart.map(({key, name, price, quantity}) => (
                <tr key={key}>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td id="quantity">
                    <button onClick={() => decreaseQuantity(key)}>
                    <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <div>{quantity}</div>
                    <button onClick={() => increaseQuantity(key)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>
                  <td>{price * quantity}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
        <div className="cart-counter">
          <h3>CART TOTALS</h3>
          <p>Product Total Price : $<span> {totalPrice}</span></p>
          <p>Shipping Cost : $<span> 15</span></p>
          <p>Tax/Vat : $<span> {tax}</span></p>
          <h3>Total Price : $<span> {totalPrice+tax}</span></h3>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseQuantity: key => dispatch(addCount(key)),
    decreaseQuantity: key => dispatch(removeCount(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
