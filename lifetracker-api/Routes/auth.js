const express = require('express'),  //importing express
router = express.Router(); //creating an instance of the express router
const User = require("../Models/user"); //importing the user model
const authenticateJWT = require("../Utils/auth"); //importing the authenticateJWT middleware
const bodyParser = require('body-parser');

router.get('/user/:id', authenticateJWT, async (req, res) => {
    try {
        const id = parseInt(req.params.id); //getting the id from the request parameters
        const user = await User.fetchUserById(req.user.id); //fetching the user by id
        return res.status(200).json({ user }); //returning the user
    } catch (err) {
        return next(err);
    }
})

router.post("/login", async (req, res, next) => {    // creating a route for the login page
    try {
        const user = await User.login(req.body); //calling the authenticate method from the user model

        if (user) {
        const tokenPromise = User.generateAuthToken(user); //creating a token
        tokenPromise.then(token => {
            // console.log("this is my token", token); // Log the resolved token
            res.cookie("token", token); // Set the token in a cookie
            res.status(200).json({ user, token }); // Send the response to the client
          });
        }
       
    } catch (err) {
        return next(err);
    }

})  

router.post("/register", async (req, res, next) => { //creating a route for the register page
    

    try {  // allows us to catch any errors
        const user = await User.register(req.body); //calling the register method from the user model
        console.log(user)
        

    }catch (err) {
        return next(err);
    }
    res.status(200).json("Register page");  // sends a response to the client

})



router.post("/sleep", async (req, res, next) => {

    const { userId, sleepdata } = req.body;
    console.log("req.body", userId, "req.user.id", sleepdata)
    
    try {
        const sleep = await User.sleep(sleepdata, userId); //calling the sleep method from the user model
        return res.status(200).json({ sleep }); //returning the sleep
        
    } catch (err) {
        return next(err);
    }
}) //creating a route for the sleep page")

router.post("/sleepdata", async (req, res, next) => {
    
    const id = req.body.id; // Getting the id from the request body
    const sleepdata = await User.fetchSleepById(id); // Fetching the sleep data by id
    return res.status(200).json({ sleepdata }); // Returning the sleep data
  });

router.post("/decodedtoken", async (req, res, next) => {
    const token = req.body.token; // Getting the token from the request body
    const decodedToken = await User.verifyAuthToken(token); // Decoding the token
    console.log("decodedToken", decodedToken)


    return res.status(200).json({ decodedToken }); // Returning the decoded token
}
)
  



module.exports = router; //exporting the router