import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:{
            const newCart = [...state.cart, payload];
            return {
                ...state,
                cart: newCart 
            } 
        }
        case REMOVE_FROM_CART:{
            const newCart = state.cart.filter(item => item.key !== payload);
            return {
                ...state,
                cart: newCart
            } 
        }
        default: return state;
    }
}

export default cartReducer;