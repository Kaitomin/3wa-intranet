const CIVILITY = 'civility'
const CATEGORY = 'category'
const LASTNAME = 'lastname'
const FIRSTNAME = 'firstname'
const EMAIL = 'email'
const PASSWORD = 'password'
const CONFIRMPASSWORD = 'confirmPassword'
const TEL = 'tel'
const BIRTHDATE = 'birthDate'
const CITY = 'city'
const COUNTRY = 'country'
const PHOTO = 'photo'

export const filterInput = (inputs) => {
  let err = {}

  for (const key in inputs) {
    const isValid = checkKey(key, inputs[key])
    if (!isValid) err[key] = setError(key, inputs[key])
  }

  if (inputs[PASSWORD] !== inputs[CONFIRMPASSWORD]) {
    err[CONFIRMPASSWORD] = setError(CONFIRMPASSWORD, inputs[CONFIRMPASSWORD], false)
  }
  return err
}

const checkKey = (key, val) => {
  switch (key) {
    case LASTNAME:
    case FIRSTNAME:
    case COUNTRY:
      return (/^[a-z]+$/i).test(val)
    case CITY:
      return (/^[a-z-]+$/i).test(val)
    case EMAIL:
      return (/^[a-z0-9.-]+@[a-z]+[.]{1}[a-z]+$/i).test(val)
    case PASSWORD:
    case CONFIRMPASSWORD:
      return (/^[a-z0-9.]+$/i).test(val)
    default: 
      return true
  }
}

const setError = (key, val, passMatch = true) => {
  switch (key) {
    case LASTNAME:
    case FIRSTNAME:
      case COUNTRY:
        if (!val) return 'Champ obligatoire'
        else return 'Uniquement a-z'
      case CITY:
        if (!val) return 'Champ obligatoire'
        else return 'Uniquement a-z et -'
    case EMAIL:
      if (!val) return 'Champ obligatoire'
      return 'Format invalide'
    case PASSWORD:
      if (!val) return 'Champ obligatoire'
      return 'Uniquement a-z et .'
    case CONFIRMPASSWORD:
      if (!val) return 'Champ obligatoire'
      if (!passMatch) return 'Confirmation du mot de passe incorrecte'
      return 'Uniquement a-z et .'
    default: 
      return ''
  }
}