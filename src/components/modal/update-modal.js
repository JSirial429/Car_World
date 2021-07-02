import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


export default class Modal extends React.Component{
    
    render(){

        if(!this.props.show){
            return null
        }

     /*    onClose = e =>{
            this.props.onClose && this.props.onClose(e);
        }
 */
        return(
        
            <div className="container">
                    <input type="text" value="" name="make" placeholder={this.props.make}></input>
                    <input type="text" value="" name="model" placeholder={this.props.model}></input>
                    <input type="text" value="" name="color" placeholder={this.props.color}></input>
                    <input type="text" value="" name="miles" placeholder={this.props.mileage}></input>
                    <div>
                        <button onClose={e=>{this.onClose(e)}}>
                            close
                        </button>
                    </div>
            </div>
        )
    }

}