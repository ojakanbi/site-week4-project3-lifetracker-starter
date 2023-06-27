const express = require('express'),  //importing express
router = express.Router(); //creating an instance of the express router

router.get('/', (req, res) => res.send('User route hit')); //creating a route



module.exports = router; //exporting the router