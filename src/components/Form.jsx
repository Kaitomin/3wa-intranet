import React, { useState } from 'react'
import { filterInput } from '../utils/filter'

const MODIFIER = 'Modifier'
const AJOUTER = 'Ajouter'

function Form({ user, type }) {
  const [inputs, setInputs] = useState({
    civility: user?.gender || 'homme',
    category: user?.category || 'client',
    lastname: user?.lastname || '',
    firstname: user?.firstname || '',
    email: user?.email || '',
    pass: '',
    passConfirm: '',
    tel: user?.phone || '',
    birthDate: user?.birthdate || '',
    city: user?.city || '',
    country: user?.country || '',
    avatarSrc: user?.photo || ''
  })
  const [errors, setErrors] = useState({
    civility: '',
    category: '',
    lastname: '',
    firstname: '',
    email: '',
    pass: '',
    passConfirm: '',
    tel: '',
    birthDate: '',
    city: '',
    country: '',
    avatarSrc: ''
  })

  const handleChange = e => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const error = filterInput(inputs)
    if (Object.keys(error).length) {
      console.log(error)
      return
    }

    if (inputs.pass !== inputs.passConfirm) {
      console.log('does not match')
      return
    }

    console.log("PASS", inputs)

    // dispatch action depending on props type received (modifier, ajouter)
    // switch (type) {
    //   case MODIFIER:
    //     // do something
    //     break
    //   case AJOUTER:
    //     // do something
    //     break
    //   default:
    //     return
    // }
  }

  return (
    <div className='form-container'>
      <h1>{type} utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="civility">Civilité</label>
          <select name="civility" id="civility" value={inputs.civility} onChange={handleChange}>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <span>{errors.civility}</span>
        </div>
        <div>
          <label htmlFor="category">Catégorie</label>
          <select name="category" id="category" value={inputs.category} onChange={handleChange}>
            <option value="client">Client</option>
            <option value="technique">Technique</option>
            <option value="marketing">Marketing</option>
          </select>
          <span>{errors.category}</span>
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" name="lastname" id="lastname" value={inputs.lastname} onChange={handleChange} />
          <span>{errors.lastname}</span>
        </div>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname" value={inputs.firstname} onChange={handleChange} />
          <span>{errors.firstname}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={inputs.email} onChange={handleChange} />
          <span>{errors.email}</span>
        </div>        
        <div>
          <label htmlFor="pass">Mot de passe</label>
          <input type="password" name="pass" id="pass" value={inputs.pass} onChange={handleChange} />
          <span>{errors.pass}</span>
        </div>        
        <div>
          <label htmlFor="passConfirm">Confirmation</label>
          <input type="password" name="passConfirm" id="passConfirm" value={inputs.passConfirm} onChange={handleChange} />
          <span>{errors.passConfirm}</span>
        </div>        
        <div>
          <label htmlFor="tel">Tel</label>
          <input type="text" name="tel" id="tel" value={inputs.tel} onChange={handleChange} />
          <span>{errors.tel}</span>
        </div>        
        <div>
          <label htmlFor="birthDate">Date de naissance</label>
          <input type="date" name="birthDate" id="birthDate" value={inputs.birthDate} min="1950-01-01" max="2024-01-01" onChange={handleChange} />
          <span>{errors.birthDate}</span>
        </div>        
        <div>
          <label htmlFor="city">Ville</label>
          <input type="text" name="city" id="city" value={inputs.city} onChange={handleChange} />
          <span>{errors.city}</span>
        </div>        
        <div>
          <label htmlFor="country">Pays</label>
          <input type="text" name="country" id="country" value={inputs.country} onChange={handleChange} />
          <span>{errors.country}</span>
        </div>        
        <div>
          <label htmlFor="avatarSrc">URL avatar</label>
          <input type="text" name="avatarSrc" id="avatarSrc" value={inputs.avatarSrc} onChange={handleChange} />
          <span>{errors.avatarSrc}</span>
        </div>
        <button>{type}</button>
      </form>
    </div>
  )
}

export default Form