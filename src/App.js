import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddCar from "./components/add-car.components";
import CarList from "./components/car-list.components"
import Navbar from "./components/navbar/navbar.components";
import MainPage from "./components/main-page.components";
import UpdateCar from "./components/update-car.components";

//import AddTutorial from "./components/add-tutorial.component";
//import Tutorial from "./components/tutorial.component";
//import TutorialsList from "./components/tutorials-list.component";

class App extends Component{
  render(){
    
    return(
      <div>

        <Navbar></Navbar>
        
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          
          <a href="/" className="navbar-brand">
            <img src="car.png" alt="Car Logo"></img>
          </a>
          
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/cars"} className="nav-link">
                    Cars
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                    Add
                </Link>
            </li>
          </div>
        
          </nav> */}

          <div className="route-container">
            <Route exact path="/add" component={AddCar}/>
            <Route exact path="/cars" component={CarList}/>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/update" component={UpdateCar}/>
          </div>

      </div>
    
    )

  }
}

export default App;