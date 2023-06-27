const express = require('express'),  //importing express
router = express.Router(); //creating an instance of the express router
const User = require("../Models/user"); //importing the user model

router.get('/', (req, res) => res.send('User route hit')); //creating a route

router.post("/login", async (req, res, next) => {    // creating a route for the login page
    try {
        const user = await User.authenticate(req.body); //calling the authenticate method from the user model
    } catch (err) {
        return next(err);
    }

})  

router.post("/register", async (req, res, next) => { //creating a route for the register page

    try {  // allows us to catch any errors
        const user = await User.register(req.body); //calling the register method from the user model

    }catch (err) {
        return next(err);
    }
    res.status(200).json("Register page");  // sends a response to the client

})



module.exports = router; //exporting the router