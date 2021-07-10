import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "../../App.css";


export default function Navbar(){

    return(
        
        <nav className="navbar navbar-expand navbar-dark bg-dark">

            <a href="/" className="navbar-brand">
                <img src="car.png" alt="Car Logo"></img>
            </a>

            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/cars" className="nav-link">
                        Cars
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">
                        Add
                    </Link>
                </li>
            </div>

        </nav>
        
    )

}