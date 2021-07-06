import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

  } from "react-router-dom";
import {useDispatch} from 'react-redux';

import { startChecking } from '../actions/auth';
import { FlipScreen } from '../components/flip/FlipScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking())
   
    }, [dispatch])


    return (
        <Router>
        <div>
            <Switch>
                <Route
                    path="/auth/login"
                    component={AuthRouter}
                />
                <Route
                    exact
                    path="/"
                    component={FlipScreen}
                />
                <Redirect to = "/"/>
            </Switch>
        </div>
        
    </Router>
    )
}
