/* This is the database set up for the lifetracker-api. 
It uses the pg-promise library to connect to the database. 
It also uses the dotenv library to hide the database credentials. */


const { Client } = require("pg"); // importing the pg library
const { getDatabaseUrl } = require("./config"); // importing the getDatabaseUrl function from the config file

const db = new Client({ connectionString: getDatabaseUrl() }); // creating a new instance of the Client class and passing in the getDatabaseUrl function

db.connect((err) => {
    if (err) {
        console.error("connection error", err.stack); // if there is an error connecting to the database, it will log the error
    } else {
        console.log("connected"); // if the database connects successfully, it will log "connected"
    }
}) // connecting to the database)



module.exports = db; // exporting the db