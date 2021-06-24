import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

  } from "react-router-dom";
import { FlipScreen } from '../components/flip/FlipScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route
                    path="/auth"
                    component={AuthRouter}
                />
                <Route
                    exact
                    path="/"
                    component={FlipScreen}
                />
            </Switch>
        </div>
        
    </Router>
    )
}
