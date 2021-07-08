import React from 'react'
import { Route } from 'react-router-dom';
import { PropTypes } from "prop-types";
import { Redirect } from 'react-router-dom';


const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={
                (props) => {
                    return (isAuthenticated) 
                    ? (<Component {...props} />)
                    : (<Redirect to='/auth/login' />)
                }
            }
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute