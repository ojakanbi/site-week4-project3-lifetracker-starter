require("dotenv").config(); // importing dotenv

const PORT = process.env.PORT || 5000; // setting the port
const BCRYPT_WORK_FACTOR = 12; // setting the bcrypt work factor

function getDatabaseUrl() {   //to be able to get the url and connect to the db 
    const dbUser = process.env.DATABASE_USER || "postgres";
    const dbPass = process.env.DATABASE_PASS || "postgres";
    const dbHost = process.env.DATABASE_HOST || "localhost";
    const dbPort = process.env.DATABASE_PORT || 5432;
    const dbName = process.env.DATABASE_NAME || "lifetracker";
    const dbTestName = process.env.DATABASE_TEST_NAME || "lifetracker_test";

    const url = process.env.DATABASE_URL || `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
    return url;
}

console.log("Life tracker:".red)
console.log("PORT:".blue, PORT)
console.log("BCRYPT_WORK_FACTOR".blue, BCRYPT_WORK_FACTOR)
// console.log("Database:".blue, getDatabaseUri())
console.log("---")

module.exports = { PORT, getDatabaseUrl, BCRYPT_WORK_FACTOR}     //exporting the module
