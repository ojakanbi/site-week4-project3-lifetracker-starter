const db = require("../db"); // importing the db to be able to query the database
const bcrypt = require("bcrypt"); // importing bcrypt to hash the password
const { BadRequestError, UnauthorizedError} = require("../Utils/error"); // importing the custom error classes
const { validateFields } = require("../Utils/validate"); // importing the validate function from the jsonschema library
const jwt = require("jsonwebtoken"); // importing the jsonwebtoken library
const crypto = require("crypto"); // importing the crypto library
const secretKey = crypto.randomBytes(64).toString('hex') // creating a secret key for the jwt
const { BCRYPT_WORK_FACTOR } = require("../config") // importing the BCRYPT_WORK_FACTOR from the config file


class User {
    static async makePublicUser(user) {
        
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            // createdAt: user.createdAt,  (i dont have this in my db)
        }
    }

    static async login(credentials) {
        const requiredFields = ["emailaddress", "password"]; // creating an array of the required fields
        validateFields(credentials, requiredFields); // validating the required fields

        const user = await User.fetchUserByEmail(credentials.emailaddress); // fetching the user by email
       
        if (user) {
            // console.log("isValid", User.password, credentials.password)
            const isValid = await bcrypt.compare(credentials.password, user.hash_password); // comparing the password to the hashed password
            console.log("isValid", isValid)
            if (isValid) {
                return await User.makePublicUser(user); // returning the user
            }
        }
        throw new UnauthorizedError("Invalid email/password combo"); // throwing an error if the email/password combo is invalid
    }

    static async register(credentials) {
        console.log("credentials", credentials)
        const requiredFields = ["emailaddress", "password", "username"]; // creating an array of the required fields

        validateFields(credentials,requiredFields); // validating the required fields

        if (credentials.emailaddress.indexOf("@") <= 0) { // checking if the email is valid
            throw new BadRequestError("Invalid email.");
        }

        if (credentials.password.length < 6) { // checking if the password is valid
            throw new BadRequestError("Password must be at least 6 characters.");
        }

        const existingUser = await User.fetchUserByEmail(credentials.emailaddress); // fetching the user by email
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`); // throwing an error if the email already exists
        }

        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR); // hashing the password
        // console.log("hashedPassword", hashedPassword)
        const normalizedEmail = credentials.emailaddress.toLowerCase(); // normalizing the email
        const normalizedUsername = credentials.username.toLowerCase(); // normalizing the username

        const userResult = await db.query(
            `INSERT INTO users (first_name, last_name, email, username, hash_password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, username`,
            [credentials.firstname, credentials.lastname, normalizedEmail, normalizedUsername, hashedPassword]
          );// inserting the user into the database

        const user = userResult.rows[0]; // creating a variable for the user

        return await User.makePublicUser(user); // returning the user
    }

    static async fetchUserByEmail(email)
    {
        if (!email) { // checking if the email is null or undefined
            throw new BadRequestError("No email provided"); // throwing an error if there is no email
        }

        const query = `SELECT * FROM users WHERE email = $1`; // creating a query to fetch the user by email
        const result = await db.query(query, [email.toLowerCase()]); // querying the database

        const user = result.rows[0]; // creating a variable for the user

        return user; // returning the user

        
    }
    // create a verifyAuthtoken function using jwt.verify
    static async verifyAuthToken(token) {
        try {
            const decoded = jwt.verify(token, secretKey); // decoding the token
            return decoded; // returning the decoded token 

        } catch {
            return null // return null if the token seems to be unvalid or expired

        }
    } 
    // create a genrateAuthToken function using jwt.sign
    static async generateAuthToken(user) {
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
        }; // creating a payload for the token
        const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // creating a token
        console.log("token", token)
        return token; // returning the token 
    
    }

    static async fetchUserById(id) {
        if (!id) { // checking if the id is null or undefined
            throw new BadRequestError("No id provided"); // throwing an error if there is no id
        }

        const query = `SELECT * FROM users WHERE id = $1`; // creating a query to fetch the user by id
        const result = await db.query(query, [id]); // querying the database

        const user = result.rows[0]; // creating a variable for the user

        return user; // returning the user
    }

    static async sleep(sleepData, userId) {
        const requiredFields = [ "starttime", "endtime", "userId"]; // creating an array of the required fields
        sleepData.userId = userId; // setting the userId to the userId from the request body
        validateFields(sleepData, requiredFields); // validating the required fields

        const query = `INSERT INTO sleep(start_time, end_time, user_id)
        VALUES ($1, $2, $3)
        RETURNING id, start_time, end_time, user_id`; // creating a query to insert the sleep data into the database
        const result = await db.query(query, [sleepData.starttime, sleepData.endtime, userId]); // querying the database

        const sleep = result.rows[0]; // creating a variable for the sleep data

        return sleep; // returning the sleep data
    }

}



module.exports = User; // exporting the User class