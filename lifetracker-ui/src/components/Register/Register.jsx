import React from "react";
import axios from "axios";
import "./Register.css";



export default function Register({user, setUser}) {
    function handleChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

         // Add logic to make the API request to register the user using axios
   
    axios.post('http://localhost:3001/auth/register', user)
      .then(response => {
        console.log('User registered successfully:', response.data);
        // Handle successful registration
      })
      .catch(error => {
        console.error('Error registering user:', error);
        // Handle error during registration
      });
    }


    return (
        <div className="register-container">
        <form onSubmit={handleSubmit}>
            <div className='grid'></div>
            <label htmlFor='firstname'>First Name
                <input type='text' name='firstname' value={user.firstname} onChange={handleChange} required />
            
            </label>
            <label htmlFor='lastname'>Last Name 
                <input type='text' name='lastname' value={user.lastname} onChange={handleChange} required />
            </label>
            <label htmlFor='emailaddress'>Email Address 
                <input type='email' name='emailaddress' value={user.emailaddress} onChange={handleChange} required />
            </label>
            <label htmlFor='username'>Username
                <input type='text' name='username' value={user.username} onChange={handleChange} required />
            </label>
            <label htmlFor='password'>Password 
                <input type='password' name='password' value={user.password} onChange={handleChange} required />
            </label>
            <button type='submit'>Register</button>

            


        </form>
        </div>
    )
}