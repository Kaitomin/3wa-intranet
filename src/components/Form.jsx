import React, { useState } from 'react'

function Form(props) {
  const [inputs, setInputs] = useState({
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

  const handleChange = () => {

  }

  const handleSubmit = () => {
    // dispatch depending on props received (modify, create)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="civility">Civilité</label>
          <select name="civility" id="civility" value={inputs.civility} onChange={handleChange}>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Catégorie</label>
          <select name="category" id="category" value={inputs.category} onChange={handleChange}>
            <option value="client">Client</option>
            <option value="technique">Technique</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" name="lastname" id="lastname" value={inputs.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname" value={inputs.firstname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={inputs.email} onChange={handleChange} />
        </div>        
        <div>
          <label htmlFor="pass">Mot de passe</label>
          <input type="password" name="pass" id="pass" value={inputs.pass} onChange={handleChange} />
        </div>        
        <div>
          <label htmlFor="passConfirm">Confirmation</label>
          <input type="password" name="passConfirm" id="passConfirm" value={inputs.passConfirm} onChange={handleChange} />
        </div>        
        <div>
          <label htmlFor="tel">Tel</label>
          <input type="text" name="tel" id="tel" value={inputs.tel} onChange={handleChange} />
        </div>        
        <div>
          <label htmlFor="birthDate">Date de naissance</label>
          <input type="date" name="birthDate" id="birthDate" value={inputs.birthDate} min="1950-01-01" max="2024-01-01" onChange={handleChange} />
        </div>        
        <div>
          <label htmlFor="city">Ville</label>
          <input type="text" name="city" id="city" value={inputs.city} onChange={handleChange} />
        </div>        
        <div>
          <label htmlFor="country">Pays</label>
          <input type="text" name="country" id="country" value={inputs.country} onChange={handleChange} />
        </div>        
        <div>
          <label htmlFor="urlAvatar">URL avatar</label>
          <input type="text" name="urlAvatar" id="urlAvatar" value={inputs.passConfirm} onChange={handleChange} />
        </div>
        {/* Props for button text content */}
        <button>Modifier</button>
      </form>
    </div>
  )
}

export default Form