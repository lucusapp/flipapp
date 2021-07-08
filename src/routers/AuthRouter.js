import React, { useEffect }  from 'react'
import{    BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { LoginScreen } from '../components/auth/LoginScreen'
import { FlipScreen } from '../components/flip/FlipScreen'
import { startChecking } from '../actions/auth'
import {useDispatch, useSelector} from 'react-redux';
import PublicRoute from './PublicRouter'
import PrivateRoute from './PrivateRouter'

export const AuthRouter = () => {

    const dispatch = useDispatch();
 const {checking,uid} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking())
   
    }, [dispatch])

    if(checking){
        return (<h5>Espere</h5>)
    }


 return (


    <Router>
        <div>
        <Switch>
            <PublicRoute
                    exact
                    path="/auth/login"
                    component={LoginScreen}
                   isAuthenticated={ !!uid}
                    />
            <PublicRoute
                exact
                path="/auth/register"
                component={RegisterScreen}
                isAuthenticated={ !!uid}
                />
            <PrivateRoute
                    exact
                    path="/"
                    component={FlipScreen}
                  isAuthenticated={ !!uid}
                    />

            <Redirect to="/auth/login"/>
         </Switch>
         </div>
    </Router>

    )
}
