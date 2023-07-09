import React from "react";
import axios from "axios";
import "./Register.css";
import register from "../../images/register.png"
import {useState} from "react";



export default function Register({user, setUser}) {
    const [error, setError] = useState(null);
    
    function handleChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

         // Add logic to make the API request register the user using axios
   
    axios.post('https://lifetracker-backend-oj.onrender.com/auth/register', user)
      .then(response => {
        console.log('User registered successfully:', response.data);

        // Handle successful registration
        window.location = "/auth/login"
      })
      
      .catch(error => {
        console.error('Error registering user:', error);
        const errorResponse = error.response.data;
        const errorMessage = errorResponse.match(/Error: (.*?)<br>/)[1];
        setError(errorMessage);
        // Handle error during registration
      });
    }


    return (
        <>
        
        
        <div className="register-header">
            <h1>Register</h1>
           
        </div>
        
        <div>
        {error && (
          <div className= "reg-error-container">
            <h3>{error}</h3>
          </div>
        )}
        </div>
        
        
        <div className="register-container">
            
            
        <form onSubmit={handleSubmit}>
            <div className='grid'></div>
            <label htmlFor='firstname'> <h3>First Name</h3>
                <input type='text' name='firstname'placeholder="John" value={user.firstname} onChange={handleChange} required />
            
            </label>
            <label htmlFor='lastname'><h3>Last Name </h3>
                <input type='text' name='lastname' placeholder="Doe" value={user.lastname} onChange={handleChange} required />
            </label>
            <label htmlFor='emailaddress'><h3>Email Address </h3>
                <input type='email' name='emailaddress' placeholder="JohnDoe@email.com" value={user.emailaddress} onChange={handleChange} required />
            </label>
            <label htmlFor='username'><h3>Username</h3>
                <input type='text' name='username' placeholder="Johndoe123"value={user.username} onChange={handleChange} required />
            </label>
            <label htmlFor='password'><h3>Password </h3>
                <input type='password' name='password' placeholder="Password" value={user.password} onChange={handleChange} required />
            </label>
            <button type='submit'>Register</button>

            


        </form>
        </div>
        </>
    )
}