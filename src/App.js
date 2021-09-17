import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

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
        </div>
    );
};