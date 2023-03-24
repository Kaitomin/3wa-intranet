import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { logout } from '../store/authSlice'
import '../styles/Nav.css'

function Nav({ user }) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
    <Navigate to='/' replace />
  }

  return (
    <nav className="navigation">
      <div>
        <Link to='/'><img src="/public/logo.png" alt="logo" /></Link>
        <Link to='/'>Accueil</Link>
        <Link to='/users'>Liste</Link>
        { user.isAdmin === true && <Link to='/add-user'>Ajouter</Link> }
      </div>
      <div>
        { user.id && (
          <>
            <Link  to='/profile'><img src={user.photo} /></Link>
            <button  onClick={handleLogout}>Déconnexion</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav