import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
      <h1>Page does not exist :(</h1>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Error404