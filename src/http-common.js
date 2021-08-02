import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:3000",
  baseURL: "https://car-world-backend.herokuapp.com/",
  headers: {

    "Content-type": "application/json"
  }
});