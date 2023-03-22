import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'

function Nav({ userId, userAdmin }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/users'>Liste</Link>
      { !userId && <Link to='/login'>Connexion</Link> }
      { userId && (
        <>
          { userAdmin === true && <Link to='/add-user'>Ajouter</Link> }
          <Link to='/account'>Mon compte</Link>
          <button onClick={handleLogout}>Déconnexion</button>
        </>
      )}
    </nav>
  )
}

export default Nav