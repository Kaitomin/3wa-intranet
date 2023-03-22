import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/login'>Connexion</Link>
      {/* <Link to='/'></Link> */}
    </nav>
  )
}

export default Nav