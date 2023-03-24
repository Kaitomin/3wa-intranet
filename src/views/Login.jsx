import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUserSelector, login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { filterInput } from '../utils/filter'
import '../styles/Login.css'

function Login() {
  const [inputs , setInputs] = useState({email: 'admin@admin.com', pass: 'admin'})
  const [errors, setErrors] = useState({email: '', pass: ''})
  const currentUser = useSelector(currentUserSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // redirect if succesful login or already logged in 
    if (currentUser.id) {
      navigate('/')
    }
  }, [currentUser])

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    setErrors({...errors, email: '', pass: ''})

    const error = filterInput(inputs)

    if (Object.keys(error).length) {
      return
    }
    dispatch(login(inputs))
  }

  return (
    <div className='login-container'> 
      <form onSubmit={handleSubmit}>
        <div className='logo'>
          <img src="/logo.png" width={150} />
        </div>
        {/* <h1>Connexion</h1> */}
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={inputs.email} 
            onChange={handleChange}
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input 
            type="password" 
            name="pass" 
            id="pass" 
            value={inputs.pass} 
            onChange={handleChange}
          />
          {errors.pass}
        </div>
        <button>Connexion</button>
      </form>
    </div>
  )
}

export default Login