import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {LoginScreen} from '../components/auth/LoginScreen';
import {RegisterScreen} from '../components/auth/RegisterScreen';
import { NavBar } from "../components/ui/NavBar";
import { HomeScreen } from "../components/home/HomeScreen";

export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/register" component={ RegisterScreen } />
                    <Route exact path='/' component={HomeScreen}/>
                </Switch>
            </div>
        </Router>
    )
    
}
