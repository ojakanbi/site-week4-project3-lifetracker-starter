const express = require("express"); //  imports express
const cors = require("cors"); // imports cors to allow us to make request from the client side to the server side
const morgan = require("morgan"); // imports morgan to log requests

const { NotFoundError } = require("./Utils/error"); // imports the NotFoundError class from the errors.js file in the utils folder
const config = require("./config"); // imports the config file


const app = express(); // creates an instance of express
app.use(express.json()); // allows us to parse json
app.use(cors()); // allows us to make requests from the client side to the server side
app.use(morgan("tiny")); // logs requests

app.get("/", (req, res, next) => { 
    res.status(200).json("Home page");  // sends a response to the client
  
}  ) 




module.exports = app; // exports the app
