import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Router from './router'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  )
}

export default App
