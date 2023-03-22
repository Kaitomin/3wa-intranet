import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [inputs , setInputs] = useState({email: 'owen.lopez@example.com', pass: 'owen.lopez'})
  const [errors, setErrors] = useState({email: '', pass: ''})
  const { currentUser } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // redirect if succesful login
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

    if (inputs.email == '' || inputs.pass == '') return
    dispatch(login(inputs))
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={inputs.email} 
            onChange={handleChange}
          />
          {inputs.email}
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
          {inputs.pass}
        </div>
        <button>Connexion</button>
      </form>
    </div>
  )
}

export default Login