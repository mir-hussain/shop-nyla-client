export const AUTH_USER_REQUEST = 'FETCH_USERS_REQUEST';
export const AUTH_USER_SUCCESS = 'FETCH_USERS_SUCCESS';
export const AUTH_USER_FAILURE = 'FETCH_USERS_FAILURE';
export const AUTH_PRIVATE_LOADING = 'AUTH_PRIVATE_LOADING';

export const authUserRequest = () => {
    return {
        type: AUTH_USER_REQUEST
    }
}

export const authUserSuccess = user => {
    return {
        type: AUTH_USER_SUCCESS,
        payload: user
    }
}

export const authUserFailure = err => {
    return {
        type: AUTH_USER_FAILURE,
        payload: err
    }
}

export const authPrivateLoading = () => {
    return {
        type: AUTH_PRIVATE_LOADING
    }
}