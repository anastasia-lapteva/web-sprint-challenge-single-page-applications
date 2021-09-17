import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from "./Home";

export default function App()
{
    return (
        <div className='container'>
            <nav>
                <h1 className='pizza-header'>Lambda Eats</h1>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/pizza">Order</Link>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};