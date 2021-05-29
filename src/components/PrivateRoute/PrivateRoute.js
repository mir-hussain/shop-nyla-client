import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({ children, loggedInUser, privateLoading, ...rest }) => {
    return (
        <>
        {privateLoading?<Spinner />
        :<Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />}
        </>
    );
};

const mapStateToProps = state => {
    const {user, privateLoading} = state.userReducer;
    return {
        loggedInUser: user,
        privateLoading
    }
}

export default connect(mapStateToProps)(PrivateRoute);