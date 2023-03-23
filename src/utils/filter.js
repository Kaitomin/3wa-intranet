const CIVILITY = 'civility'
const CATEGORY = 'category'
const LASTNAME = 'lastname'
const FIRSTNAME = 'firstname'
const EMAIL = 'email'
const PASS = 'pass'
const PASSCONFIRM = 'passConfirm'
const TEL = 'tel'
const BIRTHDATE = 'birthDate'
const CITY = 'city'
const COUNTRY = 'country'
const AVATAR = 'avatarSrc'

export const filterInput = (inputs) => {
  let err = {}
  for (const key in inputs) {
    if (!checkKey(key, inputs[key])) {

      setError(key)
    }
  }
  return err
}

const checkKey = (key, val) => {
  switch (key) {
    case LASTNAME:
    case FIRSTNAME:
    case CITY:
    case COUNTRY:
      return (/^[a-z]+$/i).test(val)
    case EMAIL:
      return (/^[a-z0-9.-]+@[a-z]+[.]{1}[a-z]+$/i).test(val)
    case PASS:
    case PASSCONFIRM:
      return (/^[a-z0-9.]+$/i).test(val)
    default: 
      return true
  }
}

const setError = (key, val) => {
  switch (key) {
    case LASTNAME:
    case FIRSTNAME:
    case CITY:
    case COUNTRY:
      return 'Uniquement a-z'
    case EMAIL:
      return (/^[a-z0-9.-]+@[a-z]+[.]{1}[a-z]+$/i).test(val)
    case PASS:
    case PASSCONFIRM:
      return (/^[a-z0-9.]+$/i).test(val)
    default: 
      return true
  }
}