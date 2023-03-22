import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'

function index() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      {/* <Route to='' element={}></Route> */}
    </Routes>
  )
}

export default index