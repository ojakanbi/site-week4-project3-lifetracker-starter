import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import './App.css'
import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from '../Register/Register'
import { useState } from 'react'
import { useEffect } from 'react'




function App() {
  const [user, setUser] = useState(
    {firstname: '', lastname: '', emailaddress: '', username: '',password: ''}
    )
  console.log(user) // handling the api request to register the user

//   //create a async function for a register user endpoint 
// useEffect(() => {
//   const registerUser = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/auth/register',user)

//       if (response.status !== 200) {
//         throw new Error('Unable to register user')
//       }
//       return response.data
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   registerUser()
// }, [])


  
  return (
    <div className='app-container'>

      <Navbar />
      <Home />
      <Register user={user} setUser={setUser}/>


    </div>
  )
}

export default App
