import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Error404 from '../views/Error404'
import Users from '../views/Users'
import Profile from '../views/Profile'
import Form from '../components/Form'
import Protected from './routerGuard'
import { useSelector } from 'react-redux'
import { currentUserSelector } from '../store/userSlice'

function index() {
  const currentUser = useSelector(currentUserSelector)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/users' element={<Users />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/edit-user' element={<Protected user={currentUser}><Form type='Modifier' /></Protected>} /> 
      <Route path='/add-user' element={<Protected user={currentUser}><Form  type='Ajouter' /></Protected>} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default index