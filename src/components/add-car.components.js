import React, {Component} from "react";
import CarDataService from "../services/car.service"
import "../App.css"
import { Alert } from "bootstrap";

export default class AddCar extends Component{
    
    constructor(props){
        
        super(props);
        //Each represents a field in the form
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeMiles = this.onChangeMiles.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        
        this.saveCar = this.saveCar.bind(this);
        

        this.state = {
            id: null,
            make: "",
            model: "",
            color: "",
            miles: ""
        };
    
    }

    onChangeMake(e){
        this.setState({make: e.target.value});
        console.log(this.state.make);
    }
    onChangeModel(e){
        this.setState({model: e.target.value});
        console.log(this.state.model);
    }

    onChangeColor(e){
        this.setState({color: e.target.value});
        console.log(this.state.color);
    }

    onChangeMiles(e){

        const regex = /^[0-9\b]+$/

        if(e.target.value  === ''|| regex.test(e.target.value)){
            
            this.setState({miles: e.target.value});

        }
        else{

            alert("Please put in number in mileage field.");
        }
        console.log(this.state.miles);
    }

    saveCar(){
        const data={
            make: this.state.make,
            model: this.state.model,
            color: this.state.color,
            mileage: parseInt(this.state.miles)
        };
        console.log(data);
        CarDataService.create(data)
        .then(response => {
         this.setState({
             id: response.data.id,
             make: response.data.make,
             model: response.data.model,
             color: response.data.color,
             miles: response.data.miles,

         }) 
         
         console.log(response.data);

        })
        .catch(e=>{
            console.log(e);
        })

    };

    render(){
        
        return(
            <div className="container">

            <form>

              <div className="form-group">
                <label>Make</label>
                  <input
                   type="text"
                   className="form-control"
                   id="make"
                   value={this.state.make}
                   onChange={this.onChangeMake}
                   name="make"
                   placeholder="Enter Make"
                   required/>
              </div>

              <div className="form-group">
                <label>Model</label>
                  <input
                   type="text"
                   className="form-control"
                   id="model"
                   value={this.state.model}
                   onChange={this.onChangeModel}
                   name="model"
                   placeholder="Enter Model"
                   required/>
              </div>

              <div className="form-group">
                <label>Color</label>
                  <input
                   type="text"
                   className="form-control"
                   id="color"
                   value={this.state.color}
                   onChange={this.onChangeColor}
                   name="color"
                   placeholder="Enter Color"
                   required/>
              </div>

              <div className="form-group">
                <label>Miles</label>
                  <input
                   type="text"
                   className="form-control"
                   id="miles"
                   value={this.state.miles}
                   onChange={this.onChangeMiles}
                   name="miles"
                   placeholder="Enter Miles"
                   required/>
              </div>
            </form>

              <button onClick={this.saveCar} className="btn-submit">Submit</button>

            </div>
            
        )
    
    };

}