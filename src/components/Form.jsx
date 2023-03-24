import React, { useEffect, useState } from 'react'
import { filterInput } from '../utils/filter'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, modifyUser, usersSelector } from '../store/userSlice'
import { useLocation } from 'react-router-dom'
import { currentUserSelector } from '../store/authSlice'
import '../styles/Form.css'

const MODIFIER = 'Modifier'
const AJOUTER = 'Ajouter'
const inputsInitialState = {
  id: '',
  gender: '',
  category: '',
  lastname:  '',
  firstname:'',
  email:'',
  password: '',
  confirmPassword: '',
  phone: '',
  birthdate: '1980-01-01',
  city: '',
  country: '',
  photo: 'https://placehold.co/128'
}
const ErrorsInitialState = {
  civility: '',
  category: '',
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  birthDate: '',
  city: '',
  country: '',
  photo: ''
}

function Form({ type }) {
  const currentUser = useSelector(currentUserSelector)
  const users = useSelector(usersSelector)

  const [modalMessage, setModalMessage] = useState('')
  const dispatch = useDispatch()

  // Get user id from url query
  const location = useLocation()
  const urlId = location.pathname.split('/')[2]
  
  const [inputs, setInputs] = useState(inputsInitialState)

  useEffect(() => {
    // Get user id from URL search params, access from url
    if (location.pathname === `/edit-user/${urlId}`) {
      const data = users.find(user => user.id == urlId)
      setInputs({...inputsInitialState, ...data, password: '', confirmPassword: ''})
    } 
    else if (location.pathname === `/profile`) {
      setInputs({...inputsInitialState, ...currentUser, password: '', confirmPassword: ''})
    } else {
      return
    }
  }, [])
  
  const [errors, setErrors] = useState(ErrorsInitialState)

  const handleChange = e => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const error = filterInput(inputs)
    
    if (Object.keys(error).length) {
      setErrors({...ErrorsInitialState, ...error})
      return
    }

    // dispatch action depending on props type received (modifier, ajouter)
    switch (type) {
      case MODIFIER:
        dispatch(modifyUser(inputs))
        setInputs({...currentUser, ...inputs, password: '', confirmPassword: ''})
        setModalMessage('Utilisateur modifié')
        setTimeout(() => setModalMessage(''), 3000)
        break
      case AJOUTER:
        dispatch(addUser(inputs))
        setInputs({...inputsInitialState, ...inputs, password: '', confirmPassword: ''})
        setModalMessage('Utilisateur ajouté')
        setTimeout(() => setModalMessage(''), 3000)
        break
      default:
        return
    }
    setErrors({...ErrorsInitialState})
  }

  return (
    <div className='form-container'>
      <h1>{type} utilisateur</h1>
      { modalMessage && <div className='modal'>{modalMessage}</div> }
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gender">*Civilité</label>
          <select name="gender" id="gender" value={inputs.gender} onChange={handleChange}>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
          <span className='warning'>{errors.civility}</span>
        </div>
        <div>
          <label htmlFor="category">*Catégorie</label>
          <select name="category" id="category" value={inputs.category} onChange={handleChange}>
            <option value="Client">Client</option>
            <option value="Technique">Technique</option>
            <option value="Marketing">Marketing</option>
          </select>
          <span className='warning'>{errors.category}</span>
        </div>
        <div>
          <label htmlFor="lastname">*Nom</label>
          <input type="text" name="lastname" id="lastname" value={inputs.lastname} onChange={handleChange} />
          <span className='warning'>{errors.lastname}</span>
        </div>
        <div>
          <label htmlFor="firstname">*Prénom</label>
          <input type="text" name="firstname" id="firstname" value={inputs.firstname} onChange={handleChange} />
          <span className='warning'>{errors.firstname}</span>
        </div>
        <div>
          <label htmlFor="email">*Email</label>
          <input type="email" name="email" id="email" value={inputs.email} onChange={handleChange} />
          <span className='warning'>{errors.email}</span>
        </div>        
        <div>
          <label htmlFor="password">*Mot de passe</label>
          <input type="password" name="password" id="password" value={inputs.password} onChange={handleChange} />
          <span className='warning'>{errors.password}</span>
        </div>        
        <div>
          <label htmlFor="passwordConfirm">*Confirmation</label>
          <input type="password" name="confirmPassword" id="confirmPassword" value={inputs.confirmPassword} onChange={handleChange} />
          <span className='warning'>{errors.confirmPassword}</span>
        </div>        
        <div>
          <label htmlFor="phone">Tel</label>
          <input type="text" name="phone" id="phone" value={inputs.phone} onChange={handleChange} />
          <span className='warning'>{errors.phone}</span>
        </div>        
        <div>
          <label htmlFor="birthdate">Date de naissance</label>
          <input type="date" name="birthdate" id="birthdate" value={inputs.birthdate} min="1950-01-01" max="2024-01-01" onChange={handleChange} />
          <span className='warning'>{errors.birthDate}</span>
        </div>        
        <div>
          <label htmlFor="city">*Ville</label>
          <input type="text" name="city" id="city" value={inputs.city} onChange={handleChange} />
          <span className='warning'>{errors.city}</span>
        </div>        
        <div>
          <label htmlFor="country">*Pays</label>
          <input type="text" name="country" id="country" value={inputs.country} onChange={handleChange} />
          <span className='warning'>{errors.country}</span>
        </div>        
        <div>
          <label htmlFor="photo">URL avatar</label>
          <input type="text" name="photo" id="photo" value={inputs.photo} onChange={handleChange} />
          <span className='warning'>{errors.photo}</span>
        </div>
        <button>{type}</button>
      </form>
    </div>
  )
}

export default Form