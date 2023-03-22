import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Error404 from '../views/Error404'
import Form from '../components/Form'
import Users from '../views/Users'

function index() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/users' element={<Users />} />
      {/* to add props to Form */}
      {/* <Route patth='/myaccount' element={<Form props />} /> 
      <Route patth='/edit-user' element={<Form props />} /> 
      <Route patth='/add-user' element={<Form props />} />  */}
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default index