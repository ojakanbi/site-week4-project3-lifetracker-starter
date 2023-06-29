import axios from "axios";
import React from "react";
import "./login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login({ loginUser, setLoginUser }) {

function handleSubmit (event) {
event.preventDefault()

  // Add logic to make the API request to register the user using axios
  axios.post('http://localhost:3001/auth/login', loginUser)
  .then(response => {
    console.log('User logged in successfully:', response.data);
    
    // Handle successful registration
  }).catch(error => {
    console.error('Error logging in user:', error);
    // Handle error during registration
  })

}
function handleChange (event) {
setLoginUser({
...loginUser,
[event.target.name]: event.target.value
})

}
  return (
    <>
     <Box  className = "box" component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      
      

</Box>


<div className="login-container">
  <div className="form-container">
    <div className="form-title">
      <h3>login image here</h3>
      <h1>Welcome</h1>
    </div>
    <div>
      <form className = "form" onSubmit={handleSubmit}>
        <label htmlFor="emailaddress">
          Email Address
          <input
            type="email"
            name="emailaddress"
            value={loginUser.emailaddress}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={loginUser.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</div>
    </>
   
  );
}
