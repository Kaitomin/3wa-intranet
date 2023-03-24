import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

function Nav({ user }) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
    <Navigate to='/' replace />
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  }

  return (
    <nav className="navigation">
      <Link to='/' style={linkStyle}>Home</Link>
      <Link to='/users' style={linkStyle}>Liste</Link>
      { !user.id && <Link to='/login' style={linkStyle}>Connexion</Link> }
      { user.id && (
        <>
          { user.isAdmin === true && <Link to='/add-user' style={linkStyle}>Ajouter</Link> }
          <Link to='/profile'><img src={user.photo} /></Link>
          <button onClick={handleLogout}>Déconnexion</button>
        </>
      )}
    </nav>
  )
}

export default Nav