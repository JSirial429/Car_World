import React, {Component} from "react";
import * as ReactBootStrap from "react-bootstrap";
import CarDataService from "../services/car.service"
import Modal from "./modal/update-modal"
import UpdateCar from "./update-car.components.js"
import { Route, Link } from "react-router-dom"
import "../App.css"
//import { render } from "@testing-library/react";

export default class CarList extends Component{

    constructor(props){
        super(props);
    
        this.retrieveCars = this.retrieveCars.bind(this);

        this.state={
            
            cars:[],

            stockNum: "",
            make: "",
            model: "",
            color: "",
            mileage: "",
            carSelected: false,
            show:false
        }

    }

    componentDidMount(){
        this.retrieveCars();
    }

    showUpdateModal(carStockNum){
        
        CarDataService.getCar(carStockNum)
        .then( response => {
            
            this.setState({

                stockNum:response.data.stockNum,
                make:response.data.make,
                model:response.data.model,
                color:response.data.color,
                mileage:response.data.mileage,
                show:!this.state.show
            })

        })
        .catch( e => {
            console.log(e);
        })

    
    }

    retrieveCars(){

        CarDataService.getAll()
        .then(response => {
          this.setState({
            cars: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    updateCar(carStockNum, index){
        console.log(`Stock:${carStockNum} is going to be updated`);
        CarDataService.getCar(carStockNum)
        .then( response => {
            console.log(response.data);
            console.log(response.data.stockNum)
            console.log(`Index of this row is ${index}`)
        })
        .catch( e => {
            console.log(e);
        })

        
    }

    deleteCar(carStockNum){
        console.log(`Stock number:${carStockNum} is going to be deleted`);
        CarDataService.deleteCar(carStockNum)
        .then( response =>{
            console.log(response.data)
            this.retrieveCars();
        })
        .catch( e=>{
            console.log(e);
        })
    }

    renderCars = (car, index) => {

        return(
            <tr key={index}>
                <td>
                    {car.stockNum}
                </td>
                <td>
                    {car.make}
                </td>
                <td>
                    {car.model}
                </td>
                <td>
                    {car.color}
                </td>
                <td>
                    {car.mileage}
                </td>
                <td>
                    {/* <button onClick={ () => this.showUpdateModal(car.stockNum)} className="updateBtn">
                        Update
                    </button> */}
                    <button className="updateBtn">
                    <Link to={"/update"}>Update</Link>
                    </button>
                </td>
                <td>
                    <button onClick={ () => this.deleteCar(car.stockNum)} className="deleteBtn">
                        Delete
                    </button>
                </td>
            </tr>
        )
        
    }
    
    render(){

        return(

            <div className="container">
                <h3 className="Title-Header">Car List</h3>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Stock Number
                            </th>
                            <th>
                                Make
                            </th>
                            <th>
                                Model
                            </th>
                            <th>
                                Color
                            </th>
                            <th>
                                Mileage
                            </th>
                            <th>
                                Update Button
                            </th>
                            <th>
                                Delete Button
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(this.renderCars)}
                    </tbody>
                </ReactBootStrap.Table>
                <Modal show={this.state.show} onClose={this.showUpdateModal} {...this.state}>This is a test</Modal>

                <Route exact path="/update" component={UpdateCar}></Route>

            </div>


        )

    }

}