import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Error404 from '../views/Error404'
import Users from '../views/Users'
import Form from '../components/Form'
import Protected from './routerGuard'
import { useSelector } from 'react-redux'
import { currentUserSelector } from '../store/authSlice'
import Profile from '../views/Profile'

function index() {
  const currentUser = useSelector(currentUserSelector)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/users' element={<Users />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/edit-user/:id' element={<Protected user={currentUser}><Form type='Modifier' key={'form-1'} /></Protected>} /> 
      <Route path='/add-user' element={<Protected user={currentUser}><Form type='Ajouter' key={'form-2'} /></Protected>} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default index