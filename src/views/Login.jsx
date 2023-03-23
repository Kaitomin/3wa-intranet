import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUserSelector, login } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [inputs , setInputs] = useState({email: 'celestine.lemaire@example.com', pass: 'celestine.lemaire'})
  const [errors, setErrors] = useState({email: '', pass: ''})
  const currentUser = useSelector(currentUserSelector)
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

    setErrors({...errors, email: '', pass: ''})

    if (inputs.email == '' || inputs.pass == '') return
    if (!filterInput("email", inputs.email)) {
      setErrors({...errors, email: 'Caractère non autorisé'})
      return
    }
    if (!filterInput("password", inputs.pass)) {
      setErrors({...errors, pass: 'Caractère non autorisé'})
      return
    }
    dispatch(login(inputs))
  }

  const filterInput = (type, str) => {
    switch (type) {
      case 'email':
        return (/^[a-z0-9.-]+@[a-z]+[.]{1}[a-z]+$/i).test(str)
      case 'password':
        return (/^[a-z0-9.]+$/i).test(str)
      default: 
        return true
    }
  }

  return (
    <div>
      <h1>Connexion</h1>
      <p>Veuillez vous connecter</p>
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