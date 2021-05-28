import { AUTH_USER_FAILURE, AUTH_USER_REQUEST, AUTH_USER_SUCCESS } from "../actions/userActions";

const initialState = {
    loading: false,
    user: {},
    error: '',
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case AUTH_USER_REQUEST:
            return {
                ...state,
                loading: true  
            }
        case AUTH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
                error: ''
            }
        case AUTH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: {},
                error: payload,
            }
        default: return state;
    }
}