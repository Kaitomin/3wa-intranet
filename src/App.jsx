import Nav from './components/Nav'
import Router from './router'
import { useDispatch, useSelector } from 'react-redux'
import Login from './views/Login'
import { currentUserSelector } from './store/authSlice'
import './App.css'
import { useEffect } from 'react'
import { fetchUsers } from './store/userSlice'

function App() {
  const currentUser = useSelector(currentUserSelector)
  const dispatch = useDispatch()

  // show Login component if no logged in user
  if (!currentUser.id) {
    return <Login />
  }

  return (
    <div className="App">
      <Nav user={currentUser} />
      <Router />
    </div>
  )
}

export default App
