import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AvatarGroup } from '@mui/material';

function Nav({ user }) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
    <Navigate to='/' replace />
  }

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/users'>Liste</Link>
      { !user.id && <Link to='/login'>Connexion</Link> }
      { user.id && (
        <>
          { user.isAdmin === true && <Link to='/add-user'>Ajouter</Link> }
          <Link to='/profile'><img src={user.photo} /></Link>
          <button onClick={handleLogout}>Déconnexion</button>
        </>
      )}
    </nav>
  )
}

export default Nav