import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch()
  const [inputs , setInputs] = useState({email: '', pass: ''})

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    // dispatch()
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